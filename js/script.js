//  Inserire in modo dinamico le immagini 
const sliderList =  ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg","img/05.jpg"];

const imgContainer = document.querySelector(".img-container");

for (let i = 0; i < sliderList.length; i++) {
    const image = sliderList[i];
    const cardImages = `
        <div class="ms-card">
            <img src"${image}" alt="">
        </div>`;
    imgContainer.innerHTML += cardImages;
}

const cards = document.getElementsByClassName("ms-card");
let sliderPosition = 0;
cards[sliderPosition].classList.add("active");

const prevArr = document.querySelector(".previous-arr");
const nextArr = document.querySelector(".next-arr");

// Click dell'utente sulle frecce
// SE l'utente clicca sulla freccia in basso, seguirà l'immagine dopo
nextArr.addEventListener("click", function() {
    // Cancellare active dall'elemento attuale
    cards[sliderPosition].classList.remove("active");
    // AUMENTO SLIDER POSITION DI 1  
    if (sliderPosition < sliderList.length - 1) {
        sliderPosition++;
        console.log(cards[sliderPosition]);
    }
    // Aggiungere di nuovo active alla card con la posizione attuale
    cards[sliderPosition].classList.add("active");
})
// SE l'utente clicca sulla freccia in alto, tornerà l'immagine precedente
prevArr.addEventListener("click", function() {
   // Cancellare active dall'elemento attuale
   cards[sliderPosition].classList.remove("active");
   // DIMINUISCO SLIDER POSITION DI 1  
   if (sliderPosition > 0) {
       sliderPosition--;
       console.log(cards[sliderPosition]);
   }
   // Aggiungere di nuovo active alla card con la posizione attuale
   cards[sliderPosition].classList.add("active");
})
 

