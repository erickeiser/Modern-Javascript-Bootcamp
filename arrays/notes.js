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

const findNote = function(notes, noteTitle){
  return notes.find(function(note, index){
    return note.title.toLowerCase() === notTitle.toLowerCase()
  })
}
