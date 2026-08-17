// District and Category Structured Data for Varsa
// Real authentic products, verified production clusters/villages, factual descriptions, and real photographs
// Districts: Gadchiroli, Chandrapur, Kolhapur, Solapur

export const DISTRICT_CATEGORIES = [
  { id: "bamboo-craft", name: "Bamboo Craft", marathi: "बांबू हस्तकला", icon: "🎋" },
  { id: "traditional-crafts", name: "Traditional Crafts", marathi: "पारंपरिक कला", icon: "🏺" },
  { id: "natural-products", name: "Natural Products", marathi: "नैसर्गिक उत्पादने", icon: "🌿" },
  { id: "local-products", name: "Local Products", marathi: "स्थानिक उत्पादने", icon: "🧵" },
  { id: "local-food", name: "Local Food", marathi: "स्थानिक खाद्यसंस्कृती", icon: "🍲" }
];

export const DISTRICT_LIST = [
  {
    id: "gadchiroli",
    name: "Gadchiroli",
    marathiName: "गडचिरोली",
    tagline: "Discover the hidden crafts, products and traditions of Gadchiroli.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    keyHighlight: "Forest Bamboo Craft & Wild Forest Produce"
  },
  {
    id: "chandrapur",
    name: "Chandrapur",
    marathiName: "चंद्रपूर",
    tagline: "Explore authentic local products, crafts and cultural heritage of Chandrapur.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    keyHighlight: "Dhokra Bell Metal, Bamboo Flutes & Saoji Spices"
  },
  {
    id: "kolhapur",
    name: "Kolhapur",
    marathiName: "कोल्हापूर",
    tagline: "Experience the timeless GI-tagged craftsmanship, jewelry and organic jaggery of Kolhapur.",
    image: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?auto=format&fit=crop&w=1200&q=80",
    keyHighlight: "GI-Tagged Kolhapuri Chappals & Kolhapuri Saaj"
  },
  {
    id: "solapur",
    name: "Solapur",
    marathiName: "सोलापूर",
    tagline: "Discover the world-renowned GI-tagged handloom chaddars, terry towels and spicy peanut chutney of Solapur.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
    keyHighlight: "GI-Tagged Solapuri Chaddars & Terry Towels"
  },
  {
    id: "nagpur",
    name: "Nagpur",
    marathiName: "नागपूर",
    tagline: "Discover authentic local products inspired by Nagpur’s famous orange heritage.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nagpur_orange_article.JPG/1280px-Nagpur_orange_article.JPG",
    keyHighlight: "GI-Tagged Nagpur Mandarin Oranges & Santra Burfi"
  }
];

export const districtData = {
  gadchiroli: {
    id: "gadchiroli",
    name: "Gadchiroli",
    marathiName: "गडचिरोली",
    tagline: "Discover the hidden crafts, products and traditions of Gadchiroli.",
    shortIntro:
      "Covered by vast deciduous teak and bamboo forest reserves, Gadchiroli is home to indigenous Gond and Madia communities who harvest and weave native Manvel bamboo, gather cliff honey, and preserve ancestral woodcraft traditions.",
    heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    categories: {
      "bamboo-craft": [
        {
          id: "bamboo-basket-dala",
          name: "Bamboo Basket (Dala / Tokri)",
          marathiName: "बांबूची टोपली (डाला)",
          village: "Mendha Lekha (Dhanora Block)",
          district: "Gadchiroli",
          category: "Bamboo Craft",
          categoryId: "bamboo-craft",
          image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=900&q=80",
          about:
            "A sturdy, resilient harvest basket handwoven from natural forest bamboo splints. Crafted by Mendha Lekha tribal artisans for gathering forest produce and storing grains.",
          uses: [
            "Household grain and pulse storage",
            "Agricultural produce harvesting",
            "Daily kitchen and pantry utility"
          ]
        },
        {
          id: "bamboo-winnowing-fan-supa",
          name: "Bamboo Winnowing Fan (Supa)",
          marathiName: "बांबूचे सूप (धान्य पाखडणी)",
          village: "Bhamragad",
          district: "Gadchiroli",
          category: "Bamboo Craft",
          categoryId: "bamboo-craft",
          image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=900&q=80",
          about:
            "A traditional triangular winnowing tray with flexible split bamboo strips and a reinforced rim, essential for separating chaff from harvested grains.",
          uses: [
            "Grain cleaning and winnowing",
            "Pulse and spice sorting",
            "Traditional harvest rituals & cultural use"
          ]
        },
        {
          id: "bamboo-fishing-trap-bisur",
          name: "Bamboo Fishing Trap (Bisur / Kundi)",
          marathiName: "बांबूचे मासेमारी जाळे (बिसूर)",
          village: "Kurkheda",
          district: "Gadchiroli",
          category: "Bamboo Craft",
          categoryId: "bamboo-craft",
          image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
          about:
            "A conical, eco-friendly aquatic trap hand-knitted from untreated bamboo reeds, designed to catch fish gently in seasonal forest streams.",
          uses: [
            "Traditional freshwater stream fishing",
            "Monsoon river harvesting",
            "Indigenous tribal craft display"
          ]
        }
      ],
      "traditional-crafts": [
        {
          id: "madia-teak-wood-carving",
          name: "Madia Teak Wood Carvings (Ghotul Pillar)",
          marathiName: "माडिया सागवान लाकूड कोरीव काम",
          village: "Bhamragad",
          district: "Gadchiroli",
          category: "Traditional Crafts",
          categoryId: "traditional-crafts",
          image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
          about:
            "Intricately chiseled seasoned teak panels depicting sunbursts, forest spirits, and tribal dances rooted in Madia Gond culture.",
          uses: [
            "Architectural pillars & heritage doors",
            "Cultural wall art decor",
            "Generational storytelling craft"
          ]
        },
        {
          id: "gond-tribal-painting",
          name: "Gond Tribal Folk Painting",
          marathiName: "गोंड आदिवासी चित्रकला",
          village: "Dhanora",
          district: "Gadchiroli",
          category: "Traditional Crafts",
          categoryId: "traditional-crafts",
          image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80",
          about:
            "Traditional folk storytelling art painted with natural mineral pigments, celebrating forest birds, Mahua trees, and tribal folklore.",
          uses: [
            "Living room cultural wall art",
            "Folk art and museum exhibitions",
            "Traditional heritage decor"
          ]
        },
        {
          id: "terracotta-ghadva-pitcher",
          name: "Terracotta Clay Water Pitcher (Ghadva)",
          marathiName: "मातीचा घडा (पाण्याचे पात्र)",
          village: "Chamorshi",
          district: "Gadchiroli",
          category: "Traditional Crafts",
          categoryId: "traditional-crafts",
          image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=80",
          about:
            "Hand-thrown earthen clay pitcher shaped from Wainganga river-basin silt, naturally cooling drinking water during warm summer months.",
          uses: [
            "Natural thermal cooling water storage",
            "Summer kitchen utility",
            "Eco-friendly dining tableware"
          ]
        }
      ],
      "natural-products": [
        {
          id: "wild-forest-honey-etapalli",
          name: "Wild Forest Honey (Ran Madh)",
          marathiName: "रान मध (नैसर्गिक मध)",
          village: "Etapalli",
          district: "Gadchiroli",
          category: "Natural Products",
          categoryId: "natural-products",
          image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=900&q=80",
          about:
            "Pure, raw, unpasteurized forest honey gathered by indigenous gatherers from high forest cliffs and wild tree cavities.",
          uses: [
            "Natural healthy sweetener",
            "Ayurvedic and herbal remedies",
            "Daily vitality & immunity support"
          ]
        },
        {
          id: "wild-mahua-flowers",
          name: "Sun-Dried Mahua Flowers (Mohaphool)",
          marathiName: "सुकवलेली मोहाची फुले",
          village: "Mendha Lekha",
          district: "Gadchiroli",
          category: "Natural Products",
          categoryId: "natural-products",
          image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=900&q=80",
          about:
            "Naturally fallen golden Mahua blossoms sun-dried on clean forest threshing floors, naturally high in sugar, calcium, and minerals.",
          uses: [
            "Traditional porridge and dessert preparation",
            "Natural herbal sweetener",
            "Nutritious winter health food"
          ]
        },
        {
          id: "wild-charoli-seeds",
          name: "Wild Charoli / Chironji Seeds",
          marathiName: "चारोळी (रानमेवा)",
          village: "Sironcha",
          district: "Gadchiroli",
          category: "Natural Products",
          categoryId: "natural-products",
          image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=900&q=80",
          about:
            "Nutritious forest tree nuts hand-gathered and cracked from wild Buchanania trees, known for rich aroma and healthy fats.",
          uses: [
            "Festive sweets, kheer & shrikhand garnish",
            "Traditional herbal tonics",
            "Wholesome dry fruit snacking"
          ]
        }
      ],
      "local-products": [
        {
          id: "kosa-silk-fabric-armori",
          name: "Handloom Kosa Silk Fabric",
          marathiName: "कोसा रेशीम कापड",
          village: "Armori",
          district: "Gadchiroli",
          category: "Local Products",
          categoryId: "local-products",
          image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
          about:
            "Authentic wild tussar silk handwoven on traditional pit looms by Armori weavers, featuring a natural golden texture and rich luster.",
          uses: [
            "Ceremonial sarees and traditional attire",
            "Ethnic stoles & festive garments",
            "Sustainable handloom collection"
          ]
        },
        {
          id: "stone-mortar-khalbatta",
          name: "Granite Mortar & Pestle (Khalbatta)",
          marathiName: "दगडी खलबत्ता",
          village: "Wadsa",
          district: "Gadchiroli",
          category: "Local Products",
          categoryId: "local-products",
          image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=900&q=80",
          about:
            "Solid natural river-granite mortar hand-chiseled for coarse grinding of whole spices, medicinal roots, and forest garlic chutneys.",
          uses: [
            "Coarse spice & masala crushing",
            "Fresh herbal chutney preparation",
            "Durable traditional kitchen utensil"
          ]
        }
      ],
      "local-food": [
        {
          id: "mahua-ladoo-sweet",
          name: "Mahua & Sesame Ladoo",
          marathiName: "मोहाचे पौष्टिक लाडू",
          village: "Dhanora",
          district: "Gadchiroli",
          category: "Local Food",
          categoryId: "local-food",
          image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=80",
          about:
            "Nutrient-packed energy balls prepared with roasted Mahua blossoms, black sesame seeds, flax seeds, and pure country jaggery.",
          uses: [
            "Wholesome traditional energy snack",
            "Nutritious winter nourishment",
            "Natural indigenous confectionery"
          ]
        },
        {
          id: "bamboo-shoot-curry-vaste",
          name: "Tender Bamboo Shoot Pickle & Mix (Vaste)",
          marathiName: "बांबूच्या कोवळ्या कोंबांचे लोणचे (वास्ते)",
          village: "Bhamragad",
          district: "Gadchiroli",
          category: "Local Food",
          categoryId: "local-food",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
          about:
            "Seasonal young bamboo shoots harvested during monsoon, cured in natural brine, and spiced with traditional cold-pressed mustard oil.",
          uses: [
            "Traditional seasonal meal condiment",
            "Rice and bhakri accompaniment",
            "Digestive appetizer"
          ]
        },
        {
          id: "kodu-kutki-millets",
          name: "Indigenous Millets (Kodu & Kutki)",
          marathiName: "गावराण कोदू आणि कुटकी बाजरी",
          village: "Kurkheda",
          district: "Gadchiroli",
          category: "Local Food",
          categoryId: "local-food",
          image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",
          about:
            "Unpolished small millets cultivated on organic tribal terraces, providing rich fiber, low glycemic index, and essential trace minerals.",
          uses: [
            "Daily nutritious porridge & khichdi",
            "Healthy grain substitute for rice",
            "Wholesome dietary staple"
          ]
        }
      ]
    }
  },

  chandrapur: {
    id: "chandrapur",
    name: "Chandrapur",
    marathiName: "चंद्रपूर",
    tagline: "Explore authentic local products, crafts and cultural heritage of Chandrapur.",
    shortIntro:
      "Bordering the ancient forests of Tadoba and historic artisan clusters, Chandrapur is celebrated for exquisite lost-wax Dhokra metalcrafts, seasoned bamboo flutes, handloom cotton, and bold Saoji culinary heritage.",
    heroImage: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    categories: {
      "bamboo-craft": [
        {
          id: "bamboo-storage-kudavan",
          name: "Bamboo Storage Container (Kudavan / Dabba)",
          marathiName: "बांबूचा धान्याचा डबा (कुडवण)",
          village: "Mul",
          district: "Chandrapur",
          category: "Bamboo Craft",
          categoryId: "bamboo-craft",
          image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80",
          about:
            "A double-walled bamboo container with a friction-fit lid woven from treated bamboo splints, keeping dry staples naturally aerated.",
          uses: [
            "Spice and dry grain storage",
            "Jewelry and keepsake container",
            "Sustainable tabletop organizer"
          ]
        },
        {
          id: "bamboo-flute-bansuri",
          name: "Bamboo Musical Flute (Bansuri)",
          marathiName: "बासरी (बांबूचे वाद्य)",
          village: "Ballarpur",
          district: "Chandrapur",
          category: "Bamboo Craft",
          categoryId: "bamboo-craft",
          image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80",
          about:
            "A precision-tuned melodic wind instrument handcrafted from straight, node-free bamboo culms by Ballarpur master artisans.",
          uses: [
            "Classical and folk music performance",
            "Meditation & sound relaxation",
            "Traditional craft collection"
          ]
        },
        {
          id: "bamboo-coaster-tray-set",
          name: "Woven Bamboo Coaster & Tray Set",
          marathiName: "बांबू कोस्टर आणि सर्व्हिंग ट्रे",
          village: "Chimur",
          district: "Chandrapur",
          category: "Bamboo Craft",
          categoryId: "bamboo-craft",
          image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=900&q=80",
          about:
            "A set of heat-resistant coasters and a shallow serving tray handcrafted with heat-treated golden bamboo rims.",
          uses: [
            "Tabletop heat and condensation protection",
            "Beverage and snack serving",
            "Eco-conscious dining table decor"
          ]
        }
      ],
      "traditional-crafts": [
        {
          id: "dhokra-bell-metal-art",
          name: "Dhokra Lost-Wax Bell Metal Sculptures",
          marathiName: "ढोकरा पितळ धातू मूर्तीकला",
          village: "Nagbhid",
          district: "Chandrapur",
          category: "Traditional Crafts",
          categoryId: "traditional-crafts",
          image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=900&q=80",
          about:
            "Ancient lost-wax cast brass sculptures depicting musicians, royal elephants, and folk deities handcrafted without molds.",
          uses: [
            "Sacred home altar idols",
            "Collector's bronze art display",
            "Heritage living room centerpiece"
          ]
        },
        {
          id: "terracotta-pottery-bhadravati",
          name: "Handmade Red Clay Garden Planters",
          marathiName: "भद्रावती मातीची भांडी व कुंड्या",
          village: "Bhadravati",
          district: "Chandrapur",
          category: "Traditional Crafts",
          categoryId: "traditional-crafts",
          image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=80",
          about:
            "Porous earthenware pots and planters sculpted from regional terracotta by Bhadravati artisan cooperatives.",
          uses: [
            "Indoor and balcony botanical planters",
            "Natural thermal root insulation",
            "Traditional clay decor"
          ]
        }
      ],
      "natural-products": [
        {
          id: "tadoba-wild-honey",
          name: "Tadoba Raw Forest Honey",
          marathiName: "ताडोबा रान मध",
          village: "Moharli (Tadoba Buffer)",
          district: "Chandrapur",
          category: "Natural Products",
          categoryId: "natural-products",
          image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=900&q=80",
          about:
            "Aromatic raw honey harvested sustainably from wild hives in the mixed deciduous forest corridors of Tadoba.",
          uses: [
            "Natural wellness sweetener",
            "Warm lemon-honey morning tonic",
            "Ayurvedic remedy formulation"
          ]
        },
        {
          id: "wild-amla-triphala-mix",
          name: "Sun-Dried Wild Amla & Triphala",
          marathiName: "वाळवलेला रान आवळा व त्रिफळा",
          village: "Chimur",
          district: "Chandrapur",
          category: "Natural Products",
          categoryId: "natural-products",
          image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
          about:
            "Pure, stone-pounded forest gooseberries and myrobalan fruits processed under natural sunlight for maximum antioxidant power.",
          uses: [
            "Daily digestive wellness tonic",
            "Natural Vitamin C infusion",
            "Ayurvedic health supplement"
          ]
        }
      ],
      "local-products": [
        {
          id: "handloom-cotton-gamcha",
          name: "Handloom Cotton Gamcha & Towels",
          marathiName: "हातमाग सुती गमछा व टॉवेल",
          village: "Sindewahi",
          district: "Chandrapur",
          category: "Local Products",
          categoryId: "local-products",
          image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=900&q=80",
          about:
            "Pure handloom cotton towels with distinctive woven borders, known for exceptional absorbency and soft skin feel.",
          uses: [
            "Daily bath and face towel",
            "Summer heat headscarf & wrap",
            "Eco-friendly kitchen handcloth"
          ]
        },
        {
          id: "brass-temple-lamp-samai",
          name: "Handcrafted Brass Temple Lamp (Samai)",
          marathiName: "पितळी समाई (देवघराचा दिवा)",
          village: "Nagbhid",
          district: "Chandrapur",
          category: "Local Products",
          categoryId: "local-products",
          image: "https://images.unsplash.com/photo-1609137144822-79013c72b225?auto=format&fit=crop&w=900&q=80",
          about:
            "Tiered solid brass standing lamp hand-turned on wooden lathes, designed for devotional oil lamps during festive ceremonies.",
          uses: [
            "Devotional prayer & puja lighting",
            "Festive Diwali & celebratory illumination",
            "Heirloom brassware accent"
          ]
        }
      ],
      "local-food": [
        {
          id: "saoji-masala-blend",
          name: "Authentic Saoji Spice Blend (Saoji Masala)",
          marathiName: "अस्सल सावजी मसाला",
          village: "Chandrapur City",
          district: "Chandrapur",
          category: "Local Food",
          categoryId: "local-food",
          image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80",
          about:
            "The iconic 24-spice roast blend of the Vidarbha region, stone-ground with stone flowers (Dagadphool), dry coconut, and black cardamom.",
          uses: [
            "Authentic Saoji gravies and curries",
            "Rich vegetable and pulse preparations",
            "Signature regional spice seasoning"
          ]
        },
        {
          id: "tarri-poha-spice-mix",
          name: "Tarri Poha Spice & Crispy Sev Mix",
          marathiName: "तर्री पोहा मसाला व शेव",
          village: "Ballarpur",
          district: "Chandrapur",
          category: "Local Food",
          categoryId: "local-food",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
          about:
            "A fiery chickpea and roasted coriander seasoning paired with crispy besan sev, crafted for Vidarbha's beloved breakfast dish.",
          uses: [
            "Tarri poha breakfast preparation",
            "Spicy tea-time snack accompaniment",
            "Morning energy staple"
          ]
        }
      ]
    }
  },

  kolhapur: {
    id: "kolhapur",
    name: "Kolhapur",
    marathiName: "कोल्हापूर",
    tagline: "Experience the timeless GI-tagged craftsmanship, jewelry and organic jaggery of Kolhapur.",
    shortIntro:
      "Set along the banks of the Panchganga river, Kolhapur holds centuries of royal Maratha artisan traditions—most famous for GI-tagged handcrafted Kolhapuri leather chappals, traditional Saaj jewelry, and rich organic cane jaggery.",
    heroImage: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?auto=format&fit=crop&w=1200&q=80",
    categories: {
      "traditional-crafts": [
        {
          id: "kolhapuri-chappal-authentic",
          name: "Authentic Kolhapuri Chappal (GI-Tagged)",
          marathiName: "अस्सल कोल्हापूरी चप्पल (GI मानांकन)",
          village: "Subhashnagar Cluster (Kolhapur)",
          district: "Kolhapur",
          category: "Traditional Crafts",
          categoryId: "traditional-crafts",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kolhapuri_chappals.jpg/960px-Kolhapuri_chappals.jpg",
          about:
            "World-famous GI-tagged open-toed leather footwear handcrafted using vegetable-tanned leather, braided leather cords, and signature red pompons. Completely hand-stitched without nails or synthetic adhesives.",
          uses: [
            "Traditional festive & formal footwear",
            "Ergonomic natural leather wear",
            "GI-tagged cultural heirloom"
          ]
        },
        {
          id: "kolhapuri-saaj-necklace",
          name: "Traditional Kolhapuri Saaj (Heirloom Necklace)",
          marathiName: "पारंपरिक कोल्हापूरी साज",
          village: "Gujari Artisan Market (Kolhapur)",
          district: "Kolhapur",
          category: "Traditional Crafts",
          categoryId: "traditional-crafts",
          image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
          about:
            "A legendary 21-motif gold necklace celebrating Maratha heritage, featuring hand-embossed leaves representing nature, deities, and sacred symbols centered around an ornate Javmani pendant.",
          uses: [
            "Bridal and auspicious ceremonial jewelry",
            "Generational heirloom asset",
            "Royal Maratha heritage adornment"
          ]
        }
      ],
      "natural-products": [
        {
          id: "kolhapuri-organic-gul",
          name: "Kolhapuri Organic Cane Jaggery (GI-Tagged Gul)",
          marathiName: "कोल्हापूरी गूळ (GI मानांकन)",
          village: "Karveer / Panhala Valley",
          district: "Kolhapur",
          category: "Natural Products",
          categoryId: "natural-products",
          image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281093?auto=format&fit=crop&w=900&q=80",
          about:
            "GI-tagged unrefined golden sugarcane jaggery boiled in traditional open pans with natural clarifying plant extracts (bhendi juice), retaining rich iron and minerals.",
          uses: [
            "Daily natural iron-rich sweetener",
            "Puran Poli and festival sweets",
            "Ayurvedic post-meal digestive"
          ]
        }
      ],
      "local-products": [
        {
          id: "kolhapuri-silver-hupari",
          name: "Hupari Handcrafted Silver Ornaments (Payal / Anklets)",
          marathiName: "हुपरी चांदीची पैंजण व दागिने",
          village: "Hupari (Kolhapur)",
          district: "Kolhapur",
          category: "Local Products",
          categoryId: "local-products",
          image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
          about:
            "Fine silver filigree and hand-turned ghungroo anklets crafted in Hupari, internationally recognized as Maharashtra's premier silver artisan cluster.",
          uses: [
            "Traditional wedding silver anklets",
            "Auspicious festival gifts",
            "Heirloom silver jewelry collection"
          ]
        }
      ],
      "local-food": [
        {
          id: "kolhapuri-kanda-lasun-masala",
          name: "Kolhapuri Kanda Lasun Masala",
          marathiName: "कोल्हापूरी कांदा लसूण मसाला",
          village: "Shahupuri (Kolhapur)",
          district: "Kolhapur",
          category: "Local Food",
          categoryId: "local-food",
          image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80",
          about:
            "The iconic bold red spice blend of Kolhapur, prepared by slow-roasting onions, garlic, Lavangi red chilies, and aromatic whole spices in stone pestles.",
          uses: [
            "Authentic Kolhapuri Misal & curries",
            "Vegetable and pulse seasoning",
            "Daily Maharashtrian gravy base"
          ]
        }
      ]
    }
  },

  solapur: {
    id: "solapur",
    name: "Solapur",
    marathiName: "सोलापूर",
    tagline: "Discover the world-renowned GI-tagged handloom chaddars, terry towels and spicy peanut chutney of Solapur.",
    shortIntro:
      "Solapur is an internationally celebrated textile powerhouse of Maharashtra, globally famous for GI-tagged jacquard-woven Solapuri Chaddars, absorbent terry towels, and delicious dry peanut chutney.",
    heroImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80",
    categories: {
      "local-products": [
        {
          id: "solapuri-chaddar-authentic",
          name: "Authentic Solapuri Chaddar (GI-Tagged)",
          marathiName: "सोलापूरी चादर (GI मानांकन)",
          village: "Padmashali Weaver Cluster (Solapur)",
          district: "Solapur",
          category: "Local Products",
          categoryId: "local-products",
          image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80",
          about:
            "The first GI-tagged product of Maharashtra—a durable, colorfast jacquard-woven pure cotton blanket with intricate reversible geometric patterns, woven by master Padmashali weavers.",
          uses: [
            "All-season bedsheet and blanket",
            "Travel and lodging comfort",
            "Prestigious Maharashtrian cultural gift"
          ]
        },
        {
          id: "solapuri-terry-towel",
          name: "Solapuri Jacquard Terry Towel (GI-Tagged)",
          marathiName: "सोलापूरी जॅकॉर्ड टॉवेल (GI मानांकन)",
          village: "MIDC Textile Cluster (Solapur)",
          district: "Solapur",
          category: "Local Products",
          categoryId: "local-products",
          image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=900&q=80",
          about:
            "GI-tagged high-absorbency cotton bath towel woven on specialized jacquard looms, prized across India for its quick-drying properties and heavy-duty durability.",
          uses: [
            "Daily bathing and shower towel",
            "Guest and hospitality linen",
            "Durable household textile"
          ]
        }
      ],
      "natural-products": [
        {
          id: "solapur-bhagwa-pomegranate",
          name: "Solapur Bhagwa Pomegranate (Anar)",
          marathiName: "सोलापूर भगवा डाळिंब",
          village: "Sangola / Pandharpur",
          district: "Solapur",
          category: "Natural Products",
          categoryId: "natural-products",
          image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=900&q=80",
          about:
            "Deep ruby-red, sweet, soft-seeded Bhagwa pomegranates cultivated in the arid climate of Solapur, internationally exported for high antioxidant content.",
          uses: [
            "Fresh nutritious antioxidant fruit",
            "Natural revitalizing juice",
            "Salad and dessert garnish"
          ]
        }
      ],
      "local-food": [
        {
          id: "solapuri-shenga-chutney",
          name: "Authentic Solapuri Shenga Chutney (Peanut Chutney)",
          marathiName: "सोलापूरी शेंगदाणा चटणी",
          village: "Solapur City",
          district: "Solapur",
          category: "Local Food",
          categoryId: "local-food",
          image: "https://images.unsplash.com/photo-1596040033282-45e0f7eb8b16?auto=format&fit=crop&w=900&q=80",
          about:
            "A legendary dry chutney made of roasted peanuts, dried whole garlic cloves, and sun-dried red chilies coarsely pounded for distinct texture and savory punch.",
          uses: [
            "Bhakri and chapati accompaniment",
            "Curd and rice condiment",
            "Snack and breakfast seasoning"
          ]
        }
      ]
    }
  },

  nagpur: {
    id: "nagpur",
    name: "Nagpur",
    marathiName: "नागपूर",
    tagline: "Discover authentic local products inspired by Nagpur’s famous orange heritage.",
    shortIntro:
      "Celebrated across India as the 'Orange City' (Santra Nagari), Nagpur is world-famous for its GI-tagged sweet-tangy Nagpur Mandarin Oranges, heritage Santra Burfi confectioneries, and traditional cotton handloom weaving.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nagpur_orange_article.JPG/1280px-Nagpur_orange_article.JPG",
    categories: {
      "local-products": [
        {
          id: "nagpur-mandarin-orange-gi",
          name: "Nagpur Mandarin Orange (GI-Tagged Santra)",
          marathiName: "नागपूर संत्रा (GI मानांकन)",
          village: "Katol / Kalmeshwar Orange Belt",
          district: "Nagpur",
          category: "Local Products",
          categoryId: "local-products",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nagpur_orange_article.JPG/1280px-Nagpur_orange_article.JPG",
          about:
            "The world-famous GI-tagged loose-jacket mandarin orange cultivated in the fertile volcanic black soils of Nagpur. Renowned for its aromatic sweetness, rich pulp, and refreshing tang.",
          uses: [
            "Fresh organic table fruit consumption",
            "Pure cold-pressed vitamin C citrus juice",
            "Traditional marmalades, squashes & citrus extracts"
          ]
        },
        {
          id: "nagpur-orange-burfi",
          name: "Nagpur Orange Burfi (Santra Burfi)",
          marathiName: "नागपूरी संत्रा बर्फी",
          village: "Itwari Confectionery Cluster, Nagpur",
          district: "Nagpur",
          category: "Local Products",
          categoryId: "local-products",
          image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=900&q=80",
          about:
            "The iconic signature confection of Nagpur created by blending real Nagpur orange pulp with rich dairy mawa (khoya) and cardamom, garnished with silver vark.",
          uses: [
            "Traditional celebration sweet & gift box",
            "Prestigious Vidarbha cultural souvenir",
            "Festive dessert delicacy"
          ]
        }
      ],
      "natural-products": [
        {
          id: "nagpur-orange-peel-powder",
          name: "Nagpur Pure Orange Peel Herbal Powder",
          marathiName: "नागपूर संत्रा साल पावडर",
          village: "Narkhed, Nagpur",
          district: "Nagpur",
          category: "Natural Products",
          categoryId: "natural-products",
          image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
          about:
            "Sun-dried and micro-pulverized natural orange rinds from Nagpur mandarin orchards, rich in Vitamin C, citrus bioflavonoids, and natural brightening acids.",
          uses: [
            "Ayurvedic herbal skincare & glow face pack",
            "Aromatherapeutic natural bath soak",
            "Eco-friendly natural citrus cleanser"
          ]
        }
      ],
      "traditional-crafts": [
        {
          id: "nagpur-karvat-kati-saree",
          name: "Nagpur Karvat Kati Handloom Saree (GI-Tagged)",
          marathiName: "करवत काठी हातमाग साडी",
          village: "Kamptee / Umred Weavers, Nagpur",
          district: "Nagpur",
          category: "Traditional Crafts",
          categoryId: "traditional-crafts",
          image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
          about:
            "GI-registered handloom tussar-cotton sarees woven with distinctive saw-tooth (Karvat) temple borders by master weaver cooperatives of Nagpur.",
          uses: [
            "Traditional wedding & festive drape",
            "Formal cultural occasions",
            "Prestige handloom collection"
          ]
        }
      ],
      "local-food": [
        {
          id: "nagpur-tarri-poha-special",
          name: "Nagpur Special Tarri Poha & Chana Mix",
          marathiName: "नागपूर स्पेशल तर्री पोहा",
          village: "Sitabuldi, Nagpur",
          district: "Nagpur",
          category: "Local Food",
          categoryId: "local-food",
          image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
          about:
            "The quintessential breakfast of Nagpur—flattened rice soaked in a spicy chickpea (chana) curry with fresh coriander and crispy sev.",
          uses: [
            "Authentic daily breakfast",
            "High-energy morning meal",
            "Regional culinary specialty"
          ]
        }
      ]
    }
  }
};
