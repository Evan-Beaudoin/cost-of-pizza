// #Created by: Evan
// #Created on: Oct. 2020
// 
// #This program calculates the cost of making a pizza
let HST = 1.13
let LABOUR_COST = 0.75
let RENT_COST = 1
let MATERIALS = 0.5
game.splash("Pizza Order")
let diameter = game.askForNumber("Enter the diameter of your pizza:")
let sub_total_pizza_cost = (LABOUR_COST + RENT_COST + MATERIALS * diameter) * HST
let total_pizza_cost = Math.round(sub_total_pizza_cost * 100) / 100
game.splash("The cost for a " + diameter + "(inch) pizza is $" + total_pizza_cost + " (HST Included)")
