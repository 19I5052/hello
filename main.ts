basic.forever(function () {
    basic.showIcon(IconNames.Silly)
    basic.pause(100)
    basic.showIcon(IconNames.Skull)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.pause(100)
})
