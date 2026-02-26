// STATE MANAGEMENT & LOCAL STORAGE
let cart = [];
let activeCategory = "All";
let prodSearchQuery = "";

// DOM ELEMENTS
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const productListEl = document.getElementById('product-list');
const cartListEl = document.getElementById('cart-list');
const categoryFilter = document.getElementById('category-filter');
const productSearch = document.getElementById('product-search');
const factoidListEl = document.getElementById('factoid-list');
const dbSearch = document.getElementById('db-search');
const factoidContentEl = document.getElementById('factoid-content');

// URL PARSER ENGINE
function formatLink(rawLink) {
    if (!rawLink || rawLink.toLowerCase() === 'diy' || rawLink.toLowerCase().includes('pharmacy')) {
        return 'javascript:void(0);'; // Dead link for non-web items
    }
    let url = rawLink.split(' ')[0].trim(); // Removes stuff like " (Uvex Skyper)"
    if (!url.includes('.')) url += '.com'; // 'iherb' -> 'iherb.com'
    if (!url.startsWith('http')) url = 'https://' + url;
    return url;
}

// TAB LOGIC
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        if(!tab.dataset.target) return; // Ignore buttons without targets (like purge)
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active-tab'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.target).classList.add('active-tab');
    });
});

// MEMORY (SAVE/LOAD) ENGINE
function saveCart() {
    localStorage.setItem('uoe_cart_memory', JSON.stringify(cart));
}

function loadCart() {
    const memory = localStorage.getItem('uoe_cart_memory');
    if(memory) {
        cart = JSON.parse(memory);
        renderCart();
    }
}

function clearMemory() {
    if(confirm("WARNING: Are you sure you want to purge the active protocol memory?")) {
        cart = [];
        saveCart();
        renderCart();
    }
}

// SECTION A: PROCUREMENT & MATH ENGINE
function renderProducts() {
    productListEl.innerHTML = '';
    
    // Filter by Category AND Search Query
    const filtered = products.filter(p => {
        const matchCat = activeCategory === "All" || p.category === activeCategory;
        const matchSearch = p.name.toLowerCase().includes(prodSearchQuery) || p.category.toLowerCase().includes(prodSearchQuery);
        return matchCat && matchSearch;
    });

    filtered.forEach(p => {
        const safeUrl = formatLink(p.link);
        const linkDisplay = safeUrl.startsWith('http') ? `<a href="${safeUrl}" target="_blank" class="out-link">[SOURCE LINK]</a>` : `<span class="out-link" style="border-style:solid; cursor:not-allowed;">[LOCAL/OFFLINE]</span>`;

        const div = document.createElement('div');
        div.className = 'item-card';
        div.innerHTML = `
            <div class="item-info">
                <strong>${p.name}</strong>
                <span>[${p.category}] - €${p.priceEUR.toFixed(2)}</span>
                <span>${p.totalDoses} DOSES / CONTAINER</span>
                ${linkDisplay}
            </div>
            <button class="btn-add" onclick="addToCart(${p.id})">ENGAGE</button>
        `;
        productListEl.appendChild(div);
    });
}

function addToCart(id) {
    if(!cart.find(item => item.id === id)) {
        const product = products.find(p => p.id === id);
        cart.push({...product, activeWeeklyDoses: product.recommendedWeeklyDoses});
        saveCart();
        renderCart();
    }
}

function updateDose(id, newDose) {
    const item = cart.find(i => i.id === id);
    if(item) {
        item.activeWeeklyDoses = parseFloat(newDose) || 0;
        saveCart();
        renderCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
}

function renderCart() {
    cartListEl.innerHTML = '';
    let sysWeek = 0, sysMonth = 0, sysYear = 0, sysDecade = 0;

    cart.forEach(item => {
        // MATH ENGINE
        const costPerDose = item.priceEUR / item.totalDoses;
        const weeklyCost = costPerDose * item.activeWeeklyDoses;
        const annualCost = weeklyCost * 52.1429;
        const monthlyCost = annualCost / 12;
        const decadeCost = annualCost * 10;
        
        sysWeek += weeklyCost; sysMonth += monthlyCost; sysYear += annualCost; sysDecade += decadeCost;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items:flex-start;">
                <strong>${item.name}</strong>
                <button class="btn-add" style="margin-left:10px;" onclick="removeFromCart(${item.id})">X</button>
            </div>
            <div style="margin-top: 5px;">
                DOSES/WK: <input type="number" value="${item.activeWeeklyDoses}" class="term-input" style="width: 60px; padding: 2px; margin: 0;" onchange="updateDose(${item.id}, this.value)">
            </div>
            <div class="cart-math">
                <span>DOSE: €${costPerDose.toFixed(2)}</span>
                <span>WK: €${weeklyCost.toFixed(2)}</span>
                <span>MO: €${monthlyCost.toFixed(2)}</span>
                <span>YR: €${annualCost.toFixed(2)}</span>
            </div>
        `;
        cartListEl.appendChild(div);
    });

    // UPDATE TOTALS
    document.getElementById('tot-week').innerText = `€${sysWeek.toFixed(2)}`;
    document.getElementById('tot-month').innerText = `€${sysMonth.toFixed(2)}`;
    document.getElementById('tot-year').innerText = `€${sysYear.toFixed(2)}`;
    document.getElementById('tot-decade').innerText = `€${sysDecade.toFixed(2)}`;
}

// Listeners for Filter & Search
categoryFilter.addEventListener('change', (e) => {
    activeCategory = e.target.value;
    renderProducts();
});

productSearch.addEventListener('input', (e) => {
    prodSearchQuery = e.target.value.toLowerCase();
    renderProducts();
});


// SECTION B: DATABASE LOGIC (Split View & Error Trapping)
function renderDatabaseList(query = "") {
    // 1. Error Trap: Did database.js load successfully?
    if (typeof factoids === 'undefined') {
        factoidListEl.innerHTML = `<p style="color:var(--term-color); background:#330000; padding:10px; border:1px solid red;">
        [FATAL ERROR]: database.js failed to load. Check your file for missing commas or unescaped quotes. Ensure you are using backticks (\`) for long content strings.</p>`;
        return;
    }

    factoidListEl.innerHTML = '';
    const q = query.toLowerCase();
    
    // 2. Bulletproof Search: Prevents crashes if a key is missing from the data
    const filtered = factoids.filter(f => 
        (f.title && f.title.toLowerCase().includes(q)) || 
        (f.category && f.category.toLowerCase().includes(q)) || 
        (f.content && f.content.toLowerCase().includes(q))
    );

    filtered.forEach(f => {
        const div = document.createElement('div');
        div.className = 'factoid-card';
        div.onclick = () => viewFactoid(f.id);
        div.innerHTML = `
            <h3>${f.title || "[UNKNOWN TITLE]"}</h3>
            <span class="truncate-text">CLASS: ${f.category || "[UNCLASSIFIED]"}</span>
            <span class="truncate-text" style="margin-top:5px;">${f.content || "[NO DATA]"}</span>
        `;
        factoidListEl.appendChild(div);
    });
}

function viewFactoid(id) {
    if (typeof factoids === 'undefined') return;
    
    const f = factoids.find(x => x.id === id);
    if(!f) return;
    
    factoidContentEl.innerHTML = `
        <h2 style="border-bottom: 2px dashed var(--term-color); padding-bottom:10px; margin-bottom:15px; text-shadow: 0 0 10px var(--term-glow);">${f.title || "[UNKNOWN TITLE]"}</h2>
        <p style="font-weight:bold; margin-bottom: 20px; opacity:0.8;">[ CLASS: ${f.category || "UNCLASSIFIED"} ]</p>
        <p style="line-height: 1.6; font-size: 1.05rem; white-space: pre-wrap;">${f.content || "[NO CONTENT FOUND]"}</p>
    `;
}

dbSearch.addEventListener('input', (e) => renderDatabaseList(e.target.value));

// INITIALIZE SYSTEM
window.onload = () => {
    // Wrap in try-catch to prevent a total system failure if one array is missing
    try { renderProducts(); } catch (e) { console.error("Products failed to load:", e); }
    try { renderDatabaseList(); } catch (e) { console.error("Database failed to load:", e); }
    try { loadCart(); } catch (e) { console.error("Memory engine failed:", e); }
};