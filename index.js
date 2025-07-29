let meter = 0
let feet = 0
let gallon = 0
let liter = 0
let kilogram = 0
let pounds = 0

let btn = document.getElementById("btn-convert")
let lengthText = document.getElementById("length-p")
let volumeText = document.getElementById("volume-p")
let kilogramText = document.getElementById("kilogram-p")


btn.addEventListener("click", function(){
    let inputVal = document.getElementById("text-input").value
    meter = (inputVal * 0.3048).toFixed(3)
    feet = (inputVal * 3.28084).toFixed(3)
    gallon = (inputVal / 3.78541).toFixed(3)
    liter = (inputVal * 3.78541).toFixed(3)
    pounds = (inputVal * 2.20462).toFixed(3)
    kilogram = (inputVal * 0.45359).toFixed(3)

    lengthText.textContent = `
        ${inputVal} meters = ${feet} feet | ${inputVal} feet = ${meter} meters
    `
    volumeText.textContent = `
        ${inputVal} liters = ${gallon} gallons | ${inputVal} gallons = ${liter} liters
    `
    kilogramText.textContent = `
        ${inputVal} kilos = ${pounds} pounds | ${inputVal} pounds = ${kilogram} kilos
    `





})


