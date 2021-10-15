let aleatorio = 0
input.onButtonPressed(Button.A, function () {
    aleatorio = randint(5, 10)
    basic.showNumber(aleatorio)
    for (let contar = 0; contar <= aleatorio; contar++) {
        basic.showNumber(contar)
        for (let index = 0; index < contar; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(100)
        }
    }
    basic.showString("A buscar!!!")
    music.playMelody("C E F D G B G C5 ", 120)
})
basic.forever(function () {
	
})
