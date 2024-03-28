$(document).ready(function () {

    $('#unc-upload').change(function() {
        const nameHolder = $('#filename-holder')
        const fileName = ($('#unc-upload').val().split('\\').pop())
        if(fileName){
            nameHolder.text(fileName)
        }
        else{
            nameHolder.text('No file chosen')
        }
    })


    $('#delete-chosen-file').click(function() {
        $('#unc-upload').val(null)
        $('#filename-holder').text('No file chosen')
    })

    $('.pending-state-view-btn').click(function(){
        $('.transaction-management-content-tab').addClass('hide-item')
        $('.pending-withdraw-request-detail').removeClass('hide-item')
    })

    $('.pending-withdraw-request-detail-back').click(function(){
        $('.transaction-management-content-tab').removeClass('hide-item')
        $('.pending-withdraw-request-detail').addClass('hide-item')
    })

    $('#cancel-payment-btn').click(function(){
        $('.cancel-payment-popup').addClass('popup-show')
    })

    $('#approve-payment-btn').click(function(){
        $('.approve-payment-popup').addClass('popup-show')
    })

    $('#do-exit-cancel-popup').click(function(){
        $('.cancel-payment-popup').removeClass('popup-show')
    })

    $('#do-exit-approve-popup').click(function(){
        $('.approve-payment-popup').removeClass('popup-show')
    })

    $('.successful-state-view-btn').click(function(){
        $('.transaction-management-content-tab').addClass('hide-item')
        $('.complete-withdraw-request-detail').removeClass('hide-item')
    })

    $('.successful-state-view-btn').click(function(){
        $('.transaction-management-content-tab').addClass('hide-item')
        $('.complete-withdraw-request-detail').removeClass('hide-item')
    })

    $('.failed-state-view-btn').click(function(){
        $('.transaction-management-content-tab').addClass('hide-item')
        $('.failed-withdraw-request-detail').removeClass('hide-item')
    })


})