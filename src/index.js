import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./components/context/contextProvider";
import { initialState } from "./components/context/reducer";
import reducer from "./components/context/reducer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51Kld01KwHuGztBZbDJxHv6jOtLGBBrJ6jlK3f90ggsMVt5Kj5niRFh0WLpK39yjLswKTLONgnD7HpsnET6mLb0XI00uJ1Xut0k"
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ContextProvider initialState={initialState} reducer={reducer}>
      <Elements stripe={promise}>
        <App />
      </Elements>
    </ContextProvider>
  </React.StrictMode>
);
