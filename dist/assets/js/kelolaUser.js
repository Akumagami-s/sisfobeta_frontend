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