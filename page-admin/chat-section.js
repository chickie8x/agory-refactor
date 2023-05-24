$(document).ready(function () {

    $('.contact-item').click(function(){
        $('.contact-item').css('background', 'none')
        $(this).css('background', '#E4E4EB')
        var w = $(window).width()
        if(w<=670){
            $('.contacts-list').addClass('collapse-contacts-mobile')
            $('.chat-content-section').addClass('expand-chat-mobile')
        }
    })

    $('#sidebar-search-btn').click(function(){
        $('.sidebar-default-view').addClass('hide-item')
        $('.sidebar-mes-event').addClass('sidebar-subview-show')
    })

    $('#mes-event-btn-back').click(function(){
        $('.sidebar-mes-event').removeClass('sidebar-subview-show')
        setTimeout(function(){
            $('.sidebar-default-view').removeClass('hide-item')
        },300)
    })

    $('#sidebar-file-btn').click(function(){
        $('.sidebar-default-view').addClass('hide-item')
        $('.sidebar-event-search').addClass('sidebar-subview-show')
    })

    $('#search-event-btn-back').click(function(){
        $('.sidebar-event-search').removeClass('sidebar-subview-show')
        setTimeout(function(){
            $('.sidebar-default-view').removeClass('hide-item')
        },300)
    })

    $('#sidebar-note-btn').click(function(){
        $('.sidebar-default-view').addClass('hide-item')
        $('.sidebar-event-note').addClass('sidebar-subview-show')
    })

    $('#note-event-btn-back').click(function(){
        $('.sidebar-event-note').removeClass('sidebar-subview-show')
        setTimeout(function(){
            $('.sidebar-default-view').removeClass('hide-item')
        },300)
    })

    var defaultViewTablet = true

    $('#collapse-sidebar-mobile').click(function(){

        var w = $(window).width()

        if(w > 670){
            if(defaultViewTablet){
                $('.contacts-list').addClass('collapse-layout-tablet')
                $('.chat-sidebar').addClass('expand-layout-tablet')
                $(this).addClass('button-rotate')
            } 
            else {
                $('.contacts-list').removeClass('collapse-layout-tablet')
                $('.chat-sidebar').removeClass('expand-layout-tablet')
                $(this).removeClass('button-rotate')
            }
            defaultViewTablet = !defaultViewTablet
        }
        else{
            if(defaultViewTablet){
                $('.chat-content-section').removeClass('expand-chat-mobile')
                $('.chat-sidebar').addClass('expand-sidebar-mobile')
            }
            else{
                $('.chat-content-section').addClass('expand-chat-mobile')
                $('.chat-sidebar').removeClass('expand-sidebar-mobile')
            }
            
        }
        
        
    })

    $('#back-to-contacts-btn').click(function(){
        $('.chat-content-section').removeClass('expand-chat-mobile')
        $('.contacts-list').removeClass('collapse-contacts-mobile')
    })

    $('#back-to-chat-content-btn').click(function(){
        $('.chat-sidebar').removeClass('expand-sidebar-mobile')
        $('.chat-content-section').addClass('expand-chat-mobile')
    })


})