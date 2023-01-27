import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <h2 className="header">404 Not Found</h2>
            <p>Page not found, please try again or redirect back to the previous page.</p>
            <Link to='/'>Back to Homepage</Link>
        </div>
    )
}

export default NotFound;