import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hero from "@/components/Hero/index";
import Layout from "./components/Layout/layout";
import CountryCards from "@/components/CountryCards/index";

import "@/style/index.module.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <Hero
        title="Explore the World, One Glass at a Time"
        text="Embark on a journey through the worlds most exquisite vineyards,
            savoring unique wines and unforgettable experiences. Discover the
            art, culture, and passion behind every bottle with our curated wine
            tours."
      />
      <CountryCards title="Discover Wine Destinations" />
    </Layout>
  </StrictMode>
);
