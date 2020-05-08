/*jshint  esversion:6, globalstrict:true */
"use strict";
$(function () {
    let timerId = null;
    $('#start').on('click',showCircle);
    function showCircle() {
        let width = $('#width').val();
        $('.circle').show().css({"height": width, "width": width, "top": "200px", "left": "50%"});
        let numberOfCircles = parseInt($('#number').val());
        for (let i = 0; i < numberOfCircles; i++) {
            var $newCircle = $('<div />').appendTo('body');
            $newCircle.addClass("circle");
            let col = '#'+Math.floor(Math.random()*16777215).toString(16);
            $newCircle.css("background-color", col);
            $newCircle.click(hide);
        }
        timerId = setInterval(grow, $('#rate').val());
    }

    function grow() {
        let growAmt = parseInt($('#growAmt').val());
        let circle = $('.circle');
        let newDiameter = parseInt(circle.height()) + growAmt + "px";
        $(circle).css("width", newDiameter);
        $(circle).css("height", newDiameter);
    }
    function hide() {
        $(this).css("display", "none");
    }
});