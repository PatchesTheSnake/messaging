// Add your code here
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/


/**
 * Custom blocks
 */
//% weight=100 color=#E3008C icon="\uf012"
namespace messageing {




    //% weight=60
    //% blockId=radio_Connect block="connect %startingnetworkfreq" blockGap=8
    //% group="Send"
    export function connect(startingnetworkfreq: number): void {
        radio.setGroup(startingnetworkfreq)
    }

    //% help=radio/send-string
    //% weight=58
    //% blockId=radio_datagram_send_string_2 block="radio send string (messageing) %msg"
    //% msg.shadowOptions.toString=true
    //% group="Send"

    export function sendString(value: string) {
        let cc = randint(100, 255)
        radio.sendString(cc.toString()  + value)
        radio.setGroup(cc)
    }


    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    
    let onReceivedValueHandler: (receivedString: string) => void;

    /**
     * Registers code to run when the radio receives a string.
     */


    //% blockId=radio_on_string_drag_2 block="on radio received (messageing)" blockGap=16
    //%  draggableParameters=reporter
    //% group="Receive"
    //% weight=18
    export function onReceivedString(cb: (receivedString: string) => void) {
        onReceivedValueHandler = cb;
        //basic.showString("Hello!")

    }
    radio.onReceivedString(function (receivedString: string) {
        let str = receivedString.substr(3)

        let num = parseInt(receivedString.substr(0, 3))
        //basic.showNumber(num)
        radio.setGroup(num)
        if (onReceivedValueHandler) {
            onReceivedValueHandler(str)
        } 

    })





}
