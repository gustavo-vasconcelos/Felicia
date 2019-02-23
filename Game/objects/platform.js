class Platform {
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
        this.groundHeight = canvas.height / 2
        this.spriteSheet = {
            frameSize: {
                x: 49,
                y: 64
            }
        }
        this.currAnimation = "idleRight"
    }
    draw() {
        /*if (this.type == 3) {
            context.fillStyle = "red"
        }
        else {
            context.fillStyle = "black"
        }*/

        if(this.lvl==1){
            //plataforms upside
        if (this.type == 1 && this.upside) {

            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.one.upside.type.one.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.one.upside.type.one.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.one.upside.type.one.variantThree, this.x, this.y, this.w, this.h)
                    break
            }

        } else if (this.type == 2 && this.upside) {
            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.one.upside.type.two.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.one.upside.type.two.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.one.upside.type.two.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        }

        //plataforms downside
        if (this.type == 1 && !this.upside) {

            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.one.downside.type.one.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.one.downside.type.one.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.one.downside.type.one.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        } else if (this.type == 2 && !this.upside) {
            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.one.downside.type.two.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.one.downside.type.two.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.one.downside.type.two.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        }
        //Monsters down
        if (this.type == 3 && !this.upside) {

            context.drawImage(images.enemies.one.downside.three.downsidehazardspike, this.x, this.y, this.w, this.h)

        } else if (this.type == 7 && !this.upside) {
            context.drawImage(images.enemies.one.downside.three.downsidehazardspikeTwo, this.x, this.y, this.w, this.h)
        } else if (this.type == 5 && !this.upside) {
            context.drawImage(images.enemies.one.downside.five.downsidehazardflyer, 0 + this.currFrame, 0, this.w, this.h, this.x, this.y, this.w, this.h);
            if (frame % 10 === 0) {
                this.currFrame += 50
            }


            if (this.currFrame > 100) {
                this.currFrame = 0
            }
        }

        //Monsters upside
        if (this.type == 3 && this.upside) {

            context.drawImage(images.enemies.one.upside.three.upsidehazardspike, this.x, this.y, this.w, this.h)

        } else if (this.type == 7 && this.upside) {
            context.drawImage(images.enemies.one.upside.three.upsidehazardspikeTwo, this.x, this.y, this.w, this.h)
        } else if (this.type == 5 && this.upside) {


            context.drawImage(images.enemies.one.upside.five.upsidehazardflyer, 0 + this.currFrame, 0, this.w, this.h, this.x, this.y, this.w, this.h);

            if (frame % 10 === 0) {
                this.currFrame += 50
            }


            if (this.currFrame > 100) {
                this.currFrame = 0
            }
        }

        //CheckPoint Upside
        if (this.type == 6 && this.upside) {
            context.drawImage(images.tiles.one.upside.checkPoint.upsidecheckpointOne, this.x, this.y, this.w, this.h)
        }
        //CheckPoint Downside
        if (this.type == 6 && !this.upside) {
            context.drawImage(images.tiles.one.downside.checkPoint.downsidecheckpointOne, this.x, this.y, this.w, this.h)
        }
        //Bridge
        if (this.type == 4 && !this.upside) {
            context.drawImage(images.tiles.one.downside.bridge.downsidebridge, this.x, this.y, this.w, this.h)
        }


        }

        if(this.lvl==2){
            //plataforms upside
        if (this.type == 1 && this.upside) {

            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.two.upside.type.one.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.two.upside.type.one.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.two.upside.type.one.variantThree, this.x, this.y, this.w, this.h)
                    break
            }

        } else if (this.type == 2 && this.upside) {
            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.two.upside.type.two.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.two.upside.type.two.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.two.upside.type.two.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        }

        //plataforms downside
        if (this.type == 1 && !this.upside) {

            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.two.downside.type.one.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.two.downside.type.one.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.two.downside.type.one.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        } else if (this.type == 2 && !this.upside) {
            switch (this.rand) {
                case 1:
                    context.drawImage(images.tiles.two.downside.type.two.variantOne, this.x, this.y, this.w, this.h)
                    break
                case 2:
                    context.drawImage(images.tiles.two.downside.type.two.variantTwo, this.x, this.y, this.w, this.h)
                    break
                case 3:
                    context.drawImage(images.tiles.two.downside.type.two.variantThree, this.x, this.y, this.w, this.h)
                    break
            }
        }
        //Monsters down
        if (this.type == 3 && !this.upside) {

            context.drawImage(images.enemies.two.downside.three.downsidehazardspike, this.x, this.y, this.w, this.h)

        } else if (this.type == 5 && !this.upside) {
            context.drawImage(images.enemies.two.downside.five.downsidehazardflyer, 0 + this.currFrame, 0, this.w, this.h, this.x, this.y, this.w, this.h);
            if (frame % 10 === 0) {
                this.currFrame += 50
            }


            if (this.currFrame > 150) {
                this.currFrame = 0
            }
        }

        //Monsters upside
        if (this.type == 3 && this.upside) {

            context.drawImage(images.enemies.two.upside.three.upsidehazardspike, this.x, this.y, this.w, this.h)

        } else if (this.type == 5 && this.upside) {


            context.drawImage(images.enemies.two.upside.five.upsidehazardflyer, 0 + this.currFrame, 0, this.w, this.h, this.x, this.y, this.w, this.h);

            if (frame % 10 === 0) {
                this.currFrame += 50
            }


            if (this.currFrame > 100) {
                this.currFrame = 0
            }
        }

        //Bridge
        if (this.type == 4 && !this.upside) {
            context.drawImage(images.tiles.two.downside.bridge.downsidebridge, this.x, this.y, this.w, this.h)
        }
        if (this.type == 4 && this.upside) {
            context.drawImage(images.tiles.two.upside.bridge.upsidebridge, this.x, this.y, this.w, this.h)
        }
        if (this.type == 9 && this.upside) {
            context.drawImage(images.tiles.two.portal,0,0,50,50, this.x, this.y, this.w, this.h)
        }
        if (this.type == 9 && !this.upside) {
            context.drawImage(images.tiles.two.portal,0,50,50,50, this.x, this.y, this.w, this.h)
        }


        }

        
        
    }

}