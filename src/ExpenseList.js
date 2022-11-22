function ExpenseList({ expenses }) {
    let totalCost = 0;

    // Calculate the total cost of all expenses
    for (var i = 0; i < expenses.length; i++) {
        totalCost += expenses[i].cost;
    }
    totalCost = totalCost.toFixed(2);  // Round to 2 decimal places

    return (
        <div className="expense-list">
            <div id="total-cost">
                <h2>Total: </h2>
                <h2 className="cost">${ totalCost }</h2>
            </div>
            {expenses.map((expense) => (
                <div className="expense" key={ expense.id }>
                    <input type="checkbox" className="select-button" />
                    <h2>{ expense.to }</h2>
                    <h2 className="cost">${ expense.cost }</h2>
                    <p>{ expense.desc }</p>
                    <p className="date">{ expense.date }</p>
                </div>
            ))}
        </div>
    );
}

export default ExpenseList;
