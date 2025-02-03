import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContex";

const Navbar = () => {
    const { totalPrice } = useContext(CartContext);
    const token = false;

    return (
        <nav>
            <Link to="/" style={{ backgroundColor: "grey", borderRadius: "10px" }}>🍕 Home</Link>
            {token ? (
                <>
                    <Link to="/profile" style={{ backgroundColor: "grey", borderRadius: "10px" }}>🔓 Profile</Link>
                    <button style={{ backgroundColor: "grey", borderRadius: "10px" }}>🔒 Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login" style={{ backgroundColor: "grey", borderRadius: "10px" }}>🔐 Login</Link>
                    <Link to="/register" style={{ backgroundColor: "grey", borderRadius: "10px" }}>🔐 Register</Link>
                </>
            )}
            <Link to="/cart" style={{ backgroundColor: "grey", borderRadius: "10px" }}>🛒 Total: ${totalPrice.toFixed(2)}</Link>
        </nav>
    );
};

export default Navbar;
