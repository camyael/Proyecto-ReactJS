import Cart from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <header id="header">
                <div className="logo">
                    <h1>
                        <Link to="/">aquira</Link>
                    </h1>
                </div>
                <div className="navbar">
                    <ul>
                        <li><Link to="/products">Productos</Link></li>
                        <li><Link to="/category/1">Skincare</Link></li>
                        <li><Link to="/category/2">Maquillaje</Link></li>
                    </ul>
                </div>
                <div className="navbar">
                    <ul>
                        <li><Link to="/cart"><Cart /></Link></li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default NavBar
