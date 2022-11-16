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

    $(".js-range-slider").ionRangeSlider({
        onStart: function (data) {
            // Called right after range slider instance initialised
        },

        onChange: function (data) {
            // Called every time handle position is changed
            $('#min-age').text(data.from);
            $('#max-age').text(data.to);
            // console.log(data.to);
        },

        onFinish: function (data) {
            // Called then action is done and mouse is released

            // console.log(data.to);
        },

        onUpdate: function (data) {
            // Called then slider is changed using Update public method

            // console.log(data.from_percent);
        }
    });

    // slider age end 


    var defaultStep = 0
    
    function stepMove(direction){
        if(direction === 'next'){
            defaultStep += 1
        }
        else{
            defaultStep -= 1
        }
        
        $('.step').each(function(idx){
            if (idx === defaultStep){
                $(this).find('>:first-child').prop('src','/assets/icons/curr-step.svg')
            }
            else if (idx < defaultStep){
                $(this).find('>:first-child').prop('src','/assets/icons/completed-step.svg')
            }
            else{
                $(this).find('>:first-child').prop('src','/assets/icons/default-step.svg')
            }

             $('.noti').each(function(){
                if(defaultStep === 4){
                     $(this).css('display', 'flex')
                }
                else{
                    $(this).css('display', 'none')
                }
             })

        })

        $('.box-general').each(function(idx){
            if(idx === defaultStep){
                $(this).css('display','block')
            }
            else{
                $(this).css('display','none')
            }
        })
    }

    $('.btn-continue').click(function(){
        stepMove('next')
    })

    $('.btn-back').click(function(){
        stepMove('back')
    })

    $('.btn-post').click(function(){
        $('.box-general').each(function(idx){
            if(idx===5){
                $(this).css('display','block')
                $('.process-steps').each(function(){
                    $(this).css('display','none')
                })
                $('.post-title').each(function(){
                    $(this).css('display','none')
                })
            }
            else{
                $(this).css('display','none')
            }
        })
        $('.noti').each(function(){
            $(this).css('display','none')
        })
    })
    
    $('input.item-check:checkbox').change(function(){
        $(this).parent().toggleClass('item-checked')
    })

    $('input.item-check:radio').change(function(){
        $('input.item-check:radio').each(function(){
            $(this).parent().removeClass('item-checked')
        })
        $(this).parent().addClass('item-checked')
    })

    var count = 0 

   function checkSelectedItem(){
        if(count===0){
            $('.btn-action').css('display','none')
        }
        else{
            $('.btn-action').css('display','flex')
        }
   }

   checkSelectedItem()

    $('.checkbox-selection').change(function(){
        $(this).parent().parent().toggleClass('selected-item')
        if($(this).is(':checked')){
            count +=1
            checkSelectedItem()
        }
        else{
            count -=1
            checkSelectedItem()
        }
    })


});