
// Fetching buttons that are used as tabs 

const lengthBtn = document.getElementById("length-btn")
const volumeBtn = document.getElementById("volume-btn")
const massBtn = document.getElementById("mass-btn")

// Setting booleans to make the buttons toggle

let isLengthPressed = true
let isVolumePressed = false
let isMassPressed = false

// Fetching unit name and result elements

const unit1El = document.getElementById("unit1-name")
const unit2El = document.getElementById("unit2-name")
const result1Text = document.getElementById("result1-text")
const result2Text = document.getElementById("result2-text")

// Background that makes up the rest of the active tab

const upperContainer = document.getElementById("upper-container")

// Input and convert button elements

const inputEl = document.getElementById("input-box")
const convertBtn = document.getElementById("convert-btn")

// Function that makes the buttons tabs & erases result values

lengthBtn.addEventListener("click", function() {
    lengthBtn.style.height = "50px"
    lengthBtn.style.paddingTop = "11px"
    lengthBtn.style.backgroundColor = "#F4F4F4"
    lengthBtn.style.color = "#1F2937"

    volumeBtn.style.height = "40px"
    volumeBtn.style.paddingTop = "1px"
    volumeBtn.style.backgroundColor = "#1F2937"
    volumeBtn.style.color = "#F4F4F4"

    massBtn.style.height = "40px"
    massBtn.style.paddingTop = "1px"
    massBtn.style.backgroundColor = "#1F2937"
    massBtn.style.color = "#F4F4F4"
    
    isLengthPressed = true
    isVolumePressed = false
    isMassPressed = false

    unit1El.textContent = "Meters"
    unit2El.textContent = "Feet"

    
    result1Text.textContent = ""
    result2Text.textContent = ""
    
    
})

volumeBtn.addEventListener("click", function() {
    lengthBtn.style.height = "40px"
    lengthBtn.style.paddingTop = "1px"
    lengthBtn.style.backgroundColor = "#1F2937"
    lengthBtn.style.color = "#F4F4F4"

    volumeBtn.style.height = "50px"
    volumeBtn.style.paddingTop = "11px"
    volumeBtn.style.backgroundColor = "#F4F4F4"
    volumeBtn.style.color = "#1F2937"

    massBtn.style.height = "40px"
    massBtn.style.paddingTop = "1px"
    massBtn.style.backgroundColor = "#1F2937"
    massBtn.style.color = "#F4F4F4"
    
    isLengthPressed = false
    isVolumePressed = true
    isMassPressed = false

    unit1El.textContent = "Liters"
    unit2El.textContent = "Gallons"
    
    result1Text.textContent = ""
    result2Text.textContent = ""
    
    
})

massBtn.addEventListener("click", function() {
    lengthBtn.style.height = "40px"
    lengthBtn.style.paddingTop = "1px"
    lengthBtn.style.backgroundColor = "#1F2937"
    lengthBtn.style.color = "#F4F4F4"

    volumeBtn.style.height = "40px"
    volumeBtn.style.paddingTop = "1px"
    volumeBtn.style.backgroundColor = "#1F2937"
    volumeBtn.style.color = "#F4F4F4"

    massBtn.style.height = "50px"
    massBtn.style.paddingTop = "11px"
    massBtn.style.backgroundColor = "#F4F4F4"
    massBtn.style.color = "#1F2937"

    isLengthPressed = false
    isVolumePressed = false
    isMassPressed = true
   
    unit1El.textContent = "Kilograms"
    unit2El.textContent = "Pounds"

    result1Text.textContent = ""
    result2Text.textContent = ""

    result1Text.textContent = ""
    result2Text.textContent = ""
    
})

// Main button. Checks for valid input and calls function to calculate results

convertBtn.addEventListener("click", function() {
    if (inputEl.value > 0 && inputEl.value < 1000){
        renderUnits()
    }
    else {
        window.alert("Value must be greater than 0 and less than 1000")
    }

})

// Function that calculate results and set them to the DOM

function renderUnits() {
    let num = inputEl.value
    let result1 = ""
    let result2 = ""
    let text1 = ""
    let text2 = ""
        
    if (isLengthPressed) {
        result1 = num * 3.2808
        result2 = num * 0.3048

        //Changes unit to plural if greater than 1. Does not work for some units.

        if(num < 2){
            text1 = `${num} meter = ${Number(result1).toFixed(3)} feet`
            text2 = `${num} feet = ${Number(result2).toFixed(3)} meter`
        } else {
            text1 = `${num} meters = ${Number(result1).toFixed(3)} feet`
            text2 = `${num} feet = ${Number(result2).toFixed(3)} meters`
        }
    }
    else if (isVolumePressed) {
        result1 = num * 0.2641
        result2 = num * 3.7854
        if(num < 2){
            text1 = `${num} liter = ${Number(result1).toFixed(3)} gallon`
            text2 = `${num} gallon = ${Number(result2).toFixed(3)} liters`
        } else {
            text1 = `${num} liters = ${Number(result1).toFixed(3)} gallons`
            text2 = `${num} gallons = ${Number(result2).toFixed(3)} liters`
        }
    } else if (isMassPressed) {
        result1 = num * 2.2046
        result2 = num * 0.4535
        if(num < 2){
            text1 = `${num} kilo = ${Number(result1).toFixed(3)} pounds`
            text2 = `${num} pound = ${Number(result2).toFixed(3)} kilo`
        } else {
            text1 = `${num} kilos = ${Number(result1).toFixed(3)} pounds`
            text2 = `${num} pounds = ${Number(result2).toFixed(3)} kilos`
        }
    }
    
    result1Text.textContent = text1
    result2Text.textContent = text2
}

