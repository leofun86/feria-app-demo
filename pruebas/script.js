/*! nanoScrollerJS - v0.8.7 - (c) 2015 James Florentino; Licensed MIT */

$(function(){
	$('.toggle').click(function(e){
		e.preventDefault();
		$(this).closest('.category').toggleClass('active');
	});
});