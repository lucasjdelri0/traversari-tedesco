import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  sp: {
    translation: {
      btn_language: "Cambiar idioma",
      btn_language_spanish: "Español",
      btn_language_english: "Inglés",
      introduction:
        '"Me siento sinceramente conmovido con su inmigración de retorno y velo por que Italia les pueda devolver los frutos de los inmensos sacrificios que fueron realizados por sus antepasados"',
      introduction_lawyer: "Abogado Iure Sanguinis (Vía Judicial)",
    },
  },
  en: {
    translation: {
      btn_language: "Change language",
      btn_language_spanish: "Spanish",
      btn_language_english: "English",
      introduction: `"I'm sincerely moved by your return immigration and hope that Italy can return to you the fruits of the immense sacrifices that were made by your ancestors"`,
      introduction_lawyer: "Iure Sanguinis Lawyer (Judicial)",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    lng: "sp",
    fallbackLng: "sp",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
