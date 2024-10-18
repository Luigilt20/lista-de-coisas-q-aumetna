function adicionar() {
    const tarefas = document.querySelector("#tarefas").value
    const lista = document.querySelector("#lista")
    const img = document.querySelector("#img").value

    const div = document.createElement("div");
    div.style.backgroundColor = "red"
    div.style.width = "100px"
    div.style.height = "300px"
    div.innerHTML = `
    <p>${tarefas}</p>  `

    const foto = document.createElement('img')
    foto.setAttribute('src', img)
    foto.style.maxWidth = "100px";
    foto.style.maxHeight = "100px";


    const botao = document.createElement('button')
    botao.addEventListener("click", function (event) {
        alert('EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')

    })
    botao.textContent='clique'
    div.append(foto)
    div.append(botao)
    lista.append(div)
}   