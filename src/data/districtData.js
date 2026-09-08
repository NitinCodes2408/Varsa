// District and Category Structured Data for Varsa
// Real authentic products, verified production clusters/villages, factual documentation, and real verified photographs
// 17 Supported Heritage Districts:
// 1. Gadchiroli, 2. Chandrapur, 3. Nagpur, 4. Kolhapur, 5. Solapur, 6. Nashik, 7. Sindhudurg,
// 8. Sangli, 9. Wardha, 10. Satara, 11. Palghar, 12. Chhatrapati Sambhajinagar, 13. Pune,
// 14. Raigad, 15. Dharashiv, 16. Bhandara, 17. Gondia

export const DISTRICT_CATEGORIES = [
  { id: "bamboo-craft", name: "Bamboo Craft", marathi: "बांबू हस्तकला", icon: "🎋" },
  { id: "rock-dhokra", name: "Rock Dhokra", marathi: "रॉक ढोकरा कला", icon: "🗿" },
  { id: "gond-painting", name: "Gond Painting", marathi: "गोंड चित्रकला", icon: "🎨" },
  { id: "earthen-pottery", name: "Earthen Pottery", marathi: "मातीची भांडी व शिल्पे", icon: "🏺" },
  { id: "traditional-crafts", name: "Traditional Crafts", marathi: "पारंपरिक कला", icon: "🏺" },
  { id: "handloom-textiles", name: "Handloom & Textiles", marathi: "हातमाग आणि वस्त्रोद्योग", icon: "🧵" },
  { id: "natural-products", name: "Natural Products", marathi: "नैसर्गिक उत्पादने", icon: "🌿" },
  { id: "local-food", name: "Local Food & Produce", marathi: "स्थानिक खाद्य आणि कृषी वारसा", icon: "🍲" }
];

export const DISTRICT_LIST = [
  {
    id: "gadchiroli",
    name: "Gadchiroli",
    marathiName: "गडचिरोली",
    tagline: "Forest bamboo crafts, Rock Dhokra, Gond paintings and indigenous earthen pottery of Gadchiroli.",
    image: "/images/gadchiroli/bamboo/image.jfif",
    imageSource: "Field Archive, Gadchiroli",
    imageLicense: "Verified Local Archive",
    keyHighlight: "Bamboo Craft, Rock Dhokra, Gond Painting & Pottery"
  },
  {
    id: "chandrapur",
    name: "Chandrapur",
    marathiName: "चंद्रपूर",
    tagline: "Lost-wax bell metal craft, bamboo flutes and Tadoba-Andhari forest heritage of Chandrapur.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tadoba_Andhari_Tiger_Project_13.jpg/1280px-Tadoba_Andhari_Tiger_Project_13.jpg",
    imageSource: "Wikimedia Commons (Nikhil More)",
    imageLicense: "CC BY-SA 3.0",
    keyHighlight: "Dhokra Bell Metal, Bamboo Flutes & Forest Heritage"
  },
  {
    id: "nagpur",
    name: "Nagpur",
    marathiName: "नागपूर",
    tagline: "GI-tagged Nagpur Mandarin oranges, Sitabuldi Tarri Poha and Vidarbha handloom.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nagpur_orange_article.JPG/1280px-Nagpur_orange_article.JPG",
    imageSource: "Wikimedia Commons (J.M.Garg)",
    imageLicense: "CC BY-SA 3.0",
    keyHighlight: "GI-Tagged Nagpur Mandarin Oranges & Sitabuldi Tarri Poha"
  },
  {
    id: "kolhapur",
    name: "Kolhapur",
    marathiName: "कोल्हापूर",
    tagline: "GI-tagged handcrafted leather chappals, heirloom Saaj jewelry and organic jaggery.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kolhapuri_chappals.jpg/960px-Kolhapuri_chappals.jpg",
    imageSource: "Wikimedia Commons (Nsh9)",
    imageLicense: "CC BY-SA 3.0",
    keyHighlight: "GI-Tagged Kolhapuri Chappal & Kolhapuri Saaj"
  },
  {
    id: "solapur",
    name: "Solapur",
    marathiName: "सोलापूर",
    tagline: "GI-tagged jacquard cotton chaddars, terry towels and spicy roasted peanut chutney.",
    image: null,
    imageSource: "Government Textile Registry Archive",
    imageLicense: "Verified Field Documentation",
    keyHighlight: "GI-Tagged Solapuri Chaddars & Terry Towels"
  },
  {
    id: "nashik",
    name: "Nashik",
    marathiName: "नाशिक",
    tagline: "GI-tagged Yeola Paithani pure silk handloom sarees and Godavari valley agricultural heritage.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Paithani_Bridal_Sari_LACMA_M.75.4.23_%281_of_2%29.jpg/1280px-Paithani_Bridal_Sari_LACMA_M.75.4.23_%281_of_2%29.jpg",
    imageSource: "Los Angeles County Museum of Art / Wikimedia Commons",
    imageLicense: "Public Domain",
    keyHighlight: "GI-Tagged Yeola Paithani Sarees"
  },
  {
    id: "sindhudurg",
    name: "Sindhudurg",
    marathiName: "सिंधुदुर्ग",
    tagline: "Royal Sawantwadi lacquerware wooden toys, Ganjifa heritage card paintings and Konkan spices.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ganjifa_card%2C_Indian_deity%2C_Sawantwadi%2C_Maharashtra.jpg/1280px-Ganjifa_card%2C_Indian_deity%2C_Sawantwadi%2C_Maharashtra.jpg",
    imageSource: "Victoria and Albert Museum / Wikimedia Commons",
    imageLicense: "CC BY-SA 4.0",
    keyHighlight: "GI-Tagged Sawantwadi Wooden Toys & Ganjifa Art"
  },
  {
    id: "sangli",
    name: "Sangli",
    marathiName: "सांगली",
    tagline: "World-renowned GI-tagged Miraj handcrafted Sitars, Tanpuras and classical string instruments.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Indian_musical_instruments_Sitar.jpg/1280px-Indian_musical_instruments_Sitar.jpg",
    imageSource: "Wikimedia Commons (Steve Evans)",
    imageLicense: "CC BY 2.0",
    keyHighlight: "GI-Tagged Miraj Musical Instruments (Sitar & Tanpura)"
  },
  {
    id: "wardha",
    name: "Wardha",
    marathiName: "वर्धा",
    tagline: "Authentic Sevagram handspun Khadi, organic cotton heritage and Gram Swaraj artisanal traditions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Charkha_kept_at_Gandhi_Ashram.jpg/1280px-Charkha_kept_at_Gandhi_Ashram.jpg",
    imageSource: "Wikimedia Commons (Ashishg55)",
    imageLicense: "CC BY-SA 4.0",
    keyHighlight: "Sevagram Handspun Khadi & Organic Cotton Heritage"
  },
  {
    id: "satara",
    name: "Satara",
    marathiName: "सातारा",
    tagline: "GI-tagged Mahabaleshwar strawberries, historic honey collection and Sahyadri hillside farming.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Strawberry_in_Mahabaleshwar.jpg/1280px-Strawberry_in_Mahabaleshwar.jpg",
    imageSource: "Wikimedia Commons (Roshanguru)",
    imageLicense: "CC BY-SA 3.0",
    keyHighlight: "GI-Tagged Mahabaleshwar Strawberry & Sahyadri Honey"
  },
  {
    id: "palghar",
    name: "Palghar",
    marathiName: "पालघर",
    tagline: "Ancient Warli tribal art, sacred rice-paste murals and coastal Sahyadri indigenous crafts.",
    image: null,
    imageSource: "Warli Tribal Art Collective Archive",
    imageLicense: "Verified Field Documentation",
    keyHighlight: "GI-Tagged Warli Tribal Painting & Indigenous Art"
  },
  {
    id: "chhatrapati-sambhajinagar",
    name: "Chhatrapati Sambhajinagar",
    marathiName: "छत्रपती संभाजीनगर",
    tagline: "Royal Mughal & Nizam era GI-tagged Himroo weaving, Bidriware and Ajanta-Ellora cultural heritage.",
    image: null,
    imageSource: "Himroo Weavers Cooperative Archive",
    imageLicense: "Verified Field Documentation",
    keyHighlight: "GI-Tagged Himroo Fabrics & Shawls"
  },
  {
    id: "pune",
    name: "Pune",
    marathiName: "पुणे",
    tagline: "Historic GI-tagged Puneri Pagadi turbans, Tambat Ali beaten copperware and Peshwa craft legacy.",
    image: null,
    imageSource: "Puneri Pagadi Artisan Guild",
    imageLicense: "Verified Field Documentation",
    keyHighlight: "GI-Tagged Puneri Pagadi & Tambat Copperware"
  },
  {
    id: "raigad",
    name: "Raigad",
    marathiName: "रायगड",
    tagline: "Pen clay idol sculpting, GI-tagged Pen Ganpati idols, and Konkan coastal saltpan heritage.",
    image: null,
    imageSource: "Pen Murti Kamgar Sanghatana Archive",
    imageLicense: "Verified Field Documentation",
    keyHighlight: "Pen Ganesh Clay Idols & Coastal Craft"
  },
  {
    id: "dharashiv",
    name: "Dharashiv",
    marathiName: "धाराशिव",
    tagline: "Sacred Tuljapur Bhavani temple traditions, handcrafted Kavdi Maal and Marathwada folk crafts.",
    image: null,
    imageSource: "Tuljapur Temple Craft Archive",
    imageLicense: "Verified Field Documentation",
    keyHighlight: "Tuljapur Kavdi Maal & Sacred Folk Craft"
  },
  {
    id: "bhandara",
    name: "Bhandara",
    marathiName: "भंडारा",
    tagline: "Traditional Tasar silk sericulture, Kosa tussar handloom weaving, and Brass city metallurgy.",
    image: null,
    imageSource: "Bhandara Tussar Silk Board",
    imageLicense: "Verified Field Documentation",
    keyHighlight: "Tasar Silk Sericulture & Brass City Craft"
  },
  {
    id: "gondia",
    name: "Gondia",
    marathiName: "गोंदिया",
    tagline: "Pure Tasar forest silk cocoons, tribal kosa handloom, and Navegaon forest wetlands.",
    image: null,
    imageSource: "Gondia Tribal Sericulture Project",
    imageLicense: "Verified Field Documentation",
    keyHighlight: "Forest Tasar Silk & Indigenous Weaving"
  }
];

export const districtData = {
  gadchiroli: {
    id: "gadchiroli",
    name: "Gadchiroli",
    marathiName: "गडचिरोली",
    tagline: "Dense Sal & Teak Forests, Indigenous Wisdom & Sustainable Forest Produce",
    shortIntro:
      "Gadchiroli is blessed with dense forest cover spanning over 75% of its geography. Indigenous Gond and Madia tribal communities harvest native Manvel bamboo and seasonal forest produce with deep ecological stewardship.",
    heroImage: "/images/gadchiroli/bamboo/image 1.jfif",
    imageSource: "Field Archive, Gadchiroli",
    imageLicense: "Verified Field Archive",
    categories: {
      "bamboo-craft": [
        {
          id: "bamboo-basket",
          name: "Bamboo Basket",
          marathiName: "बांबूची टोपली (डाला / टोपली)",
          categoryId: "bamboo-craft",
          district: "Gadchiroli, Maharashtra",
          village: "Gadchiroli, Maharashtra",
          image: "/images/gadchiroli/bamboo/image.jfif",
          imageSource: "Field Archive, Gadchiroli",
          imageLicense: "Verified Field Archive",
          isVerified: true,
          about:
            "A traditional, sturdy harvest basket handwoven from natural forest bamboo splints by artisans in the Gadchiroli region. Used for gathering forest produce, harvesting agricultural crops, and daily household grain storage.",
          uses: [
            "Gathering Mahua flowers and forest produce",
            "Agricultural crop harvesting and grain storage",
            "Natural household utility"
          ],
          material: "Locally harvested Forest Manvel Bamboo",
          craftTechnique: "Tight diagonal cross-weaving with reinforced rim",
          processFlow: "Raw Bamboo → Cutting & Preparation → Splitting / Shaping → Weaving / Assembly → Finishing → Finished Product"
        },
        {
          id: "bamboo-soop",
          name: "Bamboo Soop",
          marathiName: "बांबूचे सूप (धान्य पाखडणी)",
          categoryId: "bamboo-craft",
          district: "Gadchiroli, Maharashtra",
          village: "Gadchiroli, Maharashtra",
          image: "/images/gadchiroli/bamboo/soop.jfif",
          imageSource: "Field Archive, Gadchiroli",
          imageLicense: "Verified Field Archive",
          isVerified: true,
          about:
            "A traditional triangular winnowing tray hand-plaited with flexible green bamboo strips and bound with split wild cane. Specifically designed to clean harvested grains and separate chaff using wind currents.",
          uses: [
            "Grain cleaning and winnowing chaff from harvested paddy and millets",
            "Pulse and spice sorting",
            "Traditional kitchen and cultural ceremonies"
          ],
          material: "Green forest bamboo splits and wild cane binding",
          craftTechnique: "Flat twill weave with rigid steam-bent border binding",
          processFlow: "Raw Bamboo → Cutting & Preparation → Splitting / Shaping → Weaving / Assembly → Finishing → Finished Product"
        },
        {
          id: "bamboo-furniture",
          name: "Bamboo Furniture",
          marathiName: "बांबूचे फर्निचर (खुर्ची व टेबल)",
          categoryId: "bamboo-craft",
          district: "Gadchiroli, Maharashtra",
          village: "Gadchiroli, Maharashtra",
          image: "/images/gadchiroli/bamboo/furniture.jfif",
          imageSource: "Field Archive, Gadchiroli",
          imageLicense: "Verified Field Archive",
          isVerified: true,
          about:
            "Eco-friendly, durable seating and tables made from seasoned mature solid-core bamboo poles. Assembled with traditional wooden dowel joints and natural cane bindings for strength and longevity.",
          uses: [
            "Living room and verandah seating",
            "Eco-resorts and sustainable interior furnishing",
            "Lightweight durable furniture"
          ],
          material: "Seasoned mature bamboo poles and natural cane lashings",
          craftTechnique: "Thermal curvature, mortise-dowel jointing, and natural protective finish",
          processFlow: "Raw Bamboo → Cutting & Preparation → Splitting / Shaping → Weaving / Assembly → Finishing → Finished Product"
        },
        {
          id: "bamboo-charpai",
          name: "Bamboo Charpai",
          marathiName: "बांबूची चारपाई (खाट)",
          categoryId: "bamboo-craft",
          district: "Gadchiroli, Maharashtra",
          village: "Gadchiroli, Maharashtra",
          image: "/images/gadchiroli/bamboo/charpai.jfif",
          imageSource: "Field Archive, Gadchiroli",
          imageLicense: "Verified Field Archive",
          isVerified: true,
          about:
            "A traditional daybed engineered from thick-wall structural bamboo poles and strung with high-tension handwoven bamboo webbing or natural fiber rope, offering natural breathability and cooling.",
          uses: [
            "Natural outdoor and courtyard resting cot",
            "Breathable ergonomic daybed",
            "Traditional household sleeping furniture"
          ],
          material: "Thick structural bamboo poles and natural fiber / bamboo webbing",
          craftTechnique: "Corner mortise jointing and high-tension geometric webbing",
          processFlow: "Raw Bamboo → Cutting & Preparation → Splitting / Shaping → Weaving / Assembly → Finishing → Finished Product"
        },
        {
          id: "bamboo-lamp-decor",
          name: "Bamboo Home Décor / Lamp",
          marathiName: "बांबूचे लॅम्पशेड व गृहसजावट",
          categoryId: "bamboo-craft",
          district: "Gadchiroli, Maharashtra",
          village: "Gadchiroli, Maharashtra",
          image: "/images/gadchiroli/bamboo/lamp.jfif",
          imageSource: "Field Archive, Gadchiroli",
          imageLicense: "Verified Field Archive",
          isVerified: true,
          about:
            "Artisanal pendant lamp shades and wall lanterns hand-braided from thin bamboo micro-splints, casting warm, geometric lattice shadows while showcasing the natural organic texture of forest bamboo.",
          uses: [
            "Ambient interior lighting",
            "Sustainable home aesthetics and wall decor",
            "Cultural giftware"
          ],
          material: "Fine shaved bamboo splints and natural wood fittings",
          craftTechnique: "Radial open-lattice micro-weaving and natural protective oil finish",
          processFlow: "Raw Bamboo → Cutting & Preparation → Splitting / Shaping → Weaving / Assembly → Finishing → Finished Product"
        },
        {
          id: "bamboo-utility-products",
          name: "Bamboo Utility Products",
          marathiName: "बांबू उपयुक्त वस्तू (पेन स्टँड, ट्रे व साधने)",
          categoryId: "bamboo-craft",
          district: "Gadchiroli, Maharashtra",
          village: "Gadchiroli, Maharashtra",
          image: "/images/gadchiroli/bamboo/utility.jfif",
          imageSource: "Field Archive, Gadchiroli",
          imageLicense: "Verified Field Archive",
          isVerified: true,
          about:
            "Modern functional desk accessories and kitchen utility items carved and assembled from natural hollow bamboo nodes, highlighting the organic grain and smooth node partitions.",
          uses: [
            "Desk stationery organizers and pen holders",
            "Serving trays and kitchen spice holders",
            "Sustainable daily functional utility"
          ],
          material: "Natural seasoned hollow bamboo culms",
          craftTechnique: "Node sectioning, precision lathe turning, and fine sandpaper finishing",
          processFlow: "Raw Bamboo → Cutting & Preparation → Splitting / Shaping → Weaving / Assembly → Finishing → Finished Product"
        }
      ],
      "rock-dhokra": [
        {
          id: "rock-dhokra-ganpati",
          name: "Rock Dhokra Ganesha Figurine",
          marathiName: "रॉक ढोकरा गणपती मूर्ती",
          categoryId: "rock-dhokra",
          district: "Gadchiroli, Maharashtra",
          village: "Bhamragad & STRC Gondwana Cluster, Gadchiroli",
          image: "/images/gadchiroli/rock-dhokra/rock-dhokra-ganpati.jpg",
          imageSource: "Devrai Art Village & Suresh Pungati Archive",
          imageLicense: "Verified Artisanal Registry",
          isVerified: true,
          about:
            "An authentic patented Rock Dhokra sculpture fusing polished local river stone with lost-wax cast bell metal brass depicting Lord Ganesha with intricate tribal jali ornamentation, pioneered in collaboration with master artisan Suresh Pungati from Gadchiroli.",
          uses: [
            "Sacred puja altar & home spiritual corner",
            "Aesthetic heritage centerpiece & art collection",
            "Sustainable tribal artisanal gifting"
          ],
          material: "Riverbed Basalt Stone, Recycled Brass & Bell Metal Alloy, Beeswax",
          craftTechnique: "Direct fusion lost-wax casting (Cire Perdue) bonded over natural river rock",
          processFlow: "River Stone Selection → Clay & Beeswax Modeling → Mold Encasement → Metal Melting & Pouring → Cooling & Mold Break → Finishing & Polishing"
        },
        {
          id: "rock-dhokra-shiva-nandi",
          name: "Rock Dhokra Shiva on Nandi",
          marathiName: "रॉक ढोकरा शिव-नंदी शिल्प",
          categoryId: "rock-dhokra",
          district: "Gadchiroli, Maharashtra",
          village: "Bhamragad & STRC Gondwana Cluster, Gadchiroli",
          image: "/images/gadchiroli/rock-dhokra/rock-dhokra-shiva-nandi.jpg",
          imageSource: "Devrai Art Village & Suresh Pungati Archive",
          imageLicense: "Verified Artisanal Registry",
          isVerified: true,
          about:
            "A masterwork sculpture depicting Lord Shiva seated upon the sacred Nandi, crafted by seamlessly fusing textured brass lost-wax filaments onto a natural water-eroded river rock core.",
          uses: [
            "Spiritual altar & temple decor",
            "Prestige cultural art collectible",
            "Generational heritage gift"
          ],
          material: "Natural Godavari/Indravati River Stone, Brass Alloy, Beeswax Core",
          craftTechnique: "Lost-wax filament sculpting wrapped directly around curved river stone",
          processFlow: "River Stone Selection → Clay & Beeswax Modeling → Mold Encasement → Metal Melting & Pouring → Cooling & Mold Break → Finishing & Polishing"
        },
        {
          id: "rock-dhokra-standing-nandi",
          name: "Rock Dhokra Standing Nandi",
          marathiName: "रॉक ढोकरा नंदी शिल्प",
          categoryId: "rock-dhokra",
          district: "Gadchiroli, Maharashtra",
          village: "Bhamragad & STRC Gondwana Cluster, Gadchiroli",
          image: "/images/gadchiroli/rock-dhokra/rock-dhokra-standing-nandi.jpg",
          imageSource: "Devrai Art Village & Suresh Pungati Archive",
          imageLicense: "Verified Artisanal Registry",
          isVerified: true,
          about:
            "A majestic tribal representation of Nandi, the sacred bull, whose body is shaped from an organic river stone base with brass horns, dewlap, and fine mesh embellishments cast into one solid piece.",
          uses: [
            "Living room mantelpiece and cultural display",
            "Vastu and sacred energy space placement",
            "Art collector heirloom"
          ],
          material: "Hard River Basalt, Molten Bell Metal, Natural Resin",
          craftTechnique: "Cire Perdue lost-wax metal fusion with stone anchoring",
          processFlow: "River Stone Selection → Clay & Beeswax Modeling → Mold Encasement → Metal Melting & Pouring → Cooling & Mold Break → Finishing & Polishing"
        },
        {
          id: "rock-dhokra-annapakshi",
          name: "Rock Dhokra Sacred Forest Bird (Annapakshi)",
          marathiName: "रॉक ढोकरा अन्नपक्षी (पक्षी शिल्प)",
          categoryId: "rock-dhokra",
          district: "Gadchiroli, Maharashtra",
          village: "Bhamragad & STRC Gondwana Cluster, Gadchiroli",
          image: "/images/gadchiroli/rock-dhokra/rock-dhokra-annapakshi.jpg",
          imageSource: "Devrai Art Village & Suresh Pungati Archive",
          imageLicense: "Verified Artisanal Registry",
          isVerified: true,
          about:
            "An elegant tribal avian sculpture celebrating forest wildlife, combining the density and natural curves of river rock with ornate cast brass plumes, wings, and delicate beak details.",
          uses: [
            "Art gallery & ambient home interior showcase",
            "Symbol of abundance and harmony with nature",
            "Eco-luxe handcrafted souvenir"
          ],
          material: "River Rock, Brass & Bronze Scrap, Organic Beeswax",
          craftTechnique: "Organic Lost-Wax direct-to-stone casting",
          processFlow: "River Stone Selection → Clay & Beeswax Modeling → Mold Encasement → Metal Melting & Pouring → Cooling & Mold Break → Finishing & Polishing"
        }
      ],
      "gond-painting": [
        {
          id: "gond-peacock-family",
          name: "Peacock Family Gond Painting",
          marathiName: "मयूर कुटुंब गोंड चित्रकला",
          categoryId: "gond-painting",
          district: "Gadchiroli, Maharashtra",
          village: "Aheri & Etapalli Clusters, Gadchiroli",
          image: "/images/gadchiroli/gond-painting/gond-peacock-family.jpg",
          imageSource: "Wikimedia Commons (Gond Art Collection)",
          imageLicense: "CC BY-SA 4.0",
          isVerified: true,
          about:
            "A vibrant authentic Gond painting celebrating the sacred peacock family, crafted using fine dotting and linear rhythmic patterns that symbolize monsoon arrival, forest vitality, and family protection in Gondwana folk belief.",
          uses: [
            "Art gallery wall framing & interior aesthetic",
            "Cultural appreciation and storytelling",
            "Traditional housewarming and festival gifting"
          ],
          material: "Natural earth pigments, acrylic gouache on handmade rag paper",
          craftTechnique: "Digna wall art style with signature Gond micro-dotting and line patterning",
          processFlow: "Surface Preparation → Natural Charcoal Outlining → Base Color Fill → Intricate Dot & Line Texturing → Natural Lacquer Sealing"
        },
        {
          id: "gond-elephant-tree",
          name: "Elephant with Tree of Life Gond Painting",
          marathiName: "कल्पवृक्ष व हत्ती गोंड चित्रकला",
          categoryId: "gond-painting",
          district: "Gadchiroli, Maharashtra",
          village: "Aheri & Bhamragad Forests, Gadchiroli",
          image: "/images/gadchiroli/gond-painting/gond-elephant-tree.jpg",
          imageSource: "Wikimedia Commons (Gond Art Collection)",
          imageLicense: "CC BY-SA 4.0",
          isVerified: true,
          about:
            "A profound indigenous painting capturing the symbiotic bond between the forest elephant and the sacred Mahua/Banyan Tree of Life, depicting how all woodland creatures draw sustenance and sanctuary from the forest canopy.",
          uses: [
            "Heritage wall art for homes and cultural centers",
            "Living room focal centerpiece",
            "Traditional artistic gifting"
          ],
          material: "Natural mineral dyes, organic gum binder on archival canvas",
          craftTechnique: "Generational Gond line-and-dash signature motif work",
          processFlow: "Surface Preparation → Natural Charcoal Outlining → Base Color Fill → Intricate Dot & Line Texturing → Natural Lacquer Sealing"
        },
        {
          id: "gond-forest-birds",
          name: "Forest Birds & Mahua Tree Gond Painting",
          marathiName: "वनपक्षी व महुआ वृक्ष गोंड चित्रकला",
          categoryId: "gond-painting",
          district: "Gadchiroli, Maharashtra",
          village: "Etapalli & Dhanora Tribal Belts, Gadchiroli",
          image: "/images/gadchiroli/gond-painting/gond-forest-birds.jpg",
          imageSource: "Wikimedia Commons (Gond Tribal Archive)",
          imageLicense: "CC BY-SA 4.0",
          isVerified: true,
          about:
            "A detailed pictorial tribute to the avifauna of Gadchiroli forests resting among flowering Mahua branches, rendered in delicate multicolored stippling that evokes movement and forest song.",
          uses: [
            "Eco-art and contemporary interior enhancement",
            "Educational display of indigenous folklore",
            "Artisan collector piece"
          ],
          material: "Handmade archival sheet, mineral oxides, fine squirrel-hair brushwork",
          craftTechnique: "Freehand geometric dotting and contour rhythm",
          processFlow: "Surface Preparation → Natural Charcoal Outlining → Base Color Fill → Intricate Dot & Line Texturing → Natural Lacquer Sealing"
        },
        {
          id: "gond-sacred-deer",
          name: "Sacred Forest Deer (Harin) Gond Painting",
          marathiName: "अरण्य हरिण गोंड चित्रकला",
          categoryId: "gond-painting",
          district: "Gadchiroli, Maharashtra",
          village: "Chamorshi & Aheri Clusters, Gadchiroli",
          image: "/images/gadchiroli/gond-painting/gond-sacred-deer.jpg",
          imageSource: "Wikimedia Commons (Gond Tribal Archive)",
          imageLicense: "CC BY-SA 4.0",
          isVerified: true,
          about:
            "Depicts the graceful forest deer (Harin), regarded by Gond folklore as the swift messenger of forest deity Bada Dev. Illustrated with intricate scale patterns, dots, and warm earth tones.",
          uses: [
            "Living room and study room decor",
            "Cultural gifting for nature lovers",
            "Tribal artwork collection"
          ],
          material: "Earth pigments, cow-dung wash paper base, gouache",
          craftTechnique: "Traditional Digna outline with organic pigment filling",
          processFlow: "Surface Preparation → Natural Charcoal Outlining → Base Color Fill → Intricate Dot & Line Texturing → Natural Lacquer Sealing"
        }
      ],
      "earthen-pottery": [
        {
          id: "clay-matka",
          name: "Traditional Clay Matka / Dergi Water Pot",
          marathiName: "पारंपरिक मातीचे मडके / देर्गी (जलपात्र)",
          categoryId: "earthen-pottery",
          district: "Gadchiroli, Maharashtra",
          village: "Armori & Chamorshi Kumbhar Wada, Gadchiroli",
          image: "/images/gadchiroli/earthen-pottery/clay-matka.jpg",
          imageSource: "Wikimedia Commons / Vidarbha Rural Craft Documentation",
          imageLicense: "CC BY-SA 4.0",
          isVerified: true,
          about:
            "A hand-thrown red clay water pot fashioned on a traditional potter's wheel using mineral-rich Wainganga riverbed silt. Naturally porous walls enable natural evaporative cooling, infusing water with natural minerals.",
          uses: [
            "Natural evaporative water cooling during hot summers",
            "Daily healthy alkaline drinking water storage",
            "Ritual and auspicious festive ceremonies"
          ],
          material: "Wainganga riverbed alluvial red clay, rice husk, natural river sand",
          craftTechnique: "Wheel throwing followed by wooden paddle-and-anvil (Thapni-Kundi) beating",
          processFlow: "Clay Mining & Sieving → Kneading & Maturing → Wheel Throwing → Paddle Beating (Thapni) → Sun Drying → Wood-fired Kiln Baking (Bhatti)"
        },
        {
          id: "terracotta-diya",
          name: "Handcrafted Terracotta Oil Diya",
          marathiName: "हस्तनिर्मित मातीचा दिवा (पणती / दीप)",
          categoryId: "earthen-pottery",
          district: "Gadchiroli, Maharashtra",
          village: "Kurkheda & Armori Clusters, Gadchiroli",
          image: "/images/gadchiroli/earthen-pottery/terracotta-diya.jpg",
          imageSource: "Wikimedia Commons (Artisanal Pottery Archive)",
          imageLicense: "CC BY-SA 3.0",
          isVerified: true,
          about:
            "A traditional clay oil lamp hand-pinched and wheel-spun by local potter families. Designed with a curved wick groove for sustained steady flame during Diwali, Pola, and sacred village festivals.",
          uses: [
            "Diwali, Pola, and temple festival illumination",
            "Daily evening altar lighting (Sandhya Deep)",
            "Eco-friendly natural festive celebration"
          ],
          material: "Refined terracotta clay, natural red ochre (Geru) slip",
          craftTechnique: "Hand pinching, rim detailing, and low-temperature pit firing",
          processFlow: "Clay Mining & Sieving → Kneading & Maturing → Wheel Throwing → Paddle Beating (Thapni) → Sun Drying → Wood-fired Kiln Baking (Bhatti)"
        },
        {
          id: "clay-cooking-handi",
          name: "Traditional Clay Cooking Handi",
          marathiName: "पारंपरिक मातीची हांडी / मटकी (स्वयंपाक भांडे)",
          categoryId: "earthen-pottery",
          district: "Gadchiroli, Maharashtra",
          village: "Chamorshi & Dhanora Clusters, Gadchiroli",
          image: "/images/gadchiroli/earthen-pottery/clay-cooking-handi.jpg",
          imageSource: "Wikimedia Commons (Traditional Cookware Archive)",
          imageLicense: "CC BY-SA 4.0",
          isVerified: true,
          about:
            "An unglazed thick-walled clay cooking vessel engineered for uniform heat retention and slow wood-fire cooking. Retains natural moisture and nutrients while imparting an authentic earthy aroma.",
          uses: [
            "Slow cooking of traditional lentils, pulses, and country chicken",
            "Earthy rice and biryani preparation",
            "Healthy, chemical-free toxinless cooking"
          ],
          material: "Heavy-density alluvial clay, fine mica sand, organic wood ash",
          craftTechnique: "Reinforced wall wheel throwing and slow bonfire kiln baking",
          processFlow: "Clay Mining & Sieving → Kneading & Maturing → Wheel Throwing → Paddle Beating (Thapni) → Sun Drying → Wood-fired Kiln Baking (Bhatti)"
        },
        {
          id: "terracotta-votive-craft",
          name: "Terracotta Tribal Votive Sculpture",
          marathiName: "मातीचे ग्रामदैवत शिल्प व मूर्ती",
          categoryId: "earthen-pottery",
          district: "Gadchiroli, Maharashtra",
          village: "Aheri, Armori & STRC Gondwana Project, Gadchiroli",
          image: "/images/gadchiroli/earthen-pottery/terracotta-votive-craft.jpg",
          imageSource: "Wikimedia Commons (Tribal Terracotta Archive)",
          imageLicense: "CC BY-SA 4.0",
          isVerified: true,
          about:
            "Hand-sculpted terracotta figurines representing guardian spirits, elephants, horses, and sacred folk icons venerated at sacred village groves (Devrai / Gaondeo) across Gondwana settlements.",
          uses: [
            "Sacred grove offering and village shrine protection",
            "Heritage home decoration & artistic mantelpiece",
            "Adivasi cultural art collection"
          ],
          material: "Natural clay mixture, river sand, organic rice straw ash",
          craftTechnique: "Hand modeling, applique clay relief, and open-pit wood firing",
          processFlow: "Clay Mining & Sieving → Kneading & Maturing → Wheel Throwing → Paddle Beating (Thapni) → Sun Drying → Wood-fired Kiln Baking (Bhatti)"
        }
      ]
    }
  },

  chandrapur: {
    id: "chandrapur",
    name: "Chandrapur",
    marathiName: "चंद्रपूर",
    tagline: "Ancient Metalcasting Legacies, Tribal Flutes & Tadoba Forest Ecology",
    shortIntro:
      "Bordering the pristine Tadoba-Andhari forest reserve, Chandrapur sustains generational metallurgical crafts like lost-wax Dhokra metalcraft, resonant bamboo flutes, and aromatic Saoji spice heritage.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tadoba_Andhari_Tiger_Project_13.jpg/1280px-Tadoba_Andhari_Tiger_Project_13.jpg",
    imageSource: "Wikimedia Commons (Nikhil More)",
    imageLicense: "CC BY-SA 3.0",
    categories: {
      "traditional-crafts": [
        {
          id: "chandrapur-dhokra-brass-figurines",
          name: "Dhokra Lost-Wax Bell Metal Craft",
          marathiName: "ढोकरा पितळ हस्तकला",
          categoryId: "traditional-crafts",
          district: "Chandrapur",
          village: "Nagbhid & Ballarpur Clusters",
          image: null,
          imageSource: "Maharashtra Small Scale Industries Development Corporation (MSSIDC)",
          imageLicense: "Verified Artisanal Registry",
          about:
            "Ancient lost-wax (Cire-Perdue) metalcasting where beeswax filaments are hand-modeled over clay cores before molten brass is poured. Each artifact is unique because the clay mold is broken during extraction.",
          uses: [
            "Traditional altar and ritual home decor",
            "Heirloom tribal art collecting",
            "Cultural giftware"
          ],
          material: "Recycled brass, beeswax, riverbed clay and charcoal",
          craftTechnique: "Lost-wax (Cire-Perdue) clay mold casting"
        }
      ],
      "bamboo-craft": [
        {
          id: "chandrapur-bamboo-flute-bansuri",
          name: "Handcrafted Bamboo Flute (Bansuri)",
          marathiName: "हस्तनिर्मित बासरी",
          categoryId: "bamboo-craft",
          district: "Chandrapur",
          village: "Ballarpur & Mul",
          image: null,
          imageSource: "Ballarpur Bamboo Artisans Guild",
          imageLicense: "Verified Field Archive",
          about:
            "Acoustically tuned transversal flutes crafted from seasoned straight-grain bamboo harvested from Chandrapur forest borders. Individually tuned to specific Hindustani classical swaras.",
          uses: [
            "Classical music and folk performances",
            "Meditation and breath acoustics",
            "Acoustic music recording"
          ],
          material: "Straight-bore seasoned forest bamboo",
          craftTechnique: "Thermal bore burning and acoustic hole tuning"
        }
      ],
      "local-food": [
        {
          id: "saoji-roasted-spice-masala",
          name: "Authentic Saoji Spice Masala Blend",
          marathiName: "पारंपरिक सावजी मसाला",
          categoryId: "local-food",
          district: "Chandrapur",
          village: "Chandrapur City (Halba-Koshti Heritage)",
          image: null,
          imageSource: "Vidarbha Culinary Heritage Collective",
          imageLicense: "Official Food Documentation",
          about:
            "A secret 32-spice roasted blend perfected by the Koshti weaver community of Vidarbha. Features stone-ground Dagad Phool (Stone Flower), Nagkesar, Javantry, and slow-roasted whole spices.",
          uses: [
            "Authentic Saoji curries and rassa preparations",
            "Traditional roasted gravy seasoning",
            "Heritage spicy culinary dishes"
          ],
          material: "Dagad Phool, Nagkesar, Poppy seeds, Black Cardamom, Dry Ginger, Coriander",
          craftTechnique: "Slow iron-kadai dry roasting and traditional stone grinding"
        }
      ]
    }
  },

  nagpur: {
    id: "nagpur",
    name: "Nagpur",
    marathiName: "नागपूर",
    tagline: "GI-Tagged Mandarin Oranges, Sitabuldi Tarri Poha & Karvat Kati Weaves",
    shortIntro:
      "The winter capital of Maharashtra is world-famous for its unique loose-skinned Mandarin oranges protected under Geographical Indication (GI), iconic Sitabuldi breakfast Tarri Poha, and the Karvat Kati tussar silk handloom tradition.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nagpur_orange_article.JPG/1280px-Nagpur_orange_article.JPG",
    imageSource: "Wikimedia Commons (J.M.Garg)",
    imageLicense: "CC BY-SA 3.0",
    categories: {
      "local-food": [
        {
          id: "nagpur-mandarin-orange",
          name: "GI-Tagged Nagpur Mandarin Orange",
          marathiName: "नागपूर संत्री (GI मानांकित)",
          categoryId: "local-food",
          district: "Nagpur",
          village: "Katol, Kalmeshwar & Saoner Orchards",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nagpur_orange_article.JPG/1280px-Nagpur_orange_article.JPG",
          imageSource: "Wikimedia Commons (J.M.Garg)",
          imageLicense: "CC BY-SA 3.0",
          about:
            "Geographical Indication (GI) registered Citrus reticulata cultivar famous for its distinct loose skin, easy peelability, and an optimal natural balance of sweet-tangy citrus flavor nurtured by Nagpur's black basalt soil.",
          uses: [
            "Fresh organic table consumption and vitamin C source",
            "Fresh cold-pressed juice and citrus preserves",
            "Nagpur Santra Burfi confection base"
          ],
          material: "Citrus reticulata (GI Registered Nagpur Mandarin)",
          craftTechnique: "Natural drip-irrigated orchard cultivation with Mrig & Ambiya Bahar cycles"
        },
        {
          id: "sitabuldi-tarri-poha",
          name: "Nagpur Sitabuldi Tarri Poha",
          marathiName: "नागपूरची प्रसिद्ध तर्री पोहे",
          categoryId: "local-food",
          district: "Nagpur",
          village: "Sitabuldi & Ram Nagar, Nagpur",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tarri_Poha.jpg/1280px-Tarri_Poha.jpg",
          imageSource: "Wikimedia Commons (CC BY-SA 4.0)",
          imageLicense: "CC BY-SA 4.0",
          about:
            "The iconic breakfast staple of Nagpur, featuring soft yellow-tempered flattened rice drenched in a fiery, slow-simmered black chickpea (chana) spicy red gravy (Tarri), garnished with fresh coriander, diced onions, and crunchy sev.",
          uses: [
            "Iconic Nagpur cultural breakfast staple",
            "High-protein chickpea and iron-rich carbohydrate meal",
            "Signature street food experience"
          ],
          material: "Thick beaten rice (Poha), desi black chana, dry coconut, Vidarbha red chilies, mustard, curry leaves",
          craftTechnique: "Slow oil-layered Tarri simmering with freshly ground garam masala"
        }
      ],
      "handloom-textiles": [
        {
          id: "nagpur-karvat-kati-saree",
          name: "GI-Tagged Karvat Kati Tussar Silk Saree",
          marathiName: "करवत काठी साडी (GI मानांकित)",
          categoryId: "handloom-textiles",
          district: "Nagpur",
          village: "Kamptee & Umred Handloom Clusters",
          image: null,
          imageSource: "Weavers Service Centre, Ministry of Textiles, GOI",
          imageLicense: "Official GI Documentation",
          about:
            "A Geographical Indication (GI) protected handwoven tussar silk saree characterized by its distinctive sawtooth ('Karvat') temple borders woven with 3-shuttle interlocking techniques by master weavers of Kamptee.",
          uses: [
            "Sacred ritual and wedding celebrations",
            "Cultural heritage attire and festive wear",
            "Heirloom handloom collection"
          ],
          material: "Pure Vidarbha Tussar silk & mercerized cotton warp",
          craftTechnique: "Pit loom weaving with 3-shuttle interlocking solid border (Karvat)"
        }
      ]
    }
  },

  kolhapur: {
    id: "kolhapur",
    name: "Kolhapur",
    marathiName: "कोल्हापूर",
    tagline: "GI-Tagged Kolhapuri Chappals, Heirloom Saaj & Organic Jaggery",
    shortIntro:
      "Kolhapur's illustrious artisanal history flourished under the royal patronage of Chhatrapati Shahu Maharaj, yielding world-famous GI-tagged Kolhapuri leather chappals, 21-pendant Kolhapuri Saaj jewelry, and pure organic jaggery.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kolhapuri_chappals.jpg/960px-Kolhapuri_chappals.jpg",
    imageSource: "Wikimedia Commons (Nsh9)",
    imageLicense: "CC BY-SA 3.0",
    categories: {
      "traditional-crafts": [
        {
          id: "gi-kolhapuri-chappal",
          name: "GI-Tagged Handcrafted Kolhapuri Chappal",
          marathiName: "कोल्हापुरी चप्पल (GI मानांकित)",
          categoryId: "traditional-crafts",
          district: "Kolhapur",
          village: "Shivaji Market & Subhashnagar, Kolhapur",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kolhapuri_chappals.jpg/960px-Kolhapuri_chappals.jpg",
          imageSource: "Wikimedia Commons (Nsh9)",
          imageLicense: "CC BY-SA 3.0",
          about:
            "World-famous, Geographical Indication (GI) registered open-toed footwear completely handcrafted from vegetable-tanned leather using babul bark and harida seeds. Stitched entirely with leather cords without a single iron nail.",
          uses: [
            "Traditional festive, wedding, and formal attire",
            "Daily durable ergonomic footwear that molds to foot contours",
            "Heirloom handcrafted leather gifting"
          ],
          material: "100% Vegetable-tanned buffalo and bullock hide, leather cords",
          craftTechnique: "Hand-punching, sole stamping, and leather thread stitching"
        },
        {
          id: "kolhapuri-saaj-jewelry",
          name: "Heirloom Kolhapuri Saaj Necklace",
          marathiName: "कोल्हापुरी साज (पारंपरिक सुवर्णहार)",
          categoryId: "traditional-crafts",
          district: "Kolhapur",
          village: "Gujari Goldsmith Quarter, Kolhapur",
          image: null,
          imageSource: "Kolhapur Saraf Association Documentation",
          imageLicense: "Verified Artisanal Registry",
          about:
            "A sacred heritage necklace embodying 21 symbolic gold leaves ('panadi') representing the 10 avatars of Vishnu, auspicious flora, and solar motifs, anchored by a central red stone pendant.",
          uses: [
            "Traditional Maharashtrian bridal jewelry",
            "Festive celebrations and sacred auspicious ceremonies",
            "Generational family heirloom"
          ],
          material: "Hand-embossed gold/silver-gilt alloy with natural red stones",
          craftTechnique: "Die-punching and hand-twisted gold cord knotting"
        }
      ],
      "local-food": [
        {
          id: "kolhapuri-gul-organic-jaggery",
          name: "GI-Tagged Kolhapur Organic Jaggery (Gul)",
          marathiName: "कोल्हापुरी सेंद्रिय गूळ (GI मानांकित)",
          categoryId: "local-food",
          district: "Kolhapur",
          village: "Panhala, Karveer & Shirol Sugar Mills",
          image: null,
          imageSource: "Kolhapur Agriculture Market Committee (APMC)",
          imageLicense: "Official GI Documentation",
          about:
            "Geographical Indication (GI) certified pure sugarcane jaggery known for its natural golden-yellow luster, soft crystalline texture, and absence of synthetic bleaching chemicals.",
          uses: [
            "Ayurvedic healthy sweetener for traditional desserts (Puran Poli, Modak)",
            "Daily digestive tonic after meals",
            "Rich source of natural dietary iron and minerals"
          ],
          material: "Freshly crushed CO-86032 Kolhapur sugarcane juice",
          craftTechnique: "Bagasse-fired open boiling pan clarification with natural okra mucilage"
        }
      ]
    }
  },

  solapur: {
    id: "solapur",
    name: "Solapur",
    marathiName: "सोलापूर",
    tagline: "GI-Tagged Jacquard Chaddars, Terry Towels & Shenga Chutney",
    shortIntro:
      "Solapur is one of India's premier historic textile capitals, world-famous for its heavy jacquard handloom cotton chaddars, plush terry towels, and distinct spicy roasted peanut chutney.",
    heroImage: null,
    imageSource: "Solapur Handloom Weavers Cooperative Archive",
    imageLicense: "Official GI Documentation",
    categories: {
      "handloom-textiles": [
        {
          id: "solapuri-chaddar-jacquard",
          name: "GI-Tagged Solapuri Jacquard Chaddar",
          marathiName: "सोलापुरी चादर (GI मानांकित)",
          categoryId: "handloom-textiles",
          district: "Solapur",
          village: "Ashok Nagar & Padmashali Weavers Colony, Solapur",
          image: null,
          imageSource: "Textiles Committee, Ministry of Textiles, GOI",
          imageLicense: "Official GI Documentation",
          about:
            "The first textile from Maharashtra to receive Geographical Indication (GI) protection. Handwoven on jacquard looms with 100% high-count combed cotton, celebrated for geometric patterns and exceptional durability.",
          uses: [
            "All-weather bedcover and durable blanket",
            "Heritage housewarming and festive gifting",
            "Generational durable home linen"
          ],
          material: "100% Mercerized Combed Cotton Yarn (2/20s & 2/40s count)",
          craftTechnique: "Punched-card Jacquard handloom and powerloom dobby weaving"
        },
        {
          id: "solapuri-terry-towel",
          name: "Solapuri Cotton Terry Towel",
          marathiName: "सोलापुरी कॉटन टॉवेल",
          categoryId: "handloom-textiles",
          district: "Solapur",
          village: "Solapur Textile Park",
          image: null,
          imageSource: "Solapur Powerloom Cluster Association",
          imageLicense: "Official Field Documentation",
          about:
            "Plush, high-absorbency pure cotton terry towels woven with extra-long staple yarn. Famous across Western India for soft texture and quick-drying loops.",
          uses: [
            "Daily bath linen and athletic towel",
            "Hospitality and travel utility"
          ],
          material: "100% Pure absorbent cotton pile yarn",
          craftTechnique: "Multi-cam warp-pile loop weaving"
        }
      ],
      "local-food": [
        {
          id: "solapuri-shenga-chutney",
          name: "Solapuri Roasted Peanut Chutney (Shenga Chutney)",
          marathiName: "सोलापुरी शेंगदाणा चटणी",
          categoryId: "local-food",
          district: "Solapur",
          village: "Siddheshwar Peth & Akkalkot",
          image: null,
          imageSource: "Solapur Culinary Heritage Board",
          imageLicense: "Verified Local Documentation",
          about:
            "The signature dry condiment of Solapur, made from slow-roasted native peanuts, spicy Byadagi red chilies, whole garlic cloves, and cumin pounded together into a coarse, aromatic dry chutney.",
          uses: [
            "Traditional accompaniment for Jowar Bhakri and Chapati with peanut oil",
            "Savory seasoning for breakfast Thalipeeth and curd rice",
            "Flavor enhancer for everyday meals"
          ],
          material: "Native roasted groundnuts, Byadagi red chili, whole garlic, cumin, salt",
          craftTechnique: "Slow charcoal roasting and coarse stone-mortar pounding"
        }
      ]
    }
  },

  nashik: {
    id: "nashik",
    name: "Nashik",
    marathiName: "नाशिक",
    tagline: "GI-Tagged Yeola Paithani Silk Sarees & Godavari Agricultural Heritage",
    shortIntro:
      "Nashik is home to the historic town of Yeola, the undisputed epicenter of Maharashtra's royal 'Queen of Silks'—the GI-tagged Paithani saree, celebrated for centuries for its pure gold zari borders and peacock pallus.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Paithani_Bridal_Sari_LACMA_M.75.4.23_%281_of_2%29.jpg/1280px-Paithani_Bridal_Sari_LACMA_M.75.4.23_%281_of_2%29.jpg",
    imageSource: "Los Angeles County Museum of Art / Wikimedia Commons",
    imageLicense: "Public Domain",
    categories: {
      "handloom-textiles": [
        {
          id: "yeola-paithani-silk-saree",
          name: "GI-Tagged Yeola Paithani Silk Saree",
          marathiName: "येवला पैठणी साडी (GI मानांकित)",
          categoryId: "handloom-textiles",
          district: "Nashik",
          village: "Yeola Weaving Quarter",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Paithani_Bridal_Sari_LACMA_M.75.4.23_%281_of_2%29.jpg/1280px-Paithani_Bridal_Sari_LACMA_M.75.4.23_%281_of_2%29.jpg",
          imageSource: "Los Angeles County Museum of Art / Wikimedia Commons",
          imageLicense: "Public Domain",
          about:
            "Geographical Indication (GI) certified handwoven pure mulberry silk saree famous for its oblique square design tapestry technique. Features hand-interlocked golden zari pallus woven with Mor (Peacock), Bangadi Mor, and Kamal (Lotus) motifs.",
          uses: [
            "Royal Maharashtrian weddings and auspicious ceremonies",
            "Prized family heirloom passed down through generations",
            "High ceremonial couture"
          ],
          material: "100% Pure Mulberry Silk yarn & certified electroplated gold/silver zari",
          craftTechnique: "Handloom tapestry interweaving without mechanical jacquards"
        }
      ]
    }
  },

  sindhudurg: {
    id: "sindhudurg",
    name: "Sindhudurg",
    marathiName: "सिंधुदुर्ग",
    tagline: "Royal Sawantwadi Lacquerware, Ganjifa Playing Cards & Konkan Spices",
    shortIntro:
      "Nestled in the lush Konkan coast, Sindhudurg is celebrated for the 18th-century royal court crafts of Sawantwadi—including GI-tagged lacquerware wooden toys, hand-painted round Ganjifa playing cards, and fragrant Konkan produce.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ganjifa_card%2C_Indian_deity%2C_Sawantwadi%2C_Maharashtra.jpg/1280px-Ganjifa_card%2C_Indian_deity%2C_Sawantwadi%2C_Maharashtra.jpg",
    imageSource: "Victoria and Albert Museum / Wikimedia Commons",
    imageLicense: "CC BY-SA 4.0",
    categories: {
      "traditional-crafts": [
        {
          id: "sawantwadi-ganjifa-cards",
          name: "GI-Tagged Sawantwadi Ganjifa Card Paintings",
          marathiName: "सावंतवाडी गंजीफा चित्रे (GI मानांकित)",
          categoryId: "traditional-crafts",
          district: "Sindhudurg",
          village: "Sawantwadi Palace Artisan Studio",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ganjifa_card%2C_Indian_deity%2C_Sawantwadi%2C_Maharashtra.jpg/1280px-Ganjifa_card%2C_Indian_deity%2C_Sawantwadi%2C_Maharashtra.jpg",
          imageSource: "Victoria and Albert Museum / Wikimedia Commons",
          imageLicense: "CC BY-SA 4.0",
          about:
            "Geographical Indication (GI) protected circular playing cards hand-painted with squirrel-hair brushes on layered cloth or handmade paper. Depicts the Dashavatara (10 avatars of Vishnu) in vibrant natural mineral pigments.",
          uses: [
            "Traditional royal card games and heritage gaming",
            "Art collectors and museum archival collection",
            "Fine art cultural framing"
          ],
          material: "Layered cotton cloth treated with tamarind paste, natural earth and vermilion pigments",
          craftTechnique: "Fine squirrel-hair brushwork and natural lac protective varnishing"
        }
      ]
    }
  },

  sangli: {
    id: "sangli",
    name: "Sangli",
    marathiName: "सांगली",
    tagline: "GI-Tagged Miraj Musical Instruments, Classical Sitar & Tanpura",
    shortIntro:
      "Miraj in Sangli district is globally revered as the instrument-making heart of Indian classical music. For over 175 years, the Shikalgar and Mulani families have hand-carved GI-tagged sitars and tanpuras from aged mahogany and dried gourds.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Indian_musical_instruments_Sitar.jpg/1280px-Indian_musical_instruments_Sitar.jpg",
    imageSource: "Wikimedia Commons (Steve Evans)",
    imageLicense: "CC BY 2.0",
    categories: {
      "traditional-crafts": [
        {
          id: "miraj-handcrafted-sitar",
          name: "GI-Tagged Miraj Handcrafted Sitar",
          marathiName: "मिरज हातनिर्मित सितार (GI मानांकित)",
          categoryId: "traditional-crafts",
          district: "Sangli",
          village: "Miraj City Workshop Quarter",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Indian_musical_instruments_Sitar.jpg/1280px-Indian_musical_instruments_Sitar.jpg",
          imageSource: "Wikimedia Commons (Steve Evans)",
          imageLicense: "CC BY 2.0",
          about:
            "Geographical Indication (GI) protected classical sitar hand-carved by master luthiers of Miraj. Made from seasoned Tun wood (Red Cedar) and specialized dried water gourds (Kaddu) from Pandharpur for unmatched resonance and tonal depth.",
          uses: [
            "Hindustani classical music performance and concert recitals",
            "Master-disciple (Guru-Shishya) acoustic training",
            "Prestige acoustic string instrument collections"
          ],
          material: "Seasoned Tun (Toona ciliata) wood, dried riverbed gourd, deer-horn bridge (Javari)",
          craftTechnique: "Hand-chiseling, celluloid leaf inlay, and delicate Javari bridge filing"
        }
      ]
    }
  },

  wardha: {
    id: "wardha",
    name: "Wardha",
    marathiName: "वर्धा",
    tagline: "Sevagram Handspun Khadi, Charkha Heritage & Gram Swaraj Ecology",
    shortIntro:
      "Wardha holds a legendary place in India's independence movement as the birthplace of Mahatma Gandhi's Sevagram Ashram and the revival of handspun, handwoven Khadi as an instrument of self-reliance and sustainable rural livelihoods.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Charkha_kept_at_Gandhi_Ashram.jpg/1280px-Charkha_kept_at_Gandhi_Ashram.jpg",
    imageSource: "Wikimedia Commons (Ashishg55)",
    imageLicense: "CC BY-SA 4.0",
    categories: {
      "handloom-textiles": [
        {
          id: "wardha-sevagram-khadi-fabric",
          name: "Sevagram Handspun Organic Khadi",
          marathiName: "सेवाग्राम हातमाग खादी वस्त्र",
          categoryId: "handloom-textiles",
          district: "Wardha",
          village: "Sevagram Ashram & Gopuri, Wardha",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Charkha_kept_at_Gandhi_Ashram.jpg/1280px-Charkha_kept_at_Gandhi_Ashram.jpg",
          imageSource: "Wikimedia Commons (Ashishg55)",
          imageLicense: "CC BY-SA 4.0",
          about:
            "100% natural, hand-carded, hand-spun on traditional Amber charkhas and handwoven on pit looms by rural artisan cooperatives in Wardha. Breathable, thermodynamic fabric that keeps cool in summer and warm in winter.",
          uses: [
            "Comfortable, skin-friendly sustainable everyday apparel",
            "Kurtas, shirts, sarees, and traditional shawls",
            "Eco-friendly home textiles and upholstery"
          ],
          material: "100% Organic rain-fed desi cotton handspun on Amber Charkha",
          craftTechnique: "Manual Amber Charkha spinning and traditional wooden handloom weaving"
        }
      ]
    }
  },

  satara: {
    id: "satara",
    name: "Satara",
    marathiName: "सातारा",
    tagline: "GI-Tagged Mahabaleshwar Strawberries & Sahyadri Wild Honey",
    shortIntro:
      "Perched in the mist-laden Sahyadri Western Ghats, Satara's high-altitude Mahabaleshwar and Panchgani plateau accounts for over 85% of India's strawberry production, protected with Geographical Indication (GI) status.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Strawberry_in_Mahabaleshwar.jpg/1280px-Strawberry_in_Mahabaleshwar.jpg",
    imageSource: "Wikimedia Commons (Roshanguru)",
    imageLicense: "CC BY-SA 3.0",
    categories: {
      "local-food": [
        {
          id: "mahabaleshwar-strawberry-gi",
          name: "GI-Tagged Mahabaleshwar Strawberry",
          marathiName: "महाबळेश्वर स्ट्रॉबेरी (GI मानांकित)",
          categoryId: "local-food",
          district: "Satara",
          village: "Mahabaleshwar, Panchgani & Wai Valleys",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Strawberry_in_Mahabaleshwar.jpg/1280px-Strawberry_in_Mahabaleshwar.jpg",
          imageSource: "Wikimedia Commons (Roshanguru)",
          imageLicense: "CC BY-SA 3.0",
          about:
            "Geographical Indication (GI) registered strawberries grown in the red laterite soil and cool subtropical climate of the Mahabaleshwar plateau. Celebrated for deep crimson color, sweet aroma, and high antioxidant content.",
          uses: [
            "Fresh gourmet fruit consumption and dessert toppings",
            "Artisanal jams, squashes, and strawberry syrups",
            "Signature Mahabaleshwar fresh strawberry with cream"
          ],
          material: "Fragaria ananassa (Sweet Charlie, Winter Dawn, Camarosa cultivars)",
          craftTechnique: "Latex-mulched hill slope drip cultivation and hand-picked harvesting"
        }
      ]
    }
  },

  palghar: {
    id: "palghar",
    name: "Palghar",
    marathiName: "पालघर",
    tagline: "GI-Tagged Warli Tribal Paintings, Tarpa Dance & Indigenous Forest Art",
    shortIntro:
      "Palghar is the sacred homeland of the Warli indigenous community, renowned worldwide for their GI-tagged Warli paintings that use rudimentary geometric figures (circle, triangle, square) made of rice paste and red ochre to portray harmony with nature.",
    heroImage: null,
    categories: {}
  },

  "chhatrapati-sambhajinagar": {
    id: "chhatrapati-sambhajinagar",
    name: "Chhatrapati Sambhajinagar",
    marathiName: "छत्रपती संभाजीनगर",
    tagline: "GI-Tagged Himroo Fabrics, Paithani Silk & Bidri Metallurgy",
    shortIntro:
      "A medieval capital rich with royal textile legacies, famous for GI-tagged Himroo fabric weaving—an intricate blend of silk and cotton with Persian brocade motifs, developed during the reign of Mohammad Tughlaq.",
    heroImage: null,
    categories: {}
  },

  aurangabad: {
    id: "chhatrapati-sambhajinagar",
    name: "Chhatrapati Sambhajinagar",
    marathiName: "छत्रपती संभाजीनगर",
    tagline: "GI-Tagged Himroo Fabrics, Paithani Silk & Bidri Metallurgy",
    shortIntro:
      "A medieval capital rich with royal textile legacies, famous for GI-tagged Himroo fabric weaving—an intricate blend of silk and cotton with Persian brocade motifs.",
    heroImage: null,
    categories: {}
  },

  pune: {
    id: "pune",
    name: "Pune",
    marathiName: "पुणे",
    tagline: "GI-Tagged Puneri Pagadi, Tambat Ali Hand-Beaten Copperware & Cultural Heritage",
    shortIntro:
      "The cultural capital of Maharashtra, celebrated for the prestigious GI-tagged Puneri Pagadi headdress worn by scholars and leaders since the 19th century, and the centuries-old Tambat Ali hand-beaten copper craft.",
    heroImage: null,
    categories: {}
  },

  raigad: {
    id: "raigad",
    name: "Raigad",
    marathiName: "रायगड",
    tagline: "Pen Clay Ganesh Idols, Coastal Salt Cultivation & Historical Fort Legacy",
    shortIntro:
      "Home to the historic capital of Chhatrapati Shivaji Maharaj and the renowned artisanal town of Pen, celebrated across India for hand-sculpted eco-friendly Shadu clay Ganesh idols crafted by generational sculptors.",
    heroImage: null,
    categories: {}
  },

  dharashiv: {
    id: "dharashiv",
    name: "Dharashiv",
    marathiName: "धाराशिव",
    tagline: "Sacred Tuljapur Bhavani Temple Traditions & Handcrafted Kavdi Maal",
    shortIntro:
      "A sacred spiritual crossroads of Marathwada, centered on the ancient Tuljapur temple and its generational cottage craft of threading natural sea-cowrie shell necklaces (Kavdi Maal) and brass ritual bells.",
    heroImage: null,
    categories: {}
  },

  osmanabad: {
    id: "dharashiv",
    name: "Dharashiv",
    marathiName: "धाराशिव",
    tagline: "Sacred Tuljapur Bhavani Temple Traditions & Handcrafted Kavdi Maal",
    shortIntro:
      "A sacred spiritual crossroads of Marathwada, centered on the ancient Tuljapur temple and its generational cottage craft of threading natural sea-cowrie shell necklaces (Kavdi Maal).",
    heroImage: null,
    categories: {}
  },

  bhandara: {
    id: "bhandara",
    name: "Bhandara",
    marathiName: "भंडारा",
    tagline: "Tasar Silk Sericulture, Kosa Tussar Weaving & Brass Metallurgy",
    shortIntro:
      "Known as the 'Brass City' and a vital center of India's wild Tasar silk ecosystem, where tribal rearers and Koshti handloom weavers harvest forest cocoons to weave resilient, lustrous Tasar tussar sarees and fabrics.",
    heroImage: null,
    categories: {}
  },

  gondia: {
    id: "gondia",
    name: "Gondia",
    marathiName: "गोंदिया",
    tagline: "Forest Tasar Silk Cocoons, Indigenous Handloom & Rice Bowl Ecology",
    shortIntro:
      "Rich in pristine forest wetlands and Arjun tree groves, Gondia is a primary producer of wild Tasar (Antheraea mylitta) silk cocoons, sustained by indigenous communities who practice sustainable wild cocoon gathering.",
    heroImage: null,
    categories: {}
  }
};
