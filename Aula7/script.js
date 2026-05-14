const listarProdutos = async () => {
    const response = await fetch("https://66429d3a3d66a67b3437cdb2.mockapi.io/products");
    const data = await response.json();
    
    const ul = document.getElementById("lista-produtos")
    ul.innerHTML = ''

    console.log(data)

    data.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = `<img src="${element.image}" style="max-width:56px"> <strong>${element.name} - ${element.seller}</strong> `
        ul.appendChild(li)
    });
}

listarProdutos()