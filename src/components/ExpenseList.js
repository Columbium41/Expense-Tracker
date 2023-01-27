import { Link } from "react-router-dom";

/**
 * Returns a JSX element containing the ExpenseList component
 * @param {object} expenses  An array containing Expense objects
 * @param {Number} totalCost A number containing the sum of costs in 'expenses'
 * @param {object} selected  A boolean array indicating if each expense is selected 
 * @returns {JSX.Element}    An ExpenseList component
 */
const ExpenseList = ({ expenses, totalCost }) => {
    return (
        <div className="expense-list">
            <div id="total-cost">
                <h2>Total: </h2>
                <h2 className="cost">${ totalCost }</h2>
            </div>
            {expenses.map((expense) => (
                <Link to={"/expense/" + expense.id} className="expense-link" key={ expense.id }>
                    <div className="expense">
                        <input type="checkbox" className="select-button" id={ "checkbox_" + expense.id } />
                        <h2>{ expense.title }</h2>
                        <h2 className="cost">${ expense.amount }</h2>
                        <p>{ expense.summary }</p>
                        <p className="date">{ expense.date }</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ExpenseList;
