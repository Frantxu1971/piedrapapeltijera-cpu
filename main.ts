input.onButtonPressed(Button.A, function () {
    yo += 1
    if (yo > 3) {
        yo = 1
    }
})
input.onButtonPressed(Button.B, function () {
    cpu = randint(1, 3)
    if (cpu == yo) {
        basic.showIcon(IconNames.Asleep)
    } else if (yo == 1 && cpu == 3) {
        basic.showIcon(IconNames.Sad)
    } else if (yo == 2 && cpu == 1) {
        basic.showIcon(IconNames.Sad)
    } else if (yo == 3 && cpu == 2) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let cpu = 0
let yo = 0
yo = 1
basic.forever(function () {
    if (yo == 1) {
        basic.showIcon(IconNames.Square)
    } else if (yo == 2) {
        basic.showIcon(IconNames.Chessboard)
    } else if (yo == 3) {
        basic.showIcon(IconNames.Scissors)
    }
})
