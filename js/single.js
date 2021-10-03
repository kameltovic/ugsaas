$(document).ready(function () {
    $('.singleCalendar').clndr({
        weekOffset: 1,
    });
})


$('#getaquote').on('click', function(){
    $('#basket').fadeIn();
})
$('#closeBasket').on('click', function(){
    $('#basket').fadeOut();
})