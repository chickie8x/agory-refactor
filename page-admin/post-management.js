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
        $('.sub-tab-item').each(function(){
            $(this).addClass('hide-item')
        })
        let tabContent = subTabObj[tabId]
        tabContent.removeClass('hide-item')
        activeSubTabBtn.removeClass('tab-btn-active')
        $(this).addClass('tab-btn-active')
        activeSubTabBtn = $(this)
    })


    let contextMenuDisplay = false 
    $('#show-context-menu').click(function(){
        contextMenuDisplay = !contextMenuDisplay
        if(!contextMenuDisplay){
            $('.header-context-menu').addClass('hide-item')
            $(this).removeClass('context-menu-btn-active')
        }
        else{
            $('.header-context-menu').removeClass('hide-item')
            $(this).addClass('context-menu-btn-active')
        }
    })

    $('#btn-tab-select').change(function(){
        let displayTab = $(`#${this.value}`)
        $('.main-tab-item').each(function(){
            $(this).addClass('hide-item')
        })

        $(displayTab).removeClass('hide-item')
    })


	const costSubTabs = {
		'cost-sub-tab-btn-1': $('.cost-sub-tab-content-1'),
		'cost-sub-tab-btn-2': $('.cost-sub-tab-content-2'),
		'cost-sub-tab-btn-3': $('.cost-sub-tab-content-3'),
		'cost-sub-tab-btn-4': $('.cost-sub-tab-content-4')
	}

	let activeCostSubTab = $('#cost-sub-tab-btn-1')

	$('.cost-view-tabs-btn-item').click(function() {
		let costBtnId = $(this)[0].id
		$('.cost-view-tabs-content-body').each(function(){
			$(this).addClass('hide-item')
		})
		let showSubTab = costSubTabs[costBtnId]
		showSubTab.removeClass('hide-item')
		activeCostSubTab.removeClass('tab-btn-active')
		activeCostSubTab = $(this)
		activeCostSubTab.addClass('tab-btn-active')
	})

	const corpSubTab = {
		'corp-tab-btn-1': $('.corp-sub-tab-content-1'),
		'corp-tab-btn-2': $('.corp-sub-tab-content-2')
	}

	let activeCorpSubTab = $('#corp-tab-btn-1')

	$('.corp-view-tabs-btn-item').click(function() {
		let corpBtnId = $(this)[0].id
		$('.corp-view-tabs-content-body').each(function() {
			$(this).addClass('hide-item')
		})
		let showCorpSubTab = corpSubTab[corpBtnId]
		showCorpSubTab.removeClass('hide-item')
		activeCorpSubTab.removeClass('tab-btn-active')
		activeCorpSubTab = $(this)
		activeCorpSubTab.addClass('tab-btn-active')
	})







	// modal section 

	$('.cost-view-tabs-content-item-avt').click(function() {
		$('#cost-popup').addClass('popup-show')

	})

	$('.close-main-popup').click(function(){
		$('#cost-popup').removeClass('popup-show')
	})

	$('.about-user-left-username, .about-user-left-user-avt').click(function(){
		$('#popup-profile').addClass('popup-show')
	})

	$('#close-profile-popup-btn').click(function(){
		$('#popup-profile').removeClass('popup-show')
	})

});