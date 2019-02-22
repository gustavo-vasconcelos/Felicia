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

    players.push(new Player(playerRadius, canvas.height / 2 - playerRadius - 5, false))
    players.push(new Player(playerRadius, canvas.height / 2 + playerRadius + 5, true))
    animate()
    //img.src = "";
}
let playerRadius = 64/2
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
        player.move()
    })




}

function generateGrid() {

}

class Player {
    constructor(x, y, upside) {
        this.x = x
        this.y = y
        this.jumping = false
        this.upside = upside
        this.dy = 10
    }

    draw() {
        context.beginPath()
        context.arc(this.x, this.y, playerRadius, 0, 2 * Math.PI)
        context.fill()
    }

    move() {
        if(keyPressed.up) {
            if(this.upside) {
                this.y += this.dy
            } else {
                this.y -= this.dy
            }
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
        case 38:
            keyPressed.up = false
            break
    }
}