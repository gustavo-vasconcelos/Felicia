//Vars
let canvas = null;
let context = null;
const width = 800;
const height = 600;


let images = {
    lightCharacter: new Image()
}

images.lightCharacter.src = "img/lightCharacter.png"

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

    players.push(new Player(playerRadius, canvas.height / 2 - playerRadius, false))
    players.push(new Player(playerRadius, canvas.height / 2 + playerRadius, true))
    animate()
    //img.src = "";
}
let playerRadius = 64 / 2
let gap = 10
let players = []
let keyPressed = {
    up: false
}
let sceneLimits = {
    left: 0,
    right: 800
}

//Update, draw ...
function animate() {
    context.clearRect(sceneLimits.left, 0, sceneLimits.right, height); //clears everything
    generateGrid(50, "gray")
    window.requestAnimationFrame(animate);

    context.beginPath()
    context.lineWidth = 5
    context.strokeStyle = "orange"
    context.moveTo(0, canvas.height / 2)
    context.lineTo(sceneLimits.right, canvas.height / 2)
    context.stroke()

    players.forEach(player => {
        player.draw()
        player.move()
    })

    context.translate(-1, 0)
    sceneLimits.left += 1
    sceneLimits.right += 1
}

function generateGrid(delta, color) {
    let quantity = sceneLimits.right / delta
    context.beginPath()
    context.lineWidth = 1
    for (let i = 0; i < quantity * delta; i += delta) {
        context.strokeStyle = color
        context.moveTo(i, 0)
        context.lineTo(i, canvas.height)

        context.moveTo(0, i)
        context.lineTo(sceneLimits.right, i)

        context.strokeText(i, sceneLimits.right - delta, i, 50)
        context.strokeText(i, i, canvas.height, 50)
    }
    context.stroke()
}

class Player {
    constructor(x, y, upside) {
        this.x = x
        this.y = y
        this.jumping = false
        this.upside = upside
        this.d = 5
    }

    draw() {
        context.drawImage(images.lightCharacter, this.x, this.y, 64, 64)
        context.beginPath()
        context.arc(this.x, this.y, playerRadius, 0, 2 * Math.PI)
        context.fill()
    }

    move() {
        if (keyPressed.up && !this.jumping) {
            this.jumping = true
        }

        if (keyPressed.right) {
            this.x += this.d
        }

        if (keyPressed.left) {
            this.x -= this.d
        }


        if (this.jumping) {
            if (this.upside) {
                this.y += this.d + 10
            } else {
                this.y -= this.d + 10
            }
            this.jumping = false
        }


        if (!this.upside) {
            this.y += this.d
        } else {
            this.y -= this.d
        }

        if (!this.upside) {
            if (this.y + playerRadius >= canvas.height / 2) {
                this.y = canvas.height / 2 - playerRadius
            }
        } else {
            if (this.y - playerRadius <= canvas.height / 2) {
                this.y = canvas.height / 2 + playerRadius
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