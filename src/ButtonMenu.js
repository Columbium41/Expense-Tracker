function ButtonMenu({ handleCreate, handleUpdate, handleDelete }) {
    // Return a component which contains a create, update, and delete button
    return (
        <div id="button-bar">
            <button type="button" className="menu-button no-select" id="create-button" onClick={() => {
                handleCreate();
            }}>Create</button>
            <button type="button" className="menu-button no-select" id="update-button" onClick={() => {
                handleUpdate();
            }}>Update</button>
            <button type="button" className="menu-button no-select" id="delete-button" onClick={() => {
                handleDelete();
            }}>Delete</button>
        </div>
    );
}

export default ButtonMenu;
