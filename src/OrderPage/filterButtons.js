import React, { useState } from "react";

const FilterButtons = ({ getOrders }) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const defaultColor = "#0F4C75";
  const activeColor = "#172025";

  const filter = (status) => {
    const orders = getOrders();

    orders.forEach((element) => {
      if (!element.classList.contains(status)) {
        element.style.display = "none";
      } else {
        element.style.display = "";
      }
    });
  };

  const clearFilter = () => {
    const orders = getOrders();

    orders.forEach((element) => {
      element.style.display = "";
    });
    setActiveFilter("");
  };

  const handleFilterButtonClick = (status) => {
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
          onClick={() => handleFilterButtonClick("order-processed")}
        >
          Processed
        </button>
      </div>
      <div className="col-2">
        <button
          id="en-route"
          className="auth-btn"
          style={{ backgroundColor: activeFilter === "order-en-route" ? activeColor : defaultColor }}
          onClick={() => handleFilterButtonClick("order-en-route")}
        >
          En Route
        </button>
      </div>
      <div className="col-2">
        <button
          id="delivered"
          className="auth-btn"
          style={{ backgroundColor: activeFilter === "order-delivered" ? activeColor : defaultColor }}
          onClick={() => handleFilterButtonClick("order-delivered")}
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
