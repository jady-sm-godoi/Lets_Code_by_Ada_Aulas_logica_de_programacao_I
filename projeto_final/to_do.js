const toDo = [
    {title:'', cat:'', hour:''}
]

const createToDo = (titulo, categoria, hora) => {
    toDo.push({title: titulo, cat: categoria, hour: hora})
}

const readToDo = () => {
    toDo.forEach(toDo => console.log(toDo))
}

const updateToDo = (index, titulo = toDo[index].title, categoria = toDo[index].cat, hora = toDo[index].hour) => {
    console.log(toDo[index]);
    toDo[index] = {title: titulo, cat: categoria, hour: hora}
    console.log(toDo[index]);
}

const deleteToDo = (index) => {
    toDo.splice(index, 1)
}

createToDo('fazer pão', 'cozinha', '12:00')
createToDo('fazer café', 'cozinha', '12:00')
createToDo('fazer chá', 'cozinha', '12:00')
createToDo('fazer suco', 'cozinha', '12:00')

readToDo()
// updateToDo(1, 'brioche', 'panificação', '11:00')
deleteToDo(2, 1)
readToDo()