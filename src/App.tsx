import Layout from "@/Layout/default/layout";
import "@/style/index.module.css";
import About from "./pages/about/views";
import Error404 from "./pages/error-404/error-404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import CountryView from "@/pages/home/views/country-article/country-article";
import Contact from "./pages/contact";
const Home = React.lazy(() => import("@/pages/home/views/list/index"));

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
