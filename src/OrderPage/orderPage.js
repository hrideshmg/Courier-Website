import FilterButtons from "./filterButtons";
import OrderItem from "./orderItem";
import TrackOrder from "./trackOrder";
import headphone from "./Icons/headPhone.png";
import mouse from "./Icons/mouse.jpg";
import calculator from "./Icons/calculator.jpg";
import processed from "./Icons/processed.png";
import delivered from "./Icons/delivered.png";
import en_route from "./Icons/en_route.png";
import "./css/order.css";

const Order = () => {
  const ordersData = [
    {
      status: "order-delivered",
      imgSrc: headphone,
      title: "HyperX Cloud Stinger Core",
      address: "Kaniyampuzha Rd, Vytilla, Kochi, Kerala, P.O 682019",
      orderNo: "#406-3699206-1254715",
      statusImgSrc: delivered,
    },
    {
      status: "order-en-route",
      imgSrc: calculator,
      title: "Casio FX-991CW Classwiz Scientific Calculator",
      address: "Kaniyampuzha Rd, Vytilla, Kochi, Kerala, P.O 682019",
      orderNo: "#456-919l206-6251715",
      statusImgSrc: en_route,
    },
    {
      status: "order-processed",
      imgSrc: mouse,
      title: "Logitech G 102 Prodigy Optical USB Mouse",
      address: "Kaniyampuzha Rd, Vytilla, Kochi, Kerala, P.O 682019",
      orderNo: "#141-1212521-21512",
      statusImgSrc: processed,
    },
  ];

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1B262C",
      }}
    >
      <div className="bg-holder bg-size">
        <div className="container p-4">
          <div className="row">
            <div className="col-md-9">
              <FilterButtons />
              {ordersData.map((order, index) => (
                <OrderItem
                  key={index}
                  title={order.title}
                  address={order.address}
                  orderNo={order.orderNo}
                  statusImgSrc={order.statusImgSrc}
                  imgSrc={order.imgSrc}
                  status={order.status}
                />
              ))}
            </div>
            <TrackOrder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
