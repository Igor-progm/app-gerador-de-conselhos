const dadoBotao = document.getElementById('btn')
const idConselho = document.getElementById('id')
const descricaoConselho = document.getElementById('advice-description')

async function buscarConselho() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmConselho() {
    const conselhos = await buscarConselho()
    idConselho.innerHTML = `Advice #${conselhos.slip.id}`
    descricaoConselho.innerHTML = conselhos.slip.advice
    gerenciarDisabled()
}

dadoBotao.addEventListener('click', tirarUmConselho)

function gerenciarDisabled() {
    dadoBotao.setAttribute('disabled', "")

    setTimeout(() => {
        dadoBotao.removeAttribute('disabled')
    }, 2000);
}

buscarConselho()
tirarUmConselho()