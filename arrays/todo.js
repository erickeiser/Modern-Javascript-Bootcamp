const todos = ['order cat food', 'clean kitchen', 'buy food', 'do work', 'excersise']
console.log(todos)


//Challenges below in the comments 

// Delete the 3rd item 
todos.splice(2,1)
// add a new item on to the end
todos.push('Eat better') 
// Remove the first item from the list
todos.shift()
console.log(`You have ${todos.length} todos`)

// using a forEach loop to loop through data and print out the position + 1 and the todo item
todos.forEach(function(todo, index){
  const num = index + 1
console.log(`${num}. ${todo}`)
})
