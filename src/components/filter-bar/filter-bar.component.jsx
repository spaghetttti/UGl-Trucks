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
            className="sorting__buttons__button"
            type="submit"
            value="High cost first"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              setCost(1);
            }}
          />
          <input
            className="sorting__buttons__button"
            type="submit"
            value="Low cost first"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              setCost(2);
            }}
          />
        </div>
        <h5>By milage</h5>
        <div className="sorting__buttons">
          <input
            className="sorting__buttons__button"
            type="submit"
            value="High first"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              setCost(3);
            }}
          />
          <input
            className="sorting__buttons__button"
            type="submit"
            value="Low first"
            onClick={() => {
              setCondition(0);
              setFilter(0);
              setCost(4);
            }}
          />
        </div>
      </div>
      <div className="filtering">
        <h3>Filter</h3>
        <h5>Manufacturer</h5>
        <input
          className="filtering__button"
          type="submit"
          value="Volvo"
          onClick={() => {
            setCondition(0);
            setCost(0);
            setFilter("Volvo");
          }}
        />
        <input
          className="filtering__button"
          type="submit"
          value="Kenworth"
          onClick={() => {
            setCondition(0);
            setCost(0);
            setFilter("Kenworth");
          }}
        />
        <input
          className="filtering__button"
          type="submit"
          value="Peterbilt"
          onClick={() => {
            setCondition(0);
            setCost(0);
            setFilter("Peterbilt");
          }}
        />
        <h5>Condition</h5>
        <input
          className="filtering__button"
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
