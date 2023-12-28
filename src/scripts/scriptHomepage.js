const sessoes = document.querySelectorAll('section')
const btns = document.querySelectorAll('button')
const btnGrupos = document.querySelector('button.grupos')
const btnAdicionarGrupo = document.querySelectorAll('button.adicionarGrupo')
const btnCriarGrupo = document.querySelectorAll('button.criarGrupo')
const btnPerfil = document.querySelector('button.perfil')
const formCriarGrupo = document.querySelector('form.criarGrupo')
const btnInicio = document.querySelector('button.inicio')



btnGrupos.addEventListener('click', (e) => {
    fecharSessoes(e)
    abrirSessao(sessoes.item(1))
    carregarGrupos()
})

btnAdicionarGrupo.forEach(e => {
    e.addEventListener('click', (e) => {
        fecharSessoes(e)
        abrirSessao(sessoes.item(2))
})
})

btnCriarGrupo.forEach(e => {
    e.addEventListener('click', (e) => {
        fecharSessoes(e)
    abrirSessao(sessoes.item(3))
})
})


btnPerfil.addEventListener('click', (e) => {
    fecharSessoes(e)
    abrirSessao(sessoes.item(4))
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
    console.log("carregando")
}


const nomesFesta = document.querySelectorAll('.mudar')
const nomesFestas = ['amigo secreto','amigo oculto','amigo chinelo', 'amigo doce', 'amigo onça']
let n = 0

setInterval(() => {
    nomesFesta.forEach((e)=>{
        e.innerText = nomesFestas[n]
    })
    n++
    if (n >= nomesFestas.length) n =0
}, 2000);

