//function call - callback functions
function celciusToFarenheit(celcius) {
    return (celcius * (9/5)) + 32;
}

function farenheitToCelcius(farenheit) {
    return (5/9) * (farenheit-32);
}
function convertToFarenheit(temp) {
    //let temp = document.getElementById("temp-value").value;
    document.getElementById("conversion").innerHTML = "<br /><b>Converted Value :" + celciusToFarenheit(temp) + " °F";
}

function convertToCelcius(temp) {
    //let temp = document.getElementById("temp-value").value;
    document.getElementById("conversion").innerHTML = "<br /><b>Converted Value :" + farenheitToCelcius(temp) + " °C";
}

function calculate() {
    let temp = document.getElementById("temp-value").value;
    let isSelected = document.querySelector('input[name="option"]:checked');

    if(!isSelected) {
        alert("Please select the conversion option: ");
        return;
    }

    if(isSelected.value == "toCelcius") {
        convertToCelcius(temp);
    } else {
        convertToFarenheit(temp);
    }
}