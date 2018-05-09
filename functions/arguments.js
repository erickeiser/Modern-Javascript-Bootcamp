let getScoreText = function(name = 'blank', score = 0) {
  console.log(name)
  console.log(score)
}
getScoreText()

// tip calculator 
// total for the bill, tipPercent - mulitply by .2

let tipCalculator = function(bill, tip = .2) {
  return bill * tip 
}

console.log(tipCalculator(100,.33))