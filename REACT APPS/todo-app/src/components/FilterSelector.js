import React from "react";

const FilterSelector = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("active")}
        disabled={filter === "active"}
      >
        Active
      </button>
    </div>
  );
};

export default FilterSelector;
