console.group("Grupo de logs")
    console.log("teste")
    console.log("teste2")
    console.log("teste3")
console.groupEnd("Grupo de logs")

console.time("timer teste")

//colocar um processamento para ver o timer aumentando
    // for (let i = 0; i<5; i++){
    //     console.log("printando 5 vezes")
    // }

console.timeEnd("timer teste")

//variáveis

let texto = "olá"
console.log(`Tipo do texto ${texto} é: ${typeof(texto)}`)

let onoff = true
console.log(`Tipo da var ${onoff} é: ${typeof(onoff)}`)

let number = 10
console.log(`Tipo da var ${number} é: ${typeof(number)}`)

let nulo = null
console.log(`Tipo da var ${nulo} é: ${typeof(nulo)}`)

let bigInt = 99999999999999999999n
console.log(`Tipo da var ${bigInt} é: ${typeof(bigInt)}`)


//objeto

let objectArray = [
 {
    name: "Gabriel", 
    occupation: "Programador",
    age: 18,
    address: {
        street: "Rua das Flores",
        number: 272,
        neighborhood: "Yeah"
    }
},

{
    name: "Gustavo", 
    occupation: "Padeiro",
    age: 25,
    address: {
        street: "Rua das Flores",
        number: 272,
        neighborhood: "Yeah"
    }
}
]

console.table(objectArray)

let hoje = new Date().getHours()
console.log(hoje)