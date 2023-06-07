$(document).ready(function () {

    var initMethod = undefined

    var methodDetail = {
        method1: $('.funding-payment-method-content'),
        method2: $('.funding-payment-method-content-ATM'),
        method3: $('.banking-transfer'),
    }


    $('.funding-payment-method-item').click(function(){
        $('.funding-payment-method-item').each((idx,item) => {
            $(item).removeClass('funding-payment-method-selected')
            $(item).children(':first').prop('checked',false)
        })

        $('.funding-payment-method-detail-wrapper > div').each((idx,item)=> {
            $(item).addClass('hide-item')
        })

        initMethod = $(this).prop('id')
        $(methodDetail[initMethod][0]).removeClass('hide-item')

        $(this).addClass('funding-payment-method-selected')
        $(this).children(':first').prop('checked', true)
    })


    $('.funding-deposite-btn, .funding-deposite-btn-tablet').click(function(){
        $('.client-funding-content > div').each((idx,item) => {
            $(item).addClass('hide-item')
            $('.deposited-finish').removeClass('hide-item')
        })
    })

    $('.add-creditcard').click(function(){
        $('.add-creditcard-popup').addClass('popup-show')
        $('body').addClass('disable-body-scroll')

    })

    $('.cancel-add-card').click(function(){
        $('.add-creditcard-popup').removeClass('popup-show')
        $('body').removeClass('disable-body-scroll')
    })




})