import React, { useState } from "react";
import Header from "../../components/header/header.component";
import FilterBar from "../../components/filter-bar/filter-bar.component";
import Items from "../../components/items/items.component";
import FilterBarForMob from "../../components/filter-bar-mob/filter-bar-mob.component";
import "./inventory.styles.scss";
import "./pop-up.styles.scss";

const InventoryPage = () => {
  const [classPop, setClassPop] = useState("pop-up");
  const [cost, setCost] = useState(0);
  const [filter, setFilter] = useState("");
  const [condition, setCondition] = useState(0);
  const [search, setSearch] = useState("");
  
  const addClass = () => {
    classPop.includes("open")
      ? setClassPop("pop-up")
      : setClassPop("pop-up open");
  };

  const removeClass = () => {
    setClassPop("pop-up");
  };

  return (
    <div className="inventory">
      <Header />
      <main>
        <div className="inventory__grid">
          <FilterBar
            className="FilterBar"
            setCost={setCost}
            setFilter={setFilter}
            setCondition={setCondition}
            setSearch={setSearch}
            cost={cost}
            filter={filter}
            condition={condition}
          />
          <div className="display">
            <p>
              {cost}
              {filter}
              {condition}
            </p>
            <Items
              cost={cost}
              filter={filter}
              condition={condition}
              search={search}
            />
          </div>
        </div>
        <div className="filter__menu" onClick={() => addClass()}>
          <p className="filter__menu__item" type="submit">
            Filter
          </p>
        </div>
        <div className={classPop}>
          <div className="content">
            <div className="container">
              <span className="close" onClick={() => removeClass()}>
                Close
              </span>
              <FilterBarForMob
                setCost={setCost}
                setFilter={setFilter}
                setCondition={setCondition}
                setSearch={setSearch}
                cost={cost}
                filter={filter}
                condition={condition}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InventoryPage;
