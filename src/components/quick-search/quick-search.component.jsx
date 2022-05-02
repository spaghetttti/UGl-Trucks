import React from 'react';
import './quick-search.styles.scss';

const QuickSearch  = () => {
  return(
    <div className="quick_search">
    <h3>Quick Search</h3>
    <div className="quick_search__input">
      <form role="search">
        <label htmlFor="search"></label>
        <input
          id="search"
          type="search"
          placeholder="enter keywords"
         
        />
        <button type="submit">
          <p>&#x1F50E;&#xFE0E;</p>
        </button>
      </form>
    </div>
  </div>
  )
}

export default QuickSearch;