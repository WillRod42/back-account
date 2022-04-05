function BankAccount() {
  this.name = "";
  this.balance = 0;
};

BankAccount.prototype.createAccount = function(name, amount) {
  if (amount < 0 || name === "" || this.name !== "") {
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

BankAccount.prototype.getBalance = function() {
  return "$" + this.balance;
}

let bankAccount = new BankAccount();

$(document).ready(function() {
  const error = $("#error h2");
  const balance = $("#balance");

  $("#create").submit(function(e) {
    e.preventDefault();
    const name = $("#name").val();
    const initDeposit = parseInt($("#initial-deposit").val());

    if (!bankAccount.createAccount(name, initDeposit)) {
      error.text("Error: invalid name or initial deposit or account already created");
    } else {
      error.text("Account successfully created");
      balance.text(bankAccount.getBalance());
    }
  });

  $("#deposit-form").submit(function(e) {
    e.preventDefault();
    const amount = parseInt($("#deposit").val());

    if (!bankAccount.deposit(amount)) {
      error.text("Error: Invalid deposit amount");
    } else {
      balance.text(bankAccount.getBalance());
      error.empty();
    }
  });

  $("#withdraw-form").submit(function(e) {
    e.preventDefault();
    const amount = parseInt($("#withdraw").val());

    if (!bankAccount.withdraw(amount)) {
      error.text("Error: Invalid withdraw amount");
    } else {
      balance.text(bankAccount.getBalance());
      error.empty();
    }
  });
});