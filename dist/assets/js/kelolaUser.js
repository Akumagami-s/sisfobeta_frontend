$(document).ready( function () {
    $('#tableMasterKategori').DataTable({
        scrollX : true,
        "columns": [
            { "width": "5%" },
            { "width": "10%" },
            { "width": "15%" },
            { "width": "20%" },
            { "width": "20%" },
            { "width": "10%" },
            { "width": "10%" },
            { "width": "10%" },
        ],
    });
} );

$(document).ready( function () {
    $('#tablePengelola').DataTable({
        scrollX : true,
        "columns": [
            { "width": "5%" },
            { "width": "10%" },
            { "width": "15%" },
            { "width": "20%" },
            { "width": "20%" },
            { "width": "20%" },
            { "width": "10%" },
        ],
    });
} );

$(document).ready( function () {
    $('#tableUser').DataTable({
        scrollX : true,
        "columns": [
            { "width": "10%" },
            { "width": "20%" },
            { "width": "20%" },
            { "width": "20%" },
            { "width": "20%" },
            { "width": "10%" },
        ],
    });
} );

$(document).ready( function () {
    $('#tableVerifikasi').DataTable({
        scrollX : true,
        "columns": [
            { "width": "5%" },
            { "width": "10%" },
            { "width": "15%" },
            { "width": "20%" },
            { "width": "20%" },
            { "width": "10%" },
            { "width": "10%" },
            { "width": "10%" },
        ],
    });
} );


$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function(e){
    $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
  });

//for slick BACA YOGA
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


//for sticky menu BACA YOGA
  $(document).scroll(function(){
    $('.pembungkus').toggleClass('onScrolled', $(this).scrollTop() > 170);
  });

