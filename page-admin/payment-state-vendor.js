$(document).ready(function () {

    $('#modify-list-btn').click(function(){
        $('.quotation-content-item-action-btn, .total-items, .modify-list-action-btn').removeClass('hide-item')
        $(this).addClass('hide-item')
    })

    $('.cancel-modify-list-btn').click(function() {
        $('.quotation-content-item-action-btn, .total-items, .modify-list-action-btn').addClass('hide-item')
        $('#modify-list-btn').removeClass('hide-item')
    })

    $('.apply-modify-list-btn').click(function(){
        $('.list-pending-changed').removeClass('hide-item')
        $('.quotation-content-item-action-btn, .total-items, .modify-list-action-btn, .recent-activity-secondary-text').addClass('hide-item')
    })

    $('.review-changed-list-btn').click(function(){
        $('.updated-list-sent-popup').addClass('popup-show')
        $('body').addClass('disable-body-scroll')
    })

    $('.close-sent-popup').click(function(){
        $('.updated-list-sent-popup').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })

    $('#tab-content-section-request-payment-btn').click(function(){
        $('.payment-request-popup').addClass('popup-show')
        $('body').addClass('disable-body-scroll')
    })

    $('.popup-content-footer-btn-back').click(function(){
        $('.payment-request-popup').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })

    $('.cash-back-btn').click(function(){
        $('.cashback-request-popup').addClass('popup-show')
        $('body').addClass('disable-body-scroll')
    })

    $('.popup-content-footer-btn-back').click(function(){
        $('.cashback-request-popup').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })
})