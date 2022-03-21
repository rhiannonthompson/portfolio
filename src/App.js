import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPageLayout from "./app/common/MainPageLayout";
import ScrollToTop from "./app/common/navigation/ScrollToTop";
import ProjectsPageLayout from "./app/projectsPage/ProjectsPageLayout";

export default function App({ props }) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  function handleToggleMenuActive() {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <BrowserRouter>
      <ScrollToTop>
      <Routes>
        <Route
          path="/"
          element={
            <MainPageLayout
              handleToggleMenuActive={handleToggleMenuActive}
              isMenuActive={isMenuActive}
            />
          }
        />
        <Route
          path="/projects/"
          element={
            <ProjectsPageLayout
              handleToggleMenuActive={handleToggleMenuActive}
              isMenuActive={isMenuActive}
            />
          }
        />
        </Routes>
        </ScrollToTop>
    </BrowserRouter>
  );
}
