import React from "react";
import QuickSearch from "../quick-search/quick-search.component";
import "./filter-bar-mob.styles.scss";

const FilterBarForMob = ({ setCost, setFilter, setCondition, setSearch, cost, filter, condition, search  }) => {
  return (
    <div className="filter-bar-mob">
      <QuickSearch setSearch={setSearch} />
      <div className="sorting">
        <h3>Sort</h3>
        <h5>By price</h5>
        <div className="sorting__buttons">
          <p
            className={cost === 1 ? "sorting__buttons__button active" : "sorting__buttons__button"}
            type="submit"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              cost ? setCost(0) : setCost(1);
            }}
          >
            High cost first
          </p>
          <p
            className={cost === 2 ? "sorting__buttons__button active" : "sorting__buttons__button"}
            type="submit"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              cost ? setCost(0) : setCost(2);
            }}
          >
            Low cost first
          </p>
        </div>
        <h5>By milage</h5>
        <div className="sorting__buttons">
          <p
            className={cost === 3 ? "sorting__buttons__button active" : "sorting__buttons__button"}
            type="submit"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              cost ? setCost(0) : setCost(3);
            }}
          >
            High first
          </p>
          <p
            className={cost === 4 ? "sorting__buttons__button active" : "sorting__buttons__button"}
            type="submit"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              cost ? setCost(0) : setCost(4);
            }}
          >
            Low first
          </p>
        </div>
      </div>
      <div className="filtering">
        <h3>Filter</h3>
        <h5>Manufacturer</h5>
        <p
          className={filter === 'Volvo' ? "filtering__button active" : "filtering__button"}
          type="submit"
          onClick={() => {
            setCondition(0);
            setCost(0);
            filter ? setFilter('') : setFilter("Volvo");
          }}
        >
          Volvo
        </p>
        <p
          className={filter === 'Kenworth' ? "filtering__button active" : "filtering__button"}
          type="submit"
          onClick={() => {
            setCondition(0);
            setCost(0);
            filter ? setFilter('') : setFilter("Kenworth");
          }}
        >
          Kenworth
        </p>
        <p
          className={filter === 'Peterbilt' ? "filtering__button active" : "filtering__button"}
          type="submit"
          onClick={() => {
            setCondition(0);
            setCost(0);
            filter ? setFilter('') : setFilter("Peterbilt");
          }}
        >
          Peterbilt
        </p>
        <h5>Condition</h5>
        <p
          className={condition ? 'filtering__button active' : 'filtering__button'}
          type="submit"
          onClick={() => {
            setCost(0);
            setFilter(0);
            condition ? setCondition(0) : setCondition(1)
          }}
        >
          Used
        </p>
      </div>
    </div>
  );
};

export default FilterBarForMob;
