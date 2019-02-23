let images = {
    characters: {
        light: {
            idle: new Image(),
            walk: new Image()
        },
        dark: {
            idle: new Image(),
            walk: new Image()
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

        one: {
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

        two: {
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
                bridge: {
                    upsidebridge: new Image()
                }
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
            },
            portal: new Image(),
        }

    },
    enemies: {
        one: {
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

        },
        two: {
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

    },
    boss: {
        bossidle: new Image(),
        bosssphere1: new Image(),
        bosssphere2: new Image(),
    }
}

images.boss.bossidle.src = "img/boss/bossidle.png"
images.boss.bosssphere1.src = "img/boss/bosssphere1.png"
images.boss.bosssphere2.src = "img/boss/bosssphere2.png"


images.characters.light.idle.src = "img/characters/light/idle.png"
images.characters.light.walk.src = "img/characters/light/walk.png"
images.characters.dark.idle.src = "img/characters/dark/idle.png"
images.characters.dark.walk.src = "img/characters/dark/walk.png"

//images.characters.lightCharacter.src = "img/characters/lightCharacter.png"
images.levels_background.one.src = "img/levels_background/one.png"
images.levels_background.two.src = "img/levels_background/two.png"
images.levels_background.twoOne.src = "img/levels_background/twoOne.png"
images.levels_background.twoSecond.src = "img/levels_background/twoSecond.png"
images.levels_background.three.src = "img/levels_background/three.png"
images.levels_background.boss.src = "img/levels_background/boss.png"

images.tiles.one.upside.type.one.variantOne.src = "img/tiles/one/upside/type/one/variantOne.png"
images.tiles.one.upside.type.one.variantTwo.src = "img/tiles/one/upside/type/one/variantTwo.png"
images.tiles.one.upside.type.one.variantThree.src = "img/tiles/one/upside/type/one/variantThree.png"

images.tiles.one.upside.type.two.variantOne.src = "img/tiles/one/upside/type/two/variantOne.png"
images.tiles.one.upside.type.two.variantTwo.src = "img/tiles/one/upside/type/two/variantTwo.png"
images.tiles.one.upside.type.two.variantThree.src = "img/tiles/one/upside/type/two/variantThree.png"

images.tiles.one.downside.type.one.variantOne.src = "img/tiles/one/downside/type/one/variantOne.png"
images.tiles.one.downside.type.one.variantTwo.src = "img/tiles/one/downside/type/one/variantTwo.png"
images.tiles.one.downside.type.one.variantThree.src = "img/tiles/one/downside/type/one/variantThree.png"

images.tiles.one.downside.type.two.variantOne.src = "img/tiles/one/downside/type/two/variantOne.png"
images.tiles.one.downside.type.two.variantTwo.src = "img/tiles/one/downside/type/two/variantTwo.png"
images.tiles.one.downside.type.two.variantThree.src = "img/tiles/one/downside/type/two/variantThree.png"

images.enemies.one.upside.three.upsidehazardspike.src = "img/enemies/one/upside/three/upsidehazardspike.png"
images.enemies.one.upside.three.upsidehazardspikeTwo.src = "img/enemies/one/upside/three/upsidehazardspikeTwo.png"

images.enemies.one.downside.three.downsidehazardspike.src = "img/enemies/one/downside/three/downsidehazardspike.png"
images.enemies.one.downside.three.downsidehazardspikeTwo.src = "img/enemies/one/downside/three/downsidehazardspikeTwo.png"

images.enemies.one.upside.five.upsidehazardflyer.src = "img/enemies/one/upside/five/upsidehazardflyer.png"
images.enemies.one.downside.five.downsidehazardflyer.src = "img/enemies/one/downside/five/downsidehazardflyer.png"

images.tiles.one.upside.checkPoint.upsidecheckpointOne.src = "img/tiles/one/upside/checkPoint/upsidecheckpointOne.png"
images.tiles.one.downside.checkPoint.downsidecheckpointOne.src = "img/tiles/one/downside/checkPoint/downsidecheckpointOne.png"
images.tiles.one.downside.bridge.downsidebridge.src = "img/tiles/one/downside/bridge/downsidebridge.png"

//two

images.tiles.two.upside.type.one.variantOne.src = "img/tiles/two/upside/type/one/variantOne.png"
images.tiles.two.upside.type.one.variantTwo.src = "img/tiles/two/upside/type/one/variantTwo.png"
images.tiles.two.upside.type.one.variantThree.src = "img/tiles/two/upside/type/one/variantThree.png"

images.tiles.two.upside.type.two.variantOne.src = "img/tiles/two/upside/type/two/variantOne.png"
images.tiles.two.upside.type.two.variantTwo.src = "img/tiles/two/upside/type/two/variantTwo.png"
images.tiles.two.upside.type.two.variantThree.src = "img/tiles/two/upside/type/two/variantThree.png"

images.tiles.two.downside.type.one.variantOne.src = "img/tiles/two/downside/type/one/variantOne.png"
images.tiles.two.downside.type.one.variantTwo.src = "img/tiles/two/downside/type/one/variantTwo.png"
images.tiles.two.downside.type.one.variantThree.src = "img/tiles/two/downside/type/one/variantThree.png"

images.tiles.two.downside.type.two.variantOne.src = "img/tiles/two/downside/type/two/variantOne.png"
images.tiles.two.downside.type.two.variantTwo.src = "img/tiles/two/downside/type/two/variantTwo.png"
images.tiles.two.downside.type.two.variantThree.src = "img/tiles/two/downside/type/two/variantThree.png"

images.enemies.two.upside.three.upsidehazardspike.src = "img/enemies/two/upside/three/upsidehazardspike.png"


images.enemies.two.downside.three.downsidehazardspike.src = "img/enemies/two/downside/three/downsidehazardspikeTwo.png"


images.enemies.two.upside.five.upsidehazardflyer.src = "img/enemies/two/upside/five/upsidehazardflyer.png"
images.enemies.two.downside.five.downsidehazardflyer.src = "img/enemies/two/downside/five/downsidehazardflyer.png"

images.tiles.two.upside.checkPoint.upsidecheckpointOne.src = "img/tiles/two/upside/checkPoint/upsidecheckpointOne.png"
images.tiles.two.downside.checkPoint.downsidecheckpointOne.src = "img/tiles/two/downside/checkPoint/downsidecheckpointOne.png"
images.tiles.two.downside.bridge.downsidebridge.src = "img/tiles/two/downside/bridge/downsidebridge.png"
images.tiles.two.upside.bridge.upsidebridge.src = "img/tiles/two/upside/bridge/upsidebridge.png"

images.tiles.two.portal.src = "img/tiles/two/portal.png"

