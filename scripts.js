const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
        const videioId = card.getAttribute('id')
        modalOverlay.classList.add('active')

        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videioId}`
    })
}

document.querySelector('.close_modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src =""
})