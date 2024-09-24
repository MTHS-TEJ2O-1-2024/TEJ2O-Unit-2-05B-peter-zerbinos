/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Peter Zerbinos
 * Created on: Sep 2024
 * This program shows the temperature in kelvin
*/

//happy face when turned on
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//pressing A will show temperature then end with happy face
input.onButtonPressed(Button.A, function () {
    let findngTemperature = Math.round(input.temperature() + 273.15)
    basic.clearScreen()
    basic.showString('The temperature is:')
    basic.showNumber(findngTemperature)
    basic.showString('K.')
    basic.showIcon(IconNames.Happy)
})
