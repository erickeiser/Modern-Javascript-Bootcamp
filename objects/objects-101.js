let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

console.log(`the book ${myBook.title} was written by ${myBook.author} and has a total page count of ${myBook.pageCount} pages.`)

myBook.title = 'Animal Farm'
myBook.pageCount = 736

console.log(`the book ${myBook.title} was written by ${myBook.author} and has a total page count of ${myBook.pageCount} pages.`)

// create a person 
// name, age, location
// Eric is 36 and lives in Ooltewah 
// add 1 to the age and then reprint 

let me = {
  name: 'Eric',
  age: 36,
  location: 'Ooltewah'
}
console.log(`${me.name} is ${me.age} and lives in ${me.location}, Tennessee`)

me.age = me.age + 1

console.log(`${me.name} is ${me.age} and lives in ${me.location}, Tennessee`)

