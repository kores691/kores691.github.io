$(function() {

    "use strict";

    $('.slider-list').slick({
        infinite: true,
        slidesToShow: 8,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000
    });

    $('.tabs a').click(function () {
        $(this).parents('.tab-wrap').find('.tab-users').addClass('hidden');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hidden');
        $(this).parent().addClass('active');
        return false
    });



    $('.btn-unfav').click(function (event) {
        $(this).addClass('hide');
        $(this).parent().find('.btn-fav').removeClass('hide');
    });

    $('.btn-fav').click(function (event) {
        $(this).addClass('hide');
        $(this).parent().find('.btn-unfav').removeClass('hide');
    });

});
