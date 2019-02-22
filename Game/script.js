//Vars
let canvas = null;
let context = null;
const width = 800;
const height = 600;


//OnLoad
window.onload = function () {
    canvas = document.getElementById("my_canvas");
    context = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    context.clearRect(0, 0, width, height); //clears everything

    game();
}

//Preload, mouse events
function game() {

    //Load images here
    img = new Image();
    img.onload = function () {

        //Mouse events
        //canvas.addEventListener("click", MouseClick);

        //This
        //Or That
        timer = window.setInterval(animate, 1000 / 60);
    }

    window.addEventListener("keyup", keyUp)
    window.addEventListener("keydown", keyDown)

    players.push(new Player(playerRadius, canvas.height / 2 - playerRadius))
    players.push(new Player(playerRadius, canvas.height / 2 + playerRadius))
    animate()
    //img.src = "";
}
let playerRadius = 55
let players = []
let keyPressed = {
    up: false
}

//Update, draw ...
function animate() {
    context.clearRect(0, 0, width, height); //clears everything
    window.requestAnimationFrame(animate);

    context.beginPath()
    context.moveTo(0, canvas.height / 2)
    context.lineTo(canvas.width, canvas.height / 2)
    context.stroke()
    context.lineWidth = 5

    players.forEach(player => {
        player.draw()
        player.eventListeners()
    })




}


class Player {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    draw() {
        context.beginPath()
        context.arc(this.x, this.y, 50, 0, 2 * Math.PI)
        context.fill()
    }

    eventListeners() {
        if(keyPressed.up) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}



function keyDown(e) {
    switch (e.keyCode) {
        case 38:
            keyPressed.up = true
            break
    }
}

function keyUp(e) {
    switch (e.keyCode) {
        case 39:
            keyPressed.up = false
            break
    }
}