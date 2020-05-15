import React, { Component } from "react";

import "./Header.css";

class Header extends Component {
  render() {
    const {
      onSearchChange,
      onCategoryChange,
      categories,
      children
    } = this.props;
    return (
      <div className="search">
        <div className="search--container">
          {categories && (
            <div className="search--categories">
              <select
                className="search--categories-selector"
                onChange={onCategoryChange}
              >
                {categories.map(({ id, name }) => (
                  <option
                    key={id}
                    value={id}
                    data-testid="search--categories-option"
                  >
                    {name}
                  </option>
                ))}
              </select>
            </div>
          )}
          {onSearchChange && (
            <form className="search--form">
              <div className="search--form-container">
                <input
                  className="search--input"
                  placeholder="Search"
                  onChange={onSearchChange}
                />
              </div>
            </form>
          )}
          {children}
        </div>
      </div>
    );
  }
}

export default Header;
