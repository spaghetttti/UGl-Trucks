import React from "react";
import QuickSearch from "../quick-search/quick-search.component";
import "./filter-bar.styles.scss";

const FilterBar = ({ setCost, setFilter, setCondition, setSearch,  cost, filter, condition, search }) => {
  return (
    <div className="filter-bar">
      <QuickSearch setSearch={setSearch} />
      <div className="sorting">
        <h3>Sort</h3>
        <h5>By price</h5>
        <div className="sorting__buttons">
          <input
            className={cost === 1 ? "sorting__buttons__button active" : "sorting__buttons__button"}
            type="submit"
            value="High cost first"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              cost ? setCost(0) : setCost(1);
            }}
          />
          <input
            className={cost === 2 ? "sorting__buttons__button active" : "sorting__buttons__button"}
            type="submit"
            value="Low cost first"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              cost ? setCost(0) : setCost(2);
            }}
          />
        </div>
        <h5>By milage</h5>
        <div className="sorting__buttons">
          <input
            className={cost === 3 ? "sorting__buttons__button active" : "sorting__buttons__button"}
            type="submit"
            value="High first"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              cost ? setCost(0) : setCost(3);
            }}
          />
          <input
            className={cost === 4 ? "sorting__buttons__button active" : "sorting__buttons__button"}
            type="submit"
            value="Low first"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              cost ? setCost(0) : setCost(4);
            }}
          />
        </div>
      </div>
      <div className="filtering">
        <h3>Filter</h3>
        <h5>Manufacturer</h5>
        <input
          className={filter === 'Volvo' ? "filtering__button active" : "filtering__button"}
          type="submit"
          value="Volvo"
          onClick={() => {
            setCondition(0);
            setCost(0);
            filter ? setFilter('') : setFilter("Volvo");
          }}
        />
        <input
          className={filter === 'Kenworth' ? "filtering__button active" : "filtering__button"}
          type="submit"
          value="Kenworth"
          onClick={() => {
            setCondition(0);
            setCost(0);
            filter ? setFilter('') : setFilter("Kenworth");
          }}
        />
        <input
          className={filter === 'Peterbilt' ? "filtering__button active" : "filtering__button"}
          type="submit"
          value="Peterbilt"
          onClick={() => {
            setCondition(0);
            setCost(0);
            filter ? setFilter('') : setFilter("Peterbilt");
          }}
        />
        <h5>Condition</h5>
        <input
          className={condition ? 'filtering__button active' : 'filtering__button'}   //"filtering__button active"
          type="submit"
          value="Used"
          onClick={() => {
            setCost(0);
            setFilter(0);
            condition ? setCondition(0) : setCondition(1)
          }}
        />
      </div>
    </div>
  );
};

export default FilterBar;
