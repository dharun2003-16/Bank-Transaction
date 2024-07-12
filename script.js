// Initialize balance
let balance = 0;

function processTransaction() {
  // Get the values from the input fields
  const deposit = parseFloat(document.getElementById('deposit').value) || 0;
  const withdraw = parseFloat(document.getElementById('withdraw').value) || 0;
  
  let transactionType = '';
  let amount = 0;

  // Perform the deposit
  if (deposit > 0) {
    balance += deposit;
    transactionType = 'Deposit';
    amount = deposit;
  }
  
  // Perform the withdraw
  if (withdraw > 0) {
    if (withdraw <= balance) {
      balance -= withdraw;
      transactionType = 'Withdraw';
      amount = withdraw;
    } else {
      alert("Insufficient balance for the withdrawal!");
      return; // Exit the function if the withdrawal is not possible
    }
  }
  
  // Display the current balance
  document.getElementById('result').innerText = `Current Balance: ${balance.toFixed(2)}`;

  // If a valid transaction occurred, add it to the table
  if (transactionType) {
    addTransactionToTable(transactionType, amount, balance);
  }

  // Clear the input fields
  document.getElementById('deposit').value = '';
  document.getElementById('withdraw').value = '';
}

function addTransactionToTable(transactionType, amount, balance) {
  // Create a new row and cells
  const table = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  
  // Fill the cells with the appropriate values
  cell1.innerText = transactionType;
  cell2.innerText = `${amount.toFixed(2)}`;
  cell3.innerText = `${balance.toFixed(2)}`;
}