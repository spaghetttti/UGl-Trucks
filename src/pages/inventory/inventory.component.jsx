import React from "react";
import Header from "../../components/header/header.component";
import FilterBar from "../../components/filter-bar/filter-bar.component";
import Items from "../../components/items/items.component";
import "./inventory.styles.scss";

const InventoryPage = () => {
  return (
    <div className="inventory">
      <Header />
      <main>
        <div className="inventory__grid">
          <FilterBar />
          <div className="display">
            <Items />
          </div>
        </div>
        {/* //! all the html below is for pop up filter in mob view, however it is not working properly */}
        {/* <div className="filter__menu">
          <a className="filter__menu__item" type="submit" href="#popup1">
            Tools
          </a>
        </div>
        <div id="popup1" class="popup-overlay">
          <div class="popup">
            <h2>Here i am</h2>
            <a class="close" href="#">
              &times;
            </a>
            <div class="content">
              Thank to pop me out of that button, but now i'm done so you can
              close this window.
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default InventoryPage;
