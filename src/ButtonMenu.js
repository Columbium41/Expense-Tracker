function ButtonMenu() {
    // Button Functions
    const handleCreateClick = () => {
        console.log("Pressed Create Button");
    };
    const handleUpdateClick = () => {
        console.log("Pressed Update Button");
    };
    const handleDeleteClick = () => {
        console.log("Pressed Delete Button");
    };

    // Return a component which contains a create, update, and delete button
    return (
        <div id="button-bar">
            <button type="button" className="menu-button no-select" id="create-button" onClick={handleCreateClick}>Create</button>
            <button type="button" className="menu-button no-select" id="update-button" onClick={handleUpdateClick}>Update</button>
            <button type="button" className="menu-button no-select" id="delete-button" onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}

export default ButtonMenu;
