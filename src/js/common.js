$(document).ready(function() {
    $('.nav-item').on('mouseover', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.tab-item').removeClass('d-block');
        $(this).find($('.tab-item')).addClass('d-block');

    })
});
