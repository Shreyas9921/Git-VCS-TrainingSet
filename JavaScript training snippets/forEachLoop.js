//For-Each loop List syntax JS

function getPlaces() {

    let text = "";

    const places = ["Mumbai", "Pune", "Nashik", "Kolhapur", "Nagpur"];
    places.forEach(myfunction);

    document.getElementById("placesList").innerHTML = text;

    function myfunction(item, index) {
        text += (index+1) + " - " + item + "<br />";
    }
}