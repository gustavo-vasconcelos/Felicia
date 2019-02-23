let canvas = null
let context = null
const width = 800
const height = 600

var clicks = 0
let currentLevel = -1 //MENU

//OnLoad
window.onload = function () {
    canvas = document.getElementById("my_canvas");
    context = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    context.clearRect(0, 0, width, height); //clears everything

    if (localStorage.getItem('currentLevel') != null) {
        currentLevel = localStorage.getItem('currentLevel')
    }
    else {
        localStorage.setItem('currentLevel', currentLevel)
    }

    if (currentLevel == -1) {
        menu()
    }
    else {
        game();
    }

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

    //Level 0
    //up

    if (currentLevel == 0) {
        plataforms.push(new Platform(0, 1200, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(0, 1250, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(0, 1300, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(0, 1350, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(0, 1500, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(0, 1850, (canvas.height / 2) - 100, 6, true))
    }

    //Level 1
    if (currentLevel == 1) {
        plataforms.push(new Platform(1, 400, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 450, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 500, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 550, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 600, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 550, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(1, 600, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(1, 550, (canvas.height / 2) - 150, 2, true))
        plataforms.push(new Platform(1, 600, (canvas.height / 2) - 150, 2, true))
        plataforms.push(new Platform(1, 650, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(1, 700, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(1, 750, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 800, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 750, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(1, 800, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(1, 750, (canvas.height / 2) - 150, 2, true))
        plataforms.push(new Platform(1, 800, (canvas.height / 2) - 150, 2, true))
        plataforms.push(new Platform(1, 850, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(1, 900, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(1, 950, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 950, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(1, 950, (canvas.height / 2) - 150, 2, true))
        plataforms.push(new Platform(1, 1000, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 1000, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(1, 1050, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 1200, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(1, 1250, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(1, 1650, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 1700, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 1750, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 1750, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(1, 1800, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(1, 1850, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(1, 1900, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 2300, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 2350, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 2350, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(1, 2550, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(1, 2550, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 2600, (canvas.height / 2) - 150, 5, true))
        plataforms.push(new Platform(1, 2750, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 2750, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(1, 2800, (canvas.height / 2) - 100, 5, true))
        plataforms.push(new Platform(1, 2950, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(1, 3000, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(1, 3350, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(1, 3350, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(1, 3850, (canvas.height / 2) - 100, 6, true))

        //Downside
        plataforms.push(new Platform(1, 400, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 450, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 500, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 550, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 600, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 550, (canvas.height / 2) + 50, 2, false))
        plataforms.push(new Platform(1, 600, (canvas.height / 2) + 50, 2, false))
        plataforms.push(new Platform(1, 550, (canvas.height / 2) + 100, 2, false))
        plataforms.push(new Platform(1, 600, (canvas.height / 2) + 100, 2, false))
        plataforms.push(new Platform(1, 750, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 750, (canvas.height / 2) + 50, 2, false))
        plataforms.push(new Platform(1, 800, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 800, (canvas.height / 2) + 50, 2, false))
        plataforms.push(new Platform(1, 750, (canvas.height / 2) + 100, 2, false))
        plataforms.push(new Platform(1, 800, (canvas.height / 2) + 100, 2, false))
        plataforms.push(new Platform(1, 650, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(1, 700, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(1, 850, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(1, 900, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(1, 950, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 950, (canvas.height / 2) + 50, 2, false))
        plataforms.push(new Platform(1, 950, (canvas.height / 2) + 100, 2, false))
        plataforms.push(new Platform(1, 1000, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 1000, (canvas.height / 2) + 50, 2, false))
        plataforms.push(new Platform(1, 1050, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 1400, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(1, 1450, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(1, 1650, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 1700, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 1700, (canvas.height / 2) + 50, 2, false))
        plataforms.push(new Platform(1, 1750, (canvas.height / 2) + 50, 4, false))
        plataforms.push(new Platform(1, 1800, (canvas.height / 2) + 50, 4, false))
        plataforms.push(new Platform(1, 1850, (canvas.height / 2) + 50, 4, false))
        plataforms.push(new Platform(1, 1800, (canvas.height / 2) + 100, 5, false))
        plataforms.push(new Platform(1, 1900, (canvas.height / 2) + 50, 2, false))
        plataforms.push(new Platform(1, 1900, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 2300, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 2350, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(1, 2400, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(1, 2450, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 2700, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 2750, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(1, 2800, (canvas.height / 2) + 50, 5, false))
        plataforms.push(new Platform(1, 3100, (canvas.height / 2) + 100, 5, false))
        plataforms.push(new Platform(1, 3300, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(1, 3350, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(1, 3850, (canvas.height / 2), 6, false))
    }

    //Level 2
    if (currentLevel == 2) {
        //up 

        plataforms.push(new Platform(2, 450, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(2, 600, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(2, 750, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(2, 900, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(2, 1050, (canvas.height / 2) - 100, 5, true)) //type 8
        plataforms.push(new Platform(2, 1300, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(2, 1350, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(2, 1350, (canvas.height / 2) - 100, 1, true))
        plataforms.push(new Platform(2, 1350, (canvas.height / 2) - 150, 1, true))
        plataforms.push(new Platform(2, 1700, (canvas.height / 2) - 100, 6, true)) //type 9

        //up second
        plataforms.push(new Platform(2, 2800, (canvas.height / 2) - 150, 5, true))
        plataforms.push(new Platform(2, 2800, (canvas.height / 2) - 100, 5, true))
        plataforms.push(new Platform(2, 2800, (canvas.height / 2) - 50, 5, true))
        plataforms.push(new Platform(2, 3050, (canvas.height / 2) - 150, 5, true))
        plataforms.push(new Platform(2, 3050, (canvas.height / 2) - 100, 5, true))
        plataforms.push(new Platform(2, 3050, (canvas.height / 2) - 50, 5, true))

        plataforms.push(new Platform(2, 3400, (canvas.height / 2) - 100, 6, true)) //type 10



        //down
        plataforms.push(new Platform(2, 550, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(2, 600, (canvas.height / 2) + 50, 5, false)) //type 8
        plataforms.push(new Platform(2, 850, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(2, 850, (canvas.height / 2) + 50, 2, false))
        plataforms.push(new Platform(2, 900, (canvas.height / 2) + 100, 5, false))
        plataforms.push(new Platform(2, 900, (canvas.height / 2) + 50, 4, false))
        plataforms.push(new Platform(2, 950, (canvas.height / 2) + 50, 4, false))
        plataforms.push(new Platform(2, 1000, (canvas.height / 2) + 50, 4, false))
        plataforms.push(new Platform(2, 1050, (canvas.height / 2) + 50, 4, false))
        plataforms.push(new Platform(2, 1100, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(2, 1100, (canvas.height / 2) + 50, 2, false))
        plataforms.push(new Platform(2, 1150, (canvas.height / 2) + 100, 5, false))
        plataforms.push(new Platform(2, 1400, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(2, 1450, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(2, 1700, (canvas.height / 2), 6, false))

        //down second
        plataforms.push(new Platform(2, 4000, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(2, 4050, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(2, 4100, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(2, 4150, (canvas.height / 2) - 50, 3, true))
        plataforms.push(new Platform(2, 4200, (canvas.height / 2) - 50, 1, true))

        plataforms.push(new Platform(2, 4500, (canvas.height / 2) - 100, 6, true)) //type 10
    }

    //Level 3
    if (currentLevel == 3) {
        //Up
        plataforms.push(new Platform(3, 550, (canvas.height / 2) - 50, 5, true))
        plataforms.push(new Platform(3, 550, (canvas.height / 2) - 100, 5, true))
        plataforms.push(new Platform(3, 950, (canvas.height / 2) - 50, 5, true))
        plataforms.push(new Platform(3, 1000, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(3, 1000, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(3, 1050, (canvas.height / 2) - 100, 4, true))
        plataforms.push(new Platform(3, 1100, (canvas.height / 2) - 100, 4, true))
        plataforms.push(new Platform(3, 1150, (canvas.height / 2) - 100, 4, true))
        plataforms.push(new Platform(3, 1200, (canvas.height / 2) - 100, 4, true))
        plataforms.push(new Platform(3, 1250, (canvas.height / 2) - 100, 4, true))
        plataforms.push(new Platform(3, 1300, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(3, 1300, (canvas.height / 2) - 50, 2, true))
        plataforms.push(new Platform(3, 1050, (canvas.height / 2) - 150, 5, true))
        plataforms.push(new Platform(3, 1200, (canvas.height / 2) - 150, 5, true))
        plataforms.push(new Platform(3, 1450, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(3, 1450, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(3, 1500, (canvas.height / 2) - 150, 5, true))
        plataforms.push(new Platform(3, 1950, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Platform(3, 2050, (canvas.height / 2) - 150, 2, true))
        plataforms.push(new Platform(3, 2100, (canvas.height / 2) - 150, 2, true))
        plataforms.push(new Platform(3, 2100, (canvas.height / 2) - 100, 5, true))
        plataforms.push(new Platform(3, 2100, (canvas.height / 2) - 50, 5, true))

        //Down
        plataforms.push(new Platform(3, 700, (canvas.height / 2), 5, false))
        plataforms.push(new Platform(3, 700, (canvas.height / 2) + 50, 5, false))
        plataforms.push(new Platform(3, 1050, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(3, 1100, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(3, 1150, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(3, 1200, (canvas.height / 2) + 50, 5, false))
        plataforms.push(new Platform(3, 1250, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(3, 1300, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(3, 1350, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(3, 1400, (canvas.height / 2), 3, false))
        plataforms.push(new Platform(3, 1550, (canvas.height / 2) + 50, 5, false))
        plataforms.push(new Platform(3, 1900, (canvas.height / 2), 1, false))
        plataforms.push(new Platform(3, 2000, (canvas.height / 2) + 100, 2, false))
        plataforms.push(new Platform(3, 2050, (canvas.height / 2) + 100, 2, false))
        plataforms.push(new Platform(3, 2050, (canvas.height / 2) + 150, 5, false))
        plataforms.push(new Platform(3, 2050, (canvas.height / 2) + 200, 5, false))
        plataforms.push(new Platform(3, 2050, (canvas.height / 2) + 250, 5, false))


        //Boss Fight
        plataforms.push(new Platform(3, 3000, (canvas.height / 2), 2, true))
        plataforms.push(new Platform(3, 3050, (canvas.height / 2), 2, true))
        plataforms.push(new Platform(3, 3100, (canvas.height / 2), 2, true))
        plataforms.push(new Platform(3, 3000, (canvas.height / 2) - 50, 2, true))
        plataforms.push(new Platform(3, 3000, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(3, 3200, (canvas.height / 2) + 150, 1, true))

        plataforms.push(new Platform(3, 3700, (canvas.height / 2), 2, true))
        plataforms.push(new Platform(3, 3650, (canvas.height / 2), 2, true))
        plataforms.push(new Platform(3, 3600, (canvas.height / 2), 2, true))
        plataforms.push(new Platform(3, 3700, (canvas.height / 2) - 50, 2, true))
        plataforms.push(new Platform(3, 3700, (canvas.height / 2) - 100, 2, true))
        plataforms.push(new Platform(3, 3500, (canvas.height / 2) + 150, 1, true))
    }
    //finalBoss.push(new FinalBoss())

    animate()

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
finalBoss = []
balls = []

function menu() {

    //Meter Logo Aqui

    context.font = "70px Helvetica";
    context.fillText("Start Game", canvas.width/2 - (context.measureText("Start Game").width/2), 3*(canvas.height/4));

}

//Update, draw ...
function animate() {

    if (keyPressed.space && !pause) {
        pause = true
    } else if (keyPressed.space && pause) {
        pause = false
    }

    if (!pause) {
        context.clearRect(sceneLimits.left, 0, sceneLimits.right, height); //clears everything
        // generateGrid(50, "gray")

        context.drawImage(images.levels_background.one, 0, 0)
        context.drawImage(images.levels_background.one, 2000, 0)

        plataforms.forEach(plataform => {
            plataform.draw()
        })

        players.forEach(player => {
            player.draw()
            player.move()

            if (player.x <= sceneLimits.left - playerRadius) {
                restartGame()
            }
        })
        if (sceneLimits.right <= 3998) {
            if (!(clicks == 0)) {
                context.translate(-2, 0)
                sceneLimits.left += 2
                sceneLimits.right += 2
            }


        }

        frame++
    }
    window.requestAnimationFrame(animate)
}

function restartGame() {
    /*
    context.translate(sceneLimits.left / 2,0)
    players.forEach(pl => {
        pl.x = playerRadius
    })*/
    location.reload();
}

/*
class FinalBoss {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.time = 0
        this.particleR1 = 20
        this.particleR2 = 10
        this.velIn = velIn

    
    }

    draw(){

    }

}

class BurstAttack {

    this.x = x;
    this.y = y;
    this.r = r;
    this.velIn = velIn
    this.ang = ang
    this.vX = this.velIn * Math.cos(this.ang* Math.PI / 180)
    this.vY = this.velIn * Math.sin(this.ang* Math.PI / 180)
    this.acc = acc;   
    this.color = color
    this.active = true



}*/

function keyDown(e) {
    switch (e.keyCode) {
        case 38:
            keyPressed.up = true
            clicks++
            break
        case 37:
            keyPressed.left = true
            clicks++
            changePlayersAnimation("walkLeft")
            break
        case 39:
            keyPressed.right = true
            clicks++
            changePlayersAnimation("walkRight")
            break
        case 32:
            keyPressed.space = true
            break
        case 82:
            restartGame()
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
            changePlayersAnimation("walkLeft")
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