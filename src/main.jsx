import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App/App.jsx";

ReactGA.initialize("G-RVXX1Y6RCZ");

ReactGA.send({ hitType: "pageview", page: window.location.pathname });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
