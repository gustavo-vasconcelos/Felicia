class Player {
    constructor(x, y, upside) {
        this.x = x
        this.y = y
        this.jumpStartY = y
        this.jumping = false
        this.upside = upside
        this.falling = false
        this.v0 = 5
        this.currFrame = 0
        this.dashAssister = 0
        this.lastTimeLooking = 0
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
        if((dashing && this.upside) || this.dashAssister>=1){
            if(this.lastX < this.x){
                this.dashAssister--
            }
            else{
                this.dashAssister++
            }

            context.drawImage(
                images.characters.dark.idle,
                this.currFrame * this.frameSize.idle.x,
                0,
                this.frameSize.idle.x,
                this.frameSize.idle.y,
                this.body.position.x - this.frameSize.idle.x / 2 - this.dashAssister*20,
                this.body.position.y - this.frameSize.idle.y / 2,
                this.frameSize.idle.x,
                this.frameSize.idle.y,
            )
            if(this.dashAssister >= 10 || this.dashAssister <= 9){
                this.dashAssister=0
            }
        }

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
                this.y  - this.frameSize.idle.y / 2,
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

    getAABB() {
        return {x: this.x - this.frameSize.walk.x/2, y: this.y - this.frameSize.walk.y/2, w: this.frameSize.walk.x, h: this.frameSize.walk.y};
    }
    getAABBOffset(offset) {
        return {x: this.x + offset.x - this.frameSize.walk.x/2, y: this.y + offset.y - this.frameSize.walk.y/2, w: this.frameSize.walk.x, h: this.frameSize.walk.y};
    }

    // returns true if colliding with platforms
    getCollisionAt(offset) {
        if (offset == null) {
            offset = {x: 0.0, y: 0.0}
        }
        var collides = false;
        for (let i = 0; i < platforms.length; i += 1) {
            var platform = platforms[i];
            // Skip monsters
            if (platform.type == 3 || platform.type == 5) {
                continue;
            }
            // Skip cute ending things? i dont know what these are
            if (platform.type == 6 || platform.type == 9) {
                continue;
            }
            // do position check against AABB of platform
            if (collision_aabb_aabb(this.getAABBOffset(offset), platform.getAABB()) == true) {
                collides = true;
                break;
            }
        }
        return collides;
    }

    // returns true if colliding with monsters
    getMonstersAt(offset) {
        if (offset == null) {
            offset = {x: 0.0, y: 0.0}
        }
        var collides = false;
        for (let i = 0; i < platforms.length; i += 1) {
            var platform = platforms[i];
            // Skip monsters
            if (platform.type != 3 && platform.type != 5) {
                continue;
            }
            // do position check against AABB of platform
            if (collision_aabb_aabb(this.getAABBOffset(offset), platform.getAABB()) == true) {
                collides = true;
                break;
            }
        }
        return collides;
    }

    move() {

        this.body.position.x = this.x
        this.body.position.y = this.y
        context.beginPath()
        context.arc(this.body.position.x, this.body.position.y, 20, 0, 2 * Math.PI)
        context.stroke()

        if(dashing && this.upside){
            if(this.lastX < this.x){
                this.x -= 200
                dashing= false
            }
            else{
                this.x += 200
                dashing= false
            }
        }
        


        if (keyPressed.right && !keyBlocked.right) {
            if (!this.getCollisionAt({x: +this.v0, y: 0.0})) {
                this.x += this.v0
            }
        }

        if (keyPressed.left && !keyBlocked.left) {
            if (!this.getCollisionAt({x: -this.v0, y: 0.0})) {
                this.x -= this.v0
            }
        }


        if (this.falling) {
            keyPressed.up = false
        }

        if (keyPressed.up && !this.jumping && !keyBlocked.up) {
            this.jumping = true
            this.falling = false
            this.jumpStartY = this.y
        }

        // jumping speed
        if (this.jumping && keyPressed.up) {
            if (this.upside) {
                this.y  += this.v0 + 10
            } else {
                this.y  -= this.v0 + 10
            }
        }

        // falling speed
        if (this.jumping && !keyPressed.up) {
            this.falling = true
            if (!this.upside) {
                if (!this.getCollisionAt({x: 0.0, y: this.v0-0.2})) {
                    this.y  += this.v0
                    this.y  -= 0.2
                }
                else {
                    // move contact position (GOOD OLD GAME MAKER & UNITY STYLE)
                    while (!this.getCollisionAt({x: 0.0, y: +1.0})) {
                        this.y += +1.0
                    }
                }
            } else {
                if (!this.getCollisionAt({x: 0.0, y: -this.v0+0.2})) {
                    this.y  -= this.v0
                    this.y  += 0.2
                }
                else {
                    // move contact position (GOOD OLD GAME MAKER & UNITY STYLE)
                    while (!this.getCollisionAt({x: 0.0, y: -1.0})) {
                        this.y += -1.0
                    }
                }
            }
        }

        // jump stop motion check:
        if (!this.upside) { //CIMA
            if (this.jumpStartY - (this.y  + playerRadius) >= 150) {
                this.falling = true
                //LIMITE
            }
        } else {
            if ((this.y  - playerRadius) - this.jumpStartY >= 150) {
                this.falling = true
                //LIMITE
            }
        }

        // ground check:
        if (!this.upside) { //CIMA
            // do a collision check at direction of gravity to find ground
            if (this.getCollisionAt({x: 0.0, y: +2.0})) {
                if (this.jumping && this.falling) { // no longer "rising"
                    this.jumping = false
                    this.falling = false
                }
            }
            else { // no more terre, time to fall
                if (!this.jumping && !this.falling) {
                    this.jumping = true
                    this.falling = true
                }
            }
            // base terre check
            if (this.y  + playerRadius >= canvas.height / 2) { // terre check
                this.y  = canvas.height / 2 - playerRadius
                this.jumping = false
                this.falling = false
            }
        } else {
            // do a collision check at direction of gravity to find ground
            if (this.getCollisionAt({x: 0.0, y: -2.0})) {
                if (this.jumping && this.falling) { // no longer "rising"
                    this.jumping = false
                    this.falling = false
                }
            }
            else { // no more terre, time to fall
                if (!this.jumping && !this.falling) {
                    this.jumping = true
                    this.falling = true
                }
            }
            // base terre check
            if (this.y  - playerRadius <= canvas.height / 2 - 1) { // terre check
                this.y  = canvas.height / 2 + playerRadius - 1
                this.jumping = false
                this.falling = false
            }
        }

        // update body (kinematic nonsense)
        this.body.position.x = this.x;
        this.body.position.y = this.y;
    }
    /*
    isCollidingWithPlatform() {
        platforms.forEach(platform => {
            if (this.currAnimation === "idleRight" || this.currAnimation === "idleLeft") {
                if (!this.upside) {
                    if (
                        this.x + this.frameSize.idle.x / 2 >= platform.x && // ok
                        this.x <= platform.x + platform.w && // ok
                        this.y + 10 + this.frameSize.idle.y / 2 >= platform.y // ok
                    ) {
                        console.log("PARFAIT TOPO")
                    }
                } else {
                    if (
                        this.x + this.frameSize.idle.x / 2 >= platform.x && // ok
                        this.x <= platform.x + platform.w && // ok
                        this.y + 10 - this.frameSize.idle.y / 2 <= platform.y // ok
                    ) {
                        console.log("PARFAIT DOWN")
                    }
                }
            } else {
                if (!this.upside) {
                    if (
                        this.x + this.frameSize.walk.x / 2 >= platform.x && // ok
                        this.x <= platform.x + platform.w && // ok
                        this.y + 10 + this.frameSize.walk.y / 2 >= platform.y // ok
                    ) {
                        console.log("PARFAIT TOPO")
                    }
                } else {
                    if (
                        this.x + this.frameSize.walk.x / 2 >= platform.x && // ok
                        this.x <= platform.x + platform.w && // ok
                        this.y + 10 - this.frameSize.walk.y / 2 <= platform.y // ok
                    ) {
                        console.log("PARFAIT DOWN")
                    }
                }
            }
        })


    }*/
    
    //platformsCollisions() {
      //  players.forEach(player => {
        //    player.isCollidingWithPlatform()
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
  /*      })
    }*/
}
