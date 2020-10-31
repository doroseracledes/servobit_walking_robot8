function step_R () {
    ServoBit.moveServo(FR_A, 40, 60)
    ServoBit.moveServo(FR_B, -30, speed)
    ServoBit.moveServo(RR_A, 40, 60)
    ServoBit.moveServo(RR_B, -30, speed)
}
function stepD () {
    ServoBit.setServo(RR_A, 15)
    ServoBit.waitServo(RR_A)
    ServoBit.setServo(RR_B, -30)
}
function stepC () {
    ServoBit.setServo(RL_A, -45)
    ServoBit.waitServo(RL_A)
    ServoBit.setServo(RL_B, 30)
}
function resetAll () {
    ServoBit.setServo(FL_A, -30)
    ServoBit.setServo(FL_B, 0)
    ServoBit.setServo(FR_A, 30)
    ServoBit.setServo(FR_B, 0)
    ServoBit.setServo(RL_A, -30)
    ServoBit.setServo(RL_B, 0)
    ServoBit.setServo(RR_A, 30)
    ServoBit.setServo(RR_B, 0)
}
function step_L () {
    ServoBit.moveServo(FL_A, -40, 60)
    ServoBit.moveServo(FL_B, 30, speed)
    ServoBit.waitServo(FL_B)
    ServoBit.moveServo(RL_A, -40, 60)
    ServoBit.moveServo(RL_B, 30, speed)
    ServoBit.waitServo(RL_B)
}
function stepB () {
    ServoBit.setServo(FR_A, 15)
    ServoBit.waitServo(FR_A)
    ServoBit.setServo(FR_B, -30)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "W") {
        for (let index = 0; index < 1; index++) {
            stepA()
            stepB()
            stepC()
            stepD()
            basic.showIcon(IconNames.Duck)
        }
    } else if (receivedString == "J") {
        for (let index = 0; index < 1; index++) {
            basic.showIcon(IconNames.Yes)
            resetAll()
        }
    }
    basic.pause(200)
})
function stepA () {
    ServoBit.setServo(FL_A, -45)
    ServoBit.waitServo(FL_A)
    ServoBit.setServo(FL_B, 30)
}
let RR_B = 0
let RR_A = 0
let RL_B = 0
let RL_A = 0
let FR_B = 0
let FR_A = 0
let FL_B = 0
let FL_A = 0
let speed = 0
speed = 300
FL_A = 0
FL_B = 1
FR_A = 2
FR_B = 3
RL_A = 4
RL_B = 5
RR_A = 6
RR_B = 7
radio.setGroup(10)
resetAll()
basic.pause(200)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Duck)
            stepA()
            stepB()
            stepC()
            stepD()
        }
    } else if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 1; index++) {
            basic.showIcon(IconNames.Yes)
            resetAll()
        }
    }
    basic.pause(200)
})
