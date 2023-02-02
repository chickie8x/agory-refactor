$(document).ready(function () {

	var tabs = {
		'find-job-all-jobs': $('.find-job-all-jobs-content'),
		'find-job-saved-jobs': $('.find-job-saved-jobs-content'),
	}

	$('.job-item-col-title-fix-cost').click(function() {
		$('#find-job-fix-cost-popup').addClass('popup-show')
	})

	$('.job-item-col-title-fix-list').click(function() {
		$('#find-job-fix-list-popup').addClass('popup-show')
	})

	$('.close-find-job-popup-btn, .find-job-popup-content-header > span').click(function() {
		$('.find-job-popup').removeClass('popup-show')
	})

	$('.find-job-user-avt, .find-job-user-username').click(function(){
		$('#popup-profile').addClass('popup-show')
	})

	$('#close-profile-popup-btn').click(function(){
		$('#popup-profile').removeClass('popup-show')

	})

	$('.find-job-tab-btn-item').click(function(){

		$('.find-job-tab-btn-item').each((idx,item) => {
			$(item).removeClass('find-job-tabs-btn-active')
		})

		$(this).addClass('find-job-tabs-btn-active')

		$('.find-job-all-jobs-content, .find-job-saved-jobs-content').addClass('hide-item')
		tabs[$(this)[0].id].removeClass('hide-item')
	})
})