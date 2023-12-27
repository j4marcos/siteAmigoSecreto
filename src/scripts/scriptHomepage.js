const sessoes = document.querySelectorAll('section')
const btns = document.querySelectorAll('button')
const btnGrupos = document.querySelector('button.grupos')
const btnAdicionar = document.querySelector('button.adicionar')
const btnCriar = document.querySelector('button.criar')
const btnPerfil = document.querySelector('button.perfil')

btnGrupos.addEventListener('click', (e) => {
    fecharSessoes(e)
    sessoes.item(0).classList.add('ativo')
    carregarGrupos()
})

btnAdicionar.addEventListener('click', (e) => {
    fecharSessoes(e)
    sessoes.item(1).classList.add('ativo')
})

btnCriar.addEventListener('click', (e) => {
    fecharSessoes(e)
    sessoes.item(2).classList.add('ativo')
})

btnPerfil.addEventListener('click', (e) => {
    fecharSessoes(e)
    sessoes.item(3).classList.add('ativo')
})

function fecharSessoes(btn) {
    btns.forEach((e)=> e.classList.remove('ativo'))
    btn.srcElement.classList.add('ativo')

    sessoes.forEach((e)=> {
        e.classList.remove('ativo')
    })
}

function carregarGrupos() {
    // metodo get
}