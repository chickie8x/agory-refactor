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

    $('.request-changed-rejected-btn').click(function(){
        $('.reject-changed-request-popup').addClass('popup-show')
    })

    $('.request-changed-accepted-btn').click(function(){
        $('.accept-changed-request-popup').addClass('popup-show')
    })


    $('.reject-self-close-btn').click(function(){
        $('.reject-changed-request-popup').removeClass('popup-show')
    })

    $('.accept-self-close-btn').click(function(){
        $('.accept-changed-request-popup').removeClass('popup-show')
    })


    $('.reject-changed-process-btn').click(function(){
        $('.reject-changed-request-popup, .updated-list-sent-popup').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })

    $('.accept-changed-process-btn').click(function(){
        $('.accept-changed-request-popup, .updated-list-sent-popup').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })

    // client section 

    var paymentContextMenu = false


    $('.table-row-action-btn-collapse').click(function(){
      var ctx = $(this).prev()[0]
    
      if(!paymentContextMenu){
        $(ctx).css('display', 'flex')
        paymentContextMenu = true
      }
      else{
        $('.table-row-action-btn ').each((idx,item) => {
           $(item).css('display', 'none')
        })
        paymentContextMenu = false
      }
      
    })

    $('.process-reject-btn').click(function(){
        $('.reject-payment-request-popup').addClass('popup-show')
        $('body').addClass('disable-body-scroll')
    })

    $('.popup-content-footer-btn-back-client').click(function(){
        $('.reject-payment-request-popup, .payment-done-popup, .deposite-popup, .view-report-detail-popup').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })

    $('#tab-content-section-request-payment-btn-client, .process-pay-btn').click(function(){
        $('.payment-done-popup').addClass('popup-show')
        $('body').addClass('disable-body-scroll')
    })

    $('#list-task-sign-btn').click(function(){
        $('.deposite-popup').addClass('popup-show')
        $('body').addClass('disable-body-scroll')
    })

    $('.view-report-detail').click(function(){
        $('.view-report-detail-popup').addClass('popup-show')
        $('body').addClass('disable-body-scroll')
    })

    $('.payment-request-refused').click(function(){
        $('.popup-payment-request-refused').addClass('popup-show')
        $('body').addClass('disable-body-scroll')
    })

    $('.popup-content-footer-btn-back-refused').click(function(){
        $('.popup-payment-request-refused').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })

    $('.task-history-popup-btn').click(function(){
        $('.popup-task-history').addClass('popup-show')
        $('body').addClass('disable-body-scroll')
    })

    $('.popup-task-history-close').click(function(){
        $('.popup-task-history').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })


})