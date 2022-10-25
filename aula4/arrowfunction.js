
//função anonima
// const somar = function(a, b){
//   return a+b;
// }

// console.log(somar(1, 2));

// const somar = (a, b) => a+b;

//se tiver mais etapas no processamento devemos usar os {} e o return na solução.
// const somar = (a, b)=>{
//   console.log(a)
//   return a + b
// }

// console.log(somar(1, 2));


const saudar = (nomeInteiro) => console.log(`Ola! ${nomeInteiro}`)
const despedir = (nomeInteiro) => console.log(`Tchau! ${nomeInteiro}`)


const minhaFuncao = (nome, sobrenome, callback) => {
  const nomeCompleto = `${nome} ${sobrenome}`;
  callback(nomeCompleto)
}

minhaFuncao('Jady', 'Godoi', saudar)
minhaFuncao('Jady', 'Godoi', despedir)