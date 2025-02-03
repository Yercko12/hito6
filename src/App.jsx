import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContex";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Pizzas from "./assets/pages/Pizzas";
import Home from "./assets/pages/Home";
import Profile from "./assets/pages/Profile";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Cart from "./assets/pages/Cart";
import NotFound from "./assets/pages/NotFound";
import './App.css';

const App = () => {
    return (
        <CartProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pizza/:pizzaId" element={<Pizzas />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </CartProvider>
    );
};

export default App;
