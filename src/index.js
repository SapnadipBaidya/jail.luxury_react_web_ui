import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

const root = createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-7u4y5g20ho1wr6fg.us.auth0.com"
    clientId="szqCGZA7ynIcTxh0efSbJw5q4aYtSlgN"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
reportWebVitals();
