/**
 * A Class representing an Expense object
 */
class Expense {
    /**
     * Create an Expense object
     * @param {string} to           The person/company receiving the money
     * @param {Number} cost         The amount of money spent
     * @param {string} desc         A description of the expense
     * @param {string} date         The date the expense was accrued
     * @param {Number} id           An id to identify the expense
     * @param {boolean} isSelected  Whether the expense is selected in the app
     */
    constructor(to, cost, desc, date, id, isSelected) {
        this.to = to;
        this.cost = cost;
        this.desc = desc;
        this.date = date;
        this.id = id;
        this.isSelected = isSelected;
    }
}

export default Expense;
