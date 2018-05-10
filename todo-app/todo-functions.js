

// Fetch existing todos from local storage
const getSavedTodos = function() {
const todoJSON = localStorage.getItem('todos')
if(todoJSON !== null) {
  return JSON.parse(todoJSON)
  } else {
    return []
  }
}
// save todos to local Storage
const saveTodos = function(todo) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = function(id) {
  const todoIndex = todos.findIndex(function( todo) {
    return todo.id === id
  })
  if(todoIndex > -1) {
    todos.splice(todoIndex, 1)
  }
}

// Toggle the completed Value for a given todo
const toggleTodo = function(id) {
  const todo = todos.find(function (todo) {
    return todo.id === id
  })
  if(todo !== undefined) {
    todo.completed = !todo.completed 
  }
}

// Render application todos based on filters
const renderTodos = function(todos, filters) {
  let filteredTodos = todos.filter(function(todo){
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  filteredTodos = filteredTodos.filter(function(todo){
    if(filters.hideCompleted) {
      return !todo.completed
    } else {
      return true
    }
  })

   incompleteTodos = filteredTodos.filter(function(todo){
    return !todo.completed
})

document.querySelector('#todos').innerHTML = ''


document.querySelector('#todos').appendChild(generateSummaryDom(incompleteTodos))

filteredTodos.forEach(function(todo){
  
      document.querySelector('#todos').appendChild(generateTodoDom(todo))
    })
  }
  // Get the Dom elements for an individual todo
    const generateTodoDom = function(todo) {
    const todoElement = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    //set up todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoElement.appendChild(checkbox)
    checkbox.addEventListener('change', function(e) {
      toggleTodo(todo.id)
      saveTodos(todos)
      renderTodos(todos, filters)
    })

    // set up todo text
    todoText.textContent = todo.text
    todoElement.appendChild(todoText)

    // set up remove  button
    removeButton.textContent = 'x'
    todoElement.appendChild(removeButton)
    removeButton.addEventListener('click',function(){
      removeTodo(todo.id)
      saveTodos(todos)
      renderTodos(todos, filters)
    })
    
    return todoElement
  }

  const generateSummaryDom = function(incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
  }

  
