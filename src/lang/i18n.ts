import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import langEn from "./lang.en.json";
import langKo from "./lang.ko.json";
import langJp from "./lang.jp.json";


// 언어 설정할 JSON 변경
const resource = {
  // 영어
  en: {
    translation: langEn, // langEn.json파일
  },
  // 한국어
  ko: {
    translation: langKo, // langKo.json파일
  },
  // 일본어
  jp: {
    translation: langJp, // langJp.json파일
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  lng: "ko", //default 국가 코드
  debug: true,
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;