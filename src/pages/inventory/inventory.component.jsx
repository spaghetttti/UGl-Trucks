import React, { useState } from "react";
import Header from "../../components/header/header.component";
import FilterBar from "../../components/filter-bar/filter-bar.component";
import Items from "../../components/items/items.component";
import FilterBarForMob from '../../components/filter-bar-mob/filter-bar-mob.component';
import "./inventory.styles.scss";
import "./pop-up.styles.scss";

const InventoryPage = () => {
  const [classPop, setClassPop] = useState('pop-up');


  const addClass = () => {
    classPop.includes('open') ? setClassPop('pop-up') : setClassPop('pop-up open')
  }

  const removeClass = () => {
    setClassPop('pop-up')
  }

  return (
    <div className="inventory">
      <Header />
      <main>
        <div className="inventory__grid">
          <FilterBar className="FilterBar"/>
          <div className="display">
            <Items />
          </div>
        </div>
        <div className="filter__menu" onClick={() => addClass()}>
          <p className="filter__menu__item" type="submit" >
            Filter
          </p>
        </div>
        <div className={classPop}>
          {console.log(classPop)}
          <div className="content">
            <div className="container">

              <span className="close" onClick={() => removeClass()}>Close</span>
              <FilterBarForMob /> 
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InventoryPage;
