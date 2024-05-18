import React from "react";
import FilterButtons from "./filterButtons";
import OrderItem from "./orderItem";
import TrackOrder from "./trackOrder";

const Order = () => {
  return (
    <section style={{ flex: "1", backgroundColor: "#1b262c" }}>
      <div className="bg-holder bg-size">
        <div className="container p-4">
          <div className="row">
            <div className="col-md-9">
              <FilterButtons />
              <OrderItem />
            </div>
            <TrackOrder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
