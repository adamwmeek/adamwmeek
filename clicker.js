function boop() {
    var boops = Number(document.getElementById("boops").innerText);
    boops = boops + 1;
    document.getElementById("boops").innerText = boops;
}