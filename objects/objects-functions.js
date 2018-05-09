let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}


let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let books = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`

  }
}

 let bookSummary = books(myBook)
let otherBookSummary = books(otherBook)
console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.pageCountSummary)

// Create a function - take fahrenheiht in - return with all three 

let faren = {
  temp: 32
}

let tempConversion = function(faren) {
  let celcius = (faren -32) * 5/9
  let Kelivin = (faren + 459) * 5/9
  return {
    fahrenheihtTemp = `the current temp is ${faren.temp} which would convert to ${celcius} degrees Celcius and ${Kelvin} degrees Kelvin.`
  }
}
 console.log(tempConversion())

