import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {<Routes>
          <Route path="/homepage" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>}
      </BrowserRouter>
    </div>
  );
}

export default App;
