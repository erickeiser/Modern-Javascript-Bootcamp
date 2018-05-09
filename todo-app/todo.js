const todos = [{
  text: 'Order cat food',
  completed: false
}, {
  text: 'Clean Kitchen',
  completed: true
},{
  text: 'Buy food',
  completed: true
}, {
  text: 'Do work',
  compelted: false
}, {
  text: 'Excercise',
  completed: true
}]

const filters = {
  searchText: '',
  hideCompleted: false
}

const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo){
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const incompleteTodos = filteredTodos.filter(function(todo){
  return !todo.completed
})

  document.querySelector('#todos').innerHTML = ''

  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  document.querySelector('#todos').appendChild(summary)

  filteredTodos.forEach(function(todo){
    const todoElement = document.createElement('p')
      todoElement.textContent = todo.text
        document.querySelector('#todos').appendChild(todoElement)
      })
    }
    renderTodos(todos, filters)

  document.querySelector('#filterTodo').addEventListener('input', function(e){
    filters.searchText = e.target.value
      renderTodos(todos, filters)
    })

    document.querySelector('#todo-form').addEventListener('submit', function(e){
      e.preventDefault()
      todos.push({
        text: e.target.elements.addTodo.value ,
        completed: false
      })
      renderTodos(todos, filters)
      e.target.elements.addTodo.value = ''
    })

    document.querySelector('#hide-checked').addEventListener('change', function(e){
      if(e.target.checked === true) {
        return hide
      }
    })

    const hideCompleted = function(filters, hideCompleted) {
      const hideComplete = hideCompleted.filter(function(hide){
        return filters.hideCompleted
      })
      renderTodos(todos, filters)
    }
    
      

  








  







   
 