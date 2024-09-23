import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import Country_cards from "./components/CountryCards/index";

import "./style/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Hero />
    <Country_cards />
  </StrictMode>
);
