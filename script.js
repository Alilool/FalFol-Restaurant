let days = 1
let falafel = 0
let ful = 0
let customer = 0

function submit() {
    let ful_amount = parseFloat(document.getElementById("fulInput").value);
    ful = ful += ful_amount;
    let falafel_amount = parseFloat(document.getElementById("falafelInput").value);
    falafel = falafel += falafel_amount;
    customer++;
    document.getElementById("fulInput").value = "";
    document.getElementById("falafelInput").value = "";
}


function end_month() {
    if (days < 15){
        alert ("Can't end month before day 15")
    } else {
        let hide = document.getElementById("hide");
        let results = document.getElementById("results")
        if (hide) {
            hide.style.display = "none";
            results.style.display = "block";
        }
        document.getElementById("falafelSells").innerHTML = "Falafel sells : " + falafel
        document.getElementById("fulSells").innerHTML = "Ful sells : " + ful
        document.getElementById("customers").innerHTML = "Customers : " + customer
    }



}


function end_day(){
    if (days == 30){
        alert ("You have reached the end of the month end the month now");
    } else {
        days++;
    }
    document.getElementById("days").innerHTML = "Day : " + days;
    document.getElementById("fulInput").value = "";
    document.getElementById("falafelInput").value = "";
}



