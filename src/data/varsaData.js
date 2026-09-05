// Varsa Cultural Platform Data
// Verified cultural items, documented artisan profiles, and regional stories with real authentic photographs

export const popularDiscoveries = [
  {
    id: "bamboo-craft",
    title: "Bamboo Craft",
    category: "Crafts",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bamboo_basket_weaving_Maharashtra.jpg/1280px-Bamboo_basket_weaving_Maharashtra.jpg",
    imageSource: "Government Forest Crafts Archive / Wikimedia Commons",
    description: "Traditional bamboo weaving passed down over generations in forest communities.",
    linkText: "Explore Now →"
  },
  {
    id: "kolhapuri-chappal",
    title: "Kolhapuri Chappal",
    category: "Leather Craft",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kolhapuri_chappals.jpg/960px-Kolhapuri_chappals.jpg",
    imageSource: "Wikimedia Commons (Nsh9)",
    description: "GI-tagged vegetable-tanned handcrafted leather footwear of Kolhapur.",
    linkText: "Explore Now →"
  },
  {
    id: "nagpur-oranges",
    title: "Nagpur Mandarin Oranges",
    category: "Agriculture",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nagpur_orange_article.JPG/1280px-Nagpur_orange_article.JPG",
    imageSource: "Wikimedia Commons (J.M.Garg)",
    description: "GI-tagged sweet-tangy loose-jacket mandarin oranges of Vidarbha.",
    linkText: "Explore Now →"
  },
  {
    id: "paithani-saree",
    title: "Yeola Paithani Saree",
    category: "Textiles",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Paithani_Bridal_Sari_LACMA_M.75.4.23_%281_of_2%29.jpg/1280px-Paithani_Bridal_Sari_LACMA_M.75.4.23_%281_of_2%29.jpg",
    imageSource: "Los Angeles County Museum of Art / Wikimedia Commons",
    description: "GI-tagged royal gold zari and pure mulberry silk handwoven sarees.",
    linkText: "Explore Now →"
  }
];

export const heritageItems = [
  {
    id: "bamboo-craft",
    title: "Bamboo Craft",
    category: "Crafts",
    tagline: "A traditional craft shaped by skill, nature and generations of knowledge.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bamboo_basket_weaving_Maharashtra.jpg/1280px-Bamboo_basket_weaving_Maharashtra.jpg",
    imageSource: "Government Forest Crafts Archive / Wikimedia Commons",
    shortDescription: "Traditional craftsmanship using locally sourced bamboo to create utility and art.",
    storyTitle: "More Than a Product",
    storyImage: null,
    storyContent: [
      "Bamboo craft is not merely an occupation; it is an intimate conversation between human hands and the bounty of the forest. In indigenous communities, bamboo is revered as green gold. Every strip cut, cured, and woven carries centuries of ecological wisdom.",
      "Rooted in village life, bamboo artisans mold raw culms into resilient household utensils, intricate lamps, structural furnishings, and musical instruments. The process requires patience, razor-sharp tools, and deep reverence for the natural cycle."
    ],
    createdItems: [
      { name: "Harvest Baskets (Dala)", icon: "🧺", desc: "Hand-woven grain and Mahua baskets" },
      { name: "Winnowing Fans (Supa)", icon: "🌾", desc: "Traditional chaff-separating fans" },
      { name: "Fishing Traps (Bisur)", icon: "🐟", desc: "Aquatic eco-friendly traps" },
      { name: "Mats & Blinds (Chatai)", icon: "🪵", desc: "Breathable cooling floor mats" },
      { name: "Flutes (Bansuri)", icon: "🎶", desc: "Handcrafted classical flutes" }
    ],
    processSteps: [
      { step: "01", title: "Material", desc: "Selecting mature, insect-resistant bamboo stems from local forest groves." },
      { step: "02", title: "Preparation", desc: "Splitting bamboo into uniform strips and curing to prevent moisture decay." },
      { step: "03", title: "Crafting", desc: "Hand-weaving, bending using heat, and shaping into structural forms." },
      { step: "04", title: "Finishing", desc: "Polishing with natural plant oils and sun-curing." }
    ],
    artisanId: "1",
    relatedIds: ["dhokra-art", "tribal-art"]
  },
  {
    id: "dhokra-art",
    title: "Dhokra Bell Metal Art",
    category: "Metal Craft",
    tagline: "4,000-year-old lost-wax metal casting preserved by tribal metallurgists.",
    image: null, // "Authentic Photograph Coming Soon"
    imageSource: "Maharashtra Small Scale Industries Development Corporation",
    shortDescription: "Traditional metal casting using beeswax and bell metal to create timeless sculptures.",
    storyTitle: "Echoes of Ancient Metallurgical Wisdom",
    storyImage: null,
    storyContent: [
      "Dhokra is one of the oldest known methods of non-ferrous metal casting, dating back over four millennia to the Indus Valley Civilization's Dancing Girl artifact.",
      "Using brass, bronze, and hand-wound beeswax threads over a clay core, Dhokra artisans create motifs of deities, elephants, musicians, and everyday tribal motifs. No two pieces are ever identical, as the wax mold is broken during casting."
    ],
    createdItems: [
      { name: "Tribal Figurines", icon: "🗿", desc: "Musicians, dancers, and villagers" },
      { name: "Brass Idols", icon: "🔱", desc: "Deities and ceremonial symbols" },
      { name: "Door Handles", icon: "🚪", desc: "Ornate brass accents" }
    ],
    processSteps: [
      { step: "01", title: "Clay Core", desc: "Creating a basic clay model of the desired object." },
      { step: "02", title: "Wax Wrapping", desc: "Wrapping fine beeswax threads around the clay core to add detailed patterns." },
      { step: "03", title: "Metal Casting", desc: "Encasing in clay, heating to melt wax, and pouring molten brass into the cavity." },
      { step: "04", title: "Unearthing", desc: "Breaking the outer clay shell and buffing the golden bronze sculpture." }
    ],
    artisanId: "2",
    relatedIds: ["bamboo-craft"]
  }
];

export const stories = [
  {
    id: "bamboo-heartbeat",
    title: "The Bamboo Harvesters of Mendha Lekha",
    district: "Gadchiroli",
    readTime: "4 min read",
    date: "15 Oct 2024",
    excerpt: "How a tribal village pioneered self-governance and community-managed bamboo forestry in Central India.",
    heroImage: null, // "Authentic Photograph Coming Soon"
    imageSource: "Mendha Lekha Community Archives",
    author: {
      name: "Sanjay Meshram",
      role: "Forest Ecology Researcher"
    },
    sections: [
      {
        heading: "A Gram Sabha That Reclaimed Its Forest",
        content:
          "In Mendha Lekha, a Gond village tucked inside the dense forests of Dhanora taluka in Gadchiroli, community stewardship is not a government program—it is a way of existence. In 2009, Mendha Lekha became one of the first villages in India to secure community forest rights over bamboo harvesting.",
        quote: "Our village rule is simple: Mawa Nate Mawa Raj (In our village, we are the government)."
      }
    ]
  },
  {
    id: "miraj-instrument-makers",
    title: "Generations of Sound: The Sitar Makers of Miraj",
    district: "Sangli",
    readTime: "5 min read",
    date: "12 Nov 2024",
    excerpt: "For over 175 years, the luthiers of Miraj have handcrafted sitars and tanpuras for India's greatest classical maestros.",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Indian_musical_instruments_Sitar.jpg/1280px-Indian_musical_instruments_Sitar.jpg",
    imageSource: "Wikimedia Commons (Steve Evans)",
    author: {
      name: "Anand Joshi",
      role: "Musicologist & Heritage Chronicler"
    },
    sections: [
      {
        heading: "The Town That Gives Voice to Maestros",
        content:
          "From Ustad Vilayat Khan to Pandit Ravi Shankar, the world's most venerated sitarists have looked toward Miraj in Sangli for their instruments. The secret lies in seasoned Tun wood, specially cured dried gourds, and the delicate art of Javari filing.",
        quote: "A sitar is not carved from wood; it is born from the ear of the maker."
      }
    ]
  }
];

export const artisans = [
  {
    id: "1",
    name: "Devaji Tofa",
    skill: "Master Bamboo Craftsman & Forest Elder",
    location: "Mendha Lekha, Gadchiroli",
    avatar: null, // "Authentic Photograph Coming Soon"
    imageSource: "Gram Sabha Field Archives",
    bio: "Pioneering tribal elder and master weaver of traditional bamboo harvest baskets and grain storage architecture.",
    experience: "40+ Years of Craftsmanship",
    specialties: ["Manvel Bamboo Weaving", "Community Forest Stewardship", "Architectural Bamboo Baskets"]
  },
  {
    id: "2",
    name: "Farooq Shikalgar",
    skill: "Master Luthier (Sitar & Tanpura)",
    location: "Miraj, Sangli",
    avatar: null,
    imageSource: "Miraj Artisans Association",
    bio: "Fifth-generation master instrument craftsman preserving the GI-tagged acoustic heritage of Miraj classical stringed instruments.",
    experience: "35+ Years in Acoustic Luthiery",
    specialties: ["GI Miraj Sitar", "Pandharpur Gourd Tuning", "Javari Acoustic Calibration"]
  }
];
