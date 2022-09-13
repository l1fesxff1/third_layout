/* S  L  I  K  E ___ S  L  I  D  E  R*/
$(document).ready(function(){
    $('.slider').slick(
        {
        infinite: true,
        speed:1000,
        autoplay:true,
        autoplaySpeed: 4000,
        fade: true,
        arrows: true,
        appendArrows: $('.buttons_container')
    }
    );
});
/* P O P U P __ ON */
$(document).ready(function(){
    $('.popup_link').click(function(){
        $(".popup").fadeIn(500);
    });
});
/* P O P U P __ O F F */
$(document).ready(function(){
    $('.close').click(function(){
        $(".popup").fadeOut(500);
    });
});