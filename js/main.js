
$('.tests-slider').owlCarousel({
    items: 5,
    nav:true,
    // navText: ["<i class='fas fa-chevron-left></i>", "<i class='fas fa-chevron-right></i>" ],
    dots: false,
    center:false,
    margin: 15,
    responsive: {
        0: {
            items: 1,
        },
        560: {
            items: 2,
        },
        900: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
})


$('.test-types').owlCarousel({
    items: 5,
    nav:true,
    // navText: ["<i class='fas fa-chevron-left></i>", "<i class='fas fa-chevron-right></i>" ],
    dots: false,
    center:false,
    margin: 15,
    responsive: {
        0: {
            items: 1,
        },
        560: {
            items: 2,
        },
        900: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
})

$('.top-tests-slider').owlCarousel({
    items: 3,
    nav:true,
    // navText: ["<i class='fas fa-chevron-left></i>", "<i class='fas fa-chevron-right></i>" ],
    dots: false,
    center:false,
    margin: 15,
    responsive: {
        0: {
            items: 1,
        },
        560: {
            items: 2,
        },
        900: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
})

$('.testimonials').owlCarousel({
    pagination:false,
    nav:false,
    dots: true,
    autoplay: true,
    // navText: ["<i class='fas fa-chevron-left></i>", "<i class='fas fa-chevron-right></i>" ],
    dots: false,
    center:false,
    margin: 15,
    responsive: {
        0: {
            items: 1,
        },
        560: {
            items: 1,
        },
        900: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
})
