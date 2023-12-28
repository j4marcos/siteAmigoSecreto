const sessoes = document.querySelectorAll('section')
const btns = document.querySelectorAll('button')
const btnGrupos = document.querySelector('button.grupos')
const btnAdicionarGrupo = document.querySelectorAll('button.adicionarGrupo')
const btnCriarGrupo = document.querySelectorAll('button.criarGrupo')
const btnPerfil = document.querySelector('button.perfil')
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


const form = document.querySelector('form.criarGrupo')
const grupoNome = form.querySelector('#nomeDoGrupo')
const checkListaDeDesejos = form.querySelector('#checkListaDeDesejos')
const chechTipoFesta = form.querySelector("#tipoFesta")
const descricaoText = form.querySelector('#descricaoText')
const regraText = form.querySelector('#regraText')
const linkText = form.querySelector('#linkText')
const fortextarea = [regraText, linkText, descricaoText]

const cardPreview = document.querySelector(".cardPreview")
const cardNome = cardPreview.querySelector('.nomeGrupo').querySelector('h1')
const listaDeDesejos = cardPreview.querySelector(".listaDeDesejos")
const tipoFesta = cardPreview.querySelector(".tipoFesta")
const regrasArea = cardPreview.querySelector('.regras')


fortextarea.forEach((e)=> {
    e.addEventListener('input', (e) => {
        let info = regrasArea.querySelector(`div.info.${e.target.id}`)
        if (info) {
            info.innerText = e.target.value
            if (e.target.value === '') info.remove()
        } else {
            info = document.createElement('div.info')
            info.classList.add(e.target.id)
            regrasArea.appendChild(info)
            info.innerText = e.target.value
        }

    })
})

grupoNome.addEventListener('input', (e) => {  
    cardNome.innerText = grupoNome.value
})


checkListaDeDesejos.addEventListener('change', (e)=> {
    if (checkListaDeDesejos.checked) listaDeDesejos.classList.remove('desativo')
    else  listaDeDesejos.classList.add('desativo') 
})

chechTipoFesta.addEventListener('change', (e)=> {
    tipoFesta.innerText = chechTipoFesta.value
})