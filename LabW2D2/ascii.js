/*jshint esversion: 6  */

(function () { // no globals
    "use strict";
    const playBtn = document.getElementById("play");
    const stopBtn = document.getElementById("stop");
    const textarea = document.getElementById("textarea");
    const size = document.getElementById("size");
    const speed_selector = document.getElementById("speed_selector");
    const anim_selector = document.getElementById("anim_type");
    let anim_type = "BLANK";
    let speed = 250;
    let frame = "";
    let timer = null;

    playBtn.onclick = beginAnimation;
    stopBtn.onclick = stopAnimation;
    anim_selector.onchange = function () {
        stopAnimation();
    };

    size.onchange = function () {
        textarea.style.fontSize = document.getElementById("size").value;
    };

    speed_selector.onchange = function () {
        if (speed_selector.checked){
            speed = 50;
        }
        else{
            speed = 250;
        }
        //only make change if already animating
        if(!stopBtn.disabled){
            clearInterval(timer);
            timer = setInterval(animate, speed);
        }
    };

    function beginAnimation() {
        if (anim_type != "BLANK") {
            playBtn.disabled = true;
            stopBtn.disabled = false;
            anim_selector.disabled = true;
            frame = ANIMATIONS[anim_type].split("=====\n");
            timer = setInterval(animate, speed);
        }
    }

    function animate() {
        const t = frame.shift(); // get/return + remove first element
        textarea.value = t;
        frame.push(t); // push first element to last
        //textarea.value = frame[counter];
        //counter++;
        // when last frame reaches
        //if (frame.length == counter) {
        //counter = 0;
        //beginAnimation;
        //}
    }

    function stopAnimation() {
        //counter = 0;
        playBtn.disabled = false;
        stopBtn.disabled = true;
        anim_selector.disabled = false;
        anim_type = document.getElementById("anim_type").value;
        textarea.value = ANIMATIONS[anim_type];
        clearInterval(timer);
    }
})();