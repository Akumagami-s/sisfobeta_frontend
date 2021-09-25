$(document).ready( function () {
    $('#tableMasterInstitutPangkat').DataTable({
        scrollX : true,
        "columns": [
            { "width": "20%" },
            { "width": "70%" },
            { "width": "10%" },
        ],
    });
} );
$(document).ready( function () {
    $('#tableMasterInstitutKesatuan').DataTable({
        scrollX : true,

        "columns": [
            { "width": "20%" },
            { "width": "70%" },
            { "width": "10%" },
        ],
    });
} );


$(document).ready( function () {
    $('#tableMasterInstitutKorp').DataTable({
        scrollX : true,

        "columns": [
            { "width": "20%" },
            { "width": "70%" },
            { "width": "10%" },
        ],
    });
} );



$(document).ready( function () {
    $('#tableMasterKategori').DataTable({
        scrollX : true,
        "columns": [
            { "width": "20%" },
            { "width": "70%" },
            { "width": "10%" },
        ],
    });
} );

$(document).ready( function () {
    $('#tableMasterKotama').DataTable({
        scrollX : true,
        "columns": [
            { "width": "20%" },
            { "width": "70%" },
            { "width": "10%" },
        ],
    });
} );

$(document).ready( function () {
    $('#tableMasterSatminkal').DataTable({
        scrollX : true,
        "columns": [
            { "width": "20%" },
            { "width": "30%" },
            { "width": "40%" },
            { "width": "10%" },
        ],
    });
} );

$(document).ready( function () {
    $('#tableMasterBunga').DataTable({
        scrollX : true,
        "columns": [
            { "width": "20%" },
            { "width": "30%" },
            { "width": "40%" },
            { "width": "10%" },
        ],
    });
} );

$(document).ready( function () {
    $('#tableMasterPotongan').DataTable({
        scrollX : true,
        "columns": [
            { "width": "20%" },
            { "width": "30%" },
            { "width": "40%" },
            { "width": "10%" },
        ],
    });
} );

$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function(e){
    $($.fn.dataTable.tables(true)).DataTable()
        .columns.adjust();
  });

