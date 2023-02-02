$(document).ready(function () {

	$('.camp-payment-method-item').click(function() {
		$('.camp-payment-method-item').removeClass('camp-payment-method-item-active')
		$('.camp-payment-method-item > input').each(function() {
			$(this).prop('checked', false)
		})
		$('.camp-payment-method-item > img').each(function() {
			$(this).removeClass('svg-color-change')
		})
		$(this).children().first().prop('checked',true)
		$(this).children().eq('1').addClass('svg-color-change')
		$(this).addClass('camp-payment-method-item-active')
	})

	$('.btn-quotation-send').click(function(){
		$('#quotation-send-confirmation-modal').addClass('popup-show')
	})

	$('.btn-quotation-cancel').click(function(){
		$('#quotation-send-confirmation-modal').removeClass('popup-show')
	})

})