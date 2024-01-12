const dadoBotao = document.getElementById('btn')
const idConselho = document.getElementById('id')
const descricaoConselho = document.getElementById('advice-description')

async function buscarConselho() {
    const resposta = await fetch("https://api.adviceslip.com/advice")
    return await resposta.json()
}

async function tirarUmConselho() {
    const conselhos = await buscarConselho()
    idConselho.innerHTML = `Advice #${conselhos.slip.id}`
    descricaoConselho.innerHTML = conselhos.slip.advice
    gerenciarDisabled()
}

buscarConselho()
tirarUmConselho()

dadoBotao.addEventListener('click', tirarUmConselho)

function gerenciarDisabled() {
    dadoBotao.setAttribute('disabled', "")

    setTimeout(() => {
        dadoBotao.removeAttribute('disabled')
    }, 2000);
}