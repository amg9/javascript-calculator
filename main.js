document.getElementById("zero").addEventListener("click", zero)
document.getElementById("one").addEventListener("click", one)
document.getElementById("two").addEventListener("click", two)
document.getElementById("three").addEventListener("click", three)
document.getElementById("four").addEventListener("click", four)
document.getElementById("five").addEventListener("click", five)
document.getElementById("six").addEventListener("click", six)
document.getElementById("seven").addEventListener("click", seven)
document.getElementById("eight").addEventListener("click", eight)
document.getElementById("nine").addEventListener("click", nine)
document.getElementById("add").addEventListener("click", add)
document.getElementById("subtract").addEventListener("click", subtract)
document.getElementById("multiply").addEventListener("click", multiply)
document.getElementById("divide").addEventListener("click", divide)
document.getElementById("equals").addEventListener("click", equals)
document.getElementById("decimal").addEventListener("click", decimal)
document.getElementById("clear").addEventListener("click", clear)
var screen = document.getElementById("screen")
var input = [];


function zero() {
  screen.innerHTML += "0"
}

function one() {
  screen.innerHTML += "1"
}

function two() {
  screen.innerHTML += "2"
}

function three() {
  screen.innerHTML += "3"
}

function four() {
  screen.innerHTML += "4"
}

function five() {
  screen.innerHTML += "5"
}

function six() {
  screen.innerHTML += "6"
}

function seven() {
  screen.innerHTML += "7"
}

function eight() {
  screen.innerHTML += "8"
}

function nine() {
  screen.innerHTML += "9"
}

function add() {
  screen.innerHTML += "+"
}

function subtract() {
  screen.innerHTML += "-"
}

function multiply() {
  screen.innerHTML += "x"
}

function divide() {
  screen.innerHTML += "/"
}

function equals() {
  screen.innerHTML += "="
}

function decimal() {
  screen.innerHTML += "."
}

function clear() {
  screen.innerHTML = ""
}
