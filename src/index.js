import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import initFacebookSDK from "./initFacebookSDK";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const renderApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

initFacebookSDK().then(() => {
  renderApp();
});