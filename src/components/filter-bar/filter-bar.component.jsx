import React from 'react';

import './filter-bar.styles.scss';

const FilterBar = () => {
    return(
        <div className="filter-bar">
        <div className="quick_search">
          <h3>Quick Search</h3>
          <div className="quick_search__input">
          <form  role="search">
            <label htmlFor="search"></label>
            <input
              id="search"
              type="search"
              placeholder="enter keywords"
              autoFocus
              required
              />
            <button type="submit"><p>&#x1F50E;&#xFE0E;</p></button>
          </form>
          </div>
        </div>
        <div className="sorting">
          <h3>Sort</h3>
          <h5>By price</h5>
          <div className="sorting__buttons">
           <input className="sorting__buttons__button" type="submit" value="High cost first" />
           <input className="sorting__buttons__button" type="submit" value="Low cost first" />
          </div>
          <h5>By milage</h5> 
          <div className="sorting__buttons">
           <input className="sorting__buttons__button" type="submit" value="High first" />
           <input className="sorting__buttons__button" type="submit" value="Low first" />
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
    )
}

export default FilterBar;