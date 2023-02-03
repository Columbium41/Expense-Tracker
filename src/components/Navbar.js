import { Link } from 'react-router-dom';

/**
 * Returns a JSX Element containing the Navigation Bar
 * @returns {JSX.Element} The Navigation Bar component for the app
 */
const Navbar = () => {
    // TODO: Add functionality to links
    return (
        <nav className="navbar">
            <h1 id="title">Expense Tracker</h1>
            <ul id="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://github.com/Columbium41" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

