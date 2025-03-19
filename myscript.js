function calculateTax() {
// Get user input values and convert to numbers, defualt to 0 if empty
const income = parseFloat(document.getElementById("income").value)|| 0;
const expenses = parseFloat(document.getElementById("expenses").value)|| 0;

// Calculate taxable income after deducting expenses, ensuring it's not negative
const taxableIncome = Math.max(0, income - expenses);

let taxOwed = 0;

 // Apply a progressive tax rate system
 if (taxableIncome <= 10000) {
    taxOwed = taxableIncome * 0.10;  // 10% tax on income up to $10,000
} else if (taxableIncome <= 40000) {
    taxOwed = 1000 + (taxableIncome - 10000) * 0.20;  // 20% tax on income between $10,001 - $40,000
} else {
    taxOwed = 7000 + (taxableIncome - 40000) * 0.30;  // 30% tax on income above $40,000
}

// Calculate net income after tax
const netIncome = taxableIncome - taxOwed;
            
// Display the results in the result div
document.getElementById("result").innerHTML = 
    `Tax Owed: $${taxOwed.toFixed(2)} <br> Net Income After Tax: $${netIncome.toFixed(2)}`;
}