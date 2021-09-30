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