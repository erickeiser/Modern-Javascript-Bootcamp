let myAccount = {
  name: 'Eric Keiser',
  expenses: 0,
  income: 0
}

let addExpense = function(account, amount) {
  let otherAccount
  account.expenses = account.expenses + amount
  
}

// add Income 
let addIncome = function(account, income) {
  account.income = account.income + income
}

// reset Account 
let resetAccount = function(account) {
  account.expenses = 0
  account.income = 0
}

// getAccountSummary 
let getAccountSummary = function(account) {
  let balance = account.income - account.expenses
  return `Account for ${account.name} has ${balance}. $${account.income} in income $${account.expenses} in expneses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)


console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))