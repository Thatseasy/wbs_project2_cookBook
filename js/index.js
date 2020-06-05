$(document).ready(function () {

    //********** navbar - menu background color change while scroll

    $(window).on('scroll', function () {
        var menu_area = $('.navbar');
        if ($(window).scrollTop() > menu_area.height()) {
            menu_area.addClass('sticky-navigation');
        } 
        else {
            menu_area.removeClass('sticky-navigation');
        }
    });


    //*********** navbar - scrollspy js

    $('body').scrollspy({
        target: '#collapsible-navmenu',
        offset: 195
    });

});
