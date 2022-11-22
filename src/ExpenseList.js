function ExpenseList(props) {
    const expenses = props.expenses;
    let totalCost = 0;

    for (var i = 0; i < expenses.length; i++) {
        totalCost += expenses[i].cost;
    }
    totalCost = totalCost.toFixed(2);

    return (
        <div className="expense-list">
            <div id="total-cost">
                <h2>Total: </h2>
                <h2 className="cost">${ totalCost }</h2>
            </div>
            {expenses.map((expense) => (
                <div className="expense" key={ expense.id }>
                    <h2>{ expense.to }</h2>
                    <h2 className="cost">${ expense.cost }</h2>
                    <p className="expense-desc">{ expense.desc }</p>
                    <p className="expense-date">{ expense.date }</p>
                </div>
            ))}
        </div>
    );
}

export default ExpenseList;
