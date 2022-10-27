const statusLogado = (nome) => {
    return `${nome} logou com sucesso no sistema!`
}

const usuarioLogin = (nome) => {
    return statusLogado(nome)
}

const login = usuarioLogin('Jady')
console.log(login);