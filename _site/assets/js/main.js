// Header menu FX
var $head = $( '.geo-header' );
$('.waypoint').each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );
	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$head.attr('class', 'geo-header ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$head.attr('class', 'geo-header ' + animClassUp);
		}
	}, { offset: '-1px' } );
});

// Parallax
$(document).ready(function() {
	if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
		$('#ios-notice').removeClass('hidden');
		$('.parallax-container').height( $(window).height() * 0.5 | 0 );
	} else {
		$(window).resize(function(){
			var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
			$('.parallax-container').height(parallaxHeight);
		}).trigger('resize');
	}
});

// Isotope
var $container = $('.isotope-container');
var $containerGrid = $('.isotope-container-grid');
$(document).ready(function() {
	$container.imagesLoaded( function() {
		// Grid
		$containerGrid.isotope({
			itemSelector: '.isotope-item',
			layoutMode: 'fitRows',
		});
		// All
		$container.isotope({
			itemSelector: '.isotope-item',
		});
		var filterFns = {
		};
		$('#filters').on( 'click', 'a', function() {
			var filterValue = $( this ).attr('data-filter');
			filterValue = filterFns[ filterValue ] || filterValue;
			$container.isotope({ filter: filterValue });
		});
		$('.geo-portfolio-filter').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'a', function() {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$( this ).addClass('is-checked');
			});
		});
	});
});

// Search
$(document).ready(function() {
	var submitIcon = $('.geo-searchbox-icon');
	var inputBox = $('.geo-searchbox-input');
	var searchBox = $('.geo-searchbox');
	var isOpen = false;
	submitIcon.click(function() {
		if (isOpen == false) {
			searchBox.addClass('geo-searchbox-open');
			inputBox.focus();
			isOpen = true;
		} else {
			searchBox.removeClass('geo-searchbox-open');
			inputBox.focusout();
			isOpen = false;
		}
	});
	submitIcon.mouseup(function() {
		return false;
	});
	searchBox.mouseup(function() {
		return false;
	});
	$(document).mouseup(function() {
		if (isOpen == true) {
			$('.geo-searchbox-icon').css('display', 'block');
			submitIcon.click();
		}
	});
});
function buttonUp() {
	var inputVal = $('.geo-searchbox-input').val();
	inputVal = $.trim(inputVal).length;
	if (inputVal !== 0) {
		$('.geo-searchbox-icon').css('display', 'none');
	} else {
		$('.geo-searchbox-input').val('');
		$('.geo-searchbox-icon').css('display', 'block');
	}
}

$(document).ready(function(){
		// // Cart At Menu
		// $('.main-menu-cart>ul>li>a').click(function(){
		//    $('.main-menu-cart').toggleClass('open');
		// });
		// $('.main-menu-cart a.cart-close').click(function(){
		//    $('.main-menu-cart').toggleClass('open');
		// });
		// Add review
		$('.addreview>button').click(function(){
				$('.addreview').toggleClass('addreview--add');
		});
		// Show more
		$('.gbtn-showmore').click(function(){
				$('.gbtn-showmore').toggleClass('gbtn-loading active');
		});
});

// // flickity
// $('.main-gallery').flickity({
//  // options
//  cellAlign: 'left',
//  contain: true
// });


/**
 * FlexSlider
 * https://github.com/woothemes/FlexSlider
 */
$(window).load(function() {

	// Slider without anything
	$('#slider').flexslider({
		animation: "slide",
	});

	// Slider without anything (used at basic-landing)
	$('#slider-2').flexslider({
		animation: "slide",
		controlNav: true,
	});

	// Slider without anything (used at basic-landing)
	$('#slider-blogs').flexslider({
		animation: "slide",
		controlNav: false,
		slideshow: false,
	});

	// Slider with Carousel Slider as Navigation
	$('#carousel-nav').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 150,
		itemMargin: 0,
		asNavFor: '#slider-with-carousel'
	});
	$('#slider-with-carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel-nav"
	});

});


// input price range
$(function() {
	$( ".input-price-range" ).slider({
		range: true,
		min: 0,
		max: 1000,
		step: 50,
		values: [ 150, 850 ],
		slide: function( event, ui ) {
			$( ".active-min" ).val( ui.values[ 0 ] );
			$( ".disabled-min" ).val( "€" + ui.values[ 0 ] );
			$( ".active-max" ).val( ui.values[ 1 ] );
			$( ".disabled-max" ).val( "€" + ui.values[ 1 ] );
		}
	});
	$( ".active-min" ).val( $( ".input-price-range" ).slider( "values", 0 ) );
	$( ".disabled-min" ).val( "€" + $( ".input-price-range" ).slider( "values", 0 ) );
	$( ".active-max" ).val( $( ".input-price-range" ).slider( "values", 1 ) );
	$( ".disabled-max" ).val( "€" + $( ".input-price-range" ).slider( "values", 1 ) );
});

// clear
// $("#clear").click(function(){
// 	$("input[type='text']").val("0"); 
// });


// selectBox
$('select').selectBox();
