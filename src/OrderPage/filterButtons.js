import React, { useState } from "react";

const FilterButtons = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const defaultColor = "#0F4C75";
  const activeColor = "#172025";

  const orders = document.querySelectorAll(".order-delivered, .order-en-route, .order-processed");

  const filter = (status) => {
    orders.forEach((element) => {
      if (!element.classList.contains(status)) {
        element.style.display = "none";
      } else {
        element.style.display = "";
      }
    });
  };

  const clearFilter = () => {
    orders.forEach((element) => {
      element.style.display = "";
    });
    setActiveFilter("");
  };

  const handleButtonClick = (status) => {
    filter(status);
    setActiveFilter(status);
  };

  return (
    <div className="row pt-2 w-75">
      <div className="col-2">
        <button
          id="processed"
          className="auth-btn"
          style={{ backgroundColor: activeFilter === "order-processed" ? activeColor : defaultColor }}
          onClick={() => handleButtonClick("order-processed")}
        >
          Processed
        </button>
      </div>
      <div className="col-2">
        <button
          id="en-route"
          className="auth-btn"
          style={{ backgroundColor: activeFilter === "order-en-route" ? activeColor : defaultColor }}
          onClick={() => handleButtonClick("order-en-route")}
        >
          En Route
        </button>
      </div>
      <div className="col-2">
        <button
          id="delivered"
          className="auth-btn"
          style={{ backgroundColor: activeFilter === "order-delivered" ? activeColor : defaultColor }}
          onClick={() => handleButtonClick("order-delivered")}
        >
          Delivered
        </button>
      </div>
      <div className="col">
        <button className="clear_filters text-200" onClick={clearFilter}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
