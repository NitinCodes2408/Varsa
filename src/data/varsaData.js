export const popularDiscoveries = [
  {
    id: "bamboo-craft",
    title: "Bamboo Craft",
    category: "Crafts",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80",
    description: "Traditional bamboo weaving passed down over generations.",
    linkText: "Explore Now →"
  },
  {
    id: "dhokra-art",
    title: "Dhokra Art",
    category: "Art",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80",
    description: "4,000-year-old lost-wax bell metal casting technique.",
    linkText: "Explore Now →"
  },
  {
    id: "forest-honey",
    title: "Forest Honey",
    category: "Forest",
    image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    description: "Pure wild forest honey sustainably harvested by indigenous gatherers.",
    linkText: "Explore Now →"
  },
  {
    id: "tribal-art",
    title: "Tribal Art",
    category: "Art",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    description: "Vibrant storytelling paintings inspired by forest myths & nature.",
    linkText: "Explore Now →"
  }
];

export const heritageItems = [
  {
    id: "bamboo-craft",
    title: "Bamboo Craft",
    category: "Crafts",
    tagline: "A traditional craft shaped by skill, nature and generations of knowledge.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Traditional craftsmanship using locally sourced bamboo to create utility and art.",
    storyTitle: "More Than a Product",
    storyImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    storyContent: [
      "Bamboo craft is not merely an occupation; it is an intimate conversation between human hands and the bounty of the forest. In indigenous communities, bamboo is revered as green gold. Every strip cut, cured, and woven carries centuries of ecological wisdom.",
      "Rooted in village life, bamboo artisans mold raw culms into resilient household utensils, intricate lamps, structural furnishings, and musical instruments. The process requires patience, razor-sharp tools, and deep reverence for the natural cycle."
    ],
    createdItems: [
      { name: "Lamps & Shades", icon: "💡", desc: "Woven geometric lighting" },
      { name: "Furniture", icon: "🪑", desc: "Durable bamboo chairs & tables" },
      { name: "Baskets", icon: "🧺", desc: "Hand-woven harvest baskets" },
      { name: "Jewellery", icon: "✨", desc: "Eco-friendly bamboo ornaments" },
      { name: "Flutes", icon: "🎶", desc: "Handcrafted musical flutes" },
      { name: "Decorative Items", icon: "🎨", desc: "Intricate wall hangings" }
    ],
    processSteps: [
      { step: "01", title: "Material", desc: "Selecting mature, insect-resistant bamboo stems from local groves." },
      { step: "02", title: "Preparation", desc: "Splitting bamboo into uniform strips and boiling/treating to prevent moisture decay." },
      { step: "03", title: "Crafting", desc: "Hand-weaving, bending using heat, and shaping into structural forms." },
      { step: "04", title: "Finishing", desc: "Polishing with natural oils and eco-dyes for longevity and shine." }
    ],
    artisanId: "1",
    relatedIds: ["dhokra-art", "tribal-art", "madia-wood-carving", "traditional-foods"]
  },
  {
    id: "dhokra-art",
    title: "Dhokra Art",
    category: "Art",
    tagline: "4,000-year-old lost-wax metal casting preserved by tribal metallurgists.",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Traditional metal casting using beeswax and bell metal to create timeless sculptures.",
    storyTitle: "Echoes of Mohenjo-Daro",
    storyImage: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?auto=format&fit=crop&w=800&q=80",
    storyContent: [
      "Dhokra is one of the oldest known methods of non-ferrous metal casting, dating back over four millennia to the Indus Valley Civilization's Dancing Girl artifact.",
      "Using brass, bronze, and hand-wound beeswax threads over a clay core, Dhokra artisans create motifs of deities, elephants, musicians, and everyday tribal motifs. No two pieces are ever identical, as the wax mold is broken during casting."
    ],
    createdItems: [
      { name: "Tribal Figurines", icon: "🗿", desc: "Musicians, dancers, and villagers" },
      { name: "Brass Idols", icon: "🔱", desc: "Deities and ceremonial symbols" },
      { name: "Door Handles", icon: "🚪", desc: "Ornate brass accents" },
      { name: "Jewellery Boxes", icon: "📦", desc: "Handcrafted metal storage" }
    ],
    processSteps: [
      { step: "01", title: "Clay Core", desc: "Creating a basic clay model of the desired object." },
      { step: "02", title: "Wax Wrapping", desc: "Wrapping fine beeswax threads around the clay core to add detailed patterns." },
      { step: "03", title: "Metal Casting", desc: "Encasing in clay, heating to melt wax, and pouring molten brass into the cavity." },
      { step: "04", title: "Unearthing", desc: "Breaking the outer clay shell and buffing the golden bronze sculpture." }
    ],
    artisanId: "2",
    relatedIds: ["bamboo-craft", "tribal-art", "madia-wood-carving"]
  },
  {
    id: "madia-wood-carving",
    title: "Madia Wood Carving",
    category: "Crafts",
    tagline: "Sacred woodcraft honoring forest spirits and community heritage.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Traditional wood craftsmanship carving intricate patterns on doors, totems, and masks.",
    storyTitle: "Stories Carved in Teak",
    storyImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    storyContent: [
      "Deep within ancient woodlands, master carvers transform fallen teak and rosewood into ancestral totems, door panels, and traditional masks.",
      "The motifs feature sunbursts, sacred animals, and tribal dances. Each carving serves as both architectural dignity and a shield against negative energies."
    ],
    createdItems: [
      { name: "Ancestral Pillars", icon: "🏛️", desc: "Hand-carved wooden totems" },
      { name: "Heritage Doors", icon: "⛩️", desc: "Intricate doorway panels" },
      { name: "Tribal Masks", icon: "🎭", desc: "Ceremonial dance masks" }
    ],
    processSteps: [
      { step: "01", title: "Wood Selection", desc: "Harvesting naturally fallen seasoned timber." },
      { step: "02", title: "Chiseling", desc: "Drafting tribal geometry using hand chisels." },
      { step: "03", title: "Polishing", desc: "Hand-sanding and coating with herbal wood wax." }
    ],
    artisanId: "4",
    relatedIds: ["bamboo-craft", "dhokra-art", "tribal-art"]
  },
  {
    id: "rela-dance",
    title: "Rela Dance",
    category: "Culture",
    tagline: "A living folk tradition celebrating community, harvests, and forest rhythm.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "A rhythmic collective folk dance performed during festivals and seasonal harvests.",
    storyTitle: "Rhythm of the Soil",
    storyImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    storyContent: [
      "Rela is a communal folk dance performed during moonlit nights, weddings, and harvest gatherings. Men and women link arms in circular formations, moving to the hypnotic beats of brass drums (Dhol) and wooden flutes.",
      "The songs recount ancestral folklore, gratitude for rain, and love for the soil. It remains one of the purest surviving expressions of social harmony."
    ],
    createdItems: [
      { name: "Folk Instruments", icon: "🥁", desc: "Traditional Dhol and Mohuri" },
      { name: "Costumes & Attire", icon: "👘", desc: "Handwoven tribal attire and headgear" },
      { name: "Ornaments", icon: "📿", desc: "Beaded necklaces & bronze anklets" }
    ],
    processSteps: [
      { step: "01", title: "Gathering", desc: "Villagers assemble under the village Banyan tree at dusk." },
      { step: "02", title: "Invocation", desc: "Drummers play rhythmic prayers honoring Earth spirits." },
      { step: "03", title: "Dancing", desc: "Interlocking hands into a spiraling dance ring." }
    ],
    artisanId: "3",
    relatedIds: ["zadipatti-natak", "tribal-art", "traditional-foods"]
  },
  {
    id: "zadipatti-natak",
    title: "Zadipatti Natak",
    category: "Culture",
    tagline: "Electrifying open-air folk theatre performed in rice-harvesting seasons.",
    image: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Traditional folk drama troupes bringing social, mythological, and humorous stories to life.",
    storyTitle: "Theatre Under the Stars",
    storyImage: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
    storyContent: [
      "Zadipatti Natak is a legendary theatre movement named after the lush forest and paddy belt ('Zadi'). During winter nights, whole villages gather to watch overnight live plays.",
      "Combining high drama, musical orchestration, and social satire, it serves as a powerful medium for moral education and community unity."
    ],
    createdItems: [
      { name: "Stage Sets", icon: "🎪", desc: "Hand-painted backdrops" },
      { name: "Scripts & Songs", icon: "📜", desc: "Folklore theatrical scripts" }
    ],
    processSteps: [
      { step: "01", title: "Rehearsals", desc: "Actors practice dialogues in post-harvest camps." },
      { step: "02", title: "Stage Setup", desc: "Constructing temporary bamboo stages in rice fields." },
      { step: "03", title: "Performance", desc: "Night-long drama accompanied by live harmonium & tabla." }
    ],
    artisanId: "4",
    relatedIds: ["rela-dance", "tribal-art"]
  },
  {
    id: "forest-honey",
    title: "Forest Honey",
    category: "Forest",
    tagline: "Wild honey gathered sustainably from deep forest rock cliffs and ancient trees.",
    image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Pure organic honey rich in medicinal herbs, sustainably harvested by forest dwellers.",
    storyTitle: "Nectar of the Wild",
    storyImage: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80",
    storyContent: [
      "Wild honey collection is an ancestral skill passed through lineages of forest elders. Harvesters scale high Mahua and Sal trees at night using traditional hemp ropes.",
      "Only a portion of the honeycomb is taken, leaving the queen and hive unharmed. Rich with pollen from medicinal blooms, this golden elixir is revered for its healing properties."
    ],
    createdItems: [
      { name: "Wild Rock Honey", icon: "🍯", desc: "Raw unprocessed forest honey" },
      { name: "Beeswax Candles", icon: "🕯️", desc: "Natural aromatic candles" },
      { name: "Herbal Balms", icon: "🌿", desc: "Honey-infused medicinal balms" }
    ],
    processSteps: [
      { step: "01", title: "Scouting", desc: "Locating natural cliff hives deep within protected forests." },
      { step: "02", title: "Smoke Ritual", desc: "Using herbal smoke to gently calm bees without harm." },
      { step: "03", title: "Harvesting", desc: "Carefully cutting excess comb while preserving hive integrity." },
      { step: "04", title: "Straining", desc: "Cold-straining pure honey through cotton mesh." }
    ],
    artisanId: "1",
    relatedIds: ["traditional-foods", "bamboo-craft"]
  },
  {
    id: "tribal-art",
    title: "Gond & Tribal Art",
    category: "Art",
    tagline: "Sacred dots and lines painting the harmony between animals, trees, and spirits.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Intricate dot-and-line art painted on canvas, mud walls, and handmade paper using natural pigments.",
    storyTitle: "Every Pattern Speaks",
    storyImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    storyContent: [
      "Gond art believes that viewing a good image brings good fortune. Artists draw inspiration from dreams, oral myths, and natural flora.",
      "Each artist develops a unique signature pattern of fine dots, dashes, and wavy lines to fill in bold animal and tree silhouettes."
    ],
    createdItems: [
      { name: "Canvas Artworks", icon: "🖼️", desc: "Original pigment paintings" },
      { name: "Handmade Stationery", icon: "📝", desc: "Printed journals and cards" },
      { name: "Handpainted Decor", icon: "🏺", desc: "Terracotta pots & wall panels" }
    ],
    processSteps: [
      { step: "01", title: "Natural Colors", desc: "Grinding minerals, leaves, and charcoal into natural pigments." },
      { step: "02", title: "Outline", desc: "Freehand sketching of sacred trees and forest animals." },
      { step: "03", title: "Signature Patterns", desc: "Filling shapes with intricate dots and rhythmic line work." }
    ],
    artisanId: "3",
    relatedIds: ["dhokra-art", "bamboo-craft", "madia-wood-carving"]
  },
  {
    id: "traditional-foods",
    title: "Traditional Foods",
    category: "Food",
    tagline: "Wholesome wild grains, Mahua blossom delicacies, and organic forest flavors.",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1200&q=80",
    shortDescription: "Nutritious heirloom recipes made from millets, wild greens, and forest blossoms.",
    storyTitle: "Wisdom on the Plate",
    storyImage: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
    storyContent: [
      "Traditional food culture relies on seasonal forest foraging and drought-resistant heirloom grains like Kodo, Kutki, and Jowar.",
      "Sweet Mahua flowers are collected at sunrise and turned into Laddoos, syrups, and traditional breads, packing rich iron and vitality."
    ],
    createdItems: [
      { name: "Mahua Delicacies", icon: "🌺", desc: "Mahua laddoos & syrup" },
      { name: "Heirloom Millets", icon: "🌾", desc: "Kodo & Kutki organic grains" },
      { name: "Wild Pickles", icon: "🌶️", desc: "Bamboo shoot & wild mango pickle" }
    ],
    processSteps: [
      { step: "01", title: "Foraging", desc: "Gathering wild herbs and fallen Mahua blossoms." },
      { step: "02", title: "Sun Drying", desc: "Drying grains and flowers on bamboo mats." },
      { step: "03", title: "Clay Pot Cooking", desc: "Slow cooking over woodfire in earthen cookware." }
    ],
    artisanId: "3",
    relatedIds: ["forest-honey", "bamboo-craft"]
  }
];

export const artisans = [
  {
    id: "1",
    name: "Ramesh Varmora",
    role: "Master Bamboo Craftsman",
    location: "Sylvan Craft Settlement",
    experience: "34 Years of Mastery",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    quote: "Our craft is not just what we make. It is what we carry forward for our children.",
    community: "Bamboo Weaver Guild",
    story: [
      "Ramesh learned bamboo carving at the age of ten sitting beside his grandfather under the village Neem tree. Over three decades, he has elevated humble bamboo splits into globally cherished art objects.",
      "He leads a community collective of 40 youth, teaching them sustainable harvesting techniques so that forest bamboo regenerates naturally year after year."
    ],
    crafts: ["Bamboo Craft", "Woven Lighting", "Structural Bamboo"]
  },
  {
    id: "2",
    name: "Somnath Baiga",
    role: "Master Metal Sculptor",
    location: "Tribal Metallurgist Hub",
    experience: "42 Years of Crafting",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    quote: "When molten brass hits the wax mold, fire gives form to ancient prayers.",
    community: "Dhokra Artisans Collective",
    story: [
      "Somnath carries the legacy of seven generations of metal casters. He preserves the pure lost-wax technique without modern electrical machinery, relying solely on hand bellows and clay hearths.",
      "His sculptures of dancing deities and tribal trumpeters have been showcased in cultural heritage exhibitions across India."
    ],
    crafts: ["Dhokra Art", "Brass Figurines", "Sacred Idols"]
  },
  {
    id: "3",
    name: "Janaki Bai",
    role: "Gond Painter & Storyteller",
    location: "Forest Art Colony",
    experience: "28 Years of Painting",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    quote: "Each dot in my painting is a heartbeat of the forest.",
    community: "Gond Women's Art Guild",
    story: [
      "Janaki started by decorating the mud walls of her village home during seasonal festivals. Today her vibrant paintings tell stories of sacred trees, rain birds, and cosmic harmony.",
      "She conducts workshops for younger women in her village, ensuring financial independence through traditional art."
    ],
    crafts: ["Gond Art", "Traditional Food Recipes", "Mud Decor"]
  },
  {
    id: "4",
    name: "Devdas Madavi",
    role: "Wood Carver & Folk Master",
    location: "Heritage Timber Guild",
    experience: "38 Years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    quote: "Wood holds the memory of rain and wind. As carvers, we merely reveal its spirit.",
    community: "Madia Crafts Society",
    story: [
      "Devdas is a custodian of traditional wood carving and Zadipatti theatrical folk arts. He carves ancestral totems and designs hand-painted theatre set stages.",
      "His dedication keeps ancient forest legends alive for thousands of theatergoers every winter."
    ],
    crafts: ["Madia Wood Carving", "Zadipatti Natak", "Mask Crafting"]
  }
];

export const stories = [
  {
    id: "1",
    title: "The Story Behind Bamboo Craft",
    subtitle: "How humble forest bamboo became the backbone of indigenous culture and ecology.",
    category: "CRAFT STORY",
    date: "August 2026",
    readTime: "5 min read",
    author: "Varsa Editorial",
    heroImage: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "The Beginning",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
        text: "Long before synthetic materials arrived in rural markets, bamboo provided everything an artisan needed to build a home, weave a basket, or create music. The plant grows rapidly, symbolizes resilience, and binds forest soil together."
      },
      {
        heading: "A Material With a Story",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
        text: "Every piece of bamboo craft carries subtle markings of its forest origin. Artisans harvest bamboo during specific lunar phases when sap levels are low, ensuring natural resistance against pests."
      },
      {
        heading: "The Hands Behind It",
        text: "Meet master artisans like Ramesh Varmora who spend decades perfecting the fine splitting of bamboo into ribbons thinner than cardboard, transforming raw vegetation into luminous lamps and delicate art."
      },
      {
        heading: "Tradition in a Changing World",
        text: "As eco-conscious consumers seek plastic alternatives, bamboo craft is experiencing a contemporary revival. Modern designers collaborate with village masters to create sustainable homeware."
      }
    ]
  },
  {
    id: "2",
    title: "The Hands Behind Dhokra",
    subtitle: "Uncovering the secrets of a 4,000-year-old lost-wax metal casting art form.",
    category: "ARTISAN STORY",
    date: "August 2026",
    readTime: "6 min read",
    author: "Varsa Editorial",
    heroImage: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "Fire, Clay, and Wax",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        text: "In the open yards of metal artisans, the smell of beeswax and burning firewood fills the air. Dhokra casting requires total harmony between earth, fire, and liquid metal."
      },
      {
        heading: "One Cast, One Creation",
        text: "Because the clay mold must be broken to reveal the hardened bronze sculpture inside, every Dhokra creation is inherently one-of-a-kind. No factory can duplicate this organic individuality."
      }
    ]
  },
  {
    id: "3",
    title: "When Tradition Meets Modern Design",
    subtitle: "How contemporary homes are reviving centuries-old tribal motifs with elegance.",
    category: "HERITAGE TRENDS",
    date: "August 2026",
    readTime: "4 min read",
    author: "Varsa Editorial",
    heroImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "Earthy Aesthetics in Urban Spaces",
        text: "Modern interior architecture is turning towards earthy textures, warm terracotta tones, and hand-carved accents. Varsa bridges the gap between village creators and global appreciators."
      }
    ]
  },
  {
    id: "4",
    title: "Stories From the Forest",
    subtitle: "Living in balance with nature through wild honey harvesting and forest foraging.",
    category: "NATURE & LIVELIHOOD",
    date: "July 2026",
    readTime: "7 min read",
    author: "Varsa Editorial",
    heroImage: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "Guardians of the Canopy",
        text: "Forest gatherers hold traditional ecological knowledge that protects biodiversity. Their honey gathering methods leave hives healthy, preserving bee populations crucial for pollination."
      }
    ]
  },
  {
    id: "5",
    title: "A Dance That Brings Communities Together",
    subtitle: "Inside Rela: the hypnotic folk dance of celebration, harvest, and brotherhood.",
    category: "FOLK TRADITIONS",
    date: "July 2026",
    readTime: "5 min read",
    author: "Varsa Editorial",
    heroImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        heading: "Echoing Drums Under Moonlit Skies",
        text: "When harvest season arrives, the drumbeats of Rela echo across hills. Everyone—young and old—joins hands to step in unison to the rhythm of gratitude."
      }
    ]
  }
];

export const mapMarkers = [
  {
    id: "bamboo-craft",
    title: "Bamboo Craft Collective",
    category: "Crafts",
    icon: "🎋",
    type: "Traditional Craft",
    lat: 19.8,
    lng: 79.5,
    xPercent: 32,
    yPercent: 45,
    locationName: "Sylvan Forest Valley",
    shortDesc: "Bamboo weaving workshops & eco-homeware creation."
  },
  {
    id: "dhokra-art",
    title: "Dhokra Metal Foundry",
    category: "Art",
    icon: "🏺",
    type: "Metal Casting",
    lat: 19.9,
    lng: 79.8,
    xPercent: 62,
    yPercent: 38,
    locationName: "Ancient Metal Cluster",
    shortDesc: "4000-year lost-wax brass sculpting center."
  },
  {
    id: "forest-honey",
    title: "Wild Honey Reserve",
    category: "Forest",
    icon: "🍯",
    type: "Forest Foraging",
    lat: 19.5,
    lng: 79.4,
    xPercent: 48,
    yPercent: 68,
    locationName: "Canopy Forest Sanctuary",
    shortDesc: "Indigenous rock honey harvesters guild."
  },
  {
    id: "tribal-art",
    title: "Gond Art Village",
    category: "Art",
    icon: "🎨",
    type: "Painting & Folklore",
    lat: 20.1,
    lng: 79.2,
    xPercent: 24,
    yPercent: 28,
    locationName: "Heritage Painter Settlement",
    shortDesc: "Hand-painted dot and line storytelling murals."
  },
  {
    id: "rela-dance",
    title: "Rela Cultural Arena",
    category: "Culture",
    icon: "💃",
    type: "Folk Dance",
    lat: 19.6,
    lng: 79.9,
    xPercent: 78,
    yPercent: 55,
    locationName: "Communal Folk Grounds",
    shortDesc: "Seasonal harvest folk dance assemblies."
  },
  {
    id: "traditional-foods",
    title: "Heritage Kitchens",
    category: "Food",
    icon: "🍲",
    type: "Food Tradition",
    lat: 19.7,
    lng: 79.6,
    xPercent: 52,
    yPercent: 30,
    locationName: "Millets & Mahua Hub",
    shortDesc: "Heirloom grains and traditional recipes."
  }
];
