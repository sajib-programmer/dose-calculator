let drugs = [
    { name: "Midazolam", dose: "", strength: "15mg/amp (3ml/amp)", dilution: "9ml (3amp) + 36ml N/S = 45ml, 1ml=1mg" },
    { name: "Fentanyl", dose: "", strength: "100mcg/amp (2ml/amp)", dilution: "10amp/ 20ml + 30ml N/S = 50ml, 1ml=20mcg" },
    { name: "Remifentanyl", dose: "", strength: "2mg/vial (2ml/vial)", dilution: "1 vial/ 2mg + 48ml N/S = 50ml, 1ml=40mcg" },
    { name: "Morphine", dose: "", strength: "15mg/amp (1ml/amp)", dilution: "1amp/ 1ml + 14ml N/S = 15ml, 1ml=1mg" },
    { name: "Pathedine", dose: "", strength: "100mg/amp (2ml/amp)", dilution: "1amp/ 2ml + 8ml N/S = 10ml, 1ml=10mg" },
    { name: "Ketamin", dose: "", strength: "500mg/vial (10ml/vial)", dilution: "No need to dilution" },
    { name: "Suxamethonium", dose: "", strength: "100mg/amp (2ml/amp)", dilution: "No need to dilution" },
    { name: "Atracurium (Tracium)", dose: "", strength: "25mg/amp (2.5ml/amp)", dilution: "8amp/ 20ml + 30ml N/S = 50ml, 1ml=4mg" },
    { name: "Nor-Q", dose: "", strength: "10mg/vial ", dilution: "1vial + 10ml N/S = 10ml, 1ml=1mg" },
    { name: "Dopamin", dose: "", strength: "200mg/amp (5ml/amp) ", dilution: "1amp/ 5ml + 45ml N/S = 50ml, 1ml=4mg" },
    { name: "Dobutamin", dose: "", strength: "250mg/amp (5ml/amp) ", dilution: "1amp/ 5ml + 45ml N/S = 50ml, 1ml=5mg" },
    { name: "Epinephrine / Adrenalin", dose: "", strength: "1mg/amp (1ml/amp) ", dilution: "3amp/ 3ml + 47ml N/S = 50ml, 1ml=60mcg" },
    { name: "Noradrenalin", dose: "", strength: "4mg/amp (2ml/amp) ", dilution: "1amp/ 2ml + 48ml N/S = 50ml, 1ml=" },
    { name: "Vasopressin", dose: "", strength: "20unit/amp (1ml/amp) ", dilution: "2amp/ 2ml + 38ml N/S = 40ml, 1ml=1unit" },
    { name: "Labecard", dose: "", strength: "50mg/amp (10ml/amp) ", dilution: "1amp/ 10ml + 40ml N/S = 50ml, 1ml=1mg" },
    { name: "GTN", dose: "", strength: "50mg/amp (10ml/amp) ", dilution: "1amp/ 10ml + 40ml N/S = 50ml, 1ml=1mg/ 1000mcg" },
];

function searchDrug() {
    // Get the search query and convert it to lowercase
    let query = document.getElementById("search-query").value.toLowerCase();

    // Search for the query in the drugs array
    for (let i = 0; i < drugs.length; i++) {
        if (drugs[i].name.toLowerCase().indexOf(query) != -1 || drugs[i].dose.toLowerCase().indexOf(query) != -1 || drugs[i].strength.toLowerCase().indexOf(query) != -1 || drugs[i].dilution.toLowerCase().indexOf(query) != -1) {
            document.getElementById("name").innerText = drugs[i].name;
            document.getElementById("dose").innerText = "✔ Dose : " + drugs[i].dose;
            document.getElementById("strength").innerText = "✔ Strength :  " + drugs[i].strength;
            document.getElementById("dilution").innerText = "✔ Dilution :  " + drugs[i].dilution;
            return;
        }
    }

    document.getElementById("name").innerText = ("❌ Your desired medication not found.");
    document.getElementById("dose").innerText = "";
    document.getElementById("strength").innerText = "";
    document.getElementById("dilution").innerText = "";
}

let inputField = document.getElementById("search-query");
inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // code to be executed when the "Enter" button is pressed
        searchDrug()
    }
});

//////////////////////////////////

function calculateTotalDose() {
    let dose = parseFloat(document.getElementById("dose").value);
    let unitOfDose = document.getElementById("unitOfDose").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let totalDoseRequired = document.getElementById("totalDoseRequired");
    let strength = parseFloat(document.getElementById("strength").value);

    let unitOfStrength = document.getElementById("unitOfStrength").value;
    let quantity = parseFloat(document.getElementById("quantity").value);
    let volume = document.getElementById("volume").value;
    let drugConcentration = document.getElementById("drugConcentration");
    let mlPerHour = document.getElementById("mlPerHour");
    let dropPerMinute = document.getElementById("dropPerMinute");
    let microDropPerMinute = document.getElementById("microDropPerMinute");


    if (dose === "" || dose <= 0 || isNaN(dose)) {
        totalDoseRequired.innerHTML = "Please input valid dose";
    }
    else if (weight === "" || weight <= 0) {
        weight = "Please enter valid Weight";
    }
    else {
        if (unitOfDose == "mg") {
            totalDoseRequired.innerHTML = (dose * weight) + " mg";
        }
        else if (unitOfDose == "mcg") {
            totalDoseRequired.innerHTML = (dose * weight) + " mcg";
        }
    }
    if (strength === "" || strength <= 0 || isNaN(strength)) {
        drugConcentration.innerHTML = "Please input valid strength";

    }
    else if (quantity === "" || quantity <= 0 || isNaN(quantity)) {
        drugConcentration.innerHTML = "Please input valid quantity";
    }
    else if (volume === "" || volume <= 0 || isNaN(volume)) {
        drugConcentration.innerHTML = "Please input valid volume";
    }
    else {
        if (unitOfDose == "mg" && unitOfStrength == "mg") {
            drugConcentration.innerHTML = ((strength * quantity) / volume) + " mg/ml";
        }
        else if (unitOfDose == "mcg" && unitOfStrength == "mcg") {
            drugConcentration.innerHTML = ((strength * quantity) / volume) + " mcg/ml";
        }
        else if (unitOfDose == "mcg" && unitOfStrength == "mg") {
            drugConcentration.innerHTML = "✔ Required Dose : " + ((strength * 1000 * quantity) / volume) + " mcg/ml";
        }
        else if (unitOfDose == "mg" && unitOfStrength == "mcg") {
            drugConcentration.innerHTML = "✔ Drug Concentration : " + ((strength / 1000 * quantity) / volume) + " mg/ml";
        }

    }
    if (isNaN((parseFloat(totalDoseRequired.innerText) / parseFloat(drugConcentration.innerText)) * 60)) {
        mlPerHour.innerHTML = "";
    }
    else {
        mlPerHour.innerHTML = "✔ Hourly Quantity : " + (parseFloat(totalDoseRequired.innerText) / parseFloat(drugConcentration.innerText)) * 60 + " ml";
    }
    if (isNaN((parseFloat(mlPerHour.innerText) / 60) * 15)) {
        dropPerMinute.innerHTML = "";
    }
    else {
        dropPerMinute.innerHTML = "✔ Drop : " + (parseFloat(mlPerHour.innerText) / 60) * 15 + " drop/min";
    }
    if (isNaN((parseFloat(mlPerHour.innerText) / 60) * 15 * 4)) {
        microDropPerMinute.innerHTML = "";
    }
    else {
        microDropPerMinute.innerHTML = "✔ Microdrop : " + (parseFloat(mlPerHour.innerText) / 60) * 15 * 4 + " microdrop/min";
    }

}