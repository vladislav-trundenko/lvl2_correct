//= ../../../node_modules/jquery/dist/jquery.js

$(document).ready(function (){
	$('#feed-toggle').on('click', function(e) {
		e.preventDefault();
		if ( $('#feedback').hasClass('feed-open')){

		}else {
		$('#feedback').hide().addClass('feed-open').fadeIn();	
	}
	});
});

$(document).ready(function (){
	$('#feedback-close').on('click', function(e) {
		e.preventDefault();
		if ( $('#feedback').hasClass('feed-open')){
		$('#feedback').removeClass('feed-open');
		}
	});
});

$(document).ready(function (){
	$('#links a').click(function() {
		var url=$(this).attr('href');
		$('#products_content').load(url + ' #products_content');
		return false;
	});
});
$(document).ready(function(){
  $('#links li a').click(function(){
    $('li a').removeClass("active-drop_menu");
    $(this).addClass("active-drop_menu");
});
});
