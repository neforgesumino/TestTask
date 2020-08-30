import './style/style.css'  

/* TOGGLE FOR CARD ONE */
const buyItem = document.querySelector('.product-card-first');
const ProductToSelect = document.querySelector('.for-purchase__item-card');
  
  buyItem.addEventListener('click', ()=>{
      ProductToSelect.classList.toggle("for-purchase__item-card--selected");
   });


/* TOGGLE FOR CARD TWO */

const buyItem2 = document.querySelector('.product-card-second');
const ProductToSelect2 = document.querySelector('.for-purchase__item-card--selected');
  
  buyItem2.addEventListener('click', ()=>{
      ProductToSelect2.classList.toggle("for-purchase__item-card--selected");
   });




document.addEventListener ('DOMContentLoaded', function () {

  const cards = document.querySelectorAll ('.for-purchase__item-card--selected')

    for (let i = 0; i < cats.length; i++) { // в IE11 нет for..of

      const card = cards[i]

        /*  Класс .just-clicked означает, что мы только что нажали на кота, но курсор ещё не убрали,
            таким образом указываем, что надпись «котэ не одобряет» показывать не надо. */

            card.onclick      = function () { card.classList.add    ('just-clicked') }
            card.onmouseleave = function () { card.classList.remove ('just-clicked') }
        }
    })
