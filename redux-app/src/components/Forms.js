import React from 'react';
import { useSelector } from "react-redux";

const Forms = (props) => {

    const {filterCategory, handleFilterCategory} = props;

  const categories = useSelector((state) => state.categories);

  return (
    <>
    <h2>Forms</h2>
      <div className="filter-section">
        <label>Filter by Category:</label>
        <select
          value={filterCategory}
          onChange={(e) => handleFilterCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default Forms