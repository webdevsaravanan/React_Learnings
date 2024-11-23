import React, { useState } from "react";

function SearchBar() {
    const [searchText, setSearchText] = useState("");
    function handleKeyPress(event) {
      if (event.key === "Enter") {
        handleSubmit();
      } else {
        console.log("Key pressed:", event.key);
      }
    }
    function handleSubmit() {
      console.log("Search submitted:", searchText);
      // we can Also add Search submission Logic here
    }
    return (
      <div>
            <h2> Search Form (Key-Events Demo)</h2>
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search..."
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    );
  }
  export default SearchBar;
  