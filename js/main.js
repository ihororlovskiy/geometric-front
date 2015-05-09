// header fx
var $head = $( '.geo-header' );
$( '.header-waypoint' ).each( function(i) {
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
} );

// portfolio fx
// var $portfolio = $( '.geo-portfolio-item-description' );
// $( '.portfolio-waypoint' ).each( function(i) {
//   var $el = $( this ),
//     animClassDown = $el.data( 'animateDown' ),
//     animClassUp = $el.data( 'animateUp' );

//   $el.waypoint( function( direction ) {
//     if( direction === 'down' && animClassDown ) {
//       $portfolio.attr('class', 'geo-portfolio-item-description ' + animClassDown);
//     }
//     else if( direction === 'up' && animClassUp ){
//       $portfolio.attr('class', 'geo-portfolio-item-description ' + animClassUp);
//     }
//   }, { offset: '89px' } );
// } );

// jQuery(document).ready(function(){
// 	// tabs at shop
// 	 $('.hello_world').pwstabs({
// 		 effect: 'scale',
// 		 defaultTab: 1,
// 		 containerWidth: '100%',
// 		 tabsPosition: 'vertical',
// 		 verticalPosition: 'left'
// 	 });
// 	// Dropdown Menu Fade    
// 		$(".dropdown").hover(
// 				function() { $('.dropdown-menu', this).fadeIn("fast");
// 				},
// 				function() { $('.dropdown-menu', this).fadeOut("fast");
// 		});
// });

// Isotope Blog
$(document).ready(function() {
		$('.geo-blog-masonry .geo-content-area').isotope({
				itemSelector: '.geo-blog-masonry-item'
		});
		$('.geo-blog-grid .geo-content-area').isotope({
				itemSelector: '.geo-blog-grid-item'
		});
 });

// Isotope Portfolio
$( function() {
	// init Isotope
	var $container = $('.geo-portfolio-isotope-fitrows').isotope({
		itemSelector: 'article',
		layoutMode: 'fitRows',
	});

	// filter functions
	var filterFns = {
	};

	// bind filter button click
	$('#filters').on( 'click', 'a', function() {
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$container.isotope({ filter: filterValue });
	});

	// change is-checked class on buttons
	$('.geo-portfolio-filter').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'a', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});
	
});

// Isotope Portfolio
$( function() {
	// init Isotope
	var $container = $('.geo-portfolio-isotope').isotope({
		itemSelector: 'article',
	});

	// filter functions
	var filterFns = {
	};

	// bind filter button click
	$('#filters').on( 'click', 'a', function() {
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$container.isotope({ filter: filterValue });
	});

	// change is-checked class on buttons
	$('.geo-portfolio-filter').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'a', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});

});

$(function() {
// Isotope Shop
	var $container = $('.geo-shop-isotope').isotope({
		itemSelector: 'article',
	});
});


$(function() {
// parallax
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



// flexslider at shop
	$(window).load(function(){
		$('.flexslider').flexslider({
			animation: "slide",
			controlNav: "thumbnails",
			start: function(slider){}
		});
	});

// search
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

// btn loader
$(".btn666").click(function() {
    var $btn = $(this);
    $btn.button('loading');
    // Then whatever you actually want to do i.e. submit form
    // After that has finished, reset the button state using
    setTimeout(function () {
        $btn.button('reset');
    }, 1000);
});