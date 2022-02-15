function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log("got 3 digit and calling again");
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;

    // console.log(pin);
}

document.getElementById("keypad").addEventListener("click", function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");

    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = "";
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById("display-pin").value;
    const typeNumbers = document.getElementById("typed-numbers").value;
    const sucessMessage = document.getElementById("notify-sucess");
    const failError = document.getElementById("notify-fail");

    if (pin == typeNumbers) {
        sucessMessage.style.display = "block";
        failError.style.display = "none";
    } else {
        failError.style.display = "block";
        sucessMessage.style.display = "none";
    }
}