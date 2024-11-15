
var balance = 1000; 

function submitPin() {
  var pin = document.getElementById('pin').value;
  if (pin === '1234') { 
    document.getElementById('screen-text').textContent = "PIN Accepted! Select an action.";
    document.getElementById('actions').style.display = 'block';
    document.querySelector('.keypad').style.display = 'none';
  } else {
    document.getElementById('screen-text').textContent = "Invalid PIN. Try again.";
  }
}

function performAction(action) {
  if (action === 'withdraw') {
    var amount = prompt("Enter amount to withdraw:");
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      alert("Withdrawal successful! New balance: $" + balance);
    } else {
      alert("Invalid amount or insufficient funds.");
    }
  } else if (action === 'deposit') {
    var amount = prompt("Enter amount to deposit:");
    if (amount > 0) {
      balance += amount;
      alert("Deposit successful! New balance: $" + balance);
    } else {
      alert("Invalid amount.");
    }
  } else if (action === 'balance') {
    alert("Your current balance is: $" + balance);
  }
}
