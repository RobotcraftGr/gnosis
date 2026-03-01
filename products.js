// Data Array loaded globally into the application.
const products = [
    // ==========================================================
    // TIER 1: VITAMINS / MINERALS (ORTHOMOLECULAR FOUNDATION)
    // ==========================================================
    
    // --- THE FAT SOLUBLES (ADEK) ---
    // Ray Peat & Estrogen-lowering staples. Crucial for bone matrix (HeightOptimized).
    { id: 3001, name: "VITAMIN K2 (MK-4) - THORNE LIQUID", category: "Vitamins / Minerals", link: "iherb", priceEUR: 65.00, totalDoses: 1200, recommendedWeeklyDoses: 14 },
    { id: 3002, name: "VITAMIN K2 (MK-4) - KUINONE (IDEALABS)", category: "Vitamins / Minerals", link: "idealabsdc.com", priceEUR: 40.00, totalDoses: 300, recommendedWeeklyDoses: 7 },
    { id: 3003, name: "VITAMIN K2 (MK-7) - NOW FOODS", category: "Vitamins / Minerals", link: "iherb", priceEUR: 15.00, totalDoses: 60, recommendedWeeklyDoses: 7 }, // Less peaty, but longer half-life
    { id: 3004, name: "VITAMIN E (MIXED TOCOPHEROLS) - UNIQUE E", category: "Vitamins / Minerals", link: "amazon", priceEUR: 55.00, totalDoses: 120, recommendedWeeklyDoses: 7 },
    { id: 3005, name: "VITAMIN E (TOCOVIT) - WHEAT GERM DERIVED", category: "Vitamins / Minerals", link: "idealabsdc.com", priceEUR: 45.00, totalDoses: 150, recommendedWeeklyDoses: 7 }, // Haidut's ultimate anti-PUFA
    { id: 3006, name: "VITAMIN D3 (LIQUID 5000 IU) - THORNE", category: "Vitamins / Minerals", link: "iherb", priceEUR: 18.00, totalDoses: 600, recommendedWeeklyDoses: 7 },
    { id: 3007, name: "VITAMIN D3 (CALCIFEDIOL) - D.VELOP", category: "Vitamins / Minerals", link: "dvelop", priceEUR: 30.00, totalDoses: 60, recommendedWeeklyDoses: 7 }, // Bypasses liver conversion
    { id: 3008, name: "VITAMIN A (RETINYL PALMITATE) - HEALTH NATURA", category: "Vitamins / Minerals", link: "healthnatura", priceEUR: 25.00, totalDoses: 300, recommendedWeeklyDoses: 7 },
    { id: 3009, name: "DESICCATED BEEF LIVER (NATURE'S VITAMIN A/COPPER)", category: "Vitamins / Minerals", link: "iherb", priceEUR: 30.00, totalDoses: 120, recommendedWeeklyDoses: 14 },
	{ id: 3033, name: "VITAMIN D + K2 (MK4)", category: "Vitamins / Minerals", link: "iherb", priceEUR: 30, totalDoses: 1200, recommendedWeeklyDoses: 70 },

    // --- THE B-VITAMIN METABOLIC ACCELERATORS ---
    // Essential for glucose oxidation (ATP generation) and lowering serotonin.
    { id: 3010, name: "NIACINAMIDE (B3) 500MG - CAPSULES", category: "Vitamins / Minerals", link: "iherb", priceEUR: 12.00, totalDoses: 100, recommendedWeeklyDoses: 14 }, // Stops FFA release
    { id: 3011, name: "NIACINAMIDE (B3) - BULK POWDER", category: "Vitamins / Minerals", link: "bulk", priceEUR: 15.00, totalDoses: 1000, recommendedWeeklyDoses: 21 },
    { id: 3012, name: "THIAMINE (B1) - THIAMAX (TTFD)", category: "Vitamins / Minerals", link: "objective nutrients", priceEUR: 65.00, totalDoses: 180, recommendedWeeklyDoses: 4 }, // Crosses BBB easily, cures brain fog
    { id: 3013, name: "THIAMINE (B1) - BENFOTIAMINE", category: "Vitamins / Minerals", link: "iherb", priceEUR: 18.00, totalDoses: 120, recommendedWeeklyDoses: 7 }, // Anti-glycation
    { id: 3014, name: "PYRIDOXAL-5-PHOSPHATE (P5P - ACTIVE B6)", category: "Vitamins / Minerals", link: "iherb", priceEUR: 15.00, totalDoses: 60, recommendedWeeklyDoses: 7 }, // Specifically used to crush Prolactin
    { id: 3015, name: "RIBOFLAVIN (B2)", category: "Vitamins / Minerals", link: "iherb", priceEUR: 10.00, totalDoses: 100, recommendedWeeklyDoses: 7 },
    { id: 3016, name: "BIOTIN (B7) - HIGH DOSE", category: "Vitamins / Minerals", link: "iherb", priceEUR: 12.00, totalDoses: 120, recommendedWeeklyDoses: 7 },

    // --- MAGNESIUM MATRIX ---
    // The ATP binder. Without this, thyroid hormone cannot function.
    { id: 3017, name: "MAGNESIUM GLYCINATE", category: "Vitamins / Minerals", link: "iherb", priceEUR: 21.00, totalDoses: 180, recommendedWeeklyDoses: 21 }, // Evening relaxation
    { id: 3018, name: "MAGNESIUM MALATE", category: "Vitamins / Minerals", link: "iherb", priceEUR: 20.00, totalDoses: 120, recommendedWeeklyDoses: 7 }, // Morning energy (Krebs cycle)
    { id: 3019, name: "MAGNESIUM L-THREONATE (MAGTEIN)", category: "Vitamins / Minerals", link: "iherb", priceEUR: 35.00, totalDoses: 90, recommendedWeeklyDoses: 14 }, // Cognitive maxxing, crosses BBB
    { id: 3020, name: "MAGNESIUM CHLORIDE (TOPICAL OIL)", category: "Vitamins / Minerals", link: "iherb", priceEUR: 15.00, totalDoses: 200, recommendedWeeklyDoses: 28 }, // Bypasses digestion
    { id: 3021, name: "MAGNESIUM BICARBONATE (MILK OF MAGNESIA + CO2)", category: "Vitamins / Minerals", link: "DIY (Supermarket)", priceEUR: 5.00, totalDoses: 50, recommendedWeeklyDoses: 14 }, // The ultimate Peat mineral drink

    // --- CALCIUM & BONE MATRIX (HEIGHT / AESTHETICS) ---
    // To lower PTH and fuel Wolff's Law bone remodeling.
    { id: 3022, name: "PEARL POWDER (LEVIGATED)", category: "Vitamins / Minerals", link: "dragon herbs", priceEUR: 40.00, totalDoses: 100, recommendedWeeklyDoses: 7 }, // Ancient bioavailable calcium
    { id: 3023, name: "MICROCRYSTALLINE HYDROXYAPATITE (MCHA)", category: "Vitamins / Minerals", link: "iherb", priceEUR: 25.00, totalDoses: 120, recommendedWeeklyDoses: 14 }, // Actual bone matrix for height maxxing
    { id: 3024, name: "EGGSHELL POWDER", category: "Vitamins / Minerals", link: "DIY", priceEUR: 0.00, totalDoses: 999, recommendedWeeklyDoses: 14 }, // The Peat standard
    { id: 3025, name: "BORON (FRUCTOBORATE)", category: "Vitamins / Minerals", link: "iherb", priceEUR: 15.00, totalDoses: 100, recommendedWeeklyDoses: 7 }, // Lowers SHBG, increases free test, hardens bones

    // --- TRACE MINERALS & SALTS ---
    { id: 3026, name: "ZINC PICOLINATE", category: "Vitamins / Minerals", link: "iherb", priceEUR: 12.00, totalDoses: 120, recommendedWeeklyDoses: 4 }, // DHT booster, estrogen blocker
    { id: 3027, name: "ZINC L-CARNOSINE", category: "Vitamins / Minerals", link: "iherb", priceEUR: 25.00, totalDoses: 60, recommendedWeeklyDoses: 7 }, // Specifically heals gut mucosa
    { id: 3028, name: "OYSTER EXTRACT", category: "Vitamins / Minerals", link: "marine health", priceEUR: 45.00, totalDoses: 120, recommendedWeeklyDoses: 7 }, // Perfectly balanced Zinc/Copper bio-matrix
    { id: 3029, name: "COPPER BISGLYCINATE", category: "Vitamins / Minerals", link: "iherb", priceEUR: 10.00, totalDoses: 100, recommendedWeeklyDoses: 2 }, // Needed if high dosing zinc
    { id: 3030, name: "SHILAJIT (PURIFIED RESIN)", category: "Vitamins / Minerals", link: "cymbiotika / primavie", priceEUR: 60.00, totalDoses: 60, recommendedWeeklyDoses: 7 }, // Fulvic acid trace mineral driver
    { id: 3031, name: "LUGOL'S IODINE (2%)", category: "Vitamins / Minerals", link: "amazon", priceEUR: 15.00, totalDoses: 600, recommendedWeeklyDoses: 3 }, // Debated in Peat sphere, used topically by some
    { id: 3032, name: "SELENIUM (YEAST-FREE L-SELENOMETHIONINE)", category: "Vitamins / Minerals", link: "iherb", priceEUR: 10.00, totalDoses: 100, recommendedWeeklyDoses: 5 }, // Required for T4 to T3 liver conversion
	
	// ==========================================================
    // TIER 2: AMINO ACIDS (STRUCTURAL & NEURO-MODULATORY)
    // ==========================================================

    // --- THE ANTI-STRESS / PRO-METABOLIC AMINOS (PEAT/HAIDUT STAPLES) ---
    // Essential for balancing the inflammatory/serotonergic effects of muscle meats.
    { id: 4001, name: "GLYCINE (PURE POWDER)", category: "Amino Acids", link: "bulk", priceEUR: 15.00, totalDoses: 100, recommendedWeeklyDoses: 14 }, // Inhibitory neurotransmitter, drastically lowers core temp for deep Delta sleep.
    { id: 4002, name: "GELATIN (BEEF, GRASS-FED) - GREAT LAKES", category: "Amino Acids", link: "iherb", priceEUR: 32.00, totalDoses: 38, recommendedWeeklyDoses: 7 }, // The ultimate Peat protein. Mandatory for Keith Baar Tendon Protocol.
    { id: 4003, name: "COLLAGEN PEPTIDES (HYDROLYZED) - VITAL PROTEINS", category: "Amino Acids", link: "iherb", priceEUR: 40.00, totalDoses: 28, recommendedWeeklyDoses: 7 }, // Faster absorption than gelatin, doesn't gel. Good for coffee.
    { id: 4004, name: "TAURINE (PURE POWDER)", category: "Amino Acids", link: "bulk", priceEUR: 12.00, totalDoses: 200, recommendedWeeklyDoses: 14 }, // Liver protection, bile synthesis, clears estrogen/endotoxin, calms CNS.
    { id: 4005, name: "L-THEANINE (CAPSULES 200MG) - SUNTHEANINE", category: "Amino Acids", link: "iherb", priceEUR: 18.00, totalDoses: 60, recommendedWeeklyDoses: 7 }, // Anti-serotonin, opposes excitatory glutamate, smooths caffeine response.
    { id: 4006, name: "L-PROLINE", category: "Amino Acids", link: "iherb", priceEUR: 16.00, totalDoses: 120, recommendedWeeklyDoses: 7 }, // Works directly with Vitamin C and Glycine to weave the collagen matrix.

    // --- NEURO-COGNITIVE & DOPAMINERGIC AMINOS ---
    // Precursors for catecholamines and thyroid hormone synthesis.
    { id: 4007, name: "L-TYROSINE (FREE FORM)", category: "Amino Acids", link: "iherb", priceEUR: 14.00, totalDoses: 100, recommendedWeeklyDoses: 7 }, // Direct precursor to Dopamine, Adrenaline, and Thyroid hormone (T4).
    { id: 4008, name: "N-ACETYL L-TYROSINE (NALT)", category: "Amino Acids", link: "iherb", priceEUR: 18.00, totalDoses: 60, recommendedWeeklyDoses: 5 }, // More water-soluble variant. Crosses the BBB faster for acute focus blocks.
    { id: 4009, name: "DL-PHENYLALANINE (DLPA)", category: "Amino Acids", link: "iherb", priceEUR: 16.00, totalDoses: 60, recommendedWeeklyDoses: 4 }, // Precursor to Tyrosine, inhibits enzymes that break down endorphins (pain relief).
    { id: 4010, name: "ACETYL-L-CARNITINE (ALCAR)", category: "Amino Acids", link: "iherb", priceEUR: 22.00, totalDoses: 100, recommendedWeeklyDoses: 5 }, // Cholinergic. Upregulates dopamine receptors, drives fatty acids into mitochondria.

    // --- ATP BUFFERING & VASODILATION (PERFORMANCE MAXXING) ---
    // Essential for the cellular hydration and mechanics required in Calisthenics/BFR.
    { id: 4011, name: "CREATINE MONOHYDRATE (CREAPURE)", category: "Amino Acids", link: "bulk", priceEUR: 25.00, totalDoses: 100, recommendedWeeklyDoses: 7 }, // Massively boosts DHT, buffers intracellular ATP, increases water retention in muscle.
    { id: 4012, name: "CREATINE HCL", category: "Amino Acids", link: "amazon", priceEUR: 30.00, totalDoses: 75, recommendedWeeklyDoses: 7 }, // Bypasses stomach acid degradation, requires smaller dose, zero GI bloating.
    { id: 4013, name: "AGMATINE SULFATE", category: "Amino Acids", link: "nootropics depot", priceEUR: 28.00, totalDoses: 100, recommendedWeeklyDoses: 5 }, // Neuroplasticity, mild NMDA antagonist (resets stimulant tolerance), intense pump enhancer.
    { id: 4014, name: "L-CITRULLINE (KYOWA QUALITY)", category: "Amino Acids", link: "bulk", priceEUR: 20.00, totalDoses: 60, recommendedWeeklyDoses: 4 }, // Converts to Arginine in the kidneys for massive Nitric Oxide spikes (Crucial for BFR training).
    { id: 4015, name: "BETA-ALANINE (CARNOSYN)", category: "Amino Acids", link: "bulk", priceEUR: 18.00, totalDoses: 100, recommendedWeeklyDoses: 7 }, // Combines with Histidine to form Carnosine. Buffers lactic acid during high-rep sets.

	// ==========================================================
    // TIER 3: HORMONES & PRO-METABOLIC STEROIDS (THE BIOENERGETIC ENGINE)
    // ==========================================================

    // --- THE PROTECTIVE "YOUTH" STEROIDS (PREGNENOLONE / DHEA / PROGESTERONE) ---
    // These block the cortisol cascade and stop the "Pregnenolone Steal" effect during intense physical/mental stress.
    { id: 5001, name: "PREGNENOLONE (LIFE EXTENSION 50MG)", category: "Hormones", link: "iherb", priceEUR: 18.00, totalDoses: 100, recommendedWeeklyDoses: 7 }, // The "Grandmother" hormone. Lowers cortisol, improves memory, fuels downstream steroidogenesis.
    { id: 5002, name: "PANSTERONE (TOPICAL PREG + DHEA)", category: "Hormones", link: "idealabsdc.com", priceEUR: 35.00, totalDoses: 120, recommendedWeeklyDoses: 14 }, // Haidut's famous topical. Bypasses the liver to deliver an immediate anti-stress effect.
    { id: 5003, name: "DHEA (NATROL 25MG)", category: "Hormones", link: "iherb", priceEUR: 12.00, totalDoses: 90, recommendedWeeklyDoses: 3 }, // Direct cortisol antagonist. Micro-dosed to prevent aromatization into estrogen.
    { id: 5004, name: "PROGEST-E (KENOGEN)", category: "Hormones", link: "healthnatura", priceEUR: 45.00, totalDoses: 200, recommendedWeeklyDoses: 5 }, // Dr. Ray Peat's patented formula (Progesterone in Vitamin E). Blocks estrogen completely. Yes, men use it in micro-doses (1-2 drops on the gums) for pure anti-stress and anti-fibrosis effects.
    { id: 5005, name: "CORTINON (TOPICAL PROGESTERONE + DHEA)", category: "Hormones", link: "idealabsdc.com", priceEUR: 40.00, totalDoses: 120, recommendedWeeklyDoses: 7 }, // Explicitly designed by Haidut to crush cortisol and reverse thymus gland atrophy.

    // --- THYROID: THE METABOLIC PACEMAKER ---
    // Without adequate T3, mitochondria cannot use Oxygen, forcing the body into lactic acid fermentation (the Warburg effect / metabolic stress).
    { id: 5006, name: "TIROMEL (T3 / LIOTHYRONINE 25MCG)", category: "Hormones", link: "Turkish Pharmacy / BG Grey Market", priceEUR: 10.00, totalDoses: 100, recommendedWeeklyDoses: 14 }, // The absolute holy grail of Peating. Pure active T3. Nibbled throughout the day (1/4 pill) to keep core temp at 36.6°C and pulse at 85bpm.
    { id: 5007, name: "CYNOMEL (T3 - MEXICAN SOURCED)", category: "Hormones", link: "Mexican Pharmacy", priceEUR: 25.00, totalDoses: 100, recommendedWeeklyDoses: 14 }, // The legendary brand favored by Peat. Extremely clean excipients.
    { id: 5008, name: "EUTIROX / SYNTHROID (T4 / LEVOTHYROXINE)", category: "Hormones", link: "EU Pharmacy (OTC in some GR/BG regions)", priceEUR: 5.00, totalDoses: 50, recommendedWeeklyDoses: 7 }, // Inactive thyroid. Requires a healthy liver (with adequate glycogen and selenium) to convert into active T3.
    { id: 5009, name: "TYROMAX (TOPICAL NDT)", category: "Hormones", link: "idealabsdc.com", priceEUR: 50.00, totalDoses: 120, recommendedWeeklyDoses: 7 }, // Natural Desiccated Thyroid (Porcine). Contains the natural ratio of T4/T3/T2/T1. Applied topically to bypass liver degradation.

    // --- ANDROGENS & PHYTO-ANDROGENS (LOOKSMAXXING / CNS DRIVE) ---
    // Pure dopamine and androgen receptor agonists for structural masculine development, extreme endurance, and lowering SHBG.
    { id: 5010, name: "PINE POLLEN TINCTURE (WILD HARVESTED 1:4)", category: "Hormones", link: "zoya.bg / local EU", priceEUR: 25.00, totalDoses: 50, recommendedWeeklyDoses: 5 }, // Contains actual plant-based Testosterone and Androstenedione. Absorbed sublingually directly into the bloodstream for a massive pre-workout CNS spike.
    { id: 5011, name: "TONGKAT ALI (10% EURYCOMANONE EXTRACT)", category: "Hormones", link: "nootropics depot", priceEUR: 35.00, totalDoses: 60, recommendedWeeklyDoses: 5 }, // Aggressively lowers Sex Hormone Binding Globulin (SHBG), freeing up bound testosterone into its bioavailable form.
    { id: 5012, name: "CISTANCHE TUBULOSA", category: "Hormones", link: "nootropics depot", priceEUR: 30.00, totalDoses: 60, recommendedWeeklyDoses: 5 }, // Upregulates steroidogenic acute regulatory protein (StAR), drastically increasing cholesterol-to-testosterone conversion.
    { id: 5013, name: "DHT GEL (ANDRACTIM 2.5% EQUIVALENT)", category: "Hormones", link: "EU Grey Market / Underground Labs", priceEUR: 60.00, totalDoses: 60, recommendedWeeklyDoses: 3 }, // The most potent androgen. Does not aromatize to estrogen. Applied locally (chest/beard) for extreme masculine secondary characteristics.
    { id: 5014, name: "TESTOSTERONE CYPIONATE (PHARMA GRADE 250mg/ml)", category: "Hormones", link: "PL/DE Grey Market / Biolab equivalent", priceEUR: 45.00, totalDoses: 10, recommendedWeeklyDoses: 2 }, // Exogenous T. Included for database completeness. (Warning: Shuts down the HPTA axis; requires heavy cycle knowledge).
    { id: 5015, name: "ANDROSTERONE (TOPICAL)", category: "Hormones", link: "idealabsdc.com", priceEUR: 45.00, totalDoses: 120, recommendedWeeklyDoses: 7 }, // A 5a-reduced androgen. Massively opposes estrogen, increases dopamine, and mimics the "confident, anti-stress" feeling of high DHT without the hair-loss risk.
	
	// ==========================================================
    // TIER 4: RUSSIAN PHARMACOLOGY & NEURO-COGNITIVE MAXXING
    // ==========================================================

    // --- THE ACTOPROTECTORS & METABOLIC MODULATORS ---
    // Designed for extreme physical endurance and permanent dopamine upregulation.
    { id: 6001, name: "BROMANTANE (LADASTEN 50MG)", category: "Russian Pharmacology", link: "euro-nootropics.com", priceEUR: 45.00, totalDoses: 60, recommendedWeeklyDoses: 5 }, // Actoprotector. Permanently upregulates Tyrosine Hydroxylase (the enzyme that creates dopamine). Incredible physical endurance without cardiovascular strain.
    { id: 6002, name: "MELDONIUM (MILDRONATE 500MG)", category: "Russian Pharmacology", link: "cosmicnootropic.com", priceEUR: 35.00, totalDoses: 60, recommendedWeeklyDoses: 4 }, // Extremely "Peaty" in function. Blocks the oxidation of fatty acids, forcing the heart and muscles to burn glucose (carbohydrates) for oxygen efficiency. Banned by WADA.
    { id: 6003, name: "MEXIDOL (EMOXYPINE 125MG)", category: "Russian Pharmacology", link: "cosmicnootropic.com", priceEUR: 25.00, totalDoses: 50, recommendedWeeklyDoses: 7 }, // Structural analogue of Vitamin B6. Massive membrane protector. Stabilizes cellular lipid bilayers against stress and hypoxia. Cures hangovers and brain fog instantly.
    { id: 6004, name: "PHENYLPIRACETAM (CARPHEDON 100MG)", category: "Russian Pharmacology", link: "nextvalley.com / NL Grey Market", priceEUR: 30.00, totalDoses: 30, recommendedWeeklyDoses: 2 }, // Stimulant piracetam derivative. Increases physical cold tolerance and acts as a mild dopamine reuptake inhibitor (DRI). Rapid tolerance build-up; must be cycled.

    // --- THE NEUROPEPTIDES (BDNF / NGF FORCING) ---
    // Injectables and nasal sprays that rewrite the brain's physical structure.
    { id: 6005, name: "CEREBROLYSIN (5X 10ML AMPOULES)", category: "Russian Pharmacology", link: "cosmicnootropic.com / BG Pharmacy", priceEUR: 65.00, totalDoses: 5, recommendedWeeklyDoses: 2 }, // Purified porcine brain proteins. The absolute nuclear option for brain trauma, dopamine receptor burnout, and neurogenesis. Must be injected IM (Intramuscular).
    { id: 6006, name: "SEMAX (0.1% NASAL SPRAY)", category: "Russian Pharmacology", link: "biolabshop.eu / suaway.com", priceEUR: 35.00, totalDoses: 60, recommendedWeeklyDoses: 5 }, // Synthetic ACTH fragment. Massively spikes Brain-Derived Neurotrophic Factor (BDNF). Laser-sharp, cold logic and focus without the jitters of caffeine.
    { id: 6007, name: "SELANK (0.15% NASAL SPRAY)", category: "Russian Pharmacology", link: "biolabshop.eu", priceEUR: 35.00, totalDoses: 60, recommendedWeeklyDoses: 5 }, // The anxiolytic sister to Semax. Modulates the expression of Interleukin-6 and stabilizes enkephalins in the blood. Pure "Zen" focus, destroys social anxiety.
    { id: 6008, name: "NOOPEPT (OMBERACETAM 10MG)", category: "Russian Pharmacology", link: "euro-nootropics.com", priceEUR: 15.00, totalDoses: 100, recommendedWeeklyDoses: 7 }, // HIF-1a modulator. 1000x more potent than standard Piracetam. Increases NGF and BDNF expression in the hippocampus. Very cheap, very effective for studying.

    // --- GABA-ERGIC SYSTEM OVERRIDES (ANXIETY & SLEEP) ---
    // Tools to forcefully shut down the sympathetic nervous system. High risk of dependence if abused.
    { id: 6009, name: "PHENIBUT (NOOFEN 250MG)", category: "Russian Pharmacology", link: "raw powders / nextvalley", priceEUR: 30.00, totalDoses: 80, recommendedWeeklyDoses: 1 }, // Developed for Soviet Cosmonauts. GABA-B agonist and voltage-dependent calcium channel blocker. The ultimate "God-Mode" for social confidence and deep sleep. MUST strictly be used 1x per week to avoid hellish withdrawals.
    { id: 6010, name: "PICAMILON (50MG)", category: "Russian Pharmacology", link: "cosmicnootropic.com", priceEUR: 20.00, totalDoses: 60, recommendedWeeklyDoses: 4 }, // Niacin bound to GABA. The Niacin acts as a key to carry the GABA across the Blood-Brain Barrier, where it cleaves apart. Vasodilator and mild tranquilizer.
    { id: 6011, name: "FASORACETAM (20MG)", category: "Russian Pharmacology", link: "euro-nootropics.com", priceEUR: 25.00, totalDoses: 60, recommendedWeeklyDoses: 5 }, // Primarily used in this stack to *upregulate* GABA-B receptors after they have been burned out by Phenibut or extreme stress.
    { id: 6012, name: "AFOBAZOLE (10MG)", category: "Russian Pharmacology", link: "cosmicnootropic.com", priceEUR: 22.00, totalDoses: 60, recommendedWeeklyDoses: 7 }, // Restores Sigma-1 receptors and acts as a melatonin receptor agonist. Non-sedative anxiolytic that protects neurons from cortisol toxicity.

	// ==========================================================
    // TIER 5: SYSTEMIC PEPTIDES & BIOREGULATORS (TISSUE / GENE EDITING)
    // ==========================================================

    // --- THE STRUCTURAL REPAIR PROTOCOL (THE "WOLVERINE" STACK) ---
    // Specifically targeted for your Brachioradialis / Distal Bicep Tenosynovitis.
    { id: 7001, name: "BPC-157 (ARGINATE SALT - 5MG VIAL)", category: "Peptides", link: "biolabshop.eu / particlepeptides.com", priceEUR: 35.00, totalDoses: 20, recommendedWeeklyDoses: 14 }, // Upregulates VEGFR2. Forces the creation of new blood vessels in avascular tissue (tendons/ligaments). Injected subcutaneously near the elbow twice daily. Arginate salt version survives stomach acid if taken orally for gut repair.
    { id: 7002, name: "TB-500 (THYMOSIN BETA-4 - 5MG VIAL)", category: "Peptides", link: "biolabshop.eu", priceEUR: 40.00, totalDoses: 10, recommendedWeeklyDoses: 4 }, // Actin-sequestering protein. Works synergistically with BPC-157 to govern cell migration and proliferation at the injury site. Usually injected 2x per week systemically.
    { id: 7003, name: "GHK-CU (COPPER PEPTIDE - 50MG VIAL)", category: "Peptides", link: "suaway.com / biolabshop.eu", priceEUR: 45.00, totalDoses: 25, recommendedWeeklyDoses: 7 }, // Modulates over 4,000 human genes. Breaks down pathological scar tissue (fibrosis) and forces the synthesis of new, perfectly aligned Type I collagen. The ultimate aesthetic peptide for skin, hair, and tendon elasticity.
    
    // --- GROWTH HORMONE SECRETAGOGUES (HEIGHT / HYPERTROPHY / YOUTH) ---
    // Bypasses the suppression of exogenous HGH by forcing the pituitary to output its own natural, pulsatile bursts of Growth Hormone.
    { id: 7004, name: "CJC-1295 (NO DAC) / MOD GRF 1-29 (2MG)", category: "Peptides", link: "particlepeptides.com", priceEUR: 25.00, totalDoses: 20, recommendedWeeklyDoses: 10 }, // Growth Hormone Releasing Hormone (GHRH) analogue. Amplifies the natural pulse of GH without bleeding the baseline (which causes insulin resistance).
    { id: 7005, name: "IPAMORELIN (2MG)", category: "Peptides", link: "biolabshop.eu", priceEUR: 22.00, totalDoses: 20, recommendedWeeklyDoses: 10 }, // Growth Hormone Secretagogue Receptor (GHSR) agonist. Mimics ghrelin to trigger a GH pulse, but unlike GHRP-6, it does *not* spike cortisol or prolactin. Combined in the same syringe with CJC-1295 pre-bed for massive recovery.
    { id: 7006, name: "MK-677 (IBUTAMOREN - 10MG CAPSULES)", category: "Peptides", link: "eurochems.net / biolabshop.eu", priceEUR: 55.00, totalDoses: 60, recommendedWeeklyDoses: 7 }, // Oral non-peptide secretagogue. Forces a massive 24-hour bleed of GH and IGF-1. Used aggressively in Looksmaxxing/HeightOptimized circles, but carries a risk of prolactin elevation and insulin resistance. Must monitor fasting blood glucose.

    // --- GENETIC RE-WRITING & MITOCHONDRIAL BIOGENESIS ---
    // The fringe anti-aging and extreme bioenergetic regulators.
    { id: 7007, name: "EPITALON (EPITHALON - 10MG VIAL)", category: "Peptides", link: "suaway.com / biolabshop.eu", priceEUR: 32.00, totalDoses: 10, recommendedWeeklyDoses: 7 }, // The Russian Khavinson Pineal Bioregulator. Upregulates telomerase activity, physically lengthening telomeres. Forces the brain into extremely deep Delta-wave sleep and resets circadian rhythms. Run in 10-20 day cycles twice a year.
    { id: 7008, name: "MOTS-C (10MG VIAL)", category: "Peptides", link: "biolabshop.eu", priceEUR: 45.00, totalDoses: 2, recommendedWeeklyDoses: 1 }, // Mitochondrial-derived peptide. Massively activates AMPK. Mimics the metabolic effects of heavy exercise, pushing glucose directly into the muscle without requiring insulin. The ultimate endurance and fat-loss hack.
    { id: 7009, name: "SS-31 (ELAMIPRETIDE)", category: "Peptides", link: "suaway.com", priceEUR: 65.00, totalDoses: 10, recommendedWeeklyDoses: 3 }, // Targets the inner mitochondrial membrane. Binds to cardiolipin, stabilizing it and instantly restoring electron transport chain efficiency in severely damaged or stressed cells. Peak bioenergetic restoration.

    // --- AESTHETICS & MELANOCORTIN SYSTEM ---
    { id: 7010, name: "MELANOTAN II (MT2 - 10MG VIAL)", category: "Peptides", link: "trutan.net / biolabshop.eu", priceEUR: 30.00, totalDoses: 40, recommendedWeeklyDoses: 2 }, // Alpha-MSH analogue. Forces extreme melanogenesis (tanning) even with minimal UV exposure. Famous in looksmaxxing for its secondary effects: extreme libido spike and appetite suppression. Micro-dosing is mandatory to avoid nausea and hyper-pigmentation.
    { id: 7011, name: "PT-141 (BREMELANOTIDE - 10MG)", category: "Peptides", link: "biolabshop.eu", priceEUR: 35.00, totalDoses: 10, recommendedWeeklyDoses: 1 }, // A derivative of MT2 explicitly isolated for its aphrodisiac properties. Bypasses the vascular system and triggers arousal directly in the central nervous system (hypothalamus).
	
	// ==========================================================
    // TIER 6: MISCELLANEOUS CONSUMABLES & BIOPHYSICS HARDWARE
    // ==========================================================

    // --- THE METABOLIC RESCUE AGENTS (PEAT / HAIDUT ENDOTOXIN PROTOCOL) ---
    // Compounds used to selectively sterilize the gut, lower serotonin, and rescue cellular respiration.
    { id: 8001, name: "METHYLENE BLUE 1% (USP GRADE - CZMETHYLENEBLUE)", category: "Miscellaneous", link: "amazon.de / idealabsdc.com", priceEUR: 28.00, totalDoses: 500, recommendedWeeklyDoses: 14 }, // The ultimate metabolic rescue agent. Acts as an electron donor directly to Complex IV (Cytochrome C Oxidase). Massively increases ATP production and cognitive clarity. Turns urine blue/green.
    { id: 8002, name: "CASCARA SAGRADA (AGED BARK - NATURE'S WAY)", category: "Miscellaneous", link: "iherb", priceEUR: 12.00, totalDoses: 100, recommendedWeeklyDoses: 4 }, // Contains Emodin. Stimulates peristalsis without irritating the mucosal lining. Essential for rapid transit times to prevent endotoxin (LPS) buildup in the colon.
    { id: 8003, name: "ACTIVATED CHARCOAL (PURE COCONUT SHELL)", category: "Miscellaneous", link: "iherb", priceEUR: 14.00, totalDoses: 100, recommendedWeeklyDoses: 2 }, // Emergency endotoxin and heavy metal binder. Used sparingly (away from food/supplements) to flush the GI tract during severe stress or compromised digestion.
    { id: 8004, name: "WHITE BUTTON MUSHROOM EXTRACT", category: "Miscellaneous", link: "healthnatura", priceEUR: 25.00, totalDoses: 60, recommendedWeeklyDoses: 7 }, // The Peat alternative to raw carrot. Contains unique hydrazines that destroy gut pathogens and bind to excess estrogen for excretion.
    { id: 8005, name: "CARBON 60 (C60 IN OLIVE OIL)", category: "Miscellaneous", link: "c60purplepower.com / EU distributors", priceEUR: 85.00, totalDoses: 30, recommendedWeeklyDoses: 3 }, // Buckminsterfullerene. A highly controversial fringe longevity compound. Acts as a reusable "sponge" for reactive oxygen species (ROS), neutralizing multiple free radicals per molecule without being destroyed.

    // --- STRUCTURAL MAXXING (THE AESTHETICS HARDWARE) ---
    // Tools to manipulate Wolff's Law and mechanical transduction.
    { id: 8006, name: "BFR BANDS (BLOOD FLOW RESTRICTION - PRO LEVEL)", category: "Miscellaneous", link: "amazon.de", priceEUR: 45.00, totalDoses: 1, recommendedWeeklyDoses: 4 }, // Hardware. Occludes venous blood flow. Tricks the central nervous system into believing the muscle is undergoing massive mechanical trauma, triggering huge Growth Hormone release with only 20% of 1RM weight. Crucial for your elbow recovery.
    { id: 8007, name: "MASTIC GUM (CHIOS TEARS - HIGH HARDNESS)", category: "Miscellaneous", link: "skroutz.gr", priceEUR: 20.00, totalDoses: 60, recommendedWeeklyDoses: 7 }, // The orthodox Looksmaxxing tool. Chewing hard resin forces the masseter muscles to hypertrophy, widening the lower third of the face and supporting the maxilla alongside proper Mewing posture.
    { id: 8008, name: "CERVICAL TRACTION DEVICE (NECK HAMMOCK)", category: "Miscellaneous", link: "amazon.de", priceEUR: 35.00, totalDoses: 1, recommendedWeeklyDoses: 7 }, // Hardware. Decompresses the cervical spine. Rehydrates vertebral discs and improves vagal nerve tone by reducing mechanical impingement at the base of the skull.

    // --- BIOPHYSICS & ELECTROMAGNETIC MODULATION ---
    // Manipulating light and electromagnetism to optimize circadian rhythm and mitochondrial function.
    { id: 8009, name: "RED / NIR LIGHT PANEL (660nm / 850nm - BESTQOOL/HOOGA)", category: "Miscellaneous", link: "amazon.de", priceEUR: 180.00, totalDoses: 1, recommendedWeeklyDoses: 7 }, // Hardware. 660nm (Red) treats skin/collagen. 850nm (Near-Infrared) penetrates deep into bone and brain. Physically knocks Nitric Oxide out of the cellular respiratory chain, forcing mitochondria to resume ATP production.
    { id: 8010, name: "BLUE-BLOCKING GLASSES (100% AMBER/RED LENS)", category: "Miscellaneous", link: "amazon.de (Uvex Skyper) / RaOptics", priceEUR: 30.00, totalDoses: 1, recommendedWeeklyDoses: 7 }, // Hardware. Artificial blue light (400-490nm) destroys melatonin in the pineal gland. Wearing these 2 hours before bed is absolutely non-negotiable for achieving the deep Delta-wave sleep required for the HGH/Epitalon protocols to function.
    { id: 8011, name: "EARTHING / GROUNDING MAT (CARBON INFUSED)", category: "Miscellaneous", link: "amazon.de", priceEUR: 40.00, totalDoses: 1, recommendedWeeklyDoses: 7 } // Hardware. Connects the physical body to the Earth's negative electrical potential via the grounded outlet. Neutralizes positive charge build-up (free radicals), lowers blood viscosity, and deepens sleep architecture.

];
