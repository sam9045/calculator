let outputScreen = document.getElementById("output");

function display(num) {
    outputScreen.value += num;
}
function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch (err) {
        alert("invalid");
    }
}

function Clear() {
    outputScreen.value = "";
}
function del() {
    outputScreen.value = outputScreen.value.slice(0, -2); //here we have taken -2 bcoz it will delete number in count of 2 from last
}