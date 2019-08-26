function view(val) {
    document.getElementById("display").value += val;
}

function updateDisplay() {
    const defaultDisplay = "0";
    const show = document.querySelector("#display");

    show.value = defaultDisplay; 
}

updateDisplay();

function calculate() {
    let result = document.getElementById("display").value;
    let ans = eval(result);
    document.getElementById("display").value = ans;
}

function erase() {
    document.getElementById("display").value = "";
}