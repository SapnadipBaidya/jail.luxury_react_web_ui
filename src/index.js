import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/AuthProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  // <Auth0Provider
  //   domain="dev-7u4y5g20ho1wr6fg.us.auth0.com"
  //   clientId="szqCGZA7ynIcTxh0efSbJw5q4aYtSlgN"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
  <AuthProvider> <Provider store={store}><App /></Provider></AuthProvider>

);
reportWebVitals();
