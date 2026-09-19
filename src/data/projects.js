const baseProjects = [
  {
    slug: "mora-coffee",
    title: "AI_Thumbnail",
    category: "Posters",
    year: "2026",
    client: "AI generator",
    services: ["Brand Strategy", "Visual Identity", "Packaging"],
    cover: "/images/posters/AI _Thumbnail.jpg",
    views: [{ label: "Identity system", image: "/images/posters/AI _Thumbnail.jpg" }],
    accent: "#c7502c",
    summary: "A warm, expressive identity for an Ethiopian specialty coffee brand designed to feel contemporary without losing its origin story.",
    challenge: "Mora needed to stand apart from generic premium-coffee branding while remaining flexible across packaging, retail and digital touchpoints.",
    solution: "The identity combines a bold editorial wordmark, earthy geometry and a restrained packaging system that lets origin and roast information stay easy to scan.",
  },
  {
    slug: "luna-coffee-logo",
    title: "Luna Coffee Logo",
    category: "Logos",
    year: "2026",
    client: "Luna Coffee",
    services: ["Logo Design", "Visual Identity", "Art Direction"],
    cover: "/images/logo/luna-coffee-Logo.png",
    mockup: "/images/logo/luna_coffe_mockup.jpg",
    views: [
      { label: "Logo identity", image: "/images/logo/luna-coffee-Logo.png" },
      { label: "Logo mockup", image: "/images/logo/luna_coffe_mockup.jpg" },
    ],
    accent: "#6f5cff",
    summary: "A warm, memorable logo system for a coffee brand designed to feel distinctive across cups, packaging and digital touchpoints.",
    challenge: "The brand needed a recognizable mark that could feel crafted and premium without becoming overly formal.",
    solution: "A compact wordmark and expressive symbol create a flexible identity that remains clear from a small label to a full storefront application.",
  },
  {
    slug: "selam-skincare",
    title: "Selam Skincare",
    category: "Flyers",
    year: "2025",
    client: "Selam Botanics",
    services: ["Packaging", "Typography", "Art Direction"],
    cover: "/images/flayers/House.jpg",
    views: [{ label: "Visual identity", image: "/images/flayers/House.jpg" }],
    accent: "#3f624e",
    summary: "A calm packaging family for a botanical skincare label centered on clarity, tactility and everyday ritual.",
    challenge: "The client wanted to communicate natural ingredients without looking rustic, medicinal or interchangeable with competitors.",
    solution: "Soft neutrals, precise typography and botanical linework create a quiet premium language that scales across the whole product family.",
  },
  {
    slug: "kinetic-type",
    title: "GYM_huase",
    category: "Flyers",
    year: "2025",
    client: "Self-initiated",
    services: ["Typography", "Poster Series", "Motion Direction"],
    cover: "/images/flayers/GYM_huase.jpg",
    views: [{ label: "Poster identity", image: "/images/flayers/GYM_huase.jpg" }],
    accent: "#151515",
    summary: "A self-initiated poster series investigating rhythm, repetition and tension through expressive typography.",
    challenge: "The goal was to build a strong body of experimental work without relying on illustration or photography.",
    solution: "Letterforms become image: stretched, cropped and repeated to generate movement while a strict grid prevents the compositions becoming arbitrary.",
  },

  {
    slug: "burger-poster",
    title: "BURGER_POSTER",
    category: "Flyer Design",
    year: "2025",
    client: "Self-initiated",
    services: ["Typography", "Poster Series", "Motion Direction"],
    cover: "/images/flayers/BURGER_POSTER.jpg",
    views: [{ label: "Poster identity", image: "/images/flayers/BURGER_POSTER.jpg" }],
    accent: "#151515",
    summary: "A self-initiated poster series investigating rhythm, repetition and tension through expressive typography.",
    challenge: "The goal was to build a strong body of experimental work without relying on illustration or photography.",
    solution: "Letterforms become image: stretched, cropped and repeated to generate movement while a strict grid prevents the compositions becoming arbitrary.",
  },

];

const imageFolders = {
  Logos: [
    "luna-coffee-Logo.png",
    "luna_botanse_logo.jpg",
    "Nova_Tech.png",
    "arua.png",
    "nati_Logl_1.png",
  ],
  Posters: [
    "AI _Thumbnail.jpg",
    "Free_online_work.jpg",
    "NO-SIGNAL-FILM.jpg",
    "THE-LAST-SIGNAL-FILM.jpg",
    "The_last_light.jpg",
    "WAR.jpg",
    "bella_glow.jpg",
    "megazin.jpg",
  ],
  Flyers: ["BURGER_POSTER.jpg", "GYM_huase.jpg", "House.jpg"],
  Packaging: [],
  Others: [],
};
const logoMockups = {
  "luna-coffee-Logo.png": "/images/logo/luna_coffe_mockup.jpg",
  "luna_botanse_logo.jpg": "/images/logo/Luna_botanse_mockup.jpg",
};
const folderPaths = {
  Logos: "logo",
  Posters: "posters",
  Flyers: "flayers",
  Packaging: "packaging",
  Others: "others",
};

const slugify = (value) => value
  .replace(/\.[^.]+$/, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const titleFromFilename = (filename) => filename
  .replace(/\.[^.]+$/, "")
  .replace(/[_-]+/g, " ")
  .replace(/\b\w/g, (letter) => letter.toUpperCase());

const isMockupFilename = (filename) => filename.toLowerCase().includes("mockup");

const additionalProjects = Object.entries(imageFolders).flatMap(([category, filenames]) =>
  filenames
    .map((filename) => ({
      category,
      filename,
      image: `/images/${folderPaths[category] ?? category.toLowerCase()}/${filename}`,
    }))
    .filter(({ image }) => !baseProjects.some((project) => project.cover === image))
    .map(({ category, filename, image }) => ({
      slug: slugify(filename),
      title: titleFromFilename(filename),
      category,
      year: "2026",
      client: "Selected work",
      services: [],
      cover: image,
      mockup: category === "Logos" ? logoMockups[filename] : undefined,
      views: [
        { label: category === "Logos" ? "Logo identity" : "Full view", image },
        ...(isMockupFilename(filename) || logoMockups[filename]
          ? [{ label: "Mockup", image: logoMockups[filename] ?? image }]
          : []),
      ],
      accent: "#151515",
      summary: "A selected piece from the design archive.",
      challenge: "",
      solution: "",
    })),
);

export const projects = [...baseProjects, ...additionalProjects];


export const getProject = (slug) => projects.find((project) => project.slug === slug);
