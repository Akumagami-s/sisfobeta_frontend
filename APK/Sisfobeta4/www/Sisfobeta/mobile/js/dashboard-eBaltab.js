
$('.wrapperMainMenu').slick({
infinite: false,
slidesToShow: 3,
slidesToScroll: 1,
arrows : false,
speed: 300,
responsive: [
    {
    breakpoint: 425,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
    }
  },
]
});

$('.wrapperDataSummary').slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
arrows : false,
speed: 300,
centerMode: true,
centerPadding: '30px',
responsive: [
  {
    breakpoint: 768,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  },
    {
    breakpoint: 425,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  },
]
});


$('.wrapperSlick').slick({
infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
arrows : false,
speed: 300,
responsive: [
    {
    breakpoint: 425,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  },
]
});