$(document).ready( function () {
    $('#tableRekayasaData').DataTable({
        scrollX : true,
    });
} );

$('.menu').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows : false,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
      ]
  });

//for sticky menu BACA YOGA
  $(document).scroll(function(){
    $('.pembungkus').toggleClass('onScrolled', $(this).scrollTop() > 170);
  });

