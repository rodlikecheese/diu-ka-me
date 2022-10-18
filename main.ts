basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        pins.analogWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 1)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(200)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 80) {
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
