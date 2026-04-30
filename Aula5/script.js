tarefas = ["Treinar", "Estudar", "Comer", "Dormir"]

tarefas.shift()
tarefas.pop()

console.log(tarefas)

tarefas.unshift("Primeira posição")

console.log(tarefas)

tarefas.splice(0, 1)

console.log(tarefas)

tarefas.splice(100, 0, "teste splice add")

console.log(tarefas)

tarefas.splice(1, 1, "teste splice substituir")

console.log(tarefas)

//for-each = map para percorrer elementos

tarefas.forEach((element, index) => console.log(index + " : " + element))
tarefas.map((element, index) => console.log(index + " : " + element))

const novo = tarefas.map((t) => t + " adicionei")

console.log(novo)

const filter = tarefas.filter((t) => t.toUpperCase().includes("A"))

console.log(filter)

const find = tarefas.find((t) => t.toUpperCase().includes("A"))

console.log(find)

//reduce
//total é o acumulador de caracteres do array de strings

const reducing = tarefas.reduce((total, elemento) => total + elemento.length, 0)

console.log(reducing)