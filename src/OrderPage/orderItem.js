const OrderItem = () => {
  return (
    <div className="row rounded p-3 mb-4 order-delivered" style={{ backgroundColor: "#ebebf5" }}>
      <div className="col-10">
        <div className="d-flex align-items-center">
          <img
            src="assets/Icons/headPhone.png"
            className="productImage"
            alt="productImage"
            style={{ width: "6rem", height: "6rem" }}
          />
          <div className="ms-3">
            <h5 className="shipment-heading">HyperX Cloud Stinger Core</h5>
            <p className="shipment-content m-0">Ship To: Kaniyampuzha Rd, Vytilla, Kochi, Kerala, P.O 682019</p>
            <p className="shipment-content">Order No: #406-36.99206-12547.15</p>
          </div>
        </div>
      </div>
      <div className="col-1 md-4">
        <div className="d-flex flex-row">
          <div className="d-flex status-container flex-column px-1">
            <h6>Delivered</h6>
            <h6>En Route</h6>
            <h6>Processed</h6>
          </div>
          <img src="assets/Icons/delivered.png" className="status_image" />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
