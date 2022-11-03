$('.category-card__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
        breakpoint: 1235,
        settings: {
            slidesToShow: 3
        }
    },
    {   breakpoint: 685,
        settings: {
            slidesToShow: 2
        }
    },
    {
          breakpoint: 535,
        settings: {
            slidesToShow: 1
        }  
    }
    ]
});

let current = Date.now();
let start = Date.parse('2022-10-17T09:00:00.000Z');
let day = 60 * 60 * 24 * 1000;
let step = 3;
let years = 10;
let cycles = Math.round(365 / step) * years; // year (365 days) / step (9 days)
let daysSum = day * step;
let endDate = '';

for (i = 1; i <= cycles; i++) {

    if ( start + daysSum - day * step <= current && start + daysSum >= current ) {
        endDate = start + daysSum;
    }

    daysSum += day * step;
}

let timer = setInterval(function() {
    let now = new Date().getTime();
    let t = endDate - now;

    if (t >= 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("timer-days").innerHTML = "0"+days;

        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2);

        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2);

        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2);
        
        $('#timer-days').prev().find('circle').css('stroke-dashoffset', 282.743 - (days * 282.743 / 30));
        $('#timer-hours').prev().find('circle').css('stroke-dashoffset', 282.743 - (hours * 282.743 / 24));
        $('#timer-mins').prev().find('circle').css('stroke-dashoffset', 282.743 - (mins * 282.743 / 60));
        $('#timer-secs').prev().find('circle').css('stroke-dashoffset', 282.743 - (secs * 282.743 / 60));
    }
}, 1000);
$('.product-submenu__link ').hover(function() {
    $(this).css("color", "rgb(239, 62, 51)");
},
function(){
    $(this).css("color", "rgb(0, 0, 0)");
});
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
$('.category').scroolly( [
    {
        from: 'doc-top = el-top',
        css: {
            position: 'sticky',
            top: '0px',
            bottom: ''
        }
    }
], $('.body'));

$('.product-menu__item:last-child').click(function() {
    $('.body').css('position','fixed');
    $('.header').hide();
    $('.product-menu__mobile').css('display','flex');
    $('.product-menu__item').clone().appendTo('.product-menu__mobile');
});
$('.close__item').click(function(){
    $('.body').css('position','relative');
    $('.header').show();
    $('.product-menu__mobile').css('display','none');
    $('.product-menu__mobile').find('.product-menu__item').remove();
});
$('.burger').click(function() {
    $('.menu').toggleClass('active-menu');
    $(this).toggleClass('open');
});
