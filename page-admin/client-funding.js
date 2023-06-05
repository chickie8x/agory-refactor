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


    $('.funding-deposite-btn').click(function(){
        $('.client-funding-content > div').each((idx,item) => {
            $(item).addClass('hide-item')
        })
    })

    $('.add-creditcard').click(function(){
        alert('add card')
    })


})