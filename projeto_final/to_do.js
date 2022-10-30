const toDo = [
    { title: 'fazer pão', cat: 'cozinha', hour: '12:00', completed: true },
    { title: 'fazer café', cat: 'cozinha', hour: '12:00', completed: false },
    { title: 'fazer chá', cat: 'cozinha', hour: '12:00', completed: false },
    { title: 'fazer suco', cat: 'cozinha', hour: '12:00', completed: false },
]

const createToDo = () => {
    let inputTitle = document.getElementById('idTitle').value
    let inputCategory = document.getElementById('idCategory').value
    let inputHour = document.getElementById('idHour').value
    toDo.push({title: inputTitle, cat: inputCategory, hour: inputHour})
    readToDo()
    document.getElementById('idTitle').value = ''
    document.getElementById('idCategory').value = ''
    document.getElementById('idHour').value = ''
}

const readToDo = () => {
    // toDo.forEach(toDo => console.log(toDo))
    var liContent = ""

    toDo.forEach(({title,cat,hour,completed}, index)=>{
        liContent += 
        `
        <li class="list-group-item">
            <button type="button" class="btn btn-link p-0" onclick="toggleDonne(${index})">
            ${completed ? '<i class="bi bi-check-circle fs-4 text-dark"></i>' : '<i class="bi bi-check-circle-fill fs-4 text-dark"></i>'} 
            </button>
            <div class="conteudo">
                <h3>${title}</h3>
                <p>${cat} <i class="bi bi-dot"></i>${hour}</p>
            </div>
            <div class="controls">
                <button type="button" class="btn btn-dark" onclick="updateToDo(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-pencil"></i></button>
                <button type="button" class="btn btn-outline-dark"><i class="bi bi-trash-fill"></i></button>
            </div>
        </li>
        `
    })

    var listaDeTarefas = document.querySelector('ul')

    listaDeTarefas.innerHTML = liContent
}

const updateToDo = (index) => {
    let titulo = toDo[index].title
    let categoria = toDo[index].cat
    let hora = toDo[index].hour

    document.getElementById('idTitle').value = titulo
    document.getElementById('idCategory').value = categoria
    document.getElementById('idHour').value = hora

    let inputTitle = document.getElementById('idTitle').value
    let inputCategory = document.getElementById('idCategory').value
    let inputHour = document.getElementById('idHour').value

    toDo[index] = {title: inputTitle, cat: inputCategory, hour: inputHour}
}

const deleteToDo = (index) => {
    toDo.splice(index, 1)
}

const toggleDonne = (index) => toDo[index].completed = !(toDo[index].completed)


//criando elementos para a lista de tarefas:
readToDo()