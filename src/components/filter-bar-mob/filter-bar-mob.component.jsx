import React from "react";
import './filter-bar-mob.styles.scss';

const FilterBarForMob = () => {
  return (
    <div className="filter-bar-mob">
      <div className="sorting">
        <h3>Sort</h3>
        <h5>By price</h5>
        <div className="sorting__buttons">
          <input
            className="sorting__buttons__button"
            type="submit"
            value="High cost first"
          />
          <input
            className="sorting__buttons__button"
            type="submit"
            value="Low cost first"
          />
        </div>
        <h5>By milage</h5>
        <div className="sorting__buttons">
          <input
            className="sorting__buttons__button"
            type="submit"
            value="High first"
          />
          <input
            className="sorting__buttons__button"
            type="submit"
            value="Low first"
          />
        </div>
      </div>
      <div className="filtering">
        <h3>Filter</h3>
        <h5>Manufacturer</h5>
        <input className="filtering__button" type="submit" value="Volvo" />
        <input className="filtering__button" type="submit" value="Kenworth" />
        <input className="filtering__button" type="submit" value="Peterbilt" />
        <h5>Condition</h5>
        <input className="filtering__button" type="submit" value="Used" />
      </div>
    </div>
  );
};

export default FilterBarForMob;
