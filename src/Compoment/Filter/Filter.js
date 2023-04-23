import React from "react";

const Filter = ({ titleFilter, ratingFilter, onTitleFilterChange, onRatingFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => onTitleFilterChange(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={(e) => onRatingFilterChange(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;