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
        one: new Image(),
        two: new Image(),
        twoOne: new Image(),
        twoSecond: new Image(),
        three: new Image(),
        boss: new Image()
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
images.levels_background.two.src = "img/levels_background/two.png"
images.levels_background.twoOne.src = "img/levels_background/twoOne.png"
images.levels_background.twoSecond.src = "img/levels_background/twoSecond.png"
images.levels_background.three.src = "img/levels_background/three.png"
images.levels_background.boss.src = "img/levels_background/boss.png"

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
