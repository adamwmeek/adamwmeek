function addItem() {
    const input = document.getElementById("nameInput");
    const item = input.value.trim();

    const hrs_text = document.getElementById("hoursInput").value;

    if (!item) return;

    const li = document.createElement("li");
    li.textContent = item + " - " + hrs_text + " hrs";
    document.getElementById("itemList").appendChild(li);
    input.value = "";

    var subtotal = Number(document.getElementById("subTotal").textContent);
    var added_hrs = Number(hrs_text);

    subtotal += added_hrs;
    document.getElementById("subTotal").textContent = subtotal;
    updateHours();
}

function updateHours() {
    var subtotal = Number(document.getElementById("subTotal").textContent);
    var research_hours = Number(document.getElementById("research").value)
    
    var total = subtotal + research_hours;

    document.getElementById("total").textContent = total;
}

document.getElementById("comps").addEventListener("change", (event) => {
    var name = event.target.labels[1];
    document.getElementById("nameInput").value = name;
    document.getElementById("hoursInput").value = event.target.value;
});

document.getElementById("research").addEventListener("change", (event) => {
    updateHours();

    var research_hours = document.getElementById("research").value
    research_hours = "Research needed: " + research_hours + " hours";
    document.getElementById("researchTime").textContent = research_hours;
});

document.getElementById("custName").addEventListener("change", (event) => {
    var name = event.target.value;
    
    name = "Customer Name: " + name;
    
    document.getElementById("custNameOut").textContent = name;
});

document.getElementById("projName").addEventListener("change", (event) => {
    var name = event.target.value;
    
    name = "Project Name: " + name;
    
    document.getElementById("projNameOut").textContent = name;
});