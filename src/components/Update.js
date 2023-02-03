import { useState } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

const Update = ({selectedExpense}) => {
    const [title, setTitle] = useState((selectedExpense) ? selectedExpense.title : "");
    const [date, setDate] = useState((selectedExpense) ? selectedExpense.date : "");
    const [amount, setAmount] = useState((selectedExpense) ? selectedExpense.amount : "");
    const [summary, setSummary] = useState((selectedExpense) ? selectedExpense.summary : "");
    const [isUpdating, setIsUpdating] = useState(false);
    const history = useHistory();

    const {data: expenses} = useFetch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedExpense !== null) {
            const expense = { title, date, amount, summary, id: selectedExpense.id };

            try {
                setIsUpdating(true);

                var newExpenses = new Array(expenses.length);
                for (var i = 0; i < expenses.length; i++) {
                    if (expenses[i].id === selectedExpense.id) {
                        newExpenses[i] = expense;
                    }
                    else {
                        newExpenses[i] = expenses[i];
                    }
                }

                localStorage.setItem("expenses", JSON.stringify(newExpenses));
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setIsUpdating(false);
            }
        }
        history.push('/');

    };

    return (
        <div className="container">
            <Link to="/"><button id="back-button" className="menu-button red-bg no-select">Back</button></Link>
            <h2 className="header">Update Expense</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Title: </label>
                <input 
                    id="title-input" 
                    type="text" 
                    required 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                 />
                
                <label htmlFor="">Date: </label>
                <input 
                    id="date-input" 
                    type="date" 
                    required 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <label htmlFor="">Amount: </label>
                <input 
                    id="amount-input" 
                    type="number" 
                    required 
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
            
                <label htmlFor="">Summary: </label>
                <input 
                    id="summary-input" 
                    type="text" 
                    required 
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                />

                {!isUpdating && <button id="create-expense-button" className="menu-button blue-bg">
                    Update Expense
                </button>}
                {isUpdating && <button id="create-expense-button" className="menu-button blue-bg" disabled>
                    Updating Expense...
                </button>}
            </form>
        </div>
    )

}

export default Update;