/**
 * Returns a JSX Element containing the Navigation Bar
 * @returns {JSX.Element} The Navigation Bar component for the app
 */
function Navbar() {
    // TODO: Add functionality to links
    return (
        <nav className="navbar">
            <h1 id="title">Expense Tracker</h1>
            <ul id="links">
                <li><a href="" target="_blank">Home</a></li>
                <li><a href="" target="_blank">How to Use</a></li>
                <li><a href="" target="_blank">Github</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

