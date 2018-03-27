$(function() {

    "use strict";

    $('.companies_btn').click(function () {
        $('.companies_list').toggleClass('hide');
        $('.companies_btn').toggleClass('active');
    });

    $('.companies_list-item').click(function () {
        $('.calculator-analog, .calculator-our').addClass('active');
        $('.companies_list').addClass('hide');
        $('.calculator-list__item').addClass('active');
        $('.companies_btn').toggleClass('active');
        $('#company-name').append();
    });

    $('.calculator-analog, .calculator-our').onkeyup(function () {

    });

});