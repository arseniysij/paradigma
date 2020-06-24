document.addEventListener("DOMContentLoaded", function() {

	

});

$(function() {
	let map = $('.location-map');
	let link = $('.location-text');
	map.hide();
	link.hover(function(){
		$(map).fadeIn(150);
	}, function() {
		if (map.mouseout) {
			$(map).fadeOut(200);
		}
	});

	var rellax = new Rellax('.rellax');

	$('.popup__select').select2({
		minimumResultsForSearch: -1, 
		dropdownAutoWidth : true,
  	 	width: '100%',
	});

	// popup
	let popup = $("#popup");
	let signUpBtn = $('#signup');
	let clientCardBtn = $('#hero__btn');
	let popupClose = $('.popup-close');
	let submitBtn = $('.popup__submit');
	let popupComplete = $('.popup-complete');
	let popupCompleteClose = $('.complete-close')
	popup.hide();
	popupComplete.hide();
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
$(document).click(function(event) { 
  $target = $(event.target);
  if(!$target.closest(popupComplete).length && 
  $(popupComplete).is(":visible")) {
    $(popupComplete).fadeOut(200);
  }        
});
	submitBtn.click(function() {
		popup.fadeOut(400);
		popupComplete.delay(300).fadeIn(200);
		popupCompleteClose.click(function() {
		popupComplete.fadeOut(200);
		});
	});
		


	// mob-nav
	let menuToggler = $('.menu-toggler');
	let menuBtn = $('.menu-btn');
	let navigation = $('.navigation');
	$(menuToggler).click(function() {
		if (!menuToggler.hasClass('active')) {
			menuToggler.addClass('active');
			menuBtn.addClass('menu-btn__active');
			navigation.fadeIn(300);
		} else if (menuToggler.hasClass('active')) {
			menuToggler.removeClass('active');
			menuBtn.removeClass('menu-btn__active');
			navigation.fadeOut(300);
			
		}
	
		
	});

	
});
