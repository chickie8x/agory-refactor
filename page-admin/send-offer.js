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

    $('.offer-view-btn').click(function() {
        $('#review-offer-item-table').addClass('popup-show')
    })

    $('.review-offer-item-table-close-btn').click(function() {
        $('#review-offer-item-table').removeClass('popup-show')
    })

    $('.request-change').click(function() {
        $('.send-contract-main-wrapper').addClass('hide-item')
        $('.navigation-wrapper').addClass('hide-item')
        $('.footer').addClass('hide-item')
        $('.sub-wrapper-change-offer').removeClass('hide-item')
        setTimeout(function(){
            $('.sub-wrapper-change-offer').addClass('popup-display')
        },100)
        
    })

    $('.back-from-change-offer').click(function() {
        $('.sub-wrapper-change-offer').removeClass('popup-display')
        setTimeout(function(){
            $('.sub-wrapper-change-offer').removeClass('popup-display')
        },100)
        $('.navigation-wrapper').removeClass('hide-item')
        $('.footer').removeClass('hide-item')
        $('.send-contract-main-wrapper').removeClass('hide-item')
    })

    $('.check-quotation-price').click(function(){
        $('.send-contract-main-wrapper').addClass('hide-item')
        $('.navigation-wrapper').addClass('hide-item')
        $('.footer').addClass('hide-item')
        $('.sub-wrapper-review-offer').addClass('popup-display')
    })

    $('.back-from-review-offer').click(function(){
        $('.send-contract-main-wrapper').removeClass('hide-item')
        $('.navigation-wrapper').removeClass('hide-item')
        $('.footer').removeClass('hide-item')
        $('.sub-wrapper-review-offer').removeClass('popup-display')
    })

})