import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="App">
      <nav style={{ width: "100%", padding: "2rem 0", background: "grey" }}>
        <button onClick={() => handleClick("en")}>en</button>
        <button onClick={() => handleClick("uz")}>uz</button>
        <button onClick={() => handleClick("ru")}>ru</button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("Thanks.1")}</p>
        <p>{t("why.1")}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
