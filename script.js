let days = 1;
let falafel = 0;
let ful = 0;
let customer = 0;
let hide = document.getElementById("hide");
let results = document.getElementById("results");
let falafel_winning = 0;
let ful_winning = 0;
let falafelPrizeInput = document.getElementById("falafelPrize");
let fulPrizeInput = document.getElementById("fulPrize");
let fullWinning = ful_winning + falafel_winning;
let This_customer = document.getElementById("This_customer")
let This_customer_falafel = document.getElementById("This_customer_falafel")
let This_customer_ful = document.getElementById("This_customer_ful")
let This_customer_total = document.getElementById("This_customer_total")



function startWorking() {
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

    let falafelPrize = parseFloat(falafelPrizeInput.value) || 0;
    let fulPrize = parseFloat(fulPrizeInput.value) || 0;

    falafel_winning += falafelPrize * falafel_amount; // Accumulate winnings
    ful_winning += fulPrize * ful_amount; // Accumulate winnings
    fullWinning = falafel_winning + ful_winning;
    customer++;

    This_customer_falafel = falafel_amount * falafelPrize
    This_customer_ful = ful_amount * fulPrize
    This_customer_total = This_customer_falafel + This_customer_ful

    This_customer.style.display = "block";
    hide.style.display = "none";

    document.getElementById("This_customer_falafel").innerHTML = "Falafel price : " + This_customer_falafel + " LE";
    document.getElementById("This_customer_ful").innerHTML = "Ful price : " + This_customer_ful + " LE";
    document.getElementById("This_customer_total").innerHTML = "Total : " + This_customer_total + " LE";



    document.getElementById("fulInput").value = "";
    document.getElementById("falafelInput").value = "";
}


function new_customer() {
    This_customer.style.display = "none";
    hide.style.display = "block";
}

function end_month() {
    if (hide) {
        hide.style.display = "none";
        results.style.display = "block";
    }
    document.getElementById("falafelSells").innerHTML = "Falafel sells : " + falafel;
    document.getElementById("fulSells").innerHTML = "Ful sells : " + ful;
    document.getElementById("customers").innerHTML = "Customers : " + customer;
    document.getElementById("Winning").innerHTML = "Sales : " + fullWinning + " LE";
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
