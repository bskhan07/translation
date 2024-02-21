import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import BackEnd from "i18next-http-backend";
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(BackEnd)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Hello,welcome!  {{hero}} ",
          dec: {
            line1: "it is first line dec",
            line2: "now this is second line dec",
          },
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते, स्वागत है ! {{hero}} ",
          dec: {
            line1: "यह पहली पंक्ति  है",
            line2: "अब यह दूसरी पंक्ति है",
          },
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour bienvenue! {{hero}} ",
          dec: {
            line1: `
            c'est la première ligne décembre`,
            line2: `
            maintenant c'est la deuxième ligne
            `,
          },
        },
      },
      ar: {
        translation: {
          greeting: " {{hero}} مرحبا أهلا وسهلا!",
          dec: {
            line1: "إنه السطر الأول",
            line2: "الآن هذا هو السطر الثاني",
          },
        },
      },
      ur: {
        translation: {
          greeting: " {{hero}} ہیلو، خوش آمدید!",
          dec: {
            line1: "یہ پہلی لائن ہے",
            line2: "اب یہ دوسری لائن ہے۔",
          },
        },
      },
    },
  });
