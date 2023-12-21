const partySpan = document.body.querySelector(".nomeFestas")
const gitSpan = document.body.querySelector(".nomePresentes")
const partiesNames = ["amigo secreto","amigo oculto","amigo da onça","festas"]
const gitsNames = ["presentes","surpresa", "tralhas", "lembrançinhas"]
let idx = 0
let scrollAnimation = false

setInterval(() => {

partySpan.innerText = partiesNames[idx]
gitSpan.innerText = gitsNames[idx]
if (idx >= partiesNames.length -1) idx = 0
else {idx++}

}, 1000)
