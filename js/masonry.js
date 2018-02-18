// RESPONSIVE MASONRY //
//jQuery(document).ready(function($) {
//    var CollManag = (function() {
//        var $ctCollContainer = $('.masonry-grid'),
//        collCnt = 1,
//        init = function() {
//            changeColCnt();
//            initEvents();
//            initPlugins();
//        },
//        changeColCnt = function() {
//            var w_w = $(window).width();
//            if( w_w <= 600 ) n = 1;
//            else if( w_w <= 768 ) n = 2;
//            else n = 3;
//        },
//        initEvents = function() {
//            $(window).on( 'smartresize.CollManag', function( event ) {
//                changeColCnt();
//            });
//        },
//        initPlugins = function() {
//            $ctCollContainer.imagesLoaded( function(){
//                $ctCollContainer.masonry({
//                    itemSelector : 'grid-item',
//                    columnWidth : function( containerWidth ) {
//                        return containerWidth / n;
//                    },
//                    isAnimated : true,
//                    animationOptions: {
//                        duration: 400
//                    }
//                });
//            });
//            $ctCollContainer.colladjust();
//            $ctCollContainer.find('div.ct-coll-item-multi').collslider();
//        };
//        return { init: init };
//    })();
//    CollManag.init();
//}); 

//masonry javascript

//initialize masonry
var $container = jQuery('#container').masonry({
			//options
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			gutter:5,
			percentposition: true,
			horizontalOrder: true
		});
		
//relayout after each image loads
$container.imagesLoaded().progress(function() {
	$container.masonry('layout');
});