import "./lang/i18n";
import "./App.css";

import { useTranslation } from "react-i18next";
function App() {
  // t구조 분해를 통해 json 객체의 key값 참조
  // i18n객체 다국어 정보 참조
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    // 언어변경 재귀함수
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <h1>다국어 테스트</h1>
      <button
        onClick={() => {
          changeLanguage("ko");
        }}
      >
        한국
      </button>
      <button
        onClick={() => {
          changeLanguage("en");
        }}
      >
        영어
      </button>
      <button
        onClick={() => {
          changeLanguage("jp");
        }}
      >
        일본어
      </button>
      <div>{t("test")}</div>
    </div>
  );
}

export default App;
