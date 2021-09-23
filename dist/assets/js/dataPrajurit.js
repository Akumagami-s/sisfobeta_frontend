$(document).ready( function () {
    $('#tablePokokPrajurit').DataTable({
        scrollX : true,
    });
} );

document.querySelector(".searchIcon").addEventListener("click",function(){
    document.querySelector(".searchInput").classList.toggle("active");
});