class Player {
    constructor(x, y, upside) {
        this.x = x
        this.y = y
        this.jumping = false
        this.upside = upside
        this.falling = false
        this.v0 = 5
        this.currFrame = 0
        this.frameSize = {
            idle: {
                x: 38,
                y: 64
            },
            walk: {
                x: 40,
                y: 64
            }
        }
        this.body = Bodies.rectangle(x, y, this.frameSize.walk.x, this.frameSize.walk.y, {
            inertia: Infinity,
            label: "character",
            friction: 0
        })
        console.log(this.body)
        World.add(engine.world, this.body)
        this.groundHeight = this.y + this.frameSize.idle.y / 2
        this.currAnimation = "idleRight"
    }

    draw() {
        /*
        if (this.currAnimation === "walkRight" || this.currAnimation === "walkLeft") {
            context.fillRect(
                this.x - this.frameSize.walk.x / 2,
                this.y - this.frameSize.walk.y / 2,
                this.frameSize.walk.x,
                this.frameSize.walk.y
            )
        } else {
            context.fillRect(
                this.x - this.frameSize.idle.x / 2,
                this.y - this.frameSize.idle.y / 2,
                this.frameSize.idle.x,
                this.frameSize.idle.y
            )
        }*/


        switch (this.currAnimation) {
            case "idleRight":
                if (!this.upside) {
                    context.drawImage(
                        images.characters.light.idle,
                        this.currFrame * this.frameSize.idle.x,
                        0,
                        this.frameSize.idle.x,
                        this.frameSize.idle.y,
                        this.body.position.x - this.frameSize.idle.x / 2,
                        this.body.position.y - this.frameSize.idle.y / 2,
                        this.frameSize.idle.x,
                        this.frameSize.idle.y,
                    )
                } else {
                    context.drawImage(
                        images.characters.dark.idle,
                        this.currFrame * this.frameSize.idle.x,
                        0,
                        this.frameSize.idle.x,
                        this.frameSize.idle.y,
                        this.body.position.x - this.frameSize.idle.x / 2,
                        this.body.position.y - this.frameSize.idle.y / 2,
                        this.frameSize.idle.x,
                        this.frameSize.idle.y,
                    )
                }
                break
            case "idleLeft":
                if (!this.upside) {
                    context.drawImage(
                        images.characters.light.idle,
                        this.currFrame * this.frameSize.idle.x,
                        this.frameSize.idle.y,
                        this.frameSize.idle.x,
                        this.frameSize.idle.y,
                        this.body.position.x - this.frameSize.idle.x / 2,
                        this.body.position.y - this.frameSize.idle.y / 2,
                        this.frameSize.idle.x,
                        this.frameSize.idle.y,
                    )
                } else {
                    context.drawImage(
                        images.characters.dark.idle,
                        this.currFrame * this.frameSize.idle.x,
                        this.frameSize.idle.y,
                        this.frameSize.idle.x,
                        this.frameSize.idle.y,
                        this.body.position.x - this.frameSize.idle.x / 2,
                        this.body.position.y - this.frameSize.idle.y / 2,
                        this.frameSize.idle.x,
                        this.frameSize.idle.y,
                    )
                }
                break
            case "walkRight":
                if (!this.upside) {
                    context.drawImage(
                        images.characters.light.walk,
                        this.currFrame * this.frameSize.walk.x,
                        0,
                        this.frameSize.walk.x,
                        this.frameSize.walk.y,
                        this.body.position.x - this.frameSize.walk.x / 2,
                        this.body.position.y - this.frameSize.walk.y / 2,
                        this.frameSize.walk.x,
                        this.frameSize.walk.y,
                    )
                } else {
                    context.drawImage(
                        images.characters.dark.walk,
                        this.currFrame * this.frameSize.walk.x,
                        0,
                        this.frameSize.walk.x,
                        this.frameSize.walk.y,
                        this.body.position.x - this.frameSize.walk.x / 2,
                        this.body.position.y - this.frameSize.walk.y / 2,
                        this.frameSize.walk.x,
                        this.frameSize.walk.y,
                    )
                }
                break
            case "walkLeft":
                if (!this.upside) {
                    context.drawImage(
                        images.characters.light.walk,
                        this.currFrame * this.frameSize.walk.x,
                        this.frameSize.walk.y,
                        this.frameSize.walk.x,
                        this.frameSize.walk.y,
                        this.body.position.x - this.frameSize.walk.x / 2,
                        this.body.position.y - this.frameSize.walk.y / 2,
                        this.frameSize.walk.x,
                        this.frameSize.walk.y,
                    )
                } else {
                    context.drawImage(
                        images.characters.dark.walk,
                        this.currFrame * this.frameSize.walk.x,
                        this.frameSize.walk.y,
                        this.frameSize.walk.x,
                        this.frameSize.walk.y,
                        this.body.position.x - this.frameSize.walk.x / 2,
                        this.body.position.y - this.frameSize.walk.y / 2,
                        this.frameSize.walk.x,
                        this.frameSize.walk.y,
                    )
                }
                break
        }

        if (frame % 10 === 0) {
            this.currFrame++
        }
        if (this.currFrame > 3) {
            this.currFrame = 0
        }
    }

    move() {
        this.body.position.x = this.x
        this.body.position.y = this.y
        context.beginPath()
        context.arc(this.body.position.x, this.body.position.y, 20, 0, 2 * Math.PI)
        context.stroke()

        if (keyPressed.right && !keyBlocked.right) {
            this.x += this.v0
        }

        if (keyPressed.left && !keyBlocked.left) {
            this.x -= this.v0
        }
        
        
        if (this.falling) {
            keyPressed.up = false
        }

        if (keyPressed.up && !this.jumping && !keyBlocked.up) {
            this.jumping = true
            this.falling = false
        }
        
        if (this.jumping && keyPressed.up) {
            if (this.upside) {
                this.y += this.v0 + 10
            } else {
                this.y -= this.v0 + 10
            }
        }

        if (this.jumping && !keyPressed.up) {
            this.falling = true
            if (!this.upside) {
                this.y += this.v0
                this.y -= 0.2
            } else {
                this.y -= this.v0
                this.y += 0.2
            }
        }

        if (!this.upside) { //CIMA
            if (this.y + playerRadius >= canvas.height / 2) {
                this.y = canvas.height / 2 - playerRadius
                this.jumping = false
                this.falling = false
            }
            if (this.groundHeight - (this.y + playerRadius) >= 150) {
                this.falling = true
                //LIMITE
            }
        } else {
            if (this.y - playerRadius <= canvas.height / 2 - 1) {
                this.y = canvas.height / 2 + playerRadius - 1
                this.jumping = false
                this.falling = false
            }
            if ((this.y - playerRadius) - this.groundHeight >= 150) {
                this.falling = true
                //LIMITE
            }

        }
        
    }
    /*
    isCollidingWithPlatform() {
        platforms.forEach(platform => {
            if (this.currAnimation === "idleRight" || this.currAnimation === "idleLeft") {
                if (!this.upside) {
                    if (
                        this.x + this.frameSize.idle.x / 2 >= platform.x && // ok
                        this.x <= platform.x + platform.w && // ok
                        this.y + this.frameSize.idle.y / 2 >= platform.y // ok
                    ) {
                        console.log("PARFAIT TOPO")
                    }
                } else {
                    if (
                        this.x + this.frameSize.idle.x / 2 >= platform.x && // ok
                        this.x <= platform.x + platform.w && // ok
                        this.y - this.frameSize.idle.y / 2 <= platform.y // ok
                    ) {
                        console.log("PARFAIT DOWN")
                    }
                }
            } else {
                if (!this.upside) {
                    if (
                        this.x + this.frameSize.walk.x / 2 >= platform.x && // ok
                        this.x <= platform.x + platform.w && // ok
                        this.y + this.frameSize.walk.y / 2 >= platform.y // ok
                    ) {
                        console.log("PARFAIT TOPO")
                    }
                } else {
                    if (
                        this.x + this.frameSize.walk.x / 2 >= platform.x && // ok
                        this.x <= platform.x + platform.w && // ok
                        this.y - this.frameSize.walk.y / 2 <= platform.y // ok
                    ) {
                        console.log("PARFAIT DOWN")
                    }
                }
            }
        })


    }*/

    platformsCollisions() {
        players.forEach(player => {
            player.isCollidingWithPlatform()
            /*
            platforms.forEach(platform => {
                if (platform.x >= sceneLimits.left && platform.x <= sceneLimits.right) {
                    // sprite dimensions differs according to animation walk or idle
                    if (player.currAnimation === "walkRight" || player.currAnimation === "walkLeft") {

                        if (!player.upside && platform.type !== 3 && platform.type !== 5) {
                            // left

                            if (
                                player.x + player.frameSize.walk.x / 2 >= platform.x &&
                                player.y - player.frameSize.walk.y / 2 >= platform.y &&
                                player.x + player.frameSize.walk.x / 2 < platform.x + platform.w
                            ) {
                                player.x = platform.x - player.frameSize.walk.x / 2
                            }

                            /*
                            // top
                            if(
                                player.y - player.frameSize.walk.y / 2 <= platform.y + 2 &&
                                player.y - player.frameSize.walk.y / 2 >= platform.y - 2 &&
                                player.x + player.frameSize.walk.x / 2 >= platform.x
                                //player.x + player.frameSize.walk.x / 2 <= platform.x + platform.w
                            ) {
                                console.log("CIMA")
                                player.y = platform.y - player.frameSize.walk.y / 2
                                player.groundHeight = player.y
                            }*/
            /*
                                    }
            
                                } else {
                                    if (!player.upside && platform.type !== 3 && platform.type !== 5) {
                                        // left
            
                                        if (
                                            player.x + player.frameSize.idle.x / 2 >= platform.x &&
                                            player.y - player.frameSize.idle.y / 2 >= platform.y &&
                                            player.x + player.frameSize.idle.x / 2 < platform.x + platform.w
                                        ) {
                                            player.x = platform.x - player.frameSize.idle.x / 2
                                            console.log("yes idle")
                                        }
                                        /*
                                         // top
                                         if(
                                            player.y - player.frameSize.idle.y / 2 >= platform.y &&
                                            player.x + player.frameSize.idle.x / 2 >= platform.x &&
                                            player.x + player.frameSize.idle.x / 2 <= platform.x + platform.w
                                        ) {
                                            player.y = platform.y - player.frameSize.idle.y / 2
                                        }*/
            /*
        }


    }
}
})*/
        })
    }
}