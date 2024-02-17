import React, { useState } from "react";

function Filter({ setFilter }) {
  const [filterValue, setFilterValue] = useState("");

  return (
    <div>
      filter{" "}
      <input
        value={filterValue}
        onChange={(e) => {
          setFilterValue(e.target.value);
          setFilter(e.target.value);
        }}
        placeholder="Filter by name..."
      />
    </div>
  );
}

export default Filter;
