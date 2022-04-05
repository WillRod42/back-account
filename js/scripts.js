function BankAccount(name, deposit) {
  this.name = name;
  this.balance = deposit;
}

BankAccount.prototype.deposit = function(deposit) {
  if (deposit >= 0) {
    this.balance += deposit;
    return true;
  } else {
    return false;
  }
}