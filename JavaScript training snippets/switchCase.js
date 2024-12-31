//Switch-case JS syntax

function gradeRemark() {

    let grade = document.getElementById("grade").value;

    switch(grade) {
        case 'O' : document.write("Excellent<br />");
                    break;
        case 'A' : document.write("Good<br />");
                    break;
        case 'B' : document.write("Satisfactory<br />");
                    break;
        case 'C' : document.write("Averge<br />");
                    break;
        case 'D' : document.write("Par Score<br />");
                    break;
        default : document.write("Unknown Grade : Failed<br />");
                    break;
    }
}