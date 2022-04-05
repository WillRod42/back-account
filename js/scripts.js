function BankAccount(name, deposit) {
  this.name = name;
  this.balance = deposit;
}

BankAccount.prototype.deposit = function(amount) {
  if (amount >= 0) {
    this.balance += amount;
    return true;
  } else {
    return false;
  }
}

BankAccount.prototype.withdraw = function(amount) {
  if (amount < 0) {
    return false;
  }
}