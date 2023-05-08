let cardsArrayFirst = [
  {
    name: "CSS",
    img: "http://thapatechnical.online/logos/css.png",
  },
  {
    name: "HTML",
    img: "http://thapatechnical.online/logos/html5.png",
  },
  {
    name: "jQuery",
    img: "http://thapatechnical.online/logos/jquery.png",
  },
  {
    name: "JS",
    img: "http://thapatechnical.online/logos/js.png",
  },

  {
    name: "Node",
    img: "http://thapatechnical.online/logos/nodejs.png",
  },
  {
    name: "Python",
    img: "http://thapatechnical.online/logos/python.png",
  },
];
const parentDiv = document.querySelector("#card-section");

let cardsArray = cardsArrayFirst.concat(cardsArrayFirst)

let shuffledChild = Array.from(cardsArray).sort(() => 0.5 - Math.random());

let clickCount = 0;
let firstCard = '';
let secondCard = '';

let card_selected = document.querySelectorAll('.card_selected');
card_selected.forEach((curElement) => {
  curElement.classList.add('card_match');

})


const card_matched = () => {
  let card_selected = document.querySelectorAll('.card_selected');
  card_selected.forEach((curElement) => {
    curElement.classList.add('card_match');

  })
}
// step 7
const resetGame = () => {
  clickCount = 0;

  firstCard = '';
  secondCard = '';

  let card_selected = document.querySelectorAll('.card_selected');
  card_selected.forEach((curElement) => {
    curElement.classList.remove('card_selected');

  })
}

parentDiv.addEventListener("click", (event) => {
  let curCard = event.target;
  clickCount++;
  if (curCard.id === "card-section"){ return false};

  if (clickCount < 3) {
    if (clickCount === 1) {
      firstCard = curCard.dataset.name;
      curCard.classList.add("card_selected");

    } else {
      secondCard = curCard.dataset.name;
      curCard.classList.add("card_selected");

    }


    if (firstCard !== '' && secondCard !== '') {
      if (firstCard === secondCard) {
        //curCard.classList.add('card_match');
        setTimeout(() => {
          card_matched()
          resetGame()
        }, 1000)

      } else {
        setTimeout(() => {

          resetGame()
        }, 1000)

      }
    }

  }



})

for (let i = 0; i < shuffledChild.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffledChild[i].name;
  //childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
  const front_div = document.createElement('div');
  front_div.classList.add('front-card')

  const back_div = document.createElement('div');
  back_div.classList.add('back-card')
  //back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;
/*

*/
  parentDiv.appendChild(childDiv);

  //childDiv.appendChild(front_div)
 // childDiv.appendChild(back_div)

}