$(document).ready(function(){
    var $juryItems = $('.hr__jury__desc');
    $juryItems.each(function(ind, el) {
        $(el).dotdotdot({
            height: 50
        });

        $(el).parent().find('.hr__jury__readmore').click(function(e) {
            e.preventDefault();
            $(el).parent().parent().addClass('hr__jury__item--open');
            $(el).trigger('destroy');
        });

        $(el).parent().find('.hr__jury__close').click(function(e) {
            e.preventDefault();
            $(el).parent().parent().removeClass('hr__jury__item--open');
            $(el).dotdotdot({
                height: 50
            });
        });
    });

    var owl = $('#wind_testimonials');
 
    owl.owlCarousel({
        items : 3,
        itemsDesktop : [1000,3],
        itemsTablet: [600,2],
        itemsMobile : [400, 1],
        navigation : false,
        pagination : true
     
    });


    $('.wind__news__bg-text, .wind__news__horizontal-text').dotdotdot({
        height: 46
    });

    $('.wind__news__sm-text').dotdotdot({
        height: 110
    });
    
});
