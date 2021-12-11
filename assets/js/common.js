/* Jquery */

/* Карусель. Плагин owlCarousel */

let owlCarouselPlugin = function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2,
                center: true
            },            
            1000:{
                items:3
            },
            1200:{
                items:4
            },
            1700:{
                items:5
            },
        }
    });
    }
    owlCarouselPlugin();


    /* Маска для ввода номера телефона */ // Ссылка на плагин: https://drive.google.com/file/d/0ByDpJh5AcnQITV9HbExoSGN3ZEk/view?resourcekey=0-j8MA_bJUUIfCKTqt7LSDJQ
    let maskPhonePlugin = function () {
        let phoneInp = document.querySelector('.js-phone');
        $(function(){
        $(phoneInp).mask("8(999) 999-9999");
      });
    }
maskPhonePlugin();


/* Видимость пароля */
let pasVisibleControl = document.querySelector(".js-control-pas");
let pasInput = document.querySelector(".js-old-pas-input")

let visibilityHandler = () => {
    if (pasInput.type === 'password') {
        pasInput.type = 'text';
        pasInput.placeholder = 'Введите старый пароль'
        pasVisibleControl.classList.remove('view');
        pasVisibleControl.classList.add('no-view')
    }

    else {
        pasInput.type = 'password';
        pasInput.placeholder = '•••••••••••••••••••';
        pasVisibleControl.classList.remove('no-view');
        pasVisibleControl.classList.add('view');
    }
}

/* Видимость главного меню */
let menu = document.querySelector('.js-menu');
let body = document.querySelector('.js-body');

let menuVisibilityHandler = () => {
    if (menu.classList.contains('d-none')){
        body.classList.add('js-no-scroll');
        menu.classList.remove('d-none');
    }
    else {
        body.classList.remove('js-no-scroll');
        menu.classList.add('d-none');
    }
}

/* Валидация формы */

let form = document.querySelector('.js-form');
let inputs = document.querySelectorAll('.js-input');
let errorsMessage = document.querySelectorAll('.js-error');


let formValidator = (evt) => {
    
    for(let i = 0; i < inputs.length; i++) {
        if(!inputs[i].value) {
            evt.preventDefault();
            inputs[i].classList.add('input-err');
            errorsMessage[i].classList.remove('d-none')
        }

        inputs[i].onfocus = () => {
            inputs[i].classList.remove('input-err');
            errorsMessage[i].classList.add('d-none');
        }
        inputs[i].value ='';
    }
}
form.addEventListener('submit', formValidator);

/* Добавление товара в избранные */

let likes = document.querySelectorAll('.favorite-heart'); //Сердечко на товаре
let likeDisplay = document.querySelector('.like-counter');//span с количеством избранных товаров
let likeCounter = 0; // Переменная хранящая количество избранных товаров


let likeHandler = (el) => {
        if(el.classList.contains('selected-product')) {
            el.classList.remove('selected-product');
            likeCounter -= 1;
            likeDisplay.innerHTML = String(likeCounter);
        }
        else{
            el.classList.add('selected-product');
            likeCounter +=1;
            likeDisplay.innerHTML = String(likeCounter);
        }

        if (likeCounter === 0) {
            likeDisplay.classList.add('d-none');
        }
        else {
            likeDisplay.classList.remove('d-none');
        }

    
}

/* media */

window.onresize = () => {           // Функция обновляющая страницу при изменении размеров (Нужно, чтобы при повороте устройства заново загрузился скрипт и прошла проверка ширины экрана)
    document.location.reload(true); 
    }

    if (document.documentElement.clientWidth < 995 && document.documentElement.clientWidth > 575) {
    document.querySelector('.js-footer-menu').classList.remove('col-12');
    document.querySelector('.js-footer-menu').classList.add('col-');
}  

if (document.documentElement.clientWidth < 800) {

   let formContainers = document.querySelectorAll('.js-form-containers')
   formContainers.forEach(el => {
       el.classList.remove('col-10');
       el.classList.add('col-');
   })
   document.querySelector('.js-title-containers').classList.remove('col-sm-9');
   document.querySelector('.js-title-containers').classList.add('col-');
   document.querySelector('.js-side-nav-container').classList.remove('col-sm-2');
   document.querySelector('.js-side-nav-container').classList.add('col-');
   document.querySelector('.js-profile-data-container').classList.remove('col-');
   document.querySelector('.js-profile-data-container').classList.add('col-12');
   document.querySelector('.js-change-password').classList.remove('col-');
   document.querySelector('.js-change-password').classList.add('col-12');
   document.querySelector('.js-header-bar').classList.add('col-10')

   document.querySelector('.js-button-up').remove()
   document.querySelector('.js-button-down').classList.remove('d-none')
} 
