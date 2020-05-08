$(function () {
    let intro = $('#intro');
    let header  = $("#header");
    let h = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos,h);


    $(window).on('scroll resize',function () {
        h = intro.innerHeight();
       scrollPos = $(this).scrollTop();
        checkScroll(scrollPos,h);


    });
    function checkScroll(scrollPos,h) {
        if(scrollPos > h){
            header.addClass('fixed');
        }
        else {
            header.removeClass('fixed');
        }
    }

    $("[data-scroll]").on('click', function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;


        $('html, body').animate({
            scrollTop: elementOffset -50
        },500);
    });



});