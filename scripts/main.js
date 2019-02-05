var jelly =document.getElementById("jelly1");
var boat = document.getElementById("boat");


$(jelly).animateSprite({
    fps: 1,
    animations: {
        jell: [0, 1, 2, 3, 4, 5],
    },
    loop: true,
    complete: function(){
            // use complete only when you set animations with 'loop: false'
            alert("animation End");
    }
});

$(boat).animateSprite({
    fps: 2,
    animations: {
        right: [0, 1],
    },
    loop: true,
    complete: function(){
            // use complete only when you set animations with 'loop: false'
            alert("animation End");
    }
});

$(jelly).animateSprite('play', 'jell');
$(boat).animateSprite('play', 'right');

function leftArrowPressed() {
    if(parseInt(boat.style.left, 10) > 100)
    {
        boat.style.left = parseInt(boat.style.left, 10) - 15 + 'px';
        window.scrollBy(-15, 0);
    }
}

function rightArrowPressed() {
    if(parseInt(boat.style.left, 10) < 4800)
    {    boat.style.left = parseInt(boat.style.left) + 15 + 'px';
        window.scrollBy(15, 0);
        
    }
}


            
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            // alert("left");
            leftArrowPressed();
            break;
        case 39:
            // alert("right");
            rightArrowPressed();
            break;
        };
}


window.onload = function()
{
    window.addEventListener('keydown', moveSelection); 

}

