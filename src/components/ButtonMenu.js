import { Link } from 'react-router-dom';

/**
 * Returns a JSX Element containing the ButtonMenu component
 * @param {function} handleUpdate A function that updates expenses
 * @param {function} handleDelete A function that deletes expenses
 * @returns {JSX.Element}         The ButtonMenu component for the app
 */
const ButtonMenu = ({ handleUpdate, handleDelete }) => {
    return (
        <div id="button-bar">
            <Link to="/create"><button 
                type="button" 
                className="menu-button no-select green-bg" 
                id="create-button">Create
            </button></Link>
            <button type="button" className="menu-button no-select blue-bg" id="update-button" onClick={() => {
                handleUpdate();
            }}>Update</button>
            <button 
                type="button" 
                className="menu-button no-select red-bg" 
                id="delete-button" 
                onClick={handleDelete}>Delete
            </button>
        </div>
    );
}

export default ButtonMenu;
