// Company-wide details used across the header, footer, contact and careers pages.
// TODO: confirm the email addresses and fill in the optional fields before going live —
// empty optional fields are simply hidden on the site.
export const site = {
  name: "Eversunny Technologies",
  shortName: "Eversunny",
  tagline: "Your technology partner, rain or shine.",
  description:
    "Eversunny Technologies designs, builds and scales software for growing businesses — from first prototype to cloud-scale platforms.",
  email: "admin@eversunny.com",
  careersEmail: "careers@eversunny.com",
  phone: "", // e.g. "+1 (555) 010-0000"
  // One entry per displayed line.
  address: [
    "H.No. 3-9-628/8, P No: 8 & 9,",
    "Mansoorabad, Hayathnagar,",
    "K.V. Rangareddy – 500068,",
    "Telangana, India",
  ],
  social: {
    linkedin: "", // e.g. "https://www.linkedin.com/company/eversunny"
  },
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.join(" ")
)}`;
