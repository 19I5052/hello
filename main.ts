basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.showIcon(IconNames.Ghost)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showString("APPLE")
    basic.pause(100)
})
