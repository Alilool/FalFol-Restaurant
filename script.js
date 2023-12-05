let days = 1;
let falafel = 0;
let ful = 0;
let customer = 0;
let hide = document.getElementById("hide");
let results = document.getElementById("results");
let falafel_winning = 0;
let ful_winning = 0;
let falafelPrize = document.getElementById("falafelPrize");
let fulPrize = document.getElementById("fulPrize");
let fullWinning = ful_winning + falafel_winning;

function startWorking() {
    falafelPrize = parseFloat(falafelPrize.value) || 0;
    fulPrize = parseFloat(fulPrize.value) || 0;
    let starting = document.getElementById("Starting");
    if (starting) {
        starting.style.display = "none";
        hide.style.display = "block";
    }
}

function submit() {
    let ful_amount = parseFloat(document.getElementById("fulInput").value) || 0;
    ful += ful_amount;

    let falafel_amount = parseFloat(document.getElementById("falafelInput").value) || 0;
    falafel += falafel_amount;

    falafel_winning = falafelPrize * falafel_amount;
    ful_winning = fulPrize * ful_amount;
    fullWinning = falafel_winning + ful_winning;
    customer++;

    document.getElementById("fulInput").value = "";
    document.getElementById("falafelInput").value = "";
}

function end_month() {
    if (days < 15) {
        alert("Can't end month before day 15");
    } else {
        if (hide) {
            hide.style.display = "none";
            results.style.display = "block";
        }
        document.getElementById("falafelSells").innerHTML = "Falafel sells: " + falafel;
        document.getElementById("fulSells").innerHTML = "Ful sells: " + ful;
        document.getElementById("customers").innerHTML = "Customers: " + customer;
        document.getElementById("Winning").innerHTML = "Winning: " + fullWinning + " LE";
    }
}

function end_day() {
    if (days === 30) {
        alert("You have reached the end of the month. End the month now");
    } else {
        days++;
    }
    document.getElementById("days").innerHTML = "Day : " + days;
    document.getElementById("fulInput").value = "";
    document.getElementById("falafelInput").value = "";
}
