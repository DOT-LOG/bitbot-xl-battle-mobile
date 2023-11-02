radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        bitbot.go(BBDirection.Forward, 100)
    } else {
    	
    }
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Reverse, 100)
    } else {
    	
    }
    if (receivedNumber == 3) {
        bitbot.rotate(BBRobotDirection.Left, 45)
    } else {
    	
    }
    if (receivedNumber == 2) {
        bitbot.stop(BBStopMode.Coast)
    } else {
    	
    }
    if (receivedNumber == 4) {
        bitbot.rotate(BBRobotDirection.Right, 45)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
})
radio.setGroup(4405)
bitbot.ledRainbow()
bitbot.select_model(BBModel.XL)
basic.showIcon(IconNames.Ghost)
