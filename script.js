let days = 1
let falafel = 0
let ful = 0
let customer = 0


function submit() {
    let ful_amount = parseFloat(document.getElementById("ful_input").value);
    ful = ful += ful_amount;
    let falafel_amount = parseFloat(document.getElementById("falafel_input").value);
    falafel = falafel += falafel_amount;
    customer++;
    document.getElementById("ful_input").value = "";
    document.getElementById("falafel_input").value = "";
}

function end_month(){
    document.getElementById("falafel-sells").innerHTML = "Falafel sells : " + falafel
    document.getElementById("ful-sells").innerHTML = "Ful sells : " + ful
    document.getElementById("customer").innerHTML = "Customer : " + customer

}


function end_day(){
    if (days == 30){
        alert ("You have reached the end of the month end the month now");
    } else {
        days++;
    }
    document.getElementById("falafel-sells").innerHTML = "Day : " + days;
    document.getElementById("ful_input").value = "";
    document.getElementById("falafel_input").value = "";
}



