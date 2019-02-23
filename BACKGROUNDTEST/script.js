//Vars
let canvas = null;
let context = null;
const width = 800;
const height = 600;

var background = new Image()
background.src = "background.png"

var backgroundXTranslation = 0
var frames = 0


//OnLoad
window.onload = function () {
    canvas = document.getElementById("my_canvas");
    context = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    //context.drawImage(background,0,0)

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

    players.push(new Player(playerRadius, canvas.height / 2 - playerRadius - gap, false))
    players.push(new Player(playerRadius, canvas.height / 2 + playerRadius + gap, true))
    animate()
    //img.src = "";
}
let playerRadius = 64 / 2
let gap = 10
let players = []
let keyPressed = {
    up: false
}

//Update, draw ...
function animate() {
    frames++
    console.log(frames)
    //context.clearRect(0, 0, width, height); //clears everything
    context.drawImage(background,backgroundXTranslation,0)

    window.requestAnimationFrame(animate);

    //MOVE BACKGROUDN
    if (!(backgroundXTranslation <= -1200)) {
        backgroundXTranslation -= 10
    }
    else {
        backgroundXTranslation = 800

    }

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
        this.dy = 5
    }

    draw() {
        context.beginPath()
        context.arc(this.x, this.y, playerRadius, 0, 2 * Math.PI)
        context.fill()
    }

    move() {
        if (keyPressed.up && !this.jumping) {
            this.jumping = true
        }

        if (this.jumping) {
            if (this.upside) {
                this.y += this.dy + 10
            } else {
                this.y -= this.dy + 10
            }
            this.jumping = false
        }

        if (!this.upside) {
            this.y += this.dy
        } else {
            this.y -= this.dy
        }

        if (!this.upside) {
            if (this.y + playerRadius + gap >= canvas.height / 2) {
                this.y = canvas.height / 2 - playerRadius - gap
            }
        } else {
            if (this.y - playerRadius - gap <= canvas.height / 2) {
                this.y = canvas.height / 2 + playerRadius + gap
            }
        }

    }
}



function keyDown(e) {
    switch (e.keyCode) {
        case 38:
            keyPressed.up = true
            break
        case 37:
            keyPressed.left = true
            break
        case 39:
            keyPressed.right = true
            break
    }
}

function keyUp(e) {
    switch (e.keyCode) {
        case 38:
            keyPressed.up = false
            break
        case 37:
            keyPressed.left = false
            break
        case 39:
            keyPressed.right = false
            break
    }
}