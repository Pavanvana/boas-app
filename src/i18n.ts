import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        header: {
          woman: "Woman",
          man: "Man",
          allVintage: "All Vintage",
          aboutUs: "About Us",
          invest: "Invest",
          account: "Account",
          cart: "Cart",
          mission: "Mission",
          contactUs: "Contact Us",
          faq: "FAQ",
          allProfitsDonated: "All Profits Donated",
          sustainability: "Sustainability",
          Team: "Team",
        },
      },
    },
    te: { translation: {} },
    hi: { translation: {} },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
