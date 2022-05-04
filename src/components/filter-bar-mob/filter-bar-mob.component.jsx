import React from "react";
import QuickSearch from "../quick-search/quick-search.component";
import './filter-bar-mob.styles.scss';

const FilterBarForMob = () => {
  return (
    <div className="filter-bar-mob">
       <QuickSearch/>
      <div className="sorting">
        <h3>Sort</h3>
        <h5>By price</h5>
        <div className="sorting__buttons">
          <p
            className="sorting__buttons__button"
            type="submit"
            value="High cost first"
            onClick={() => console.log('p click is working!')}
          >High cost first</p>
          <p
            className="sorting__buttons__button"
            type="submit"
            value=""
          >Low cost first</p>
        </div>
        <h5>By milage</h5>
        <div className="sorting__buttons">
          <p
            className="sorting__buttons__button"
            type="submit"
            value=""
          >High first</p>
          <p
            className="sorting__buttons__button"
            type="submit"
            value=""
          >Low first</p>
        </div>
      </div>
      <div className="filtering">
        <h3>Filter</h3>
        <h5>Manufacturer</h5>
        <p className="filtering__button" type="submit" value="" >Volvo</p>
        <p className="filtering__button" type="submit" value="" >Kenworth</p>
        <p className="filtering__button" type="submit" value="" >Peterbilt</p>
        <h5>Condition</h5>
        <p className="filtering__button" type="submit" value="" >Used</p>
      </div>
    </div>
  );
};

export default FilterBarForMob;
