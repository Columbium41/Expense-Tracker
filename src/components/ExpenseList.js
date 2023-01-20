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
                <div className="expense" key={ expense.id }>
                    <input type="checkbox" className="select-button" id={ "checkbox_" + expense.id } />
                    <h2>{ expense.title }</h2>
                    <h2 className="cost">${ expense.amount }</h2>
                    <p>{ expense.summary }</p>
                    <p className="date">{ expense.date }</p>
                </div>
            ))}
        </div>
    );
}

export default ExpenseList;
