import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Expense = () => {
    const params = useParams();
    const id = params.id;
    
    const { data: expense, isFetching, fetchError } = useFetch(`http://localhost:8000/expenses/${id}`);

    return (
        <div className="container">
            {isFetching && <h2 className="header">Loading... </h2>}
            {fetchError && <h2 className="header">Error: Expense not Found</h2>}

            {!isFetching && !fetchError && <div className="expense-information">
                <h2 className="header">Expense - {id}</h2>
                <p><strong>Title:</strong> {expense.title}</p>
                <p><strong>Date:</strong> {expense.date}</p>
                <p><strong>Amount:</strong> ${expense.amount}</p>
                <p><strong>Summary:</strong> {expense.summary}</p>
            </div>}

            <Link to='/'>Back to homepage</Link>
        </div>
    );
}

export default Expense;