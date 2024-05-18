const FilterButtons = () => {
  return (
    <div className="row pt-2 w-75">
      <div className="col-2">
        <button id="processed" className="auth-btn">
          Processed
        </button>
      </div>
      <div className="col-2">
        <button id="en-route" className="auth-btn">
          En Route
        </button>
      </div>
      <div className="col-2">
        <button id="delivered" className="auth-btn">
          Delivered
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
