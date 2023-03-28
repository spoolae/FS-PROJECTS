import React from "react";

import { filterButtons } from "../constants/constants";

const FilterSelector = ({ filter, setFilter }) => {
  return (
    <div className="filter-selector-container">
      {filterButtons.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          disabled={filter === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterSelector;
