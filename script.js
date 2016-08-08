"use strict";
let xSize = 100;
function clearGrid(){
    $('.box').removeClass('lit');
}

$(document).ready(function(){
    $("head").append("<link>");
    var css = $("head").children(":last");
    css.attr({
        rel:  "stylesheet",
        type: "text/css",
        href: "style.css"
    });

    const $box = $('<div class="box"></div>');
    let $size = null;
    function buildGrid($size) {
        for (var i = 0; i < $size ; i++) {
            let $row = $('<div class="row"></div>');
            $('#grid').append($row.eq(0).clone());
        }
        for (var j = 0; j < $size; j++) {
            $('.row').append($box.eq(0).clone());
        }
    }

    buildGrid(xSize);

    $(window).on('resize', function() {
        var windowW = window.innerWidth, windowH = window.innerHeight;
        var gridLen = windowW < windowH ? windowW : windowH;
        gridLen = gridLen - 200;

        $('#grid-wrapper').css({
            'width':  gridLen + 'px',
            'height': gridLen+30 + 'px',
            'margin': 'auto'
        });

        $('.box').width((gridLen/xSize-2)+ 'px')
                 .height((gridLen/xSize-2)+ 'px')
                 .hover(function(){
                     $(this).addClass('lit');
                 }, function(){});
    });

    $('input').on('keydown', function(key){
        if(key.keyCode == 13){
            $size = $('input').val();
            $('grid').remove();
            buildGrid($size);
            $(window).trigger('resize');
        }
    });
    $(window).trigger('resize');
});