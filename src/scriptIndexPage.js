const partySpan = document.body.querySelector(".nomeFestas")
const gitSpan = document.body.querySelector(".nomePresentes")
const partiesNames = ["amigo secreto","amigo oculto","amigo da onça", "amigo ao contrário"]
const gitsNames = ["presentes","surpresa", "tralhas","enigma" ]
let idx = 0
console.log(partySpan)

setInterval(() => {

partySpan.innerText = partiesNames[idx]
gitSpan.innerText = gitsNames[idx]
if (idx >= partiesNames.length -1) idx = 0
else {idx++}

}, 1000)

window.addEventListener("scroll", ()=> {
    window.scrollTo("1000px")
})