import ButtonMenu from "./ButtonMenu";
import ExpenseList from "./ExpenseList";
import FetchingOverlay from "./FetchingOverlay";
import { useState, useEffect } from 'react';

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
    const [expenses, setExpenses] = useState([]);

    // Create a state hook containing which expenses are selected
    const [selected, setSelected] = useState([]);

    const [isFetching, setIsFetching] = useState(true);

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
        const filteredExpenses = expenses.filter(expense => selected[expense.id - 1] === false);
        setExpenses(filteredExpenses);
    };

    // Create an effect hook that fetches data from the json database once
    useEffect(() => {
        fetch('http://localhost:8000/expenses/')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setExpenses(data);
                setSelected(new Array(data.length).fill(false));
                setIsFetching(false);
            });
    }, []);

    // Create an effect hook that runs everytime 'expenses' changes
    useEffect(() => {
        setTotalCost(calculateTotalCost(expenses));
    }, [expenses]);

    return (
        <div className="container">
            { isFetching && <FetchingOverlay /> }
            { !isFetching && 
            <div className="top-menu">
                <h2> {(searchQuery === "") ? ("All Expenses") : `Expenses Matching '${searchQuery}'`} </h2>
                <ButtonMenu handleCreate={handleCreate} handleUpdate={handleUpdate} handleDelete={handleDelete} />
            </div> }
            { !isFetching && <ExpenseList expenses={expenses} totalCost={totalCost} selected={selected} /> }
        </div>
    );
}

export default Home;
