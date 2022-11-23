import ButtonMenu from "./ButtonMenu";
import ExpenseList from "./ExpenseList";
import Expense from "./Expense";
import { useState } from 'react';

/**
* Sum the cost of each Expense object in 'expenses'
* @param {object} expenses An array of Expense objects
* @returns {Number}        The sum of costs rounded to 2 decimal places
*/
function calculateTotalCost(expenses) {
    return expenses.reduce((total, expense) => {
        return total + expense.cost;
    }, 0).toFixed(2);
}

/**
 * Returns a JSX element containing the Home component
 * @returns {JSX.Element} The Home component for the app
 */
function Home() {
    // TODO: Add searching feature to search specific expenses
    const searchQuery = "";

    // Create a state hook containing expenses that can be dynamically rendered and modified
    const [expenses, setExpenses] = useState([
        new Expense('CoCo Fresh Tea & Juice', 5.87, 'Bought a Medium Taro Drink', new Date(2022, 8, 23).toString().substring(4, 15), 1, false), 
        new Expense('Amazon', 22.23, 'Bought an Office Mouse', new Date(2022, 8, 17).toString().substring(4, 15), 2, false), 
        new Expense('VIA Rail', 200.67, 'Bought two Train Tickets', new Date(2021, 6, 12).toString().substring(4, 15), 3, false)
    ]);

    // Create a state hook containing the total of all displayed expenses
    const [totalCost, setTotalCost] = useState(calculateTotalCost(expenses));

    // CRUD Functions
    const handleCreate = () => {
        console.log("Pressed Create Button");
    };
    const handleUpdate = () => {
        console.log("Pressed Update Button");
    };
    const handleDelete = () => {
        const filteredExpenses = expenses.filter(expense => expense.isSelected === false);
        setExpenses(filteredExpenses);
        setTotalCost(calculateTotalCost(filteredExpenses));
    };

    return (
        <div className="container">
            <div className="top-menu">
                <h2> {(searchQuery === "") ? ("All Expenses") : `Expenses Matching '${searchQuery}'`} </h2>
                <ButtonMenu handleCreate={handleCreate} handleUpdate={handleUpdate} handleDelete={handleDelete} />
            </div>
            <ExpenseList expenses={expenses} totalCost={totalCost} />
        </div>
    );
}

export default Home;
