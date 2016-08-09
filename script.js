"use strict";
let xSize = 100;
function clearGrid(){
    $('.box').removeClass('lit');
}

const $box = $('<div class="box"></div>');
$(document).ready(()=>{
    let $head = $("head");
    $head.append("<link>");
    let css = $head.children(":last");
    css.attr({
        rel:  "stylesheet",
        type: "text/css",
        href: "style.css"
    });

    let $size = null;
    let buildGrid=($size)=> {
        let $grid = $('#grid');
        $grid.empty();
        for (let i = 0; i < $size ; i++) {
            let $row = $('<div class="row"></div>');
            $grid.append($row.eq(0).clone());
        }
        for (let j = 0; j < $size; j++) {
            $('.row').append($box.eq(0).clone());
        }
        let windowW = window.innerWidth, windowH = window.innerHeight;
        let gridLen = windowW < windowH ? windowW : windowH;
        gridLen = gridLen - 200;

        $('#grid-wrapper').css({
            'width':  gridLen + 'px',
            'height': gridLen+30 + 'px',
            'margin': 'auto'
        });

        $('.box').width((gridLen/$size-2)+ 'px')
            .height((gridLen/$size-2)+ 'px')
            .hover(function(){
                $(this).addClass('lit');
            }, function(){});
    };

    buildGrid(xSize);

    const $input = $('input');
    $input.on('keydown', (key)=>{
        if(key.keyCode == 13){
            $size = $input.val();
            buildGrid($size);
            $input.val('');
            $(window).trigger('resize');
        }
    });
});