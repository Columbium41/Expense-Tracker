/**
 * Returns a JSX Element containing the ButtonMenu component
 * @param {function} handleCreate A function that creates expenses
 * @param {function} handleUpdate A function that updates expenses
 * @param {function} handleDelete A function that deletes expenses
 * @returns {JSX.Element}         The ButtonMenu component for the app
 */
function ButtonMenu({ handleCreate, handleUpdate, handleDelete }) {
    return (
        <div id="button-bar">
            <button type="button" className="menu-button no-select" id="create-button" onClick={() => {
                handleCreate();
            }}>Create</button>
            <button type="button" className="menu-button no-select" id="update-button" onClick={() => {
                handleUpdate();
            }}>Update</button>
            <button type="button" className="menu-button no-select" 
            id="delete-button" onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default ButtonMenu;
