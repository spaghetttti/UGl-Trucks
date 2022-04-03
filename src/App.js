import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component";
import InventoryPage from './pages/inventory/inventory.component';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {<Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/inventory" element={<InventoryPage />}></Route>
        </Routes>}
      </BrowserRouter>
    </div>
  );
}

export default App;
