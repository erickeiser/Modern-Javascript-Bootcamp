const notes = [{
  title: 'my next trip',
  body: 'I want to go to Chicago'
}, {
  title: 'habbits to work on',
  body: 'Excersise, Eat a bit better'
},{
  title: 'Office modifications',
  body: 'Get a new seat'
}]

const filters = {
  searchText: ''
}

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note){ 
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

  document.querySelector('#notes').innerHTML= ''

  filteredNotes.forEach(function(note){
  const noteElement = document.createElement('p')
  noteElement.textContent = note.title
  document.querySelector('#notes').appendChild(noteElement)
  })
}
renderNotes(notes, filters)

document.querySelector('button').addEventListener('click',function(e){
  e.target.textContent = 'the button was clicked'
})

document.querySelector('#searchText').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#for-fun').addEventListener('change', function(e){
  console.log(e.target.checked)
})


