// Add your code here
messageing.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    messageing.sendString("testr")
})
input.onGesture(Gesture.Shake, function () {
    //messageing.connect(34)
    messageing.sendString("test")

})
