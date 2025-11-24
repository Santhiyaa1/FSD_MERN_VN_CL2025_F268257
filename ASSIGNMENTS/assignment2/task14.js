const monthlyExpenses = [2000, 1500, 3500, 4000];

function calculateTotalExpenses(expenses) {
    let totalSpent = 0;
    for (let i = 0; i < expenses.length; i++) {
        totalSpent += expenses[i];
    }
    console.log(`The total money spent is: ₹${totalSpent}`);
}

calculateTotalExpenses(monthlyExpenses);
