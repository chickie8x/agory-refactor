$(document).ready(function () {

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
})