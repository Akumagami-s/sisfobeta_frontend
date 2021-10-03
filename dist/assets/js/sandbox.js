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


$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function(e){
    $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
  });