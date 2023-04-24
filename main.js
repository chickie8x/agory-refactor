$(document).ready(function () {

    
    var originalNoteText = '';
    var noteContent = $('.note-content');
    var i;
    for (i = 0; i < noteContent.length; i++) {
        shortenedNote(noteContent[i]);
    }


    function formatCurrency(dom) {
        var value = $(dom).text();
        var convertedVal = value.split(',').join('');
        return convertedVal;
    }

    
    $.each($('.note-shortened'),function(){
        if($(this).next().children().first().val()){
            $(this).text($(this).next().children().first().val().split(' ').splice(0,6).join(' ')+' ...')
        }
    })




    $('.social-network').css('display', 'none');
    $('.fb-suggestion').css('display', 'block');

    $('.channel-item').click(function () {
        var radio = $(this).find('input[type=radio]');
        $(radio).prop('checked', true);
        var id = '#' + $(this).attr('data-name');
        $('.social-network').css('display', 'none');
        $(id).css('display', 'block');
    });

    $('#suggest-job-checkbox').click(function () {
        $('.other-input').css('display', 'none');
        $('.suggestion').css('display', 'block');
    });

    $('#other-job-checkbox').click(function () {
        $('.suggestion').css('display', 'none');
        $('.other-input').css('display', 'block');
    });

    $('.price-edit-btn').click(function () {
        var unitDom = $(this).prev();
        var priceDom = $(unitDom).prev();
        var editBtnDom = $(this);
        var confirmBtnDom = $(this).next();
        var cancelBtnDom = $(confirmBtnDom).next();
        var costRowDom = $(this).parent();
        var editModePriceValue = formatCurrency(priceDom);
        editBtnDom.addClass('hide-item');
        unitDom.addClass('hide-item');
        confirmBtnDom.addClass('show-item');
        cancelBtnDom.addClass('show-item');
        costRowDom.addClass('edit-style');
        priceDom.css('flex', '1').prop('contenteditable', true).css('outline', 'none');
        priceDom.text(editModePriceValue);
    });


    $('.cancel-edit').click(function () {
        var unitDom = $(this).prev().prev().prev();
        var priceDom = $(this).prev().prev().prev().prev();
        var editBtnDom = $(this).prev().prev();
        var confirmBtnDom = $(this).prev();
        var cancelBtnDom = $(this);
        var costRowDom = $(this).parent();
        var originalPriceValue = priceDom.text();
        costRowDom.removeClass('edit-style');
        priceDom.text(parseInt(originalPriceValue).toLocaleString());
        confirmBtnDom.removeClass('show-item');
        cancelBtnDom.removeClass('show-item');
        editBtnDom.removeClass('hide-item');
        unitDom.removeClass('hide-item');
        priceDom.css('flex', '0').prop('contenteditable', false);
    });



    $('.confirm-edit').click(function () {
        var unitDom = $(this).prev().prev();
        var priceDom = $(this).prev().prev().prev();
        var editBtnDom = $(this).prev();
        var confirmBtnDom = $(this);
        var cancelBtnDom = $(this).next();
        var costRowDom = $(this).parent();
        costRowDom.removeClass('edit-style');
        confirmBtnDom.removeClass('show-item');
        cancelBtnDom.removeClass('show-item');
        editBtnDom.removeClass('hide-item');
        unitDom.removeClass('hide-item');
        priceDom.css('flex', '0').prop('contenteditable', false);
        var pDom = $(this).prev().prev().prev();
        var pVal = pDom.text();
        pDom.text(parseInt(pVal).toLocaleString());

    });



    $('.note-edit-btn').click(function () {
        $('.note-popup-editor').addClass('hide-item');
        $(this).prev().removeClass('hide-item')       

    });


    $('.cancel-edit-note').click(function () {
        $(this).parent().parent().addClass('hide-item')
    });

    $('.confirm-edit-note').click(function () {
        $(this).parent().parent().addClass('hide-item')
    });


    $('.delete-job-btn').click(function () {
        $('.delete-notification').css('left', '0');
    });

    $('.close-notification').click(function () {
        $(this).parent().css('left', '-400px');
    });

    $(".price-value").keypress(function (e) {
        if (isNaN(String.fromCharCode(e.which))) e.preventDefault();
        if ($(this).text().length > 11) e.preventDefault();
        if (e.keyCode === 10 || e.keyCode === 13) {
            e.preventDefault();
        }
    });

    $(".note-content").keypress(function (e) {
        if (e.keyCode === 10 || e.keyCode === 13) {
            e.preventDefault();
        }
        if ($(this).text().length > 110) e.preventDefault();
    });



    // responsive support functions 

    function screenWidthTracking() {
        var screenSize = $(window).width();
        var channelJobRow = document.getElementsByClassName('channel-row');
        var jobElement = document.getElementsByClassName('job-row');
        var influencerRow = document.getElementsByClassName('influencer-row');
        var typeRow = document.getElementsByClassName('type-row');
        var dataTableRow = document.getElementsByClassName('data-table-row');
        var username = document.getElementsByClassName('username');
        var i;
        if (screenSize < 1025) {

            $('.hidden-label').removeClass('hide-item');
            $('.data-table-body').addClass('grids');

            for (i = 0; i < channelJobRow.length; i++) {
                channelJobRow[i].append(jobElement[i]);
            }

            for (i = 0; i < influencerRow.length; i++) {
                username[i].append(typeRow[i]);
            }
        }
        else {
            for (i = 0; i < dataTableRow.length; i++) {
                dataTableRow[i].insertBefore(typeRow[i], dataTableRow[i].firstElementChild.nextElementSibling.nextElementSibling);
                dataTableRow[i].insertBefore(jobElement[i], dataTableRow[i].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);

            }
            $('.hidden-label').addClass('hide-item');
            $('.data-table-body').removeClass('grids');
        }
        if (screenSize < 660) {
            $('.user').appendTo('.navigation');
            $('.navigation').css('align-items', 'center');
            $('.navigation').css('padding', '8px');
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

    var stateCount = 0;

    $('.selection-state').click(function () {

        if ($(this).prop('checked') === true) {
            stateCount += 1;
        }
        else {
            stateCount -= 1;
        }
        if (stateCount > 0 & stateCount < $('.selection-state').length) {
            $('.copy-btn').removeClass('hide-item');
            $('.channel-and-job').removeClass('hide-item');
            $('.delete-btn').removeClass('hide-item');
            $('.check-some').removeClass('hide-item');
            $('.unchecked-all').addClass('hide-item');
            $('.checked-all').addClass('hide-item');
        }
        else if (stateCount === $('.selection-state').length) {
            $('.check-some').addClass('hide-item');
            $('.unchecked-all').addClass('hide-item');
            $('.checked-all').removeClass('hide-item');

        }
        else if (stateCount === 0) {
            $('.copy-btn').addClass('hide-item');
            $('.channel-and-job').addClass('hide-item');
            $('.delete-btn').addClass('hide-item');
            $('.unchecked-all').removeClass('hide-item');
            $('.checked-all').addClass('hide-item');
            $('.check-some').addClass('hide-item');

        }

        if ($(this).prop('checked')) {
            $(this).parent().parent().addClass('selected-item');
        }
        else {
            $(this).parent().parent().removeClass('selected-item');
        }

        var screenWidth = $(window).width();
        if (stateCount > 0 & screenWidth <= 660) {
            $('.influencer-title').addClass('hide-item');
            $('.mobile-header-btn-back').removeClass('hide-item');
            $('.actions-btn').addClass('hide-item');
            $('.mobile-header-btn-actions').removeClass('hide-item');
        }
        else {
            $('.influencer-title').removeClass('hide-item');
            $('.mobile-header-btn-back').addClass('hide-item');
            $('.actions-btn').removeClass('hide-item');
            $('.mobile-header-btn-actions').addClass('hide-item');
        }

    });


    $('.mobile-header-btn-back').click(function () {
        $('.influencer-title').removeClass('hide-item');
        $('.mobile-header-btn-back').addClass('hide-item');
        $('.actions-btn').removeClass('hide-item');
        $('.mobile-header-btn-actions').addClass('hide-item');
        var checkboxItems = $('.selection-state');
        for (i = 0; i < checkboxItems.length; i++) {
            $(checkboxItems[i]).prop('checked', false);
            $(checkboxItems[i]).parent().parent().removeClass('selected-item');
        }
    });



    $('.check-icon').click(function () {
        var states = $('.selection-state');
        if (stateCount > 0) {
            for (i = 0; i < states.length; i++) {
                if ($(states[i]).prop('checked') === true) {
                    $(states[i]).prop('checked', false);
                    $(states[i]).parent().parent().removeClass('selected-item');
                }
                stateCount = 0;
                $('.copy-btn').addClass('hide-item');
                $('.channel-and-job').addClass('hide-item');
                $('.delete-btn').addClass('hide-item');

                $('.unchecked-all').removeClass('hide-item');
                $('.checked-all').addClass('hide-item');
                $('.check-some').addClass('hide-item');
            }
        }
        else {
            for (i = 0; i < states.length; i++) {
                $(states[i]).prop('checked', true);
                $(states[i]).parent().parent().addClass('selected-item');
            }
            stateCount = states.length;
            $('.copy-btn').removeClass('hide-item');
            $('.channel-and-job').removeClass('hide-item');
            $('.delete-btn').removeClass('hide-item');
            $('.unchecked-all').addClass('hide-item');
            $('.checked-all').removeClass('hide-item');
            $('.check-some').addClass('hide-item');
        }
    });

    function scrollToSmoothly(pos, time) {
        var currentPos = window.pageYOffset;
        var start = null;
        if (time == null) time = 500;
        pos = +pos, time = +time;
        window.requestAnimationFrame(function step(currentTime) {
            start = !start ? currentTime : start;
            var progress = currentTime - start;
            if (currentPos < pos) {
                window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
            } else {
                window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
            }
            if (progress < time) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, pos);
            }
        });
    }


    $('.add-item-btn').click(function () {
        $('.influencer-library-wrapper').css('left', 0);
        $('body').css('overflow', 'hidden')
    });



    // influencer library section 

    $('.back-to-list-btn, .back-to-list-text').click(function () {
        $('.influencer-library-wrapper').css('left', '150%');
        $('body').css('overflow', 'scroll')
    });

    $('.checkbox-pill-input').click(function () {
        if ($(this).prop('checked') === true) {
            $(this).parent().addClass('color-pill');
        }
        else {
            $(this).parent().removeClass('color-pill');
        }

    });


    $('.expand-btn').click(function () {
        $(this).parent().next().toggleClass('expand-filter');
        $(this).prev().find('.info-icon').toggleClass('hide-item');
        $(this).toggleClass('rotate-btn');
    });


    var tags = document.getElementsByClassName('tag');
    var destination = document.getElementsByClassName('bootstrap-tagsinput');
    $(destination).prepend($(tags));
    $('body').on('click', "span[data-role='remove']", function () {
        $(this).parent().remove();
    });


    $('.label-focus-checkbox').click(function () {
        if ($(this).children().first().prop('checked') === true) {
            $(this).css('border', 'none');
        }
        else {
            $(this).css('border', 'solid 1px #555770');
        }
    });


    $('.channel-selection-focus-checkbox').click(function () {
        if ($(this).children().first().prop('checked') === true) {
            $(this).parent().next().addClass('expand-filter');
        }
        else {
            $(this).parent().next().removeClass('expand-filter');
        }

    });


    $('.cost-plan-selection-radio').click(function () {
        if ($(this).children().first().prop('checked') === false) {
            $(this).parent().next().addClass('expand-filter');
        }
        else {
            $(this).parent().next().next().removeClass('expand-filter');
        }
    });

    $('.checkbox-set-max-cost').click(function () {
        if ($(this).children().first().prop('checked') == true) {
            $(this).next().next().removeClass('hide-item');
            $(this).next().next().next().removeClass('hide-item');
        }
        else {
            $(this).next().next().addClass('hide-item');
            $(this).next().next().next().addClass('hide-item');
        }
    });


    $('.cost-limit-value').focus(function () {
        $(this).parent().next().removeClass('hide-item');
        this.type = 'number'

    });

    $('.cost-limit-value').focusout(function () {
        $(this).parent().next().addClass('hide-item');
        var val = $(this).val()
        if (val != '') {
            let numCurrency = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
            this.type = 'text'
            $(this).val(numCurrency)
        }

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

    $('.channel-tabs-item').click(function () {
        var tab = $(this).attr('tab');
        console.log(tab)
        $('.channel-tabs-item').removeClass('tab-active');
        $(this).addClass('tab-active');
        $(this).parent().siblings().addClass('hide-item');
        $('#' + tab).removeClass('hide-item');
    });



    $('.tab-checked').on('change', function () {
        var checkedCounter = 0;
        $(this).find('input').prop('checked') != $(this).find('input').prop('checked');
        var totalChecked = $('.tab-checked').find('input');
        $.each(totalChecked, function () {
            if ($(this).prop('checked') === true && $(this).prop('disabled') === false) {
                checkedCounter += 1;
            }
        });
        if (checkedCounter > 0) {
            $(this).parent().parent().parent().parent().removeClass('alert-bind');
            $('.alert-choices').css('display', 'none');
            $(this).closest('.influencer-main-content').next().find('.control-btn-add').removeClass('hide-item');
            $(this).closest('.influencer-main-content').next().find('.control-btn-remove').addClass('hide-item');
        }
    });

    $('.control-btn-add').click(function () {
        var inputEl = $(this).parent().prev().find('.expected-cost').find('.expected-cost-body').find('.channel-tab-detail').find('.channel-tab-detail-row').find('.tab-checked').find('input');
        var checkItemCounter = 0;
        $.each(inputEl, function () {
            if ($(this).prop('checked') === true) {
                checkItemCounter += 1;
                $(this).prop('disabled', 'disable');
                $(this).next().addClass('disabled-input');
            }
        });
        if (checkItemCounter > 0) {
            $('#added-task-alert-modal').modal('show');
            setTimeout(function(){
                $('#added-task-alert-modal').modal('hide');
                $.each(inputEl, function () {
                    if ($(this).prop('checked') === true) {
                        $(this).prop('disabled',false);
                        $(this).next().removeClass('disabled-input');
                        $(this).click()
                    }
                });
            },2000)
            // $(this).next().removeClass('hide-item');
            // $(this).addClass('hide-item');
            // $('.add-task-successfully').css('left', 0);
        }
        else {
            $(this).parent().prev().find('.expected-cost').addClass('alert-bind');
            console.log($(this).parent().prev().find('.expected-cost').find('.expected-cost-header').find('.alert-choices'));
            $(this).parent().prev().find('.expected-cost').find('.expected-cost-header').find('.alert-choices').css('display', 'inline-block');
            $(this).parent().prev().find('.expected-cost').find('.expected-cost-body').addClass('expand-filter');
        }

    });

    $('.search-icon').click(function () {
        if ($(window).width() <= 1160) {
            $(this).find('#search-normal').find('#Vector').css('stroke', '#555770');
            $(this).find('#search-normal').find('#Vector-2').css('stroke', '#555770');
            $(this).css('border', 'none');
            $(this).css('width', '24px');
            $(this).css('height', '24px');
            $(this).css('padding', '0');
            $(this).parent().css('border', '1px solid #E4E4EB');
            $('.search-input').css('display', 'block');
            $('.search-cancel-btn').css('display', 'block');
        }
    });

    $('.search-cancel-btn').click(function () {
        if ($(window).width() <= 1160) {
            $(this).prev().prev().find('#search-normal').find('#Vector').css('stroke', '#3E7BFA');
            $(this).prev().prev().find('#search-normal').find('#Vector-2').css('stroke', '#3E7BFA');
            $(this).prev().prev().css('border', 'solid 1px #3E7BFA');
            $(this).prev().prev().css('border-radius', '8px');
            $(this).prev().prev().css('width', '32px');
            $(this).prev().prev().css('height', '32px');
            $(this).prev().prev().css('padding', '8px');
            $('.search-input').css('display', 'none');
            $('.search-cancel-btn').css('display', 'none');
            $(this).parent().css('border', 'none');
        }
    });

    var filterExpanding = false;
    $('.btn-filter-mobile').click(function () {
        var positionLeft = $('.influencer-list-wrapper').position().left;
        var elemWidth = $('.influencer-list-wrapper').width();
        if (filterExpanding === false) {
            $('.influencer-library-filter').addClass('expand-filter-menu');
            $('.influencer-list-wrapper').css('touch-action', 'none');
            $('.influencer-list-wrapper').css('left', positionLeft + 'px');
            $('.influencer-list-wrapper').css('width', elemWidth + 'px');
            $('.influencer-list-wrapper').css('position', 'fixed');
            $('.mask').removeClass('hide-item')
        }
        else {
            $('.influencer-library-filter').removeClass('expand-filter-menu');
            $('.influencer-list-wrapper').css('touch-action', 'unset');
            $('.influencer-list-wrapper').css('position', 'static');
            $('.influencer-list-wrapper').css('width', 'unset');
            $('.mask').addClass('hide-item')
        }
        filterExpanding = !filterExpanding;
    });

    $('.filter-by-close-btn').click(function () {
        $('.influencer-library-filter').removeClass('expand-filter-menu');
        $('.influencer-list-wrapper').css('touch-action', 'unset');
        $('.influencer-list-wrapper').css('position', 'static');
        $('.mask').addClass('hide-item')
        filterExpanding = false;
    });

    $('.mask').on('touchmove', function (e) {
        console.log('touch moved');
        e.stopPropagation();
    }, false);

    var mobileDropdown = false;
    $('.sort-btn').click(function () {
        if (mobileDropdown === false) {
            $('.select-items').clone().appendTo($('.sort-by-btn'));
            $(this).css('display', 'none');
            $(this).next().css('display', 'block');
            $('.select-items').css('display', 'block')
            $('.select-items').css('width', '150px')
            $('.select-items').css('left', '-115px')
            $('.select-items').children().click(function () {
                // console.log($(this).text())
                $('.sort-by-dropdown').children().first().find(':selected').text($(this).text())
                $(this).parent().remove();
                $('.sort-btn').css('display', 'block')
                $('.sort-btn-active').css('display', 'none')
                mobileDropdown = !mobileDropdown;
            })
        }

        mobileDropdown = !mobileDropdown;

    });

    $('.sort-btn-active').click(function () {
        if (mobileDropdown === true) {
            $(this).css('display', 'none');
            $(this).prev().css('display', 'block');
        }
        $(this).parent().children().last().remove()
        mobileDropdown = !mobileDropdown;

    });

    // influencer library section end 


    // influencer profile section 

    $('.prev-slide-btn').click(function (event) {
        event.preventDefault();
        $('.slider-cards-wrapper').animate({
            scrollLeft: '-=100px'
        });
        console.log('scroll left')
    });

    $('.next-slide-btn').click(function (event) {
        event.preventDefault();
        $('.slider-cards-wrapper').animate({
            scrollLeft: '+=100px'
        });
        console.log('scroll right')
    });

    // influencer profile section end 

    //additional function edit list name as new requirement 
    $(function(){
        $('#hide-ruler').text($('#list-name-binding').val());
        $('#list-name-binding').width($('#hide-ruler').width())
    }).on('keydown', function(){
        $('#hide-ruler').text($('#list-name-binding').val());
        $('#list-name-binding').width($('#hide-ruler').width())
    })



    $('.edit-list-name-btn').click(function () {
        $('#list-name-binding').prop('readonly', false)
        $(this).addClass('hide-item')
        $('.save-list-name-btn').removeClass('hide-item')
        $('.cancel-list-name-btn').removeClass('hide-item')
        $('.influencer-title').addClass('list-name-edit-mode')
    });

    $('.cancel-list-name-btn').click(function () {
        $('#list-name-binding').prop('readonly', true)
        $('#list-name-binding').removeClass('list-name-edit-mode')
        $('.edit-list-name-btn').removeClass('hide-item')
        $('.save-list-name-btn').addClass('hide-item')
        $('.cancel-list-name-btn').addClass('hide-item')
        $('.influencer-title').addClass('list-name-edit-mode')
        $('.influencer-title').removeClass('list-name-edit-mode')
    })


    // $(".list-name-binding").on('keydown', function (e) {
    //     console.log($(this).val())
    //     if (e.keyCode === 10 || e.keyCode === 13) {
    //         e.preventDefault();
    //     }
    //     if ($(this).val().length > 30){
    //         e.preventDefault();
    //         // alert('exceeded limit')
    //     }
    // });





// custom select tag sort

function customSelectTag(elmClassName) {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "sort by dropdown":*/
    x = document.getElementsByClassName(elmClassName);
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
}




function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
// custom sort-by-dropdown element 
customSelectTag('sort-by-dropdown');

// custom location list element 
customSelectTag('library-location-dropdown')

var selectOpen = false
$('.select-selected').click(function(){
    if(selectOpen===false){
        $(this).parent().parent().css('overflow','unset')
    }
    else{
        $(this).parent().parent().css('overflow','hidden')
    }
    selectOpen =!selectOpen
})
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);



// note-popup-editor aditional modified 


});