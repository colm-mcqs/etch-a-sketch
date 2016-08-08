"use strict";
let xSize = 100;
let ySize = 100;
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

    for (var i = 0; i < ySize ; i++) {
        let $row = $('<div class="row"></div>');
        for(var j =0; j< xSize; j++){
            $row.append($box.eq(0).clone());
        }
        $('#grid').append($row.eq(0).clone());
    }

    $(window).on('resize', function() {
        var windowW = window.innerWidth, windowH = window.innerHeight;
        var gridLen = windowW < windowH ? windowW : windowH;
        console.log('greidLen', gridLen);
        console.log('greidLen', gridLen/xSize);
        console.log('greidLen', gridLen/ySize);
        $('#grid').css({
            'width':  gridLen + 'px',
            'height': gridLen + 'px',
            'margin': 'auto'
        });
        $('.box').width((gridLen/xSize-2)+ 'px')
                 .height((gridLen/ySize+-2)+ 'px')
                .hover(function(){
                    $(this).addClass('lit');
                }, function(){});
    });
    $('input').on('keydown', function(key){
        if(key.keyCode == 13){
            console.log('enter')
        }
    });
    $(window).trigger('resize');
});