$('.wrapperDataMassDebet').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '40px',
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '30px',
          }
        },
      ]
  });

  $('.menu').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows : false,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
      ]
  });





  $('.wrapperStatistic').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows : false,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
  });

  $(document).ready(function() {
    $('#detailDataBRI').DataTable( {
      "scrollX": true,
      "paging": false,

    });
} );



$(document).ready(function() {
  $('#detailDataBTN').DataTable( {
    "scrollX": true,
    "paging":   false,
  });
} );