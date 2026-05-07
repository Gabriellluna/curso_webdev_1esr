const titulo = document.querySelector('h1');
titulo.textContent = "TEste"
console.log(titulo)

const user = {
    name: "Gabriel",
    img: './imagem/transferir.png'
}
const container = document.getElementById("container")
container.innerHTML = `<h4>${user.name}</h4>`
console.log(container)


const img = document.querySelector('img')

console.log(img)

img.setAttribute('src', user.img)
img.alt = user.name

const caixa = document.querySelector('.caixa')

caixa.style.height = "150px"
caixa.style.width = "150px"
caixa.style.backgroundColor = "blue"

const botao = document.getElementById("button")

botao.addEventListener('click', () =>{
    caixa.classList.toggle("oculto")
})