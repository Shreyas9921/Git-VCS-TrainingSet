//JS While loop syntax

function getMathTable() {

    let num = document.getElementById("mathTable").value;
    let i = 1;

    while(i <= 10) {

        document.write(num * i);
        document.write("<br />");
        i = i + 1;
    }
}

