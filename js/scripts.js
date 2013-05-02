$(document).ready(function() {
	//Makes record selection sticky
	$('#stickySelection').sticky_div({
		top: 45, // This represents the buffer you want between the top of the page and the div in px. Default is 0.
		min_screen_width: 0, // This represents the minimum screen width that the stickiness will be applied to. Default is 0.
		bottom: 0, // This represents the buffer you want between the bottom of the page and the div in px. Default is 0.
		outer_div: null // This is a jquery or DOM element whose height needs to be greater than the div in order to make it sticky. Default is null.
	});

	//admin dropdown
	$("#adminTrigger").parent().hover(function() { 
		$("#adminToggle").slideToggle("fast"); 
	});

	$( ".datepicker2" ).datepicker();
	$( ".datepicker" ).datepicker({
		beforeShowDay: nonWorkingDates,
		showOn: "both",
		buttonImage: "assets/images/iconCalendar2.png",
		buttonImageOnly: true
	});

	function nonWorkingDates(date){
		var day = date.getDay(), Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6;
		var closedDates = [[7, 29, 2009], [8, 25, 2010]];
		var closedDays = [[Sunday], [Tuesday], [Wednesday], [Thursday], [Friday], [Saturday]];
		for (var i = 0; i < closedDays.length; i++) {
			if (day == closedDays[i][0]) {
				return [false];
			}

		}

		for (i = 0; i < closedDates.length; i++) {
			if (date.getMonth() == closedDates[i][0] - 1 &&
				date.getDate() == closedDates[i][1] &&
				date.getFullYear() == closedDates[i][2]) {
				return [false];
		}
	}

	return [true];
}

    //Datepicker Animation
    $( "#anim" ).change(function() {
    	$( ".datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
    });
    
    //Back to Top Sticky
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: 50, // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'slide', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Scroll to top', // Text for element
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
   });
});

$(function() {
	$( document ).tooltip();
});