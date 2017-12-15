$(document).ready(function() {


    // Navbar

    $('.nav-item').on('mouseover', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        // $('.tab-item').removeClass('d-block');
        $(this).find($('.tab-item')).addClass('d-block');

        $(this).on('mouseout', function () {
            $('.tab-item').removeClass('d-block');
        });
    });


    // Masonry
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
        // isFitWidth: true
    });

    //Gallery-item-hover
    var flag = true;
    $('.grid-item').on('mouseover', function () {
        if(flag===true){
            flag=false;
            $(this).find('.item-info').slideDown(function () {
                flag=true;
            }).css('display', 'block');
            $(this).siblings().find('.item-info').slideUp();
        }
    });

    //Gallery-leave
    $('.gallery').on('mouseleave',function () {
        $('.item-info').slideUp()
    })


});
