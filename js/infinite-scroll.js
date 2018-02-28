//-------------------------------------//
// init Masonry

var $grid = $('.masonry-grid').masonry({
    itemSelector: 'none', // select none at first
    columnWidth: '.grid-sizer',
    gutter: 5,
    percentPosition: true,
    horizontalOrder: true,
    stagger: 30,
    // nicer reveal transition
    visibleStyle: { transform: 'translateY(0)', opacity: 1 },
    hiddenStyle: { transform: 'translateY(100px)', opacity: 0 }
});

// get Masonry instance
var msnry = $grid.data('masonry');

// initial items reveal
$grid.imagesLoaded( function() {
    $grid.removeClass('are-images-unloaded');
    $grid.masonry( 'option', { itemSelector: '.grid-item' });
    var $items = $grid.find('.grid-item');
    $grid.masonry( 'appended', $items );
});

//-------------------------------------//
// init Infinte Scroll

$grid.infiniteScroll({
    path: '.pagination__next',
    append: '.grid-item',
    outlayer: msnry,
    status: '.page-load-status'
});
