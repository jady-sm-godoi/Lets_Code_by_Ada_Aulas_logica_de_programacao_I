//lista simulando BD mocado
const toDo = [
    { title: 'fazer pão', cat: 'cozinha', hour: '12:00', completed: true },
    { title: 'fazer café', cat: 'cozinha', hour: '12:00', completed: false },
    { title: 'fazer chá', cat: 'cozinha', hour: '12:00', completed: false },
    { title: 'fazer suco', cat: 'cozinha', hour: '12:00', completed: false },
]

//FUNÇÕES CRUD

//funções para criar nova tarefa

//coloca a função para criar na botão submit do formulário
const adicionarTarefa = ()=>{
    let plusButtom = document.getElementById('submitTask')
    plusButtom.onclick = createToDo
}
//pega os valores colocados nos inputs do formulario na modal
//cria um objeto e adiciona na listagem
//limpa os campos do formulário da modal
const createToDo = () => {
    let inputTitle = document.getElementById('idTitle').value
    let inputCategory = document.getElementById('idCategory').value
    let inputHour = document.getElementById('idHour').value
    toDo.push({title: inputTitle, cat: inputCategory, hour: inputHour, completed: false})
    readToDo()
    document.getElementById('idTitle').value = ''
    document.getElementById('idCategory').value = ''
    document.getElementById('idHour').value = ''
}

//Função que lista as tarefas na página
const readToDo = () => {
    toDo.forEach(toDo => console.log(toDo))
    var liContent = ""

    toDo.forEach(({title,cat,hour,completed}, index)=>{
        liContent += 
        `
        <li class="list-group-item" id="${index}">
            <button type="button" class="btn btn-link p-0" onclick="toggleDonne(${index})">
            ${completed ? '<i class="bi bi-check-circle fs-4 text-dark"></i>' : '<i class="bi bi-check-circle-fill fs-4 text-dark"></i>'} 
            </button>
            <div class="conteudo">
                <h3>${title}</h3>
                <p>${cat} <i class="bi bi-dot"></i>${hour}</p>
            </div>
            <div class="controls">
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editarTarefa(${index})"><i class="bi bi-pencil"></i></button>
                <button type="button" class="btn btn-outline-dark" onclick="deleteToDo(${index})"><i class="bi bi-trash-fill"></i></button>
            </div>
        </li>
        `
    })
    var listaDeTarefas = document.querySelector('ul')
    listaDeTarefas.innerHTML = liContent
}

//funçẽs para editar: 

//captura os dados já existentes e coloca no formulário da modal
//coloca a função para edição na botão submit do formulário
//apaga a antiga tarefa
const editarTarefa = (index)=>{
    let titulo = toDo[index].title
    let categoria = toDo[index].cat
    let hora = toDo[index].hour

    document.getElementById('idTitle').value = titulo
    document.getElementById('idCategory').value = categoria
    document.getElementById('idHour').value = hora

    let submitButton = document.getElementById('submitTask')
    submitButton.onclick = updateToDo
    
    deleteToDo(index)
}

//pega os valores dos inputs do formulário da modal
//cria um novo elemento com os novos dados
//recarrega a lista
const updateToDo = () => {
    let inputTitle = document.getElementById('idTitle').value
    let inputCategory = document.getElementById('idCategory').value
    let inputHour = document.getElementById('idHour').value

    toDo.push({title: inputTitle, cat: inputCategory, hour: inputHour, completed: false})
    
    readToDo()
    document.getElementById('idTitle').value = ''
    document.getElementById('idCategory').value = ''
    document.getElementById('idHour').value = ''
}

//função para apagar
const deleteToDo = (index) => {
    toDo.splice(index, 1)

    readToDo()
}

//função para marcar como concluído
const toggleDonne = (index) => {
    toDo[index].completed = !(toDo[index].completed)

    readToDo()
}


// listando tarefas na tela...
readToDo()
