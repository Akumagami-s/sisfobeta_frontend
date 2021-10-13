$(document).ready( function () {
    $('#tableSandbox').DataTable({
        scrollX : true,
        "columns": [
            { "width": "15%" },
            { "width": "15%" },
            { "width": "15%" },
            { "width": "20%" },
            { "width": "20%" },
            { "width": "15%" },
        ],
    });
} );


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

  $(document).scroll(function(){
    $('.pembungkus').toggleClass('onScrolled', $(this).scrollTop() > 170);
  });


$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function(e){
    $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
  });