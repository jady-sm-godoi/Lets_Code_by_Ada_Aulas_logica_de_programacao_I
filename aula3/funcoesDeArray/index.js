const turma = '906 - OiDevs'
const arrayFromString = Array.from(turma.replaceAll(" ",""))
// console.log(arrayFromString);

function getAnArrayFromArguments(){
  // console.log(arguments)
  return Array.from(arguments)
}

const arrayFromArguments = getAnArrayFromArguments(1, 'Maria', true)

// console.log(arrayFromArguments)

const arrayFromNumberSequence = Array.from({length: 7}, (item, index)=>index)

// console.log(arrayFromNumberSequence)


const arrayFromMap = Array.from([1,2,3], (item)=>{return item + item})

// console.log(arrayFromMap)