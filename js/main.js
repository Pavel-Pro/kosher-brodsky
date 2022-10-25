$('.category-card__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToShow: 4
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
