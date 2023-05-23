$(document).ready(function () {

    $('.contact-item').click(function(){
        $('.contact-item').css('background', 'none')
        $(this).css('background', '#E4E4EB')
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
    })


})