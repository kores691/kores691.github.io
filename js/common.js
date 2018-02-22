$(function() {

    "use strict";

    $('#info').click(function () {
        $('#info_box').toggleClass('open');
    });

    $('#menu_btn').click(function () {
        $('#main_nav').toggleClass('open');
    });

    $('.gallery_img_item').click(function () {
        var img = $(this);
        var src = img.attr('src');
        $('body').append('<div class=\'popup\'>' + '<div class=\'popup_bg\'></div>' + '<img src=\'img/work-stub-big.jpg\' class=\'popup_img\' />' + '</div>');
        $('.popup').fadeIn(800);
        $('.popup_bg').click(function () {
            $('.popup').fadeOut(800);
            setTimeout(function () {
                $('.popup').remove();
            }, 800);
        });
    });

    $('.img_box_work, .img_post_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

});
