let counterValue = 0;

function addCounter() {
    counterValue++;
    updateCounter();
}

function subtractCounter() {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
}

function resetCounter() {
    counterValue = 0;
    updateCounter();
    alert("Counter has been reset!");
}

function updateCounter() {
    document.getElementById("counter").innerText = counterValue;
}