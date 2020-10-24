
$(function () {
   $(".humburger span").on('click', function () {
      $("nav").toggle();
   });
});

$(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         $('.scrollUp').fadeIn();
      } else {
         $('.scrollUp').fadeOut();
      }
   });

   $('.scrollUp').click(function () {
      $("html, body").animate({
         scrollTop: 0
      }, 700);
      return false;
   });
});

document.querySelector('.toggle input').checked = true;

//================== сортировка ===========================//

let myCont = document.querySelector('.card-row');
let arrow = document.querySelector('.arrow-price');

let toggleActive = document.querySelector('.sort');
toggleActive.addEventListener('click', function (e) {
   let sortPrice = document.querySelector('.sort-click-price');
   e.target.classList.toggle('active');
   if (sortPrice.classList.contains('active')) {
      sortPrice = sortPriceUp();
      arrow.classList.remove('rotate');
   } else {
      sortPrice = sortPriceDown();
      arrow.classList.add('rotate');
   }

});


function sortPriceUp() {
   for (let i = 0; i < myCont.children.length; i++) {
      for (let j = i + 1; j < myCont.children.length; j++) {
         if (+myCont.children[i].getAttribute('data-price') > +myCont.children[j].getAttribute('data-price')) {
            replacedNode = myCont.replaceChild(myCont.children[j], myCont.children[i]);
            insertAfter(replacedNode, myCont.children[i]);

         }
      }
   }
}

function sortPriceDown() {
   for (let i = 0; i < myCont.children.length; i++) {
      for (let j = i + 1; j < myCont.children.length; j++) {
         if (+myCont.children[i].getAttribute('data-price') < +myCont.children[j].getAttribute('data-price')) {
            replacedNode = myCont.replaceChild(myCont.children[j], myCont.children[i]);
            insertAfter(replacedNode, myCont.children[i]);
         }
      }
   }
}

function insertAfter(elem, refElem) {
   return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

// ================ выбор и отмена избранного =========== //

let images = document.querySelectorAll('.img');

for (let i = 0; i < images.length; i++) {
   images[i].addEventListener('click', (e) => {
      if (images[i] == e.target &&
         (!images[i].classList.contains('changeImage'))) {
         images[i].src = '/img/star_bg.png';
         images[i].classList.add('changeImage');
      } else if (images[i] == e.target &&
         (images[i].classList.contains('changeImage'))) {
         images[i].src = '/img/star.png';
         images[i].classList.remove('changeImage');
      }
   })
}
