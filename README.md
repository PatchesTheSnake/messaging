
## `When radio recived string(func)`

* runs when message sent
* runs `func` with recived string
* may conflict with `radio.setgroupid`

## `connect(freq)`
* initializes settings
* sets groupid to `freq`
* may conflict with `radio.setgroupid`

## `sendstring(str)`
* sends `str` over radio
* may conflict with `radio.setgroupid`
