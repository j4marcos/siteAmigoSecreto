const sessoes = document.querySelectorAll('section')
const btns = document.querySelectorAll('button')
const btnGrupos = document.querySelector('button.grupos')
const btnAdicionarGrupo = document.querySelectorAll('button.adicionarGrupo')
const btnCriarGrupo = document.querySelectorAll('button.criarGrupo')
const btnPerfil = document.querySelector('button.perfil')
const btnInicio = document.querySelector('a.inicio')
let pageN = 0

let data = localStorage.getItem('amigoSecretoData')
if (data) {
     data = JSON.parse(data)
     mudarSessoes(data.paginaAtual)
} else {
    localStorage.setItem('amigoSecretoData',JSON.stringify({
        paginaAtual : pageN,
    }))
    atualizarLocalstorage()
}

function atualizarLocalstorage () {
    data = (localStorage.getItem('amigoSecretoData'))
    data = JSON.parse(data)
    data.paginaAtual = pageN
    
    localStorage.setItem('amigoSecretoData', JSON.stringify(data))
}


btnInicio.addEventListener('click', (e) => {
    e.preventDefault()
    mudarSessoes(0, e)
})

btnGrupos.addEventListener('click', (e) => {
    mudarSessoes(1, e)
    carregarGrupos()
})

btnAdicionarGrupo.forEach(e => {
    e.addEventListener('click', (e) => {
        mudarSessoes(2, e)
})
})

btnCriarGrupo.forEach(e => {
    e.addEventListener('click', (e) => {
        mudarSessoes(3, e)
})
})


btnPerfil.addEventListener('click', (e) => {
    mudarSessoes(4, e)
})




function mudarSessoes(n, btn) {
    btns.forEach((e)=> e.classList.remove('ativo'))
    if (btn) btn.srcElement.classList.add('ativo')

    sessoes.forEach((e)=> {
        e.classList.remove('ativo')
        e.classList.add("desativo")
    })

    sessoes[n].classList.remove('desativo')
    sessoes[n].classList.add('ativo')
    pageN = n
    atualizarLocalstorage()
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
let regrasN = 0
const btnAddRegra = form.querySelector("#addRegra")
const fortextarea = [regraText, descricaoText]

const cardPreview = document.querySelector(".cardPreview")
const cardNome = cardPreview.querySelector('.nomeGrupo').querySelector('h1')
const listaDeDesejos = cardPreview.querySelector(".listaDeDesejos")
const tipoFesta = cardPreview.querySelector(".tipoFesta")
const regrasArea = cardPreview.querySelector('.regras')


fortextarea.forEach((e)=> {
    e.addEventListener('input', (e) => {
        let info = regrasArea.querySelector(`div.info.${"R"+regrasN}`)
        if (info) {
            info.innerText = e.target.value
            if (e.target.value === '') info.remove()
        } else {
            info = document.createElement('div')
            info.classList.add('info')
            info.classList.add("R"+regrasN)
            regrasArea.appendChild(info)
            info.innerText = e.target.value
        }

    })
})


btnAddRegra.addEventListener("click", (e) => {
    e.preventDefault
    regrasN++
    regraText.value = ''
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

form.addEventListener("submit", (e) => e.preventDefault())