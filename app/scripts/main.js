$(document).ready(function(){
    var $juryItems = $(".hr__jury__desc");
    $juryItems.each(function(ind, el) {
        $(el).dotdotdot({
            height: 50
        });

        $(el).parent().find('.hr__jury__readmore').click(function(e) {
            e.preventDefault();
            $(el).parent().parent().addClass('hr__jury__item--open');
            $(el).trigger("destroy");
        });

        $(el).parent().find('.hr__jury__close').click(function(e) {
            e.preventDefault();
            $(el).parent().parent().removeClass('hr__jury__item--open');
            $(el).dotdotdot({
                height: 50
            });
        });
    })
    
});
