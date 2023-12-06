
// show hide floating notification list navbar 
let floatingNotiList = false

$('.notifications').click(function() {
    if(!floatingNotiList){
        $('.floating-notification-list').removeClass('hide-item')
    }
    else{
        $('.floating-notification-list').addClass('hide-item')
    }
    floatingNotiList = !floatingNotiList
})
