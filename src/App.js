import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Wishlist from "./components/Wishlist";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
