function BankAccount() {
  this.name = "";
  this.balance = 0;
};

BankAccount.prototype.createAccount = function(name, amount) {
  if (amount < 0 || name === "") {
    return false;
  } else {
    this.name = name;
    this.balance = amount;
    return true;
  }
};

BankAccount.prototype.deposit = function(amount) {
  if (amount >= 0) {
    this.balance += amount;
    return true;
  } else {
    return false;
  }
};

BankAccount.prototype.withdraw = function(amount) {
  if (amount < 0) {
    return false;
  } else if(amount > this.balance) {
    this.balance = 0;
  } else {
    this.balance -= amount;
  }
  return true;
};

let bankAccount = new BankAccount();

$(document).ready(function() {
  $("#create").submit(function(e) {
    e.preventDefault();
    const name = $("#name").val();
    const initDeposit = $("#initial-deposit").val();

    if (!bankAccount.createAccount(name, deposit)) {
      $("#error h3").text("Error: invalid name or initial deposit");
    } else {
      $("#error h3").empty();
    }
  });

  
});