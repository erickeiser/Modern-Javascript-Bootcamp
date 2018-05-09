// stduent score, total possible score
// 15/20 -> you got a C (75%)
// A 90-100, B 80-89, C 79-70, D 60-69 F 0-59

let grade = function(student, score = 100) {
  let percent = (student / score) * 100 

  if(percent >= 90) {
    return `You got an A (${percent}%)`
  } else if(percent >= 80 && percent <= 89) {
    return `you got a B(${percent}&)`
  } else if(percent >=70 && percent <=79) {
    return `you got a C(${percent}%)`
  } else if(percent >= 60 && percent <= 69) {
    return `you got a D(${percent}%)`
  } else {
    return `you got an F(${percent}%)`
  }
}
console.log(grade(50))
console.log(grade(60))
console.log(grade(70))
console.log(grade(80))
console.log(grade(90))
  

 
  
  