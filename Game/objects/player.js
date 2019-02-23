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
                x: 38,
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
                if (!this.upside) {
                    context.drawImage(
                        images.characters.light.idle,
                        this.currFrame * this.spriteSheet.frameSize.x,
                        0,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                        this.x - this.spriteSheet.frameSize.x / 2,
                        this.y - this.spriteSheet.frameSize.y / 2,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                    )
                } else {
                    context.drawImage(
                        images.characters.dark.idle,
                        this.currFrame * this.spriteSheet.frameSize.x,
                        0,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                        this.x - this.spriteSheet.frameSize.x / 2,
                        this.y - this.spriteSheet.frameSize.y / 2,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                    )
                }
                break
            case "idleLeft":
                break
            case "walkRight":
                if (!this.upside) {
                    context.drawImage(
                        images.characters.light.walk,
                        this.currFrame * this.spriteSheet.frameSize.x,
                        0,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                        this.x - this.spriteSheet.frameSize.x / 2,
                        this.y - this.spriteSheet.frameSize.y / 2,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                    )
                } else {
                    context.drawImage(
                        images.characters.dark.idle,
                        this.currFrame * this.spriteSheet.frameSize.x,
                        0,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                        this.x - this.spriteSheet.frameSize.x / 2,
                        this.y - this.spriteSheet.frameSize.y / 2,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                    )
                }
                
                break
            case "walkLeft":
                if (!this.upside) {
                    context.drawImage(
                        images.characters.light.walk,
                        this.currFrame * this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                        this.x - this.spriteSheet.frameSize.x / 2,
                        this.y - this.spriteSheet.frameSize.y / 2,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                    )
                } else {
                    context.drawImage(
                        images.characters.dark.idle,
                        this.currFrame * this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
                        this.x - this.spriteSheet.frameSize.x / 2,
                        this.y - this.spriteSheet.frameSize.y / 2,
                        this.spriteSheet.frameSize.x,
                        this.spriteSheet.frameSize.y,
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