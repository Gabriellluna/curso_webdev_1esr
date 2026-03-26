let age = 25;
let temCarteira = true
if (age >= 18 && temCarteira){
    console.log("Pode dirigir")
}else{
    console.log("Não pode dirigir")
}

if(!temCarteira){
    console.log("Precisa emitir a CNH")
}

let diaSemana = new Date().getDay();

switch(diaSemana){
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda-feira")
        break;
    case 2:
        console.log("Terça-feira")
        break;
    case 3:
        console.log("Quarta-feira")
        break;
    case 4:
        console.log("Quinta-feira")
        break;
    case 5:
        console.log("Sexta-feira")
        break;
    case 6:
        console.log("Sábado")
        break;
    default:
        console.log("Dia inválido")
        break;
}

for (let i = 0; i < 5; i++){
    console.log("Contando: ", i)
}

let pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };

for (let propriedade in pessoa) {
  console.log(propriedade + ": " + pessoa[propriedade]);
}
// nome: João
// idade: 30
// cidade: São Paulo

//numeros pares de 1 a 10 no console
let name = prompt("Qual o seu nome? ")
window.alert(`Bem vindo ao console ${name}`)
for (let i = 0; i<10; i++){
    console.log(i % 2 == 0 ? i : "")
}