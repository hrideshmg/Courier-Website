const OrderItem = ({ title, address, orderNo, status, imgSrc, statusImgSrc }) => {
  return (
    <div className={"row rounded p-3 my-4 mx-4 " + status} style={{ backgroundColor: "#ebebf5" }}>
      <div className="col-10">
        <div className="d-flex align-items-center">
          <img src={imgSrc} className="productImage" alt="productImage" style={{ width: "6rem", height: "6rem" }} />
          <div className="ms-3">
            <h5 className="shipment-heading">{title}</h5>
            <p className="shipment-content m-0">{address}</p>
            <p className="shipment-content">{orderNo}</p>
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
          <img src={statusImgSrc} className="status_image" />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
