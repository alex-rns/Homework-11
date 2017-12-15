$(document).ready(function() {

    $('.nav-item').on('mouseover', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        // $('.tab-item').removeClass('d-block');
        $(this).find($('.tab-item')).addClass('d-block');

        $(this).on('mouseout', function () {
            $('.tab-item').removeClass('d-block');
        });
    });

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
        // isFitWidth: true
    });

    $('.grid-item').on('mouseover', function () {
        $(this).find('.item-info').slideDown().css('display', 'block');
        $(this).siblings().find('.item-info').slideUp().css('display', 'none');

    })

});
