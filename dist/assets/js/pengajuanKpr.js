$(document).ready( function () {
    $('#tablePengajuan').DataTable({
        scrollX : true,
        "columns": [
            { "width": "10%" },
            { "width": "10%" },
            { "width": "15%" },
            { "width": "10%" },
            { "width": "15%" },
            { "width": "10%" },
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