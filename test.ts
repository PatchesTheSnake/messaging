// Add your code here
messageing.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    messageing.sendString("testr")
})
input.onGesture(Gesture.EightG, function () {
    //messageing.connect(34)
    messageing.sendString("test")

})
