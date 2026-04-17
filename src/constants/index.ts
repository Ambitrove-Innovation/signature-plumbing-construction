export const PHONE_NUMBER = "061 167 9944";

export const APP_URL = "https://signatureplumbing.co.za";

export const COMPANY = {
  name: "Signature Plumbing and Heating",
  shortName: "Signature Plumbing",
  address: "200 Commissioner St, City and Suburban, Johannesburg",
  googleRating: 4.7,
  totalReviews: 13,
  whatsappUrl: `https://wa.me/27${PHONE_NUMBER.replace(/\s/g, "").substring(1)}`,
  phoneHref: `tel:${PHONE_NUMBER.replace(/\s/g, "")}`,
  geo: {
    region: "ZA-GT",
    placename: "Johannesburg",
    position: "-26.2044;28.0500",
    icbm: "-26.2044, 28.0500",
  },
} as const;
