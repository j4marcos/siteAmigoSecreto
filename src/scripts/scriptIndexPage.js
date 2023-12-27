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
    sessoes.item(0).classList.add('ativo')
})

btnEntrar.addEventListener('click', (e) => {
    fecharSessoes(e)
    sessoes.item(1).classList.add('ativo')
})

btnPerfil.addEventListener('click', (e) => {
    fecharSessoes(e)
    sessoes.item(1).classList.add('ativo')
})

btnCriarGrupo.addEventListener('click', (e) => {
    fecharSessoes(e)
    sessoes.item(1).classList.add('ativo')
})

function fecharSessoes(btn) {
    btns.forEach((e)=> e.classList.remove('ativo'))
    btn.srcElement.classList.add('ativo')

    sessoes.forEach((e)=> {
        e.classList.remove('ativo')
    })
}


setInterval(() => {
    festa.innerText = nomesFestas[n]
    n++
    if (n >= nomesFestas.length) n =0
}, 2000);