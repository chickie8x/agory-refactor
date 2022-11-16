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

            
            $.each($('.item-title'), function(){
                $(this).parent().prev().append($(this))
            })

        }
        else {
            $('.user').appendTo('.message-notification');
            $('.navigation').css('align-items', 'unset');
            $('.navigation').css('padding', '0 24px');
            $('.brand-logo').css('order', 'unset');
            $('.collapse-btn').css('order', 'unset');
            $('.user').css('order', 'unset');


            $.each($('.item-title'), function(){
                $(this).parent().next().prepend($(this))
            })

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


    var tabs = [
        {
            id: 0,
            el: $('#tab-corporating')
        },
        {
            id: 1,
            el: $('#tab-applying')
        },
        {
            id: 2,
            el: $('#tab-invitation')
        },
        {
            id: 3,
            el: $('#tab-notes')
        },
    ]


    $('.tabs-button').click(function () {
        var tabId = $('.tabs-button').index(this)
        $.each($('.tabs-button'), function (i, n) {
            if (i != tabId) {
                $(n).removeClass('tab-active')
            }
            else {
                $(n).addClass('tab-active')
            }
        })
        tabs.forEach(item => {
            if (item.id != tabId) {
                item.el.css('display', 'none')
            }
            else {
                item.el.css('display', 'block')
            }

        })

    })


    var tabBtnDisplay = [0,1]
    function tabBtnInit(){
        if($(window).width() <=700) {
            $('.tabs-button').each(function(i,n){
                if($.inArray(i,tabBtnDisplay) != -1){
                    $(n).css('display','inline-block')
                }
                else {
                    $(n).css('display','none')
                }
            })

            if(tabBtnDisplay[0]===0){
                $('.tab-btn-next').css('display','block')
                $('.tab-btn-back').css('display','none')
            }

            if(tabBtnDisplay[0] != 0 && tabBtnDisplay[0] != 2){
                $('.tab-btn-next').css('display','block')
                $('.tab-btn-back').css('display','block')
            }

            if(tabBtnDisplay[0] === 2){
                $('.tab-btn-next').css('display','none')
                $('.tab-btn-back').css('display','block')
            }
        }
        else {
            $.each($('.tabs-button'), function(){
                $(this).css('display','unset')
            })

            $('.tab-btn-next').css('display','none')
            $('.tab-btn-back').css('display','none')
        }
        
    }
    
    tabBtnInit()
    $(window).resize(tabBtnInit)


    $('.tab-btn-next').click(function(){
        tabBtnDisplay = tabBtnDisplay.map(item => {
            if (tabBtnDisplay[1]<3 && item < $('.tabs-button').length){
                return item+1
            }
            else {
                return item
            }
        })
        if(tabBtnDisplay[1]< $('.tabs-button').length){
            tabBtnInit(tabBtnDisplay)
        }
    })


    $('.tab-btn-back').click(function(){
        tabBtnDisplay = tabBtnDisplay.map(item => {
            if (tabBtnDisplay[0]>0){
                return item-1
            }
            else {
                return item
            }
        })
        if(tabBtnDisplay[0] >= 0){
            tabBtnInit(tabBtnDisplay)
        }
    })

    var tableHeaders = $('.t-head').children()

    function tableMobile(){
        if($(window).width() <=700){
            $.each($('.t-row'), function(){
                $.each($(this).children(), function(i,n){
                    if (i!=0 && i!=5 && $(n).children().length === 1){
                        $(n).prepend('<span class="header-cells">'+ $(tableHeaders[i]).text() +'</span>')
                    }
                })
            })
        }
        else {
            $('.header-cells').remove()
        }
    }
    tableMobile()
    $(window).resize(tableMobile)










});