$(document).ready(function(){ // jQuery -> чекаємо завантаження сторінки
    $('#slider').slick({ // $('.slider')  -> обираємо елемент на якому запустити ; .slick({    }) заускаємо код слайдера з бібліотеки з налаштування
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        dotsClass: 'slider-dot',
    })

    $('header menu a').click(function(e) {
        e.preventDefault();
         const id = $(this).attr('href');


         const element = $(id)

         if (element.length){
            $('html, body').animate({
                scrollTop: element.offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = id;
            });
        }
    });

});