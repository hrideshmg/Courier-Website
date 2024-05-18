import "./App.css";
import HomeSection from "./HomePage/HomeSection";
import Navbar from "./Navbar";
import ServicesSection from "./HomePage/ServiceSection";
import FindSection from "./HomePage/FindUs";
import Testimonial from "./HomePage/Testimonial";
import CallbackForm from "./HomePage/CallBackForm";
import FindMe from "./HomePage/findme";
import Footer from "./HomePage/Footer";
import FooterExtension from "./HomePage/FooterExtension";
import Login from "./LoginPage/signIn";
import Order from "./OrderPage/orderPage";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Order />
    </div>
  );
}

export default App;
