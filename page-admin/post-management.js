$(document).ready(function () {

    function screenWidthTracking() {
        var screenSize = $(window).width();
        if (screenSize < 700) {
            $('.user').appendTo('.navigation');
            $('.navigation').css('align-items', 'center');
            $('.navigation').css('padding', '8px 16px');
            $('.brand-logo').css('order', '2');
            $('.collapse-btn').css('order', '1');
            $('.user').css('order', '3');

        }
        else {
            $('.user').appendTo('.message-notification');
            $('.navigation').css('align-items', 'unset');
            $('.navigation').css('padding', '0 24px');
            $('.brand-logo').css('order', 'unset');
            $('.collapse-btn').css('order', 'unset');
            $('.user').css('order', 'unset');


        }
    }

    screenWidthTracking();
    $(window).resize(screenWidthTracking);
    var collapse = true;

    $('.collapse-btn').click(function () {
        if (collapse === true) {
            $('.collapse-menu').addClass("show-collapse-menu");
        }
        else {
            $('.collapse-menu').removeClass("show-collapse-menu");
        }
        collapse = !collapse;
    });


    //post management section functions

    const mainTabObj = {
        'post-view': $('#main-tab-1'),
        'partner-invitation': $('#main-tab-2'),
        'cost-check': $('#main-tab-3'),
        'corporation-partner': $('#main-tab-4')

    }

    let activeTabBtn = $('#post-view')

    $('.btn-tab-item').click(function(){
        let tabId = $(this)[0].id
        $('.main-tab-item').each(function(){
            $(this).addClass('hide-item')
        })
        let tabContent = mainTabObj[tabId]
        tabContent.removeClass('hide-item')
        activeTabBtn.removeClass('btn-tab-active')
        $(this).addClass('btn-tab-active')
        activeTabBtn = $(this)
    })

    const subTabObj = {
        'sub-tab-btn-1': $('#sub-tab-content-1'),
        'sub-tab-btn-2': $('#sub-tab-content-2'),
        'sub-tab-btn-3': $('#sub-tab-content-3'),
        'sub-tab-btn-4': $('#sub-tab-content-4')
    }

    let activeSubTabBtn = $('#sub-tab-btn-1')

    $('.tab-btn-item').click(function(){
        let tabId = $(this)[0].id
        console.log(tabId)
        $('.sub-tab-item').each(function(){
            $(this).addClass('hide-item')
        })
        let tabContent = subTabObj[tabId]
        tabContent.removeClass('hide-item')
        activeSubTabBtn.removeClass('tab-btn-active')
        $(this).addClass('tab-btn-active')
        activeSubTabBtn = $(this)
    })

});