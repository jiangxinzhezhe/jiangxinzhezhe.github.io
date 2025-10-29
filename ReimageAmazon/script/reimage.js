function ship() {
        console.log('Button clicked')
        const el = document.getElementsByClassName("shipping");
        console.log(el);
        document.getElementById("ship1").style.visibility = "visible";
}
function ship2() {
        console.log('Button clicked')
        const el = document.getElementsByClassName("shipping");
        console.log(el);
        document.getElementById("ship2").style.visibility = "visible";
}
function ship3() {
        console.log('Button clicked')
        const el = document.getElementsByClassName("shipping");
        console.log(el);
        document.getElementById("ship3").style.visibility = "visible";
}



var modal = document.getElementById('id01');


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}