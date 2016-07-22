jQuery(function($){
	/* ----------------------------------------------------------- */
	/*  1. Superslides Slider
	/* ----------------------------------------------------------- */
	jQuery('#slides').superslides({
      animation: 'slide',
      play: '5000000'
    });

	jQuery('#landing_content').superslides({
	  play: false,
      animation: 'fade',
    });

	jQuery('#about_content').superslides({
	  play: false,
      animation: 'fade',
    });

	/* ----------------------------------------------------------- */
	/*  2. Fixed Top Menubar
	/* ----------------------------------------------------------- */

	// For fixed top bar
	$(window).scroll(function(){
		if ($(window).scrollTop() >100 /*or $(window).height()*/) {
			$(".navbar-fixed-top").addClass('past-main');
			$(".navbar-brand").addClass('past-main2');
			$(".navbar-brand-child").addClass('past-main2-child');
		} else {
			$(".navbar-fixed-top").removeClass('past-main');
			$(".navbar-brand").removeClass('past-main2');
			$(".navbar-brand-child").removeClass('past-main2-child');
		}
	});

	/* ----------------------------------------------------------- */
	/*  12. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	  $(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	      $('.scrollToTop').removeClass('reach-top');
	    } else {
	      $('.scrollToTop').addClass('reach-top');
	    }
	    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	        $('.scrollToTop').addClass('reach-bottom');
	    } else {
	    	$('.scrollToTop').removeClass('reach-bottom');
	    }
	  });

	  //Click event to scroll to top

	  $('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });


	/* ----------------------------------------------------------- */
	/*  13. PRELOADER
	/* ----------------------------------------------------------- */
	ellipsis = {
	  'value' : ['', '.', '..', '...'],
		'count' : 0,
		'run' : false,
		'timer' : null,
		'element' : '.ellipsis',
		'start' : function () {
		  var t = this;
			this.run = true;
			this.timer = setInterval(function () {
				if (t.run) {
					$(t.element).html(t.value[t.count % t.value.length]).text();
					t.count++;
				}
			}, 250);
		},
		'stop' : function () {
			this.run = false;
			clearInterval(this.timer);
			this.count = 0;
		}
	}
	ellipsis.start();

	jQuery(window).load(function() { // makes sure the whole site is loaded
		ellipsis.stop();
		$('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(100).css({'overflow':'visible'});
	})


	/* ----------------------------------------------------------- */
	/*  14. MENU SCROLL
	/* ----------------------------------------------------------- */

	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	// Cache selectors
	var lastId,
	topMenu = $(".navbar-fixed-top"),
	topMenuHeight = topMenu.height() + 13,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight;
	  $('html, body').stop().animate({
	      scrollTop: offsetTop
	  }, 900);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;

	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top <= fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";

	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }
	})
});
