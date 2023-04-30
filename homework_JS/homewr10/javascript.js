window.onload = () => {

    let movingBlockEl = null;
    let movingBlockElStyle = null;
    let blockElStyle = null
    
    // added to prevent scrolling when moving smaller div
    window.addEventListener("keydown", function (e) {
        if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
            e.preventDefault();
        }
    }, false);

    function init() {
        movingBlockEl = document.querySelector(".movingBlock");
        movingBlockElStyle = getComputedStyle(movingBlockEl);
        blockElStyle = getComputedStyle(document.querySelector(".block"));

        movingBlockEl.style.left = "0px";
        movingBlockEl.style.top = "0px";

        var body = document.querySelector('body');
        body.addEventListener('keydown', getKeyAndMove);
    }

    function getKeyAndMove(e) {
        let key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37:
                moveLeft();
                break;
            case 38:
                moveUp();
                break;
            case 39:
                moveRight();
                break;
            case 40:
                moveDown();
                break;
        }

        function moveLeft() {
            if (parseInt(movingBlockEl.style.left) < 0) {
                alert('Object is already out of bounds!');
            } else {
                movingBlockEl.style.left = parseInt(movingBlockEl.style.left) - 5 + "px";
            }
        }
        function moveUp() {
            if (parseInt(movingBlockEl.style.top) < 0) {
                alert('Object is already out of bounds!');
            } else {
                movingBlockEl.style.top = parseInt(movingBlockEl.style.top) - 5 + "px";
            }
        }
        function moveRight() {
            if (parseInt(movingBlockEl.style.left) + parseInt(movingBlockElStyle.width) > parseInt(blockElStyle.width)) {
                alert('Object is already out of bounds!');
            } else {
                movingBlockEl.style.left = parseInt(movingBlockEl.style.left) + 5 + "px";
            }
        }
        function moveDown() {
            if (parseInt(movingBlockEl.style.top) + parseInt(movingBlockElStyle.height) > parseInt(blockElStyle.height)) {
                alert('Object is already out of bounds!');
            } else {
                movingBlockEl.style.top = parseInt(movingBlockEl.style.top) + 5 + "px";
            }
        }
    }

    init();

    // //////////////////////////////////////////////////////////////////
    let i = 0;
    let images = ["img/photo0.jpg", "img/photo1.jpg", "img/photo2.jpg"];
    let time = 3000;
    let timeout;


    let imgDiv = document.querySelector('.img');
    let img = document.createElement("img");
    img.addEventListener('mouseover', pauseChange);
    img.addEventListener('mouseout', handleChange);
    imgDiv.appendChild(img);

    function handleChange() {
        let img = document.querySelector('img');
        img.src = images[i];
        i >= images.length - 1 ? i = 0 : i++;
        timeout = setTimeout(handleChange, time);
    }

    function pauseChange() {
        clearTimeout(timeout);
    }

    handleChange();
}


