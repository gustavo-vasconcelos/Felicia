//Vars
let canvas = null;
let context = null;
const width = 800;
const height = 600;

let images = {
    characters: {
        light: {
            idle: new Image(),
            walk: new Image()
        },
        dark: {
            idle: new Image()
        }
    },
    levels_background: {
        one: new Image()
    },
    tiles: {
        upside: {
            type: {
                one: {
                    variantOne: new Image(),
                    variantTwo: new Image(),
                    variantThree: new Image()
                },
                two: {
                    variantOne: new Image(),
                    variantTwo: new Image(),
                    variantThree: new Image()
                }
            },
            checkPoint: {
                upsidecheckpointOne: new Image()
            },

        },
        downside: {
            type: {
                one: {
                    variantOne: new Image(),
                    variantTwo: new Image(),
                    variantThree: new Image()
                },
                two: {
                    variantOne: new Image(),
                    variantTwo: new Image(),
                    variantThree: new Image()
                }
            },
            checkPoint: {
                downsidecheckpointOne: new Image()
            },
            bridge: {
                downsidebridge: new Image()
            }
        }
    },
    enemies: {
        upside: {
            three: {
                upsidehazardspike: new Image(),
                upsidehazardspikeTwo: new Image(),
            },
            five: {
                upsidehazardflyer: new Image(),
            }
        },
        downside: {
            three: {
                downsidehazardspike: new Image(),
                downsidehazardspikeTwo: new Image(),
            },
            five: {
                downsidehazardflyer: new Image(),
            }
        }
    }
}

images.characters.light.idle.src = "img/characters/light/idle.png"
images.characters.light.walk.src = "img/characters/light/walk.png"
images.characters.dark.idle.src = "img/characters/dark/idle.png"
//images.characters.lightCharacter.src = "img/characters/lightCharacter.png"
images.levels_background.one.src = "img/levels_background/one.png"

images.tiles.upside.type.one.variantOne.src = "img/tiles/upside/type/one/variantOne.png"
images.tiles.upside.type.one.variantTwo.src = "img/tiles/upside/type/one/variantTwo.png"
images.tiles.upside.type.one.variantThree.src = "img/tiles/upside/type/one/variantThree.png"

images.tiles.upside.type.two.variantOne.src = "img/tiles/upside/type/two/variantOne.png"
images.tiles.upside.type.two.variantTwo.src = "img/tiles/upside/type/two/variantTwo.png"
images.tiles.upside.type.two.variantThree.src = "img/tiles/upside/type/two/variantThree.png"

images.tiles.downside.type.one.variantOne.src = "img/tiles/downside/type/one/variantOne.png"
images.tiles.downside.type.one.variantTwo.src = "img/tiles/downside/type/one/variantTwo.png"
images.tiles.downside.type.one.variantThree.src = "img/tiles/downside/type/one/variantThree.png"

images.tiles.downside.type.two.variantOne.src = "img/tiles/downside/type/two/variantOne.png"
images.tiles.downside.type.two.variantTwo.src = "img/tiles/downside/type/two/variantTwo.png"
images.tiles.downside.type.two.variantThree.src = "img/tiles/downside/type/two/variantThree.png"

images.enemies.upside.three.upsidehazardspike.src = "img/enemies/upside/three/upsidehazardspike.png"
images.enemies.upside.three.upsidehazardspikeTwo.src = "img/enemies/upside/three/upsidehazardspikeTwo.png"

images.enemies.downside.three.downsidehazardspike.src = "img/enemies/downside/three/downsidehazardspike.png"
images.enemies.downside.three.downsidehazardspikeTwo.src = "img/enemies/downside/three/downsidehazardspikeTwo.png"

images.enemies.upside.five.upsidehazardflyer.src = "img/enemies/upside/five/upsidehazardflyer.png"
images.enemies.downside.five.downsidehazardflyer.src = "img/enemies/downside/five/downsidehazardflyer.png"

images.tiles.upside.checkPoint.upsidecheckpointOne.src = "img/tiles/upside/checkPoint/upsidecheckpointOne.png"
images.tiles.downside.checkPoint.downsidecheckpointOne.src = "img/tiles/downside/checkPoint/downsidecheckpointOne.png"
images.tiles.downside.bridge.downsidebridge.src = "img/tiles/downside/bridge/downsidebridge.png"


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

    //Level 0
    //up
    /*plataforms.push(new Plataforms(0, 1200, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(0, 1250, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(0, 1300, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(0, 1350, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(0, 1500, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(0, 1850, (canvas.height / 2) - 100, 6, true))
    */

    //Level 1
    /*plataforms.push(new Plataforms(1, 400, (canvas.height / 2) - 50, 1, true))
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
    plataforms.push(new Plataforms(1, 750, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(1, 800, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(1, 750, (canvas.height / 2) - 150, 2, true))
    plataforms.push(new Plataforms(1, 800, (canvas.height / 2) - 150, 2, true))
    plataforms.push(new Plataforms(1, 850, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 900, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2) - 150, 2, true))
    plataforms.push(new Plataforms(1, 1000, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 1000, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(1, 1050, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 1200, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 1250, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 1650, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 1700, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 1750, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 1750, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(1, 1800, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 1850, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 1900, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 2300, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 2350, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 2350, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(1, 2550, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(1, 2550, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 2600, (canvas.height / 2) - 150, 5, true))
    plataforms.push(new Plataforms(1, 2750, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 2750, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(1, 2800, (canvas.height / 2) - 100, 5, true))
    plataforms.push(new Plataforms(1, 2950, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 3000, (canvas.height / 2) - 50, 3, true))
    plataforms.push(new Plataforms(1, 3350, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(1, 3350, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(1, 3850, (canvas.height / 2) - 100, 6, true))



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
    plataforms.push(new Plataforms(1, 750, (canvas.height / 2) + 50, 2, false))
    plataforms.push(new Plataforms(1, 800, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 800, (canvas.height / 2) + 50, 2, false))
    plataforms.push(new Plataforms(1, 750, (canvas.height / 2) + 100, 2, false))
    plataforms.push(new Plataforms(1, 800, (canvas.height / 2) + 100, 2, false))
    plataforms.push(new Plataforms(1, 650, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(1, 700, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(1, 850, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(1, 900, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2) + 50, 2, false))
    plataforms.push(new Plataforms(1, 950, (canvas.height / 2) + 100, 2, false))
    plataforms.push(new Plataforms(1, 1000, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 1000, (canvas.height / 2) + 50, 2, false))
    plataforms.push(new Plataforms(1, 1050, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 1400, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(1, 1450, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(1, 1650, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 1700, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 1700, (canvas.height / 2) + 50, 2, false))
    plataforms.push(new Plataforms(1, 1750, (canvas.height / 2) + 50, 4, false))
    plataforms.push(new Plataforms(1, 1800, (canvas.height / 2) + 50, 4, false))
    plataforms.push(new Plataforms(1, 1850, (canvas.height / 2) + 50, 4, false))
    plataforms.push(new Plataforms(1, 1800, (canvas.height / 2) + 100, 5, false))
    plataforms.push(new Plataforms(1, 1900, (canvas.height / 2) + 50, 2, false))
    plataforms.push(new Plataforms(1, 1900, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 2300, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 2350, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(1, 2400, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(1, 2450, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 2700, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 2750, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(1, 2800, (canvas.height / 2) + 50, 5, false))
    plataforms.push(new Plataforms(1, 3100, (canvas.height / 2) + 100, 5, false))
    plataforms.push(new Plataforms(1, 3300, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(1, 3350, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(1, 3850, (canvas.height / 2), 6, false))
    */

    //Level 2
    //up 
    /*
    plataforms.push(new Plataforms(2, 450, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(2, 600, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(2, 750, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(2, 900, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(2, 1050, (canvas.height / 2) - 100, 5, true)) //type 8
    plataforms.push(new Plataforms(2, 1300, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(2, 1350, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(2, 1350, (canvas.height / 2) - 100, 1, true))
    plataforms.push(new Plataforms(2, 1350, (canvas.height / 2) - 150, 1, true))
    plataforms.push(new Plataforms(2, 1700, (canvas.height / 2) - 100, 6, true)) //type 9

        //up second
        plataforms.push(new Plataforms(2, 2800, (canvas.height / 2) - 150, 5, true))
        plataforms.push(new Plataforms(2, 2800, (canvas.height / 2) - 100, 5, true))
        plataforms.push(new Plataforms(2, 2800, (canvas.height / 2) - 50, 5, true))
        plataforms.push(new Plataforms(2, 3050, (canvas.height / 2) - 150, 5, true))
        plataforms.push(new Plataforms(2, 3050, (canvas.height / 2) - 100, 5, true))
        plataforms.push(new Plataforms(2, 3050, (canvas.height / 2) - 50, 5, true))

        plataforms.push(new Plataforms(2, 3400, (canvas.height / 2) - 100, 6, true)) //type 10
        


    //down
    plataforms.push(new Plataforms(2, 550, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(2, 600, (canvas.height / 2) +50 , 5, false)) //type 8
    plataforms.push(new Plataforms(2, 850, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(2, 850, (canvas.height / 2) +50 , 2, false))
    plataforms.push(new Plataforms(2, 900, (canvas.height / 2) +100 , 5, false))
    plataforms.push(new Plataforms(2, 900, (canvas.height / 2) +50 , 4, false))
    plataforms.push(new Plataforms(2, 950, (canvas.height / 2) +50 , 4, false))
    plataforms.push(new Plataforms(2, 1000, (canvas.height / 2) +50 , 4, false))
    plataforms.push(new Plataforms(2, 1050, (canvas.height / 2) +50 , 4, false))
    plataforms.push(new Plataforms(2, 1100, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(2, 1100, (canvas.height / 2) +50 , 2, false))
    plataforms.push(new Plataforms(2, 1150, (canvas.height / 2) +100 , 5, false))
    plataforms.push(new Plataforms(2, 1400, (canvas.height / 2) , 3, false))
    plataforms.push(new Plataforms(2, 1450, (canvas.height / 2) , 1, false))
    plataforms.push(new Plataforms(2, 1700, (canvas.height / 2), 6, false))

        //down second
        plataforms.push(new Plataforms(2, 4000, (canvas.height / 2) - 50, 1, true))
        plataforms.push(new Plataforms(2, 4050, (canvas.height / 2) - 50, 3, true))  
        plataforms.push(new Plataforms(2, 4100, (canvas.height / 2) - 50, 3, true)) 
        plataforms.push(new Plataforms(2, 4150, (canvas.height / 2) - 50, 3, true)) 
        plataforms.push(new Plataforms(2, 4200, (canvas.height / 2) - 50, 1, true)) 

        plataforms.push(new Plataforms(2, 4500, (canvas.height / 2) - 100, 6, true)) //type 10
    */

    //Level 3
    //Up
    plataforms.push(new Plataforms(3, 550, (canvas.height / 2) - 50, 5, true))
    plataforms.push(new Plataforms(3, 550, (canvas.height / 2) - 100, 5, true))
    plataforms.push(new Plataforms(3, 950, (canvas.height / 2) - 50, 5, true))
    plataforms.push(new Plataforms(3, 1000, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(3, 1000, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(3, 1050, (canvas.height / 2) - 100, 4, true))
    plataforms.push(new Plataforms(3, 1100, (canvas.height / 2) - 100, 4, true))
    plataforms.push(new Plataforms(3, 1150, (canvas.height / 2) - 100, 4, true))
    plataforms.push(new Plataforms(3, 1200, (canvas.height / 2) - 100, 4, true))
    plataforms.push(new Plataforms(3, 1250, (canvas.height / 2) - 100, 4, true))
    plataforms.push(new Plataforms(3, 1300, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(3, 1300, (canvas.height / 2) - 50, 2, true))
    plataforms.push(new Plataforms(3, 1050, (canvas.height / 2) - 150, 5, true))
    plataforms.push(new Plataforms(3, 1200, (canvas.height / 2) - 150, 5, true))
    plataforms.push(new Plataforms(3, 1450, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(3, 1450, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(3, 1500, (canvas.height / 2) - 150, 5, true))
    plataforms.push(new Plataforms(3, 1950, (canvas.height / 2) - 50, 1, true))
    plataforms.push(new Plataforms(3, 2050, (canvas.height / 2) - 150, 2, true))
    plataforms.push(new Plataforms(3, 2100, (canvas.height / 2) - 150, 2, true))
    plataforms.push(new Plataforms(3, 2100, (canvas.height / 2) - 100, 5, true))
    plataforms.push(new Plataforms(3, 2100, (canvas.height / 2) - 50, 5, true))

    //Down
    plataforms.push(new Plataforms(3, 700, (canvas.height / 2), 5, false))
    plataforms.push(new Plataforms(3, 700, (canvas.height / 2) + 50, 5, false))
    plataforms.push(new Plataforms(3, 1050, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(3, 1100, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(3, 1150, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(3, 1200, (canvas.height / 2) + 50, 5, false))
    plataforms.push(new Plataforms(3, 1250, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(3, 1300, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(3, 1350, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(3, 1400, (canvas.height / 2), 3, false))
    plataforms.push(new Plataforms(3, 1550, (canvas.height / 2) + 50, 5, false))
    plataforms.push(new Plataforms(3, 1900, (canvas.height / 2), 1, false))
    plataforms.push(new Plataforms(3, 2000, (canvas.height / 2) + 100, 2, false))
    plataforms.push(new Plataforms(3, 2050, (canvas.height / 2) + 100, 2, false))
    plataforms.push(new Plataforms(3, 2050, (canvas.height / 2) + 150, 5, false))
    plataforms.push(new Plataforms(3, 2050, (canvas.height / 2) + 200, 5, false))
    plataforms.push(new Plataforms(3, 2050, (canvas.height / 2) + 250, 5, false))


    //Boss Fight
    plataforms.push(new Plataforms(3, 3000, (canvas.height / 2), 2, true))
    plataforms.push(new Plataforms(3, 3050, (canvas.height / 2), 2, true))
    plataforms.push(new Plataforms(3, 3100, (canvas.height / 2), 2, true))
    plataforms.push(new Plataforms(3, 3000, (canvas.height / 2) - 50, 2, true))
    plataforms.push(new Plataforms(3, 3000, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(3, 3200, (canvas.height / 2) + 150, 1, true))

    plataforms.push(new Plataforms(3, 3700, (canvas.height / 2), 2, true))
    plataforms.push(new Plataforms(3, 3650, (canvas.height / 2), 2, true))
    plataforms.push(new Plataforms(3, 3600, (canvas.height / 2), 2, true))
    plataforms.push(new Plataforms(3, 3700, (canvas.height / 2) - 50, 2, true))
    plataforms.push(new Plataforms(3, 3700, (canvas.height / 2) - 100, 2, true))
    plataforms.push(new Plataforms(3, 3500, (canvas.height / 2) + 150, 1, true))
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
        })
        if (sceneLimits.right <= 3998) {
            context.translate(-2, 0)
            sceneLimits.left += 2
            sceneLimits.right += 2
        }

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



class Plataforms {
    constructor(lvl, x, y, type, upside) {
        this.lvl = lvl
        this.x = x
        this.y = y
        this.type = type
        if (this.type == 6) {
            this.w = 50
            this.h = 100
        } else {
            this.w = 50
            this.h = 50
        }
        if (this.type == 1 || this.type == 2) {
            this.rand = Math.floor(Math.random() * 3) + 1
        }
        this.upside = upside
        this.velocity = 1
        this.currFrame = 0
        this.count = 0
    }
    draw() {
        /*if (this.type == 3) {
            context.fillStyle = "red"
        }
        else {
            context.fillStyle = "black"
        }*/

        //plataforms upside
        if (this.type == 1 && this.upside) {

            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.upside.type.one.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.upside.type.one.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.upside.type.one.variantThree, this.x, this.y, this.w, this.h)
                    break
            }

        } else if (this.type == 2 && this.upside) {
            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.upside.type.two.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.upside.type.two.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.upside.type.two.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        }

        //plataforms downside
        if (this.type == 1 && !this.upside) {

            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.downside.type.one.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.downside.type.one.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.downside.type.one.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        } else if (this.type == 2 && !this.upside) {
            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.downside.type.two.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.downside.type.two.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.downside.type.two.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        }
        //Monsters down
        if (this.type == 3 && !this.upside) {

            context.drawImage(images.enemies.downside.three.downsidehazardspike, this.x, this.y, this.w, this.h)

        } else if (this.type == 7 && !this.upside) {
            context.drawImage(images.enemies.downside.three.downsidehazardspikeTwo, this.x, this.y, this.w, this.h)
        } else if (this.type == 5 && !this.upside) {
            context.drawImage(images.enemies.downside.five.downsidehazardflyer, 0 + this.currFrame, 0, this.w, this.h, this.x, this.y, this.w, this.h);



            if (this.count >= 10) {
                this.currFrame += 50
                this.count = 0
            }


            if (this.currFrame > 100) {
                this.currFrame = 0
            }
            this.count += 1
        }
        //Monsters upside
        if (this.type == 3 && this.upside) {

            context.drawImage(images.enemies.upside.three.upsidehazardspike, this.x, this.y, this.w, this.h)

        } else if (this.type == 7 && this.upside) {
            context.drawImage(images.enemies.upside.three.upsidehazardspikeTwo, this.x, this.y, this.w, this.h)
        } else if (this.type == 5 && this.upside) {


            context.drawImage(images.enemies.upside.five.upsidehazardflyer, 0 + this.currFrame, 0, this.w, this.h, this.x, this.y, this.w, this.h);

            if (this.count >= 10) {
                this.currFrame += 50
                this.count = 0
            }


            if (this.currFrame > 100) {
                this.currFrame = 0
            }
            this.count += 1
        }

        //CheckPoint Upside
        if (this.type == 6 && this.upside) {
            context.drawImage(images.tiles.upside.checkPoint.upsidecheckpointOne, this.x, this.y, this.w, this.h)
        }
        //CheckPoint Downside
        if (this.type == 6 && !this.upside) {
            context.drawImage(images.tiles.downside.checkPoint.downsidecheckpointOne, this.x, this.y, this.w, this.h)
        }
        //Bridge
        if (this.type == 4 && !this.upside) {
            context.drawImage(images.tiles.downside.bridge.downsidebridge, this.x, this.y, this.w, this.h)
        }


        //context.fillRect(this.x, this.y, this.w, this.h);


    }
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
            break
        case 37:
            keyPressed.left = true
            changePlayersAnimation("walkLeft")
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