/* Search */
document.querySelector(".searchIcon").addEventListener("click",function(){
    document.querySelector(".searchInput").classList.toggle("active");
});


$(document).ready(function(){
    $('.wrappercard-statistic').slick({
        arrows : false,
        slidesToShow : 2,
        infinite : false,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});