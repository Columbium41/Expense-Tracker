import ButtonMenu from "./ButtonMenu";
import ExpenseList from "./ExpenseList";
import FetchingOverlay from "./FetchingOverlay";
import ErrorOverlay from "./ErrorOverlay";
import { useState, useEffect } from 'react';
import useFetch from "../hooks/useFetch";

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
const Home = () => {
    // TODO: Add searching feature to search specific expenses
    const searchQuery = "";

    // Create a state hook containing the total of all displayed expenses
    const [totalCost, setTotalCost] = useState(0);

    // CRUD Functions
    const handleCreate = () => {
        console.log("Pressed Create Button");
    };
    const handleUpdate = () => {
        console.log("Pressed Update Button");
    };
    const handleDelete = () => {
        console.log("Pressed Delete Button");
    };

    // Fetch data from json server
    const { data: expenses, isFetching, fetchError, selected } = useFetch('http://localhost:8000/expenses/');

    // Create an effect hook that runs everytime 'expenses' changes
    useEffect(() => {
        setTotalCost(calculateTotalCost(expenses));
    }, [expenses]);

    return (
        <div className="container">
            { fetchError && <ErrorOverlay /> }
            { !fetchError && isFetching && <FetchingOverlay /> }
            { !fetchError && !isFetching && 
            <div className="top-menu">
                <h2> {(searchQuery === "") ? ("All Expenses") : `Expenses Matching '${searchQuery}'`} </h2>
                <ButtonMenu handleCreate={handleCreate} handleUpdate={handleUpdate} handleDelete={handleDelete} />
            </div> }
            { !fetchError && !isFetching && <ExpenseList expenses={expenses} totalCost={totalCost} selected={selected} /> }
        </div>
    );
}

export default Home;
