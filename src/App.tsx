import Layout from "@/Layout/default/layout";
import "@/style/index.module.css";
import About from "./pages/about/views";
import Error404 from "./pages/error-404/error-404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import React, { createContext, useState, useContext, ReactNode } from "react";
import CountryView from "@/pages/home/views/country-article/country-article";
import Contact from "./pages/contact";
const Home = React.lazy(() => import("@/pages/home/views/list/index"));

interface LanguageContextType {
  language: "en" | "ka";
  switchLanguage: () => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<"en" | "ka">("en");

  const switchLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ka" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            ></Route>
            <Route path="country-view/:id" element={<CountryView />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
