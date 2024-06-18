const fortunes = [
  "Você encontrará grande sucesso em breve.",
  "A sorte favorece os corajosos.",
  "Uma jornada de mil milhas começa com um único passo.",
  "Algo maravilhoso está prestes a acontecer.",
  "Acredite em si mesmo e em todas as suas capacidades.",
  "Você está prestes a fazer uma descoberta importante.",
  "Oportunidades estão ao seu redor. Aproveite-as.",
  "Você será recompensado por sua gentileza.",
  "Grandes coisas vêm para aqueles que esperam.",
  "Um novo amigo está a caminho.",
  "A felicidade é uma escolha. Escolha ser feliz.",
  "Você encontrará o amor verdadeiro em breve.",
  "A sabedoria vem com a experiência.",
  "A sorte está do seu lado hoje.",
  "Você está no caminho certo para o sucesso.",
  "Um pequeno gesto de bondade pode mudar o mundo.",
  "A prosperidade está no seu futuro.",
  "Você tem a força para superar qualquer desafio.",
  "Boas notícias estão a caminho.",
  "Confie no processo. Tudo está se encaixando.",
  "Um novo começo está no horizonte.",
  "Você está rodeado de amor e apoio.",
  "A gratidão atrai mais coisas boas para sua vida.",
  "Sua criatividade levará você a grandes alturas.",
  "O sucesso está mais perto do que você imagina.",
  "Cada dia é uma nova oportunidade.",
  "Você está destinado a realizar grandes coisas.",
  "A paciência é uma virtude. Espere o momento certo.",
  "Seus sonhos estão se tornando realidade.",
  "Acredite na magia dos novos começos."
]

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnOpenCookie = document.querySelector(".closed-cookie")
const btnReset = screen2.querySelector("button")

btnOpenCookie.addEventListener('click', handleOpenCookie)
btnReset.addEventListener('click', handleReset)

function handleOpenCookie(event) {
  event.preventDefault()
  toggleScreen()
  const randomIndex = Math.floor(Math.random() * fortunes.length)
  screen2.querySelector('p')
    .innerText = fortunes[randomIndex]
}

function handleReset(event) {
  event.preventDefault()
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}