import React from "react";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import { store, persistor } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
const root = createRoot(document.getElementById("root"));

root.render(

  <AuthProvider>
     <Provider store={store}>
     {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}> */}
     <App />
     {/* </PersistGate> */}
   </Provider></AuthProvider>

);
reportWebVitals();
