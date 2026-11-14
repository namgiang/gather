/**
 * Past gatherings: hardcoded content + photo groups.
 * Photos live in public/events/<event>/<name>-800.jpg and -1600.jpg.
 * Paths are relative (no leading slash) to match the rest of the site's static export.
 */

export type Photo = {
  /** 800px wide, for page layout */
  src: string;
  /** 1600px wide, for the photo viewer */
  full: string;
  alt: string;
  /** handwritten caption shown on polaroids and in the viewer */
  cap: string;
  /** CSS object-position for cropped use */
  pos?: string;
};

const photo = (
  dir: string,
  name: string,
  alt: string,
  cap: string,
  pos = "50% 50%",
): Photo => ({
  src: `events/${dir}/${name}-800.jpg`,
  full: `events/${dir}/${name}-1600.jpg`,
  alt,
  cap,
  pos,
});

export type GroupKey = "tcm" | "goi" | "com";

/* ---------- 01 · TCM dinner ---------- */

const T = "tcm-dinner";

export const TCM_PHOTOS: Photo[] = [
  /* 0 */ photo(T, "crew-and-guests", "The Gather kitchen crew laughing with guests at the TCM dinner", "the crew, saying hi", "48% 40%"),
  /* 1 */ photo(T, "hors-cucumber", "Little dishes of smashed cucumber with chilli and sesame", "hors d'oeuvres · spicy little number"),
  /* 2 */ photo(T, "amuse-shiso", "Shiso-wrapped rolls crossed on a speckled plate", "amuse · shiso strengthening symphony", "55% 50%"),
  /* 3 */ photo(T, "starter-silken", "A silky cup with chilli oil next to a lotus-root crisp", "starter · silken shen-nergy", "50% 35%"),
  /* 4 */ photo(T, "main-plating", "Rows of bowls of crisp-skinned fish over vegetables and herb oil, ready to go out", "main · lotus trinity", "50% 55%"),
  /* 5 */ photo(T, "dessert-tray", "A tray of piped cream desserts in little glasses with berry crumbs and edible flowers", "dessert · floral yin prosperity", "50% 55%"),
  /* 6 */ photo(T, "long-table-applause", "Guests applauding along the long table", "the long table", "40% 50%"),
  /* 7 */ photo(T, "guest-toast", "A guest sipping a drink at the dinner", "a little toast", "35% 40%"),
  /* 8 */ photo(T, "menu-card", "The printed menu and TCM glossary on a blue napkin", "menu + glossary", "45% 40%"),
  /* 9 */ photo(T, "host-welcome", "A few words to the table before the next course", "the welcome", "42% 35%"),
];

export type Course = {
  n: string;
  stage: string;
  name: string;
  note: string;
  /** index into TCM_PHOTOS */
  photo: number;
};

export const TCM_COURSES: Course[] = [
  { n: "01", stage: "Hors d'oeuvres", name: "Spicy little number + lotus air", note: "Smashed cucumber with chilli and sesame, and puffed lotus seeds on the table.", photo: 1 },
  { n: "02", stage: "Amuse", name: "Shiso strengthening symphony", note: "Little rolls wrapped in shiso leaf, finished with sesame and nori.", photo: 2 },
  { n: "03", stage: "Starter", name: "Silken shen-nergy", note: "A silky little cup with chilli oil, and a lotus-root crisp on the side.", photo: 3 },
  { n: "04", stage: "Main", name: "Lotus trinity: river's gift / garden's gift", note: "Crisp-skinned fish for the river's gift, a vegetable plate for the garden's gift, with herb oil and flowers.", photo: 4 },
  { n: "05", stage: "Dessert", name: "Floral yin prosperity", note: "Piped cream in a little glass with freeze-dried berries and edible flowers.", photo: 5 },
];

export const TCM = {
  no: "No. 01",
  kind: "Dinner",
  date: "6 Oct 2025",
  title: "Traditional Chinese Medicine dinner",
  intro: "Four courses plus hors d'oeuvres, all about",
  introStrong: "food for healing",
  where: "Bonjour Càphê, Moermanskkade 4, Amsterdam.",
  guests: "26 guests, one long table",
};

/* ---------- 02 · Gỏi cuốn ---------- */

const G = "goi-cuon";

export const GOI_PHOTOS: Photo[] = [
  /* 0 */ photo(G, "rolls-cut", "Summer rolls cut open: smoked tofu, shiso-wrapped beef and prawn", "tofu · beef · prawn"),
  /* 1 */ photo(G, "stand-rolling", "Rolling summer rolls at the Gather stand", "rolling at the stand", "50% 55%"),
  /* 2 */ photo(G, "stand-board", "The Gather stand with its chalkboard menu", "our stand + chalkboard", "40% 65%"),
  /* 3 */ photo(G, "rolls-sauces", "Three summer rolls with nước chấm and peanut sauce", "both sauces, obviously", "55% 50%"),
];

/**
 * Where the cut-open photo is framed for each protein.
 * x / y are percentages of the (zoomed) image's own size.
 */
export const PROTEINS = [
  { name: "Smoked tofu", x: -1, y: -33 },
  { name: "Shiso-wrapped beef", x: -40, y: -33 },
  { name: "Prawn", x: -20, y: -49.5 },
];

export const GOI = {
  no: "No. 02",
  kind: "Catering",
  place: "Nieuw-West",
  title: "Gỏi cuốn for the makers",
  intro: "100 Vietnamese summer rolls for an entrepreneur fair in Nieuw-West, dipped in nước chấm or peanut sauce.",
  rolledWith: "beansprouts, mint, cucumber, pickled carrot, noodles, lettuce and Thai basil.",
};

/* ---------- 03 · Community ---------- */

const C = "community";

export const COM_PHOTOS: Photo[] = [
  /* 0 */ photo(C, "menu-board", "Gather's hand-drawn chalkboard menu for the event", "today's board", "50% 35%"),
  /* 1 */ photo(C, "salad", "A tray of Vietnamese salad with carrot, grapefruit and herbs", "grapefruit salad"),
  /* 2 */ photo(C, "serving-curry", "Curry ladled into a takeaway box next to salad", "curry + salad box"),
  /* 3 */ photo(C, "team", "The Gather crew serving behind the counter, laughing", "the crew on duty", "62% 35%"),
  /* 4 */ photo(C, "toppings", "Toppings: chilli, coriander and fried shallots", "pick your toppings"),
];

export const COM = {
  no: "No. 03",
  kind: "Community",
  tag: "100% halal",
  title: "Big pots for the neighbours",
  intro: "80 portions for a neighbourhood event: two curries, a Vietnamese salad and cookies.",
  menu: [
    { dish: "Two curries", note: "Vietnamese chicken · vegan jackfruit" },
    { dish: "Vietnamese salad", note: "grapefruit, peanut, carrot, nước chấm" },
    { dish: "Cookies", note: "matcha macadamia · choc chip" },
  ],
};

/* ---------- viewer groups ---------- */

export const GROUPS: Record<GroupKey, Photo[]> = {
  tcm: TCM_PHOTOS,
  goi: GOI_PHOTOS,
  com: COM_PHOTOS,
};

/* ---------- guest voices ---------- */

export type Quote = { text: string; who: string };

/**
 * Add real guest quotes here and they appear as sticky notes in the Book section.
 * Left empty on purpose: the section simply hides until there is something real to show.
 */
export const QUOTES: Quote[] = [];

export const CONTACT = {
  email: "gather.amsterdam@gmail.com",
  instagram: "https://instagram.com/gather.ams",
  handle: "@gather.ams",
};
