$(document).ready(function () {

    $('.request-accepted').click(function(){
        $('#request-accepted-popup').addClass('popup-show')
        $('body').addClass('disable-body-scroll')
    })

    $('.popup-cancel-deal-btn').click(function(){
        $('#request-accepted-popup').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })

    $('.popup-send-deal-btn').click(function(){
        $('#request-accepted-popup').removeClass('popup-show')
        $('#corp-start-popup').addClass('popup-show')
    })

    $('.confirm-contract-btn').click(function(){
        $('#corp-start-popup').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })

    $('.cancel-deal').click(function(){
        $('#request-refused-popup').addClass('popup-show')
        $('body').addClass('disable-body-scroll')
    })

    $('.popup-cancel-refuse-deal-btn').click(function(){
        $('#request-refused-popup').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })
})