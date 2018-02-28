//masonry javascript

//-------------DESIGN GRID
var $containerB = jQuery('#container-b').masonry({
			//options
			itemSelector: '.grid-item-b',
			columnWidth: '.grid-sizer',
			gutter:5,
			percentposition: true,
			horizontalOrder: true
		});


//------------- GIFS
	var $container = jQuery('#container').masonry({
			//options
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			gutter:5,
			percentposition: true,
			horizontalOrder: true
		});	
//relayout after each image loads
//$container.imagesLoaded().progress(function() {
//	$container.masonry('layout');
//});
//
//$container.imagesLoaded(function(){
//	$('#container').removeClass('not-loaded');
//});
//
//$(document).ready(function(){
//				  $container.masonry('layout');
//				  });


	
//-----------DESIGN
		
//relayout after each image loads
$containerB.imagesLoaded().progress(function() {
	$containerB.masonry('layout');
});


$(document).ready(function(){
				 $containerB.masonry('layout');
				  });

//----------- MULTIMEDIA

		
var $containerV = jQuery('#container-v').masonry({
	//options
	itemSelector: '.grid-item-v',
	columnWidth: '.grid-sizer',
	gutter:10,
	percentposition: true,
	horizontalOrder: true
});

$(window).load( function(){
	$containerV.masonry();
});