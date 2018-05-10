let notes = getSavedNotes()

const filters = {
  searchText: ''
}


renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click',function(e){
  const id = uuidv4()

  notes.push({
    id: id,
    title: '',
    body: ''
  })

  saveNotes(notes)
  location.assign(`/notes-app/edit.html#${id}`)
})
  

document.querySelector('#searchText').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
  console.log(e.target.value)
})

window.addEventListener('storage', function(e){
  if(e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)

  }
})

const now = new Date()
console.log(now.toString())

console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Day: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minute: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`)




  




