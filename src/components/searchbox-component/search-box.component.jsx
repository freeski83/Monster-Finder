import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder, handleChange, searchTerm }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
      value={searchTerm}
    />
  );
};

export default SearchBox;
