const expenseForm = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');
const totalExpensesDisplay = document.getElementById('total-expenses');

let totalExpenses = 0;

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (description && !isNaN(amount)) {
        addExpense(description, amount);
        descriptionInput.value = '';
        amountInput.value = '';
    }
});

function addExpense(description, amount) {
    // Create a new row for the expense
    const row = document.createElement('tr');

    // Create cells for description and amount
    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = description;
    row.appendChild(descriptionCell);

    const amountCell = document.createElement('td');
    amountCell.textContent = `$${amount.toFixed(2)}`;
    row.appendChild(amountCell);

    // Create a delete button
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        deleteExpense(row, amount);
    };
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    // Add the row to the expense list
    expenseList.appendChild(row);

    // Update total expenses
    totalExpenses += amount;
    totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
}

function deleteExpense(row, amount) {
    // Remove the row from the table
    expenseList.removeChild(row);

    // Update total expenses
    totalExpenses -= amount;
    totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
}
