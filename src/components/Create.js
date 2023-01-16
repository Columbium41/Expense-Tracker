import { useState } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [summary, setSummary] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const expense = { title, date, amount, summary };

        setIsPosting(true);

        fetch('http://localhost:8000/expenses', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(expense)
        }).then(() => {
            setIsPosting(false);

            // Redirect user back to home page after posting new expense
            history.push('/');
        });
    };

    return (
        <div className="container create">
            <Link to="/"><button id="back-button" className="menu-button red-bg">Back</button></Link>
            <h2 className="header">Add a new Expense</h2>
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