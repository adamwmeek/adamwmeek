function addItem() {
    const input = document.getElementById("nameInput");
    const item = input.value.trim();

    const hrs_text = document.getElementById("hoursInput").value;

    if (!item) return;

    const li = document.createElement("li");
    li.textContent = item + " - " + hrs_text + " hrs";
    document.getElementById("itemList").appendChild(li);
    input.value = "";

    var subtotal = Number(document.getElementById("subTotal").value);
    var added_hrs = Number(hrs_text);

    subtotal += added_hrs;
    document.getElementById("subTotal").value = subtotal;
}

function updateHours() {
    var subtotal = Number(document.getElementById("subTotal").value);
    var research_hours = Number(event.target.value);
    
    var total = subtotal + research_hours;

    document.getElementById("total").value = total;
}

document.getElementById("comps").addEventListener("change", (event) => {
    document.getElementById("nameInput").value = event.target.text;
    document.getElementById("hoursInput").value = event.target.value;
});

document.getElementById("research").addEventListener("change", (event) => {
    updateHours();
});

document.getElementById("subTotal").addEventListener("change", (event) => {
    updateHours();
});