import ButtonMenu from "./ButtonMenu";
import ExpenseList from "./ExpenseList";
import Expense from "./Expense";
import { useState } from 'react';

function Home() {
    const searchQuery = "";

    // Create a state hook containing expenses that can be dynamically rendered and modified
    const [expenses, setExpenses] = useState([
        new Expense('CoCo Fresh Tea & Juice', 5.87, 'Bought a Medium Taro Drink', new Date(2022, 8, 23).toString().substring(4, 15), 1), 
        new Expense('Amazon', 22.23, 'Bought an Office Mouse', new Date(2022, 8, 17).toString().substring(4, 15), 2), 
        new Expense('VIA Rail', 200.67, 'Bought two Train Tickets', new Date(2021, 6, 12).toString().substring(4, 15), 3)
    ]);

    // CRUD Functions for menu buttons
    const handleCreate = () => {
        console.log("Pressed Create Button");
    };
    const handleUpdate = () => {
        console.log("Pressed Update Button");
    };
    const handleDelete = (id_list) => {
        console.log("Pressed Delete Button");
    };

    return (
        <div className="container">
            <div className="top-menu">
                <h2> {(searchQuery === "") ? ("All Expenses") : `Expenses Matching '${searchQuery}'`} </h2>
                <ButtonMenu handleCreate={handleCreate} handleUpdate={handleUpdate} handleDelete={handleDelete} />
            </div>
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default Home;