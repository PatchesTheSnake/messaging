messageing.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    messageing.sendString("testtr")
})
messageing.connect(34)
