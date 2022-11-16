$(document).ready(function () {

    function screenWidthTracking(){
        var screenSize = $(window).width();
        if(screenSize<660){
            $('.user').appendTo('.navigation');
            $('.navigation').css('align-items','center');
            $('.navigation').css('padding','8px 16px');
            $('.brand-logo').css('order','2');
            $('.collapse-btn').css('order','1');
            $('.user').css('order','3');
        }
        else{
            $('.user').appendTo('.message-notification');
            $('.navigation').css('align-items','unset');
            $('.navigation').css('padding','0 24px');
            $('.brand-logo').css('order','unset');
            $('.collapse-btn').css('order','unset');
            $('.user').css('order','unset');
        }
    }

    screenWidthTracking();
    $(window).resize(screenWidthTracking);
    var collapse = true;

    $('.collapse-btn').click(function(){
        if(collapse===true){
            $('.collapse-menu').addClass("show-collapse-menu");
        }
        else{
            $('.collapse-menu').removeClass("show-collapse-menu");
        }


        collapse=!collapse;
    });

    $('.title-edit-btn').click(function(){
        var editBtn = $(this);
        var titleEditConfirm = $('.confirm-edit');
        var titleEditCancel = $('.cancel-edit');
        var editTitleWrapper = $('.influencer-title');
        var editTitle = $('.influencer-title-content');
        editBtn.addClass('hide-item');
        titleEditConfirm.removeClass('hide-item');
        titleEditCancel.removeClass('hide-item');
        editTitleWrapper.addClass('edit-mode');
        editTitle.prop('contenteditable',true).css('outline','none');
    });

    $('.confirm-edit').click(function(){
        var editBtn = $('.title-edit-btn');
        var titleEditConfirm = $(this);
        var titleEditCancel = $('.cancel-edit');
        var editTitleWrapper = $('.influencer-title');
        var editTitle = $('.influencer-title-content');
        editBtn.removeClass('hide-item');
        titleEditConfirm.addClass('hide-item');
        titleEditCancel.addClass('hide-item');
        editTitleWrapper.removeClass('edit-mode');
        editTitle.prop('contenteditable',false)
    });

    $('.cancel-edit').click(function(){
        var editBtn = $('.title-edit-btn');
        var titleEditConfirm = $('.confirm-edit');
        var titleEditCancel = $(this);
        var editTitleWrapper = $('.influencer-title');
        var editTitle = $('.influencer-title-content');
        editBtn.removeClass('hide-item');
        titleEditConfirm.addClass('hide-item');
        titleEditCancel.addClass('hide-item');
        editTitleWrapper.removeClass('edit-mode');
        editTitle.prop('contenteditable',false)
    });

    $(".influencer-title-content").keypress(function (e) {
        if (e.keyCode === 10 || e.keyCode === 13) {
            e.preventDefault();
        }
        if ($(this).text().length > 50) e.preventDefault();
    });

});