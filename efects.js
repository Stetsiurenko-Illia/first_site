$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      dotsClass: 'slider-dot',
    });

    $('header menu a').click(function(e){
        e.preventDefault();
        const id = $(this).attr('href');
        console.log(id);

        const element = $(id)

        if(element.lenth){
            $('html, body').animate({
                scrollTop: $(id).offset().top
            }, 800, function(){
                window.location.id = id;
            });
        }
    })
  });