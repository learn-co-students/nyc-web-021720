const form = document.getElementById('create-task-form')
// console.log(form)

form.addEventListener('submit', function(event) {
  event.preventDefault()
  const list = document.getElementById('tasks')
  const userInput = document.querySelector('#new-task-description').value

  if (userInput.length > 0) {
    const task = document.createElement('li')

    task.innerText = userInput

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'X'
    deleteButton.className = 'delete-button'
    task.appendChild(deleteButton)
    deleteButton.onclick = function(e) {
        deleteButton.parentNode.remove()
    }

    const prioritySelect = document.createElement('select')

    const highPriority = document.createElement('option')
    const lowPriority = document.createElement('option')

    highPriority.innerText = 'High'
    highPriority.value = 'red'

    lowPriority.innerText = 'Low'
    lowPriority.value = 'green'

    prioritySelect.appendChild(highPriority)
    prioritySelect.appendChild(lowPriority)

    task.appendChild(prioritySelect)

    prioritySelect.addEventListener('change', function(e) {
      task.style.color = e.target.value
    })

    // task.style.color = 'red'

    list.appendChild(task)

    // document.getElementById('new-task-description').value = ''
    form.reset()
  }
})

// document.addEventListener('click', function(e) {
//   if (e.target.className === 'delete-button') {
//     e.target.parentNode.remove()
//   }
// })
