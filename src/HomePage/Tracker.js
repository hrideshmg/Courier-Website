import React, { useState } from "react";

const PackageTracker = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const nominatimUrlOrigin = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(origin)}`;
    const nominatimUrlDestination = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(destination)}`;

    try {
      const responseOrigin = await fetch(nominatimUrlOrigin);
      const dataOrigin = await responseOrigin.json();

      const responseDestination = await fetch(nominatimUrlDestination);
      const dataDestination = await responseDestination.json();

      if (dataOrigin.length > 0 && dataDestination.length > 0) {
        const originCoordinates = {
          latitude: parseFloat(dataOrigin[0].lat),
          longitude: parseFloat(dataOrigin[0].lon),
        };
        const destinationCoordinates = {
          latitude: parseFloat(dataDestination[0].lat),
          longitude: parseFloat(dataDestination[0].lon),
        };
        const distance = calculateDistance(
          originCoordinates.latitude,
          originCoordinates.longitude,
          destinationCoordinates.latitude,
          destinationCoordinates.longitude,
        );
        alert(`The estimated arrival from ${origin} to ${destination} is ${Math.ceil(distance.toFixed(2) / 30)} days.`);
      } else {
        alert("Error: Unable to calculate distance. Invalid origin or destination location.");
      }
    } catch (error) {
      alert("Error: Unable to calculate distance.");
      console.error("Error:", error);
    }

    setOrigin("");
    setDestination("");
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const earthRadius = 6371;
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadius * c;
  };

  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  return (
    <section style={{ backgroundColor: "#1B262C" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="fw-bold" style={{ color: "white" }}>
              Estimated Package Arrival
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label style={{ color: "white" }} htmlFor="origin">
                  Origin:
                </label>
                <input
                  style={{ color: "aliceblue", caretColor: "white" }}
                  type="text"
                  className="form-control"
                  id="origin"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Enter origin location"
                />
              </div>
              <div className="form-group">
                <label style={{ color: "white" }} htmlFor="destination">
                  Destination:
                </label>
                <input
                  style={{ color: "aliceblue", caretColor: "white" }}
                  type="text"
                  className="form-control"
                  id="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination location"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ "background-color": "#1B262C", borderColor: "white", padding: "5px" }}
              >
                Track Package
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageTracker;
