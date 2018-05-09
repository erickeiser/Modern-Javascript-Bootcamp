// function - input, code, output 

let greetUser = function() {
  console.log('hello user!')
}

greetUser()

let square = function(num) {
  let result = num * num
  return result
}
 let value = square(3) // will return 9 
 let otherValue = square(10) // will return 100
 console.log(value)
 console.log(otherValue)

 // Challenge // 
 // convertfarenheitToCelcius

 
let convertfarenheitToCelcius = function(farenheit) {
  let result = (farenheit -32) * 5/9
  return result
}
let temp = convertfarenheitToCelcius(32)
let otherTemp = convertfarenheitToCelcius(68)
console.log(temp)
console.log(otherTemp)