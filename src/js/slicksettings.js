$('.header__slider').slick({
  dots: false,
  accessibility: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  mobileFirst: true,
  arrows: true,
  prevArrow: '<div class="slick-prev"><span>&lt;</span></div>',
  nextArrow: '<div class="slick-next"><span>&gt;</span></div>'
});

// $('.gallery__imgs').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   speed: 500,
//   autoplay: true,
//   arrows: false,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       }
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
    
//   ]
// })