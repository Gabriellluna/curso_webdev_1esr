let titulo = "Aprendendo JS"
let descricao = "Manipulação de Strings"

console.log("Título: ", titulo)
console.log("Descrição: ", descricao)

console.log("comprimento do título: ", titulo.length)
console.log("comprimento da descrição: ", descricao.length)

console.log("Primeiro caractere: ", titulo[0])
console.log("Primeiro caractere: ", titulo[titulo.length - 1])
console.log("Caractere na posição 8: ", titulo.charAt(8))

//template string : `texto ${var}`

console.log(descricao.indexOf("Manipulação"))
console.log(descricao.includes("Manipulação"))
console.log(descricao.startsWith("Manipul"))

let day = new Date().getDate().toString().padStart(2, "0")
let month = (new Date().getMonth()+1).toString().padStart(2, "0")
let year = new Date().getFullYear().toString()
console.log(`${day}/${month}/${year}`)

//getDay é o dia da semana (0 a 6)

function exibirDataAtual() {
  const hoje = new Date();
  const dia = hoje.getDate().toString().padStart(2, '0');
  const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
  const ano = hoje.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

console.log("Data atual:", exibirDataAtual().substring(0, 8));
//slice e substring são a mesma coisa, com slice funcionando para arrays tbm