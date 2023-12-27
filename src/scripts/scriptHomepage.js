const sessoes = document.querySelectorAll('section')
const btns = document.querySelectorAll('button')
const btnGrupos = document.querySelector('button.grupos')
const btnAdicionar = document.querySelector('button.adicionar')
const btnCriar = document.querySelector('button.criar')
const btnPerfil = document.querySelector('button.perfil')
const formCriarGrupo = document.querySelector('form.criarGrupo')

btnGrupos.addEventListener('click', (e) => {
    fecharSessoes(e)
    abrirSessao(sessoes.item(0))
    carregarGrupos()
})

btnAdicionar.addEventListener('click', (e) => {
    fecharSessoes(e)
    abrirSessao(sessoes.item(1))
})

btnCriar.addEventListener('click', (e) => {
    fecharSessoes(e)
    abrirSessao(sessoes.item(2))
})

btnPerfil.addEventListener('click', (e) => {
    fecharSessoes(e)
    abrirSessao(sessoes.item(3))
})

formCriarGrupo.addEventListener('onchange', (e)=> {
    e.preventDefault()
    console.log("mudou")
})


function fecharSessoes(btn) {
    btns.forEach((e)=> e.classList.remove('ativo'))
    if (btn) btn.srcElement.classList.add('ativo')

    sessoes.forEach((e)=> {
        e.classList.remove('ativo')
        e.classList.add("desativo")
    })
}

function abrirSessao(s) {
    s.classList.remove('desativo')
    s.classList.add('ativo')
}

function carregarGrupos() {
    // metodo get
}