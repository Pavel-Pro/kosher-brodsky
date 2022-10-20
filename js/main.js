$('.product-menu__link').mouseover(function(){
    $('.product-menu__item').last().addClass('hover');
    console.log(1);
});
$('.product-menu__link').mouseout(function(){
    $('.product-menu__item').last().removeClass('hover');
});