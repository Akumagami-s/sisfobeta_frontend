document.querySelector(".searchIcon").addEventListener("click",function(){
    document.querySelector(".searchInput").classList.toggle("active");
});


$('.wrapperDataSummary').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

