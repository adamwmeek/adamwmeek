function boop() {
    var boops = Number(document.getElementById("boops").innerText);
    boops = boops + 1;
    document.getElementById("boops").innerText = boops;

    localStorage.setItem('boops', boops);
}

const boops = localStorage.getItem('boops');
if (!boops)
    boops = 0;
document.getElementById("boops").innerText = boops;