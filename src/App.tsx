import Home from "@/pages/home/views/list/index";
import Layout from "@/Layout/default/layout";
import "@/style/index.module.css";
import About from "./pages/about/views";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

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
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
