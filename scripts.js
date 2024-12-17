window.onload = function () {
    let backgroundImages = [
        "14.jpg", 
        "signuup.jpg", 
        "55.jpg", 
        "852.jpg", 
        "46.jpg"
    ];

    let currentIndex = 0;
    let heroSection = document.querySelector('.hero');

    // Function to change background image every 2 seconds
    setInterval(function () {
        currentIndex = (currentIndex + 1) % backgroundImages.length;
        heroSection.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
    }, 2000); // Change background every 2 seconds
};
// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate header elements
gsap.from("header", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

// Animate navigation links
gsap.from("nav ul li", {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.2,
    ease: "power2.out"
});

// Animate artist sections
gsap.from(".artist-section", {
    scrollTrigger: {
        trigger: ".artist-section",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out"
});


// $(document).ready(function(){
//     $('.customer-logos').slick({
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         arrows: false,
//         dots: false,
//         pauseOnHover:false,
//         responsive: [{
//             breakpoint: 768,
//             setting: {
//                 slidesToShow:4
//             }
//         }, {
//             breakpoint: 520,
//             setting: {
//                 slidesToShow: 3
//             }
//         }]
//     });
// });



