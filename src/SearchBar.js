import React from "react";

function SearchBar() {
  return (
    <div className="search-container">
      <nav className="container">
        <div className="row">
          <form>
            <input type="text" placeholder="Enter your search term" />
          </form>
        </div>
      </nav>
    </div>
  );
}

export default SearchBar;
