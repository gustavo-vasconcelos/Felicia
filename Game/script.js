//Vars
let canvas = null;
let context = null;
const width = 800;
const height = 600;


let images = {
    characters: {
        lightCharacter: new Image()
    }
}

images.characters.lightCharacter.src = "img/characters/lightCharacter.png"

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

    //level, x, y, type, side
    plataforms.push(new Plataforms(1, 400, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 450, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 500, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 550, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 600, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 550, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(1, 600, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(1, 550, (canvas.height / 2) - 150, 2, true))
    plataforms.push(new Plataforms(1, 600, (canvas.height / 2) - 150, 2, true))
    plataforms.push(new Plataforms(1, 650, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 700, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 750, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 800, (canvas.height / 2) - 50, 1, true))    
    plataforms.push(new Plataforms(1, 750, (canvas.height / 2) - 100, 1, true))
    plataforms.push(new Plataforms(1, 800, (canvas.height / 2) - 100, 1, true))
    plataforms.push(new Plataforms(1, 750, (canvas.height / 2) - 150, 1, true))
    plataforms.push(new Plataforms(1, 800, (canvas.height / 2) - 150, 1, true))
    plataforms.push(new Plataforms(1, 850, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 900, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2) - 100, 1, true))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2) - 150, 1, true))
    plataforms.push(new Plataforms(1, 1000, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 1000, (canvas.height / 2) - 100, 1, true))
    plataforms.push(new Plataforms(1, 1050, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 1200, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 1250, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 1650, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 1700, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 1750, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 1750, (canvas.height / 2) - 100, 1, true))
    plataforms.push(new Plataforms(1, 1800, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 1850, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 1900, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 2300, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 2350, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 2350, (canvas.height / 2) - 100, 1, true))
    plataforms.push(new Plataforms(1, 2550, (canvas.height / 2) - 100, 1, true))
    plataforms.push(new Plataforms(1, 2550, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 2600, (canvas.height / 2) - 150, 5, true))
    plataforms.push(new Plataforms(1, 2750, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 2750, (canvas.height / 2) - 100, 1, true))
    plataforms.push(new Plataforms(1, 2800, (canvas.height / 2) - 100, 5, true))
    plataforms.push(new Plataforms(1, 2950, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 3000, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 3350, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 3350, (canvas.height / 2) - 100, 1, true))
    plataforms.push(new Plataforms(1, 3600, (canvas.height / 2) - 50, 6, true))
    
    

    //Downside
    plataforms.push(new Plataforms(1, 400, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 450, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 500, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 550, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 600, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 550, (canvas.height / 2) + 50, 2, false))
    plataforms.push(new Plataforms(1, 600, (canvas.height / 2) + 50, 2, false))
    plataforms.push(new Plataforms(1, 550, (canvas.height / 2) + 100, 2, false))
    plataforms.push(new Plataforms(1, 600, (canvas.height / 2) + 100, 2, false))    
    plataforms.push(new Plataforms(1, 750, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 750, (canvas.height / 2)+50, 1, false))
    plataforms.push(new Plataforms(1, 800, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 800, (canvas.height / 2)+50, 1, false))
    plataforms.push(new Plataforms(1, 750, (canvas.height / 2)+100, 1, false))
    plataforms.push(new Plataforms(1, 800, (canvas.height / 2)+100, 1, false))    
    plataforms.push(new Plataforms(1, 650, (canvas.height / 2) , 3, false))
    plataforms.push(new Plataforms(1, 700, (canvas.height / 2) , 3, false))
    plataforms.push(new Plataforms(1, 850, (canvas.height / 2) , 3, false))
    plataforms.push(new Plataforms(1, 900, (canvas.height / 2) , 3, false))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2) + 50, 1, false))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2) + 100, 1, false))
    plataforms.push(new Plataforms(1, 1000, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(1, 1000, (canvas.height / 2) + 50, 1, false))
    plataforms.push(new Plataforms(1, 1050, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(1, 1400, (canvas.height / 2) , 3, false))
    plataforms.push(new Plataforms(1, 1450, (canvas.height / 2) , 3, false))
    plataforms.push(new Plataforms(1, 1650, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(1, 1700, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(1, 1700, (canvas.height / 2) +50, 1, false))
    plataforms.push(new Plataforms(1, 1750, (canvas.height / 2) +50, 4, false))
    plataforms.push(new Plataforms(1, 1800, (canvas.height / 2) +50, 4, false))
    plataforms.push(new Plataforms(1, 1850, (canvas.height / 2) +50, 4, false))
    plataforms.push(new Plataforms(1, 1800, (canvas.height / 2) +100, 3, false))
    plataforms.push(new Plataforms(1, 1900, (canvas.height / 2) +50, 1, false))
    plataforms.push(new Plataforms(1, 1900, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(1, 2300, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(1, 2350, (canvas.height / 2) , 3, false))
    plataforms.push(new Plataforms(1, 2400, (canvas.height / 2) , 3, false))
    plataforms.push(new Plataforms(1, 2450, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(1, 2700, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(1, 2750, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(1, 2800, (canvas.height / 2) +   50, 5, false))
    plataforms.push(new Plataforms(1, 3100, (canvas.height / 2) +   100, 5, false))
    plataforms.push(new Plataforms(1, 3300, (canvas.height / 2) , 3, false))
    plataforms.push(new Plataforms(1, 3350, (canvas.height / 2) , 3, false))
    plataforms.push(new Plataforms(1, 3600, (canvas.height / 2) , 6, false))



    animate()
    //img.src = "";
}
let playerRadius = 64 / 2
let gap = 10
let players = []
let keyPressed = {
    up: false,
    left: false,
    right: false,
    space: false
}
let sceneLimits = {
    left: 0,
    right: 800
}
let pause = false
let frame = 0

plataforms = []

//Update, draw ...
function animate() {
    if (keyPressed.space && !pause) {
        pause = true
    } else if (keyPressed.space && pause) {
        pause = false
    }

    if (!pause) {
        context.clearRect(sceneLimits.left, 0, sceneLimits.right, height); //clears everything
        generateGrid(50, "gray")

        context.beginPath()
        context.lineWidth = 5
        context.strokeStyle = "orange"
        context.moveTo(0, canvas.height / 2)
        context.lineTo(sceneLimits.right, canvas.height / 2)
        context.stroke()

        plataforms.forEach(plataform => {
            plataform.draw()
        })

        players.forEach(player => {
            player.draw()
            player.move()
        })
        /*
        context.translate(-1, 0)
        sceneLimits.left += 1
        sceneLimits.right += 1*/
        frame++
    }
    window.requestAnimationFrame(animate)
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
        this.currFrame = 0
        this.spriteSheet = {
            frameSize: {
                x: 49,
                y: 64
            }
        }
        this.currAnimation = "idleRight"
    }

    draw() {
        context.fillRect(
            this.x - this.spriteSheet.frameSize.x / 2,
            this.y - this.spriteSheet.frameSize.y / 2,
            this.spriteSheet.frameSize.x - 10,
            this.spriteSheet.frameSize.y
        )

        switch (this.currAnimation) {
            case "idleRight":
                context.drawImage(
                    images.characters.lightCharacter,
                    0,
                    0,
                    this.spriteSheet.frameSize.x,
                    this.spriteSheet.frameSize.y,
                    this.x - this.spriteSheet.frameSize.x / 2,
                    this.y - this.spriteSheet.frameSize.y / 2,
                    this.spriteSheet.frameSize.x,
                    this.spriteSheet.frameSize.y,
                )
                break
            case "walkRight":
                context.drawImage(
                    images.characters.lightCharacter,
                    this.currFrame * this.spriteSheet.frameSize.x,
                    this.spriteSheet.frameSize.y,
                    this.spriteSheet.frameSize.x,
                    this.spriteSheet.frameSize.y,
                    this.x - this.spriteSheet.frameSize.x / 2,
                    this.y - this.spriteSheet.frameSize.y / 2,
                    this.spriteSheet.frameSize.x,
                    this.spriteSheet.frameSize.y,
                )
                if (frame % 3 === 0) {
                    this.currFrame++
                }
                if(this.currFrame >= 2) {
                    this.currFrame = 0
                }
                break
        }



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

class Plataforms {
    constructor(lvl, x, y, type, upSide) {
        this.lvl = lvl
        this.x = x
        this.y = y
        this.type = type
        this.upSide = upSide
        this.velocity = 1
    }
    draw() {
        if (this.type == 3) {
            context.fillStyle = "red"
        }
        else {
            context.fillStyle = "black"
        }

        context.fillRect(this.x, this.y, 50, 50);


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
            changePlayersAnimation("walkRight")
            break
        case 32:
            keyPressed.space = true
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
            changePlayersAnimation("idleRight")
            break
        case 32:
            keyPressed.space = false
            break
    }
}

function changePlayersAnimation(animation) {
    players[0].currAnimation = animation
    players[1].currAnimation = animation
}