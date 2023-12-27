const sessoes = document.querySelectorAll('section')
const btnGrupos = document.querySelector('button.grupos')
const btnAdicionar = document.querySelector('button.adicionar')
const btnCriar = document.querySelector('button.criar')
const btnPerfil = document.querySelector('button.perfil')

btnGrupos.addEventListener('click', (e) => {
    fecharSessoes()

})

function fecharSessoes() {
    sessoes.forEach((e)=> {
        e.style.height = '0px'
        console.log(e)
    })
    
}