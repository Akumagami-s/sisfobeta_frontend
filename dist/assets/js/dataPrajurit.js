$(document).ready( function () {
    $('#tablePokokPrajurit').DataTable({
        scrollX : true,
    });
} );

document.querySelector(".searchIcon").addEventListener("click",function(){
    document.querySelector(".searchInput").classList.toggle("active");
});

$(document).scroll(function(){
    $('.pembungkus').toggleClass('onScrolled', $(this).scrollTop() > 150);
  });

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