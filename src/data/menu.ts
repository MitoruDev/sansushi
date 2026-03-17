export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  // —— Sushi & Sashimi ——
  {
    id: "nigiri-sashimi",
    name: "Nigiri & Sashimi",
    items: [
      { id: "nigiri-6", name: "Nigiri (6 Stück)", price: "8,90 €" },
      { id: "nigiri-10", name: "Nigiri (10 Stück)", price: "13,90 €" },
      { id: "nigiri-mix", name: "Nigiri Mix (Lachs, Thunfisch, Garnele)", price: "14,90 €" },
      { id: "sashimi-8", name: "Sashimi (8 Stück)", price: "14,90 €" },
      { id: "sashimi-12", name: "Sashimi (12 Stück)", price: "19,90 €" },
      { id: "sashimi-mix", name: "Sashimi Mix (Lachs, Thunfisch, Gelbschwanz)", price: "18,90 €" },
      { id: "sashimi-lachs", name: "Lachs Sashimi", price: "12,90 €" },
      { id: "sashimi-thun", name: "Thunfisch Sashimi", price: "13,90 €" },
    ],
  },
  {
    id: "maki",
    name: "Maki",
    items: [
      { id: "maki-6", name: "Maki (6 Stück)", price: "6,90 €" },
      { id: "maki-8", name: "Maki (8 Stück)", price: "8,90 €" },
      { id: "california", name: "California Roll", price: "9,90 €" },
      { id: "philadelphia", name: "Philadelphia Roll", description: "Lachs, Frischkäse", price: "10,90 €" },
      { id: "spicy-tuna", name: "Spicy Tuna Roll", price: "10,90 €" },
      { id: "dragon", name: "Dragon Roll", description: "Garnelen, Avocado", price: "11,90 €" },
      { id: "rainbow", name: "Rainbow Roll", description: "Garnelen, gemischter Fisch", price: "12,90 €" },
      { id: "tempura-roll", name: "Tempura Roll", price: "10,90 €" },
      { id: "avocado-roll", name: "Avocado Maki", price: "6,90 €" },
      { id: "gurken-roll", name: "Gurken Maki", price: "5,90 €" },
      { id: "lachs-maki", name: "Lachs Maki", price: "8,90 €" },
      { id: "thunfisch-maki", name: "Thunfisch Maki", price: "8,90 €" },
    ],
  },
  {
    id: "sushi-sets",
    name: "Sushi-Sets & Platten",
    items: [
      { id: "sushi-platte-klein", name: "Sushi-Platte klein (12 Stück)", price: "16,90 €" },
      { id: "sushi-platte", name: "Sushi-Platte (20 Stück)", price: "24,90 €" },
      { id: "sushi-platte-gross", name: "Sushi-Platte groß (30 Stück)", price: "34,90 €" },
      { id: "sashimi-platte", name: "Sashimi-Platte (16 Stück)", price: "22,90 €" },
      { id: "love-boat", name: "Love Boat (für 2 Personen)", price: "42,90 €" },
      { id: "lunch-sushi", name: "Lunch-Set Sushi (8 Stück + Suppe)", price: "12,90 €" },
    ],
  },
  // —— Koreanisch ——
  {
    id: "koreanisch",
    name: "Koreanische Gerichte",
    items: [
      { id: "bibimbap-rind", name: "Bibimbap mit Rind", description: "Reis, Gemüse, Ei, Gochujang", price: "12,90 €" },
      { id: "bibimbap-veg", name: "Bibimbap vegetarisch", description: "Reis, Gemüse, Ei", price: "11,90 €" },
      { id: "bibimbap-huhn", name: "Bibimbap mit Hähnchen", price: "12,90 €" },
      { id: "bibimbap-dolsot", name: "Bibimbap im Steinbowl (Dolsot)", price: "14,90 €" },
      { id: "bulgogi", name: "Bulgogi", description: "Mariniertes Rindfleisch mit Reis", price: "14,90 €" },
      { id: "bulgogi-huhn", name: "Bulgogi Hähnchen", price: "13,90 €" },
      { id: "kimchi-jjigae", name: "Kimchi Jjigae", description: "Kimchi-Eintopf", price: "10,90 €" },
      { id: "tteokbokki", name: "Tteokbokki", description: "Reiskuchen in scharfer Soße", price: "8,90 €" },
      { id: "kimbap", name: "Kimbap (6 Stück)", description: "Koreanische Reisrollen", price: "7,90 €" },
      { id: "bibim-guksu", name: "Bibim Guksu", description: "Kalte koreanische Nudeln", price: "10,90 €" },
      { id: "japchae", name: "Japchae", description: "Glasnudeln mit Gemüse und Rind", price: "11,90 €" },
      { id: "donkatsu", name: "Donkatsu", description: "Panierte Schweineschnitzel mit Reis", price: "12,90 €" },
    ],
  },
  // —— Vorspeisen & Suppen ——
  {
    id: "vorspeisen",
    name: "Vorspeisen",
    items: [
      { id: "edamame", name: "Edamame", price: "4,90 €" },
      { id: "gyoza-6", name: "Gyoza (6 Stück)", price: "6,90 €" },
      { id: "gyoza-10", name: "Gyoza (10 Stück)", price: "9,90 €" },
      { id: "shumai", name: "Shumai (6 Stück)", price: "6,90 €" },
      { id: "wakame", name: "Wakame-Salat", price: "5,90 €" },
      { id: "seaweed", name: "Seaweed-Salat", price: "5,90 €" },
      { id: "agedashi-tofu", name: "Agedashi Tofu", price: "6,90 €" },
      { id: "kimchi", name: "Kimchi", price: "3,90 €" },
      { id: "kimchi-pancake", name: "Kimchi-Pfannkuchen", price: "8,90 €" },
      { id: "spring-rolls", name: "Frühlingsrollen (4 Stück)", price: "5,90 €" },
    ],
  },
  {
    id: "suppen",
    name: "Suppen",
    items: [
      { id: "miso", name: "Miso-Suppe", price: "3,50 €" },
      { id: "miso-gross", name: "Miso-Suppe groß", price: "4,90 €" },
      { id: "ramen-shoyu", name: "Ramen Shoyu", description: "Soja-Brühe", price: "11,90 €" },
      { id: "ramen-miso", name: "Ramen Miso", price: "11,90 €" },
      { id: "ramen-tonkotsu", name: "Ramen Tonkotsu", description: "Schweinebrühe", price: "12,90 €" },
      { id: "udon", name: "Udon-Nudelsuppe", price: "10,90 €" },
      { id: "yakisoba", name: "Yakisoba", description: "Gebratene Nudeln", price: "10,90 €" },
      { id: "sundubu", name: "Sundubu Jjigae", description: "Koreanischer Tofu-Eintopf", price: "10,90 €" },
    ],
  },
  // —— Hauptgerichte (Japanisch) ——
  {
    id: "hauptgerichte",
    name: "Hauptgerichte",
    items: [
      { id: "teriyaki-huhn", name: "Teriyaki Hähnchen", description: "Mit Reis und Gemüse", price: "12,90 €" },
      { id: "teriyaki-lachs", name: "Teriyaki Lachs", price: "14,90 €" },
      { id: "teriyaki-rind", name: "Teriyaki Rind", price: "14,90 €" },
      { id: "tempura-gemuese", name: "Tempura Gemüse", price: "10,90 €" },
      { id: "tempura-mix", name: "Tempura Mix (Garnelen & Gemüse)", price: "13,90 €" },
      { id: "don-lachs", name: "Lachs Don", description: "Lachs auf Reis", price: "13,90 €" },
      { id: "don-teriyaki", name: "Teriyaki Don", price: "12,90 €" },
      { id: "katsu-curry", name: "Katsu Curry", description: "Panierter Cutlet mit Curry", price: "12,90 €" },
      { id: "fried-rice", name: "Gebratener Reis (Gemüse)", price: "9,90 €" },
      { id: "fried-rice-shrimp", name: "Gebratener Reis mit Garnelen", price: "11,90 €" },
    ],
  },
  // —— Salate & Beilagen ——
  {
    id: "salate-beilagen",
    name: "Salate & Beilagen",
    items: [
      { id: "gurken-salat", name: "Gurkensalat", price: "4,50 €" },
      { id: "reis", name: "Reis (Beilage)", price: "2,50 €" },
      { id: "reis-gross", name: "Reis groß", price: "3,50 €" },
      { id: "kimchi-beilage", name: "Kimchi (Beilage)", price: "2,90 €" },
      { id: "miso-beilage", name: "Miso-Suppe (Beilage)", price: "2,90 €" },
    ],
  },
  // —— Desserts ——
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { id: "mochi", name: "Mochi (3 Stück)", price: "5,90 €" },
      { id: "sesam-ice", name: "Schwarzer Sesam Eis", price: "5,90 €" },
      { id: "grüner-tee-eis", name: "Grüntee-Eis", price: "5,90 €" },
      { id: "fritter", name: "Süße Sesam-Fritter", price: "5,90 €" },
    ],
  },
  // —— Getränke ——
  {
    id: "getraenke",
    name: "Getränke",
    items: [
      { id: "wasser", name: "Mineralwasser (still/sprudel)", price: "2,50 €" },
      { id: "wasser-gross", name: "Mineralwasser 0,75 l", price: "3,50 €" },
      { id: "tee", name: "Grüner Tee / Jasmintee", price: "2,90 €" },
      { id: "sake", name: "Sake", price: "4,90 €" },
      { id: "sake-flasche", name: "Sake (Flasche)", price: "18,90 €" },
      { id: "bier", name: "Bier (0,33 l)", price: "3,50 €" },
      { id: "bier-gross", name: "Bier (0,5 l)", price: "4,50 €" },
      { id: "soju", name: "Soju", price: "4,90 €" },
      { id: "wein-rot", name: "Rotwein (Glas)", price: "4,90 €" },
      { id: "wein-weiss", name: "Weißwein (Glas)", price: "4,90 €" },
      { id: "soft", name: "Softdrinks (0,33 l)", price: "2,90 €" },
      { id: "cola", name: "Coca Cola / Fanta", price: "2,90 €" },
      { id: "saft", name: "Orangensaft / Apfelsaft", price: "3,20 €" },
    ],
  },
];
