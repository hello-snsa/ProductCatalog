import { Link, NavLink } from 'react-router';

import './Navbar.css';

const Navbar: React.FC = () => {

    return (
        <header className="header">
            <Link to="/" className="nav-logo">Best Shopping Kart</Link>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className="nav-item">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className="nav-item">Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
