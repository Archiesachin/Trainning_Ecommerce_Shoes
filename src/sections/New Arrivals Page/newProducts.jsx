
const newProducts = [
  {
    id: 1,
    label: "New",
    name: "WOMEN'S CRUISER",
    price: 110,
    variants: [
      {
        colorName: "White",
        colorHex: "#eeede9ff",
        image: "public/images/Products/A11651_25Q3_Strider-Blizzard-Dark-Navy-Blizzard-Sole_PDP_LEFT_f5dd079c-8d74-4d3b-bb81-862710162f7a.png",
        subtitle: "White",
      },
    ],
    sizes: [],
    images: [
      "public/images/Products/A11651_25Q3_Strider-Blizzard-Dark-Navy-Blizzard-Sole_PDP_LEFT_f5dd079c-8d74-4d3b-bb81-862710162f7a.png",
    ],
    desc: "All-day comfort in our classic silhouette."
  },
  {
    id: 2,
    label: "New",
    name: "MEN'S CRUISER",
    price: 100,
    variants: [
      {
        colorName: "Brown",
        colorHex: "#474130ff",
        image: "public/images/Products/A11631_25Q3_Wool-Cruiser-Dark-Camel-Natural-White-Sole_PDP_LEFT__1_bec494cd-90bc-4d1a-b180-cd8a56464781.png",
        subtitle: "Brown",
      },
      {
        colorName: "Green",
        colorHex: "#395131ff",
        image: "public/images/Products/A11693_25Q3_Wool-Cruiser-Forest-Green-Natural-White-Sole_PDP_LEFT__1_dd771e7b-9bb1-4397-a2f8-6ff87359fa1a_1.png",
        subtitle: "Green",
      },
    ],
    sizes: [],
    images: [
      "public/images/Products/A11631_25Q3_Wool-Cruiser-Dark-Camel-Natural-White-Sole_PDP_LEFT__1_bec494cd-90bc-4d1a-b180-cd8a56464781.png",
      "public/images/Products/A11693_25Q3_Wool-Cruiser-Forest-Green-Natural-White-Sole_PDP_LEFT__1_dd771e7b-9bb1-4397-a2f8-6ff87359fa1a_1.png",
    ],
    desc: "Modern comfort with heritage styling."
  },
  {
    id: 3,
    label: "New",
    name: "MEN'S RUNNER NZ CORDUROY",
    price: 120,
    variants: [
      {
        colorName: "Black",
        colorHex: "#1c1a19ff",
        image: "public/images/mens/A11053_24Q3_Tree_Dasher_Relay_Deep_Navy_Deep_Navy_PDP_LEFT-2000x2000.png",
        subtitle: "Natural Black",
      },
      {
        colorName: "Pink",
        colorHex: "#c9b05eff",
        image: "public/images/mens/A11065_24Q3_Tree_Dasher_Relay_Rugged_Beige_Rugged_Beige_PDP_LEFT-2000x2000.png",
        subtitle: "Pink",
      },
    ],
    extraColors: 0,
    sizes: [],
    images: [
      "public/images/mens/A11053_24Q3_Tree_Dasher_Relay_Deep_Navy_Deep_Navy_PDP_LEFT-2000x2000.png",
      "public/images/mens/A11065_24Q3_Tree_Dasher_Relay_Rugged_Beige_Rugged_Beige_PDP_LEFT-2000x2000.png",
    ],
    desc: "Corduroy update for our iconic runner."
  },
  {
    id: 4,
    label: "New",
    name: "MEN'S TREE DASHER 2",
    price: 120,
    variants: [
      {
        colorName: "Grey",
        colorHex: "#494045ff",
        image: "public/images/Products/A11959_25Q3_Tree_Runner_NZ_Medium_Grey_Blizzard_Sole_PDP_LEFT-2000x2000_f6ff6164-62df-42dc-89a8-fabcb3b5d438.png",
        subtitle: "Grey",
      },
      {
        colorName: "White",
        colorHex: "#f1f1f7ff",
        image: "public/images/Products/AB00F7M100_SHOE_PROFILE_GLOBAL_MENS_SUPERLIGHT_TR_BLIZZARD_BLIZZARD.png",
        subtitle: "White",
      },
    ],
    extraColors: 0,
    sizes: [],
    images: [
      "public/images/Products/A11959_25Q3_Tree_Runner_NZ_Medium_Grey_Blizzard_Sole_PDP_LEFT-2000x2000_f6ff6164-62df-42dc-89a8-fabcb3b5d438.png",
      "public/images/Products/AB00F7M100_SHOE_PROFILE_GLOBAL_MENS_SUPERLIGHT_TR_BLIZZARD_BLIZZARD.png",
    ],
    desc: "Designed for running comfort and breathability."
  },
  {
    id: 5,
    label: "New",
    name: "MEN'S WOOL CRUISER SLIP-ON",
    price: 120,
    variants: [
      {
        colorName: "Blue",
        colorHex: "#232439",
        image: "public/images/Products/Runner-NZ-Corduroy-Dark-Navy-Stony-Cream-Sole_PDP_LEFT__1.png",
        subtitle: "Navy Blue",
      },
      {
        colorName: "White",
        colorHex: "#f3f3f3ff",
        image: "public/images/Products/Runner-NZ-Corduroy-Stony-Cream-Stony-Cream-Sole_PDP_LEFT__1.png",
        subtitle: "White",
      },
    ],
    extraColors: 0,
    sizes: [],
    images: [
      "public/images/Products/Runner-NZ-Corduroy-Dark-Navy-Stony-Cream-Sole_PDP_LEFT__1.png",
      "public/images/Products/Runner-NZ-Corduroy-Stony-Cream-Stony-Cream-Sole_PDP_LEFT__1.png",
    ],
    desc: "Easy slip-on, easy style."
  },
  {
    id: 6,
    label: "New",
    name: "MEN'S STRIDER",
    price: 120,
    variants: [
      {
        colorName: "Blue",
        colorHex: "#232439",
        image: "public/images/Products/TP1MMOO_TREE_PIPER_LEFT_GLOBAL_MOONRISE_WHITE_62a74809-a592-4240-9f3b-d888fb001faa.png",
        subtitle: "Navy Blue",
      },
      {
        colorName: "Grey",
        colorHex: "#716b6bff",
        image: "public/images/Products/TP1MLUN_TREE_PIPER_LEFT_GLOBAL_LUNA_WHITE.png",
        subtitle: "Grey",
      },
    ],
    extraColors: 0,
    sizes: [],
    images: [
      "public/images/Products/TP1MMOO_TREE_PIPER_LEFT_GLOBAL_MOONRISE_WHITE_62a74809-a592-4240-9f3b-d888fb001faa.png",
      "public/images/Products/TP1MLUN_TREE_PIPER_LEFT_GLOBAL_LUNA_WHITE.png",
    ],
    desc: "Sleek style meets serious comfort."
  },
  {
    id: 7,
    label: "New",
    name: "MEN'S CANVAS PIPER",
    price: 120,
    variants: [
      {
        colorName: "Orange",
        colorHex: "#cd3f3fff",
        image: "public/images/Products/A11888_25Q3_Wool-Cruiser-Terracotta-Natural-White-Sole_PDP_LEFT__1_fcef493a-0b6b-4785-9d93-ec4931435ef4_1.png",
        subtitle: "Orange",
      },
      {
        colorName: "Brown",
        colorHex: "#A88256",
        image: "public/images/Products/A11882_25Q3_Wool-Cruiser-Sulphur-Natural-White-Sole_PDP_LEFT.png",
        subtitle: "Golden Brown",
      },
    ],
    extraColors: 0,
    sizes: [],
    images: [
      "public/images/Products/A11888_25Q3_Wool-Cruiser-Terracotta-Natural-White-Sole_PDP_LEFT__1_fcef493a-0b6b-4785-9d93-ec4931435ef4_1.png",
      "public/images/Products/A11882_25Q3_Wool-Cruiser-Sulphur-Natural-White-Sole_PDP_LEFT.png",
    ],
    desc: "Canvas casual, everyday everywhere."
  },
  {
    id: 8,
    label: "New",
    name: "MEN'S TREE GLIDER",
    price: 135,
    variants: [
      {
        colorName: "Black",
        colorHex: "#222223",
        image: "/public/images/Products/A11636_25Q3_Wool-Cruiser-Slip-On-Dark-Grey-Light-Grey-Sole_PDP_LEFT__1.png",
        subtitle: "Natural Black",
      },
      {
        colorName: "White",
        colorHex: "#C4C9C3",
        image: "public/images/Products/Cruiser-Slip-On-Corduroy-Stony-Cream-Stony-Cream_PDP_LEFT__1_56ef98d4-5a37-4ce4-83e6-66e6f6085757.png",
        subtitle: "White",
      },
    ],
    sizes: [],
    images: [
      "/public/images/Products/A11636_25Q3_Wool-Cruiser-Slip-On-Dark-Grey-Light-Grey-Sole_PDP_LEFT__1.png",
      "public/images/Products/Cruiser-Slip-On-Corduroy-Stony-Cream-Stony-Cream_PDP_LEFT__1_56ef98d4-5a37-4ce4-83e6-66e6f6085757.png",
    ],
    desc: "The glider for ultralight steps."
  },
  {
    id: 9,
    label: "New",
    name: "WOMEN'S TOTE BAG",
    price: 140,
    variants: [
      {
        colorName: " Khaki",
        colorHex: "#cdb997ff",
        image: "public/images/mens/A11541_24Q4_Recycled_Tote_Bag_Rugged_Beige_PDP_Front_25059-1300x1300.png",
        subtitle: " Khaki",
      },
    ],
    sizes: [],
    images: [
      "public/images/mens/A11541_24Q4_Recycled_Tote_Bag_Rugged_Beige_PDP_Front_25059-1300x1300.png",
    ],
    desc: "Lightweight, sustainable, and stylish."
  },
  {
    id: 10,
    label: "Bestseller",
    name: "WOMEN'S CANVAS PIPER",
    price: 140,
    variants: [
      {
        colorName: "Black",
        colorHex: "#000000ff",
        image: "public/images/mens/womenshoe.png",
        subtitle: "Natural Black",
        
      },
      {
        colorName: "Pink",
        colorHex: "#eec38cff",
        image: "public/images/mens/A11573_25Q3_Tree_Breezer_Bow_Bark_Brown_PDP_LEFT-2000x2000.png",
        subtitle: "Pink",
        
      },
    ],
    sizes: [],
    images: [
      "public/images/mens/womenshoe.png",
      "public/images/mens/A11573_25Q3_Tree_Breezer_Bow_Bark_Brown_PDP_LEFT-2000x2000.png",
    ],
    desc: "Classic comfort, new hues."
  },
  {
    id: 11,
    label: "New",
    name: "MEN'S COURIER",
    price: 120,
    variants: [
      {
        colorName: "Grey",
        colorHex: "#322e2eff",
        image: "public/images/mens/A10868_24Q3_Courier_Stormy_Grey_Medium_Grey_Barely_Grey_PDP_LEFT-2000x2000.png",
        subtitle: "Grey",
      },
      {
        colorName: "White",
        colorHex: "#f0f0f0ff",
        image: "public/images/mens/A11254_25Q1_Courier_Travel_Blizzard_Hazy_Indigo_Blizzard_PDP_LEFT-2000x2000.png",
        subtitle: "White",
      },
    ],
    extraColors: 0,
    sizes: [],
    images: [
      "public/images/mens/A10868_24Q3_Courier_Stormy_Grey_Medium_Grey_Barely_Grey_PDP_LEFT-2000x2000.png",
      "public/images/mens/A11254_25Q1_Courier_Travel_Blizzard_Hazy_Indigo_Blizzard_PDP_LEFT-2000x2000.png",
    ],
    desc: "Messenger-inspired comfort and utility."
  },
  {
    id: 12,
    label: "New",
    name: "RECYCLED SHOE BAGTOTE ",
    price: 120,
    variants: [
      {
        colorName: "Green",
        colorHex: "#0a2404ff",
        image: "public/images/mens/A12158_25Q3_Recycled-Shoe-Bag-Thunder-Green_PDP_Front_25106-2000x2000.png",
        subtitle: "Green",
      },
      {
        colorName: "Black",
        colorHex: "#000000ff",
        image: "public/images/mens/A11544_24Q4_Recycled_Shoe_Bag_True_Black_PDP_Front_25120-1300x1300.png",
        subtitle: "Natural Black",
      },
    ],
    extraColors: 0,
    sizes: [],
    images: [
      "public/images/mens/A12158_25Q3_Recycled-Shoe-Bag-Thunder-Green_PDP_Front_25106-2000x2000.png",
      "public/images/mens/A11544_24Q4_Recycled_Shoe_Bag_True_Black_PDP_Front_25120-1300x1300.png",
    ],
    desc: "Sustainable, practical and bold."
  },
];

export default newProducts;
