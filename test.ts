// Add your code here
messageing.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    messageing.sendString("test")
})
messageing.connect(34)