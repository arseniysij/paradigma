document.addEventListener("DOMContentLoaded", function() {

	

});

$(function() {
	let map = $('.location-map').hide();
	let link = $('.location-text__map-link').hover(function(){
		$(map).fadeIn(150);
	}, function() {
		if ($(map, link).mouseout(function(){
			$(map).fadeOut(200);
		}));
	});

	var rellax = new Rellax('.rellax');

	$('.popup__select').select2({
		minimumResultsForSearch: -1, 
	});

	// popup
	let popup = $("#popup");
	let signUpBtn = $('#signup');
	let clientCardBtn = $('#hero__btn');
	let popupClose = $('.popup-close');
	popup.hide();
	$(signUpBtn).click(function(){
		popup.fadeIn(200);
		return false;
	}); 
	popupClose.click(function() {
		popup.fadeOut(200);
	});
	clientCardBtn.click(function() {
		popup.fadeIn(200);
		return false;
	});
	$(document).click(function(event) { 
  $target = $(event.target);
  if(!$target.closest(popup).length && 
  $(popup).is(":visible")) {
    $(popup).fadeOut(200);
  }        
});
	
});
