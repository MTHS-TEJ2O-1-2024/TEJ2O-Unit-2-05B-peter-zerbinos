"""
Copyright (c) 2020 MTHS All rights reserved

Created by: Peter Zerbinos
Created on: Sep 2024
This program shows the temperature in kelvin

"""

from microbit import *


# happy face when turned on
display.clear()
display.show(Image.HAPPY)

# pressing A will show temperature then end with happy face
while True:
    if button_a.is_pressed():
        findingTemperature = round(input.temperature() + 273.1)
        display.clear()
        display.scroll("The temperature is:")
        display.scroll(str(findingTemperature))
        display.scroll("K.")
        display.show(Image.HAPPY)
