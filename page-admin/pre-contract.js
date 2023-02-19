$(document).ready(function () {

	$('.pre-contract-approve').click(function() {
		$('#popup-pre-contract-confirm').addClass('popup-show')
		$('body').addClass('disable-body-scroll')
	})
	
	$('.pre-contract-close-popup').click(function() {
		$('#popup-pre-contract-confirm').removeClass('popup-show')
		$('body').removeClass('disable-body-scroll')
	})
})