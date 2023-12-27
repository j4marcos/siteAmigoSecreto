const sessoes = document.querySelectorAll('section')
const btns = document.querySelectorAll('button')
const btnInicio = document.querySelector('button.inicio')
const btnEntrar = document.querySelector('button.entrar')
const btnPerfil = document.querySelector('button.perfil')
const btnCriarGrupo = document.querySelector('button.criarGrupo')

const festa = document.querySelector('.mudar')
const nomesFestas = ['amigo secreto','amigo oculto','amigo chinelo', 'amigo doce', 'amigo onça']
let n = 0

btnInicio.addEventListener('click', (e) => {
    fecharSessoes(e)
    abrirSessao(sessoes.item(0))
})

btnEntrar.addEventListener('click', (e) => {
    fecharSessoes(e)
    abrirSessao(sessoes.item(1))
})

btnPerfil.addEventListener('click', (e) => {
    fecharSessoes(e)
    abrirSessao(sessoes.item(1))
})

btnCriarGrupo.addEventListener('click', (e) => {
    fecharSessoes(e)
    abrirSessao(sessoes.item(1))
})

function fecharSessoes(btn) {
    btns.forEach((e)=> e.classList.remove('ativo'))
    btn.srcElement.classList.add('ativo')

    sessoes.forEach((e)=> {
        e.classList.remove('ativo')
        e.classList.add("desativo")
    })
}

function abrirSessao(s) {
    s.classList.remove('desativo')
    s.classList.add('ativo')
}


setInterval(() => {
    festa.innerText = nomesFestas[n]
    n++
    if (n >= nomesFestas.length) n =0
}, 2000);