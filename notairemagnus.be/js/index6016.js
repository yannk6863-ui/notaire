// let teamSlider = new Flickity( '.team-slider', {
//     cellAlign: 'left',
//     wrapAround: true,
//     prevNextButtons: false,
//     pageDots: false,
//     autoPlay: 3000,
// });
document.querySelectorAll(".services-links .service-item").forEach(service => {
    service.addEventListener("mouseenter", function () {
        document.querySelectorAll(".services-links .service-item").forEach(i => i.classList.add("inactive"));
        this.classList.remove("inactive");
    })
    service.addEventListener("mouseleave", function () {
        document.querySelectorAll(".services-links .service-item").forEach(i => i.classList.remove("inactive"));
    })
})


$(function () {
    $(".offers-slider").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        },
        margin: 16,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        autoplayHoverPause: true
    });
});