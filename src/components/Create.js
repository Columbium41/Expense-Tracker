import { useState } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

const Create = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [summary, setSummary] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const history = useHistory();

    const {data: expenses, nextID} = useFetch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = nextID;
        
        const expense = { title, date, amount, summary, id };
        
        try {
            setIsPosting(true);
            localStorage.setItem("expenses", JSON.stringify([...expenses, expense]));
            localStorage.setItem("nextID", id + 1);
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setIsPosting(false);
            history.push('/');
        }
    };

    return (
        <div className="container">
            <Link to="/"><button id="back-button" className="menu-button red-bg no-select">Back</button></Link>
            <h2 className="header">Add a new Expense</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Title: </label>
                <input 
                    id="title-input" 
                    type="text" 
                    required 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-input"
                 />
                
                <label htmlFor="">Date: </label>
                <input 
                    id="date-input" 
                    type="date" 
                    required 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-input"
                />

                <label htmlFor="">Amount: </label>
                <input 
                    id="amount-input" 
                    type="number" 
                    required 
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="form-input"
                />
            
                <label htmlFor="">Summary: </label>
                <input 
                    id="summary-input" 
                    type="text" 
                    required 
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="form-input"
                />

                {!isPosting && <button id="create-expense-button" className="menu-button green-bg">
                    Create Expense
                </button>}
                {isPosting && <button id="create-expense-button" className="menu-button green-bg" disabled>
                    Creating Expense...
                </button>}
            </form>
        </div>
    );

};

export default Create;