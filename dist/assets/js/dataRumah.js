$(document).ready( function () {
    $('#tableDataRumah').DataTable({
        scrollX : true,
        "columns": [
            { "width": "5%" },
            { "width": "5%" },
            { "width": "10%" },
            { "width": "10%" },
            { "width": "5%" },
            { "width": "5%" },
            { "width": "5%" },
            { "width": "5%" },
            { "width": "5%" },
            { "width": "10%" },
            { "width": "5%" },
            { "width": "5%" },
            { "width": "5%" },
            { "width": "15%" },
            { "width": "5%" },
        ],
    });
} );

$(document).ready( function () {
    $('#tableDataFaslitas').DataTable({
        scrollX : true,
        "columns": [
            { "width": "20%" },
            { "width": "70%" },
            { "width": "10%" },
        ],
    });
} );


$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function(e){
    $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
  });