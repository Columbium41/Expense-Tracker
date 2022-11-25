/**
 * Returns a JSX element containing an error message
 * @returns {JSX.Element} A JSX component containing an error overlay
 */
function ErrorOverlay() {
    return (
        <div className="error-overlay">
            <h2>Error while trying to fetch data. Please try again later.</h2>
        </div>
    )
}

export default ErrorOverlay;
