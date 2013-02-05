
////////////////////////////////////////////////////////////////////////
// equal heighted floated elements functions


//compare and equalize the heights of front page featured items
function compareheights(id1, id2) {
	var items = $(".project-front .description").slice(id1, id2)
	var heighty = 0;
	items.each(function( index ) {
  		var newheighty = $(this).height();
  		if (newheighty > heighty) {
  			heighty = newheighty;
  		}
	});
	items.height(heighty);
}

// clear the heights of front page featured items
function clearheights(id1, id2) {
	var items = $(".project-front .description").slice(id1, id2)
	items.height('auto');
}

// equalize work height and description height
function equalworkheight() {
	var descriptionheight = $('.thing .description').height();
	var workheight = $('.first-image').height();
	var finalheight = 0;
	if (descriptionheight >= workheight) {
		finalheight = descriptionheight;
		$('.first-image').height(finalheight);
	} else {
		finalheight = workheight;
		$('.thing .description').height(finalheight);
	}
}

function clearequalworkheight() {
	$('.thing .description').height('auto');
	$('.first-image').height('auto');
}


function compareheightsabout() {
    var items = $(".about-videos li")
	var heighty = 0;
	items.each(function( index ) {
  		var newheighty = $(this).height();
  		if (newheighty > heighty) {
  			heighty = newheighty;
  		}
	});
	items.height(heighty);
}

function clearheightsabout() {
	$('.about-videos li').height('auto');
}

// function found here: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();


////////////////////////////////////////////////////////////////////////
// Running and breathing animation functions

//1000 interval
function breath(id){
	id.addClass('breath-up');
	setTimeout(function() {
  		id.removeClass('breath-up');
	}, 500); 
}

//500 interval
function run(id){
	id.addClass('run1');
	setTimeout(function() {
		id.removeClass('run1');
		id.addClass('run2');
	}, 100); 
	setTimeout(function() {
		id.removeClass('run2');
		id.addClass('run3');
	}, 200); 
	setTimeout(function() {
		id.removeClass('run3');
		id.addClass('run4');
	}, 300); 
	setTimeout(function() {
		id.removeClass('run4');
		id.addClass('run5');
	}, 400); 
	setTimeout(function() {
		id.removeClass('run5');
	}, 500); 
}

//500 interval
function runleft(id){
	id.addClass('run1-left');
	setTimeout(function() {
		id.removeClass('run1-left');
		id.addClass('run2-left');
	}, 100); 
	setTimeout(function() {
		id.removeClass('run2-left');
		id.addClass('run3-left');
	}, 200); 
	setTimeout(function() {
		id.removeClass('run3-left');
		id.addClass('run4-left');
	}, 300); 
	setTimeout(function() {
		id.removeClass('run4-left');
		id.addClass('run5-left');
	}, 400); 
	setTimeout(function() {
		id.removeClass('run5-left');
	}, 500); 
}

function breathing() {
  breathingID = setInterval(breath2, 1000);
}

function breathingright() {
  breathingID = setInterval(breath1, 1000);
}

function breath2(){
	$('.character').addClass('breath-up-left');
	setTimeout(function() {
  		$('.character').removeClass('breath-up-left');
	}, 500);  
}

function breath1(){
	$('.character').addClass('breath-up');
	setTimeout(function() {
  		$('.character').removeClass('breath-up');
	}, 500);  
}

////////////////////////////////////////////////////////////////////////


// after the page loads
$(window).load(function() {
	compareheights(0, 5);
	//equalworkheight();
	compareheightsabout();






        var windowwidth = $(window).width();
        var documentwidth = $(document).width();
        var projectcharacter = $('.character');

        var globe = 'false';
        var citrus = 'false';
        var cat = 'false';


	    var globe_cookie = $.cookie('globe');
	    var citrus_cookie = $.cookie('citrus');
	    var cat_cookie = $.cookie('cat');

	    if (globe_cookie == 'stocked') {
	    	$(".inventory ul").append("<li><a class='inner' href='/item-globe.html'><img src='/img/globe.png' alt='globe'/></a></li>");
	    }
	    if (citrus_cookie == 'stocked') {
	    	$(".inventory ul").append("<li><a class='inner' href='/item-citrus.html'><img src='/img/citrus.png' alt='citrus'/></a></li>");
	    }
	    if (cat_cookie == 'stocked') {
	    	$(".inventory ul").append("<li><a class='inner' href='/item-cat.html'><img src='/img/cat.png' alt='cat'/></a></li>");
	    }




	    if (globe_cookie == 'stocked' || citrus_cookie == 'stocked' || cat_cookie == 'stocked') {
	    	$('.inventory').css('display', 'block');
	    }

        projectcharacter.click(function() {
        	$('.talking-bubble').css('background', '#ccc');
        	_gaq.push(['_trackEvent', 'item-game', 'click', 'how to play']);
        });

		function running(){
		//press a key
		$(document).on('keydown', function(e) {
			$('.talking-bubble').css('display', 'none');
			var keyCode = e.keyCode;
			// the letter 'D' is pressed (the right direction)
			if(keyCode == "68"){
				// stop breathing
				clearInterval(breathingID);
				// run once
				run(projectcharacter);
				// increase left margin variable by 150px
				rightmargin = rightmargin - 150;
				// add left margin variable to his left margin
				projectcharacter.css('margin-right', rightmargin + 'px');		

				// unbind the keydown action to prevent repeats
				$(document).off('keydown');
				// bind it again after 450 milliseconds to allow for run animation to complete
				setTimeout(function() { running(projectcharacter); }, 450);
				projectcharacter.removeClass("breath-left");
				breathingright();

			}
			// the letter 'A' is pressed (the left direction)
			else if(keyCode == "65"){
				// stop breathing
				clearInterval(breathingID);
				// run left onceaa
				runleft(projectcharacter);
				// decrease the left margin variable by 150px
				rightmargin = rightmargin + 150;
				// decrease the left margin of the character by the value of the left margin variable
				projectcharacter.css('margin-right', rightmargin + 'px');		
				// unbind the keydown action to prevent repeats
				$(document).off('keydown');
				// bind it again after 450 milliseconds to allow for run animation to complete
				setTimeout(function() { running(projectcharacter); }, 450);
				projectcharacter.addClass("breath-left");
				breathing();
			}
if (globe == 'false' && rightmargin > 910 && globe_cookie != 'stocked') {
	$(".top-item").html("<div class='inner'><img src='/img/globe.png' alt='globe'/></div>");
	globe = 'true';

}
if (globe == 'true' && rightmargin < 100 ) {
	$('.inventory').css('display', 'block');
	$(".inventory ul").append("<li><a class='inner' href='/item-globe.html'><img src='/img/globe.png' alt='globe'/></a></li>");
	$(".top-item").html("");
	globe = 'stocked';
	$.cookie('globe', 'stocked');
	_gaq.push(['_trackEvent', 'item-game', 'click', 'found globe']);
}
if (citrus == 'false' && rightmargin > 2000 && citrus_cookie != 'stocked') {
	$(".top-item").html("<div class='inner'><img src='/img/citrus.png' alt='citrus'/></div>");
	citrus = 'true';
}
if (citrus == 'true' && rightmargin < 100) {
	$(".inventory ul").append("<li><a class='inner' href='/item-citrus.html'><img src='/img/citrus.png' alt='citrus'/></a></li>");
	$(".top-item").html("");
	citrus = 'stocked';
	$.cookie('citrus', 'stocked');
	_gaq.push(['_trackEvent', 'item-game', 'click', 'found citrus']);

}
if (cat == 'false' && rightmargin < -1000 && cat_cookie != 'stocked') {
	$(".top-item").html("<div class='inner'><img src='/img/cat.png' alt='cat'/></div>");
	cat = 'true';
}
if (cat == 'true' && rightmargin > 80) {
	$(".inventory ul").append("<li><a class='inner' href='/item-cat.html'><img src='/img/cat.png' alt='cat'/></a></li>");
	$(".top-item").html("");
	cat = 'stocked';
	$.cookie('cat', 'stocked');
	_gaq.push(['_trackEvent', 'item-game', 'click', 'found cat']);
}



		});
	}

		var leftmargin = 100;
		var rightmargin = 100;
        projectcharacter.removeClass('runawayleft');
		//come in from left running
		runleft(projectcharacter);
        //setTimeout(function() {
		//	//get the left margin of the character
		//	realmargin = projectcharacter.css("margin-left").replace("px","");
		//	leftmargin = parseInt(realmargin);
		//}, 2000);
        breathing();
		running(projectcharacter);

});

// when the window resizes and only once after it resizes
$(window).resize(function () {
    waitForFinalEvent(function(){
		clearheights(0,5);
		compareheights(0, 5);

		//clearequalworkheight();
		//equalworkheight();

		clearheightsabout();
		compareheightsabout();
    }, 500, "some unique string");

    var allcookies = $.cookie();
});

// when the page loads
$(document).ready(function() {

});
