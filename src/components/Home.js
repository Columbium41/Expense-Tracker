import ButtonMenu from "./ButtonMenu";
import ExpenseList from "./ExpenseList";
import FetchingOverlay from "./FetchingOverlay";
import ErrorOverlay from "./ErrorOverlay";
import { useState, useEffect } from 'react';
import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router-dom";

/**
* Sum the cost of each Expense object in 'expenses'
* @param {object} expenses An array of Expense objects
* @returns {Number}        The sum of costs rounded to 2 decimal places
*/
function calculateTotalCost(expenses) {
    return expenses.reduce((total, expense) => {
        return total + expense.amount;
    }, 0).toFixed(2);
}

/**
 * Returns a JSX element containing the Home component
 * @returns {JSX.Element} The Home component for the app
 */
const Home = ({setSelectedExpense}) => {
    
    // fetch data from local storage
    const {data: expenses, isFetching, fetchError} = useFetch();

    const history = useHistory();

    // Create a state hook containing the total of all displayed expenses
    const [totalCost, setTotalCost] = useState(0);

    // Create an effect hook that runs everytime 'expenses' changes
    useEffect(() => {
        setTotalCost(calculateTotalCost(expenses));
    }, [expenses]);

    // CRUD Functions
    const handleUpdate = () => {
        var numSelected = 0;

        // Loop through all expenses
        for (var i = 0; i < expenses.length; i++) {
            const id = expenses[i].id;
            const selected = document.querySelector(`#checkbox_${id}`).checked;

            if (selected) {
                numSelected++;
                setSelectedExpense(expenses[i]);
            }
        }

        // Update and redirect user if only one expense is selected
        if (numSelected === 1) {
            history.push("/update");
        }
        else {
            setSelectedExpense(null);
        }
    };
    
    const handleDelete = () => {
        var deleted = false;

        const newExpense = expenses.filter((expense) => {
            const selected = document.querySelector(`#checkbox_${expense.id}`).checked;

            if (selected) {
                deleted = true;
            }
            return !selected;
        });

        if (deleted) {
            localStorage.setItem("expenses", JSON.stringify(newExpense));
            history.go(0);
        }

    };

    return (
        <div className="container">
            { fetchError && <ErrorOverlay /> }
            { !fetchError && isFetching && <FetchingOverlay /> }
            { !fetchError && !isFetching && 
            <div className="top-menu">
                <h2>All Expenses</h2>
                <ButtonMenu handleUpdate={handleUpdate} handleDelete={handleDelete} />
            </div> }
            { !fetchError && !isFetching && <ExpenseList expenses={expenses} totalCost={totalCost} /> }
        </div>
    );
}

export default Home;
