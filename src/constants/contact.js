export const PHONE = {
  display: "(519) 752-1544",
  href: "tel:+15197521544",
  value: "519-752-1544",
};

export const EMAIL = {
  display: "info@pctbrantford.com",
  href: "mailto:info@pctbrantford.com",
  value: "info@pctbrantford.com",
};

export const ADDRESS = {
  street: "340 Henry St Unit 6",
  locality: "Brantford, ON N3S 7V9",
  city: "Brantford",
  province: "ON",
  postalCode: "N3S 7V9",
  full: "Personal Computer Terminal, 340 Henry St Unit 6, Brantford, ON N3S 7V9",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Personal+Computer+Terminal%2C+340+Henry+St+Unit+6%2C+Brantford%2C+ON+N3S+7V9",
};

export const BUSINESS_INFO = {
  name: "Personal Computer Terminal",
  initials: "PCT",
  serviceLabel: "Computer Repair • IT Services • Sales",
  yearsServing: "30+",
  phone: PHONE,
  email: EMAIL,
  address: ADDRESS,
  mapHref: ADDRESS.mapHref,
};

export const businessInfo = BUSINESS_INFO;

export default BUSINESS_INFO;
