let farenheit = 50

// now calculate Celcius and store in a variable 
// print value 

let Celcius = (farenheit -32) * 5/9
console.log(Celcius)

// also calculate the Kelvin temp and store in a variable
// print value

let Kelvin = (farenheit + 459.67) * 5/9
console.log(Kelvin)

console.log(`Your current tempurature is ${farenheit} degrees farenheit which is also converted to ${Celcius} degrees Celcius. If you are using Kelving, your current tempurature is ${Kelvin} degrees`)