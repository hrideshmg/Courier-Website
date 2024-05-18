const TrackOrder = () => {
  return (
    <div className="col-md-3 pt-3 pb-3" style={{ backgroundColor: "#0f4c75", borderRadius: "10px", height: "15rem" }}>
      <div className="p-3">
        <h3 className="pb-2" style={{ color: "white", fontSize: 24, fontWeight: 300 }}>
          <b>Track</b> Your Order
        </h3>
        <form action="">
          <input type="text" className="form-control" placeholder="Enter Your Order ID" required />
          <div className="pt-3 d-flex justify-content-center">
            <button
              type="submit"
              style={{
                width: "100%",
                height: "20%",
                color: "white",
                backgroundColor: "#1b262c",
                borderRadius: "15px",
                fontSize: 18,
                fontFamily: "Oxanium",
                border: "none",
              }}
              className="p-3 mt-3"
            >
              Track Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrackOrder;
