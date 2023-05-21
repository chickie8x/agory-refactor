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
})