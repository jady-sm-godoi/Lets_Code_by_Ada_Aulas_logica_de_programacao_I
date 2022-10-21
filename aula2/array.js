let students = ['Jady', 'Carol', 'Andre']

// console.log(typeof students)
// console.log(students.length)
// console.log(students[0])
students.push('José') //adiciona item no final da lista
// console.log(students)

students.unshift('Ivina') //adiciona o item no inicio da lista
// console.log(students)

// students.pop()
// console.log(students) //remove o item no final da lista

// students.shift() //remove o item no inicio da lista
// console.log(students)

// students.splice(1, 1) //remove um item a partir da posição 1
// console.log(students)
// console.log(students)


//para remover uma pessoa na lista, mas que eu não sei o indice e nem sei se ela está na lista
// const index = students.indexOf('Jady')  //se houver, traz o indice, senão traz -1
// console.log(index)

// students.splice(index, 1)//por fim faz a remoção usando o indice encontrado
console.log(students)

const myArray = students // não é uma cópia da lista, mas ambas fazem referencia à mesma lista em memoria. Se mudar uma, muda a outra
console.log(myArray)

const minhaLista = students.slice() //faz uma copia real da lista. Posso copiar uma parte da lista se colocar os parâmetros