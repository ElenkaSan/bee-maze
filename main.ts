scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . b 2 b b 2 b . . . 
    . . . . . . b b f b b f b b b . 
    . . . . . . b 5 f 5 5 5 5 5 b . 
    . . . . . . b 5 5 5 5 5 5 5 b . 
    . . . . b b b 5 5 1 f 5 5 5 b . 
    b b b b b f f 5 5 1 8 5 5 5 b . 
    f 5 f f 5 f f 5 f 5 5 5 5 5 b . 
    4 5 f f 5 f f 5 f f f f f f b . 
    b 5 f f 5 f f 5 5 5 5 5 5 5 b . 
    b 5 f f 5 f f 5 5 5 5 4 4 4 b . 
    b 5 f f 5 f f 5 5 5 5 b b b b . 
    b b b f f 4 b b f f 4 b . . . . 
    . . b b b b b b b b b b . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
