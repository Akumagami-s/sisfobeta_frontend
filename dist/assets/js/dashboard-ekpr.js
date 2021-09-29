$('.wrapperDataMassDebet').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });