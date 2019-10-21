$(document).ready(function(){
	slickSlider()
	paymentButtons()
	timer()
});

function slickSlider() {
	$('.slick-slider').slick({
		infinite: true,
		slidesToShow: 2,
		dots: true,
		autoplay: true,
  		autoplaySpeed: 5000,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
		]


	})
}

function paymentButtons() {
	var trialButton = $('.but-trial');
	var annualButton = $('.but-annual');
	var trialBlock = $('.block-trial');
	var annualBlock = $('.block-annual');
	var toOffers = $('.prop-to-offers-but');
	var allBlocks = $('.set-block-prop');
	var paymentForm = $('.offers-pay');
	var offersContainer = $('.offers-set');
	var headerText = $('.header-text');

	trialButton.on("click", function() {
		trialBlock.addClass('selected');
		annualBlock.addClass('hide');
		paymentForm.addClass('show');
		offersContainer.addClass('column');
		headerText.hide();

	});

	annualButton.on("click", function() {
		annualBlock.addClass('selected');
		trialBlock.addClass('hide');
		paymentForm.addClass('show');
		offersContainer.addClass('column');
		headerText.hide();
	});
	toOffers.on("click", function() {
		allBlocks.removeClass('hide selected');
		paymentForm.removeClass('show');
		offersContainer.removeClass('column');
		headerText.show();
	});
}
function timer() {
	var newYear = new Date(); 
	newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
	$('.limited-offer-timer').countdown({until: newYear, format: 'dHM'});
}
