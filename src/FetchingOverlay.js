/**
 * Returns a JSX component containing a loading message
 * @returns {JSX.Element} Returns a JSX element containing a fetching overlay
 */
const FetchingOverlay = () => {
    return (
        <div className="fetching-overlay">
            <h2>Loading... </h2>
        </div>
    )
}

export default FetchingOverlay;
