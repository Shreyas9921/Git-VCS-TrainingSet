//If--else JS Syntax

/*
function checkEligibility() {
	let age = document.getElementById("ageField").value;
	
	if(age >= 18) {
		document.write("<b>All Good!</b> Your are eligible to donate blood...");
	} else {
		document.write("Childrens not allowed to donated <b> Blood..</b>");
	}
}
*/

function checkRepository() {
	let book = document.getElementById("bookField").value;

	if(book == "GoT") {
		document.write("<b>Song of Ice and Fire..");
	} else if(book == "HOTD") {
		document.write("<b>Dance of the Dragons..");
	} else {
		document.write("<b>unpublished book of George R. R. Martin..</b>");
	} 
}