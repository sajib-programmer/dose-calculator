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
    let dose = parseFloat(document.getElementById("dose1").value);
    console.log(dose)
    let unitOfDose = document.getElementById("unitOfDose").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let totalDoseRequired = document.getElementById("totalDoseRequired");
    let strength = parseFloat(document.getElementById("strength1").value);
    let unitOfStrength = document.getElementById("unitOfStrength").value;
    let quantity = parseFloat(document.getElementById("quantity").value);
    let volume = document.getElementById("volume").value;
    let drugConcentration = document.getElementById("drugConcentration");
    let dose_concentration = document.getElementById("dose_concentration");
    let mlPerHour = document.getElementById("mlPerHour");
    let dropPerMinute = document.getElementById("dropPerMinute");
    let microDropPerMinute = document.getElementById("microDropPerMinute");


    if (dose === "" || dose <= 0 || isNaN(dose)) {
        totalDoseRequired.innerText = "Please input valid dose";
    }
    else if (weight === "" || weight <= 0) {
        weight = "Please enter valid Weight";
    }
    else {
        totalDoseRequired.innerText = (dose * weight);
    }
    if (strength === "" || strength <= 0 || isNaN(strength)) {
        dose_concentration.innerText = "0 " + unitOfDose + "/ml";

    }
    else if (quantity === "" || quantity <= 0 || isNaN(quantity)) {
        dose_concentration.innerText = "0 " + unitOfDose + "/ml";

    }
    else if (volume === "" || volume <= 0 || isNaN(volume)) {
        dose_concentration.innerText = "0 " + unitOfDose + "/ml";
    }
    else {
        if (unitOfDose == "mg" && unitOfStrength == "mg") {
            drugConcentration.innerText = ((strength * quantity) / volume);
        }
        else if (unitOfDose == "mcg" && unitOfStrength == "mcg") {
            drugConcentration.innerText = ((strength * quantity) / volume);
        }
        else if (unitOfDose == "mcg" && unitOfStrength == "mg") {
            drugConcentration.innerText = ((strength * 1000 * quantity) / volume);
        }
        else if (unitOfDose == "mg" && unitOfStrength == "mcg") {
            drugConcentration.innerText = ((strength / 1000 * quantity) / volume);
        }

    }
    dose_concentration.innerText = "✔ Dose Required : " + totalDoseRequired.innerText + " " + unitOfDose + " " + "✔ Drug Concentration :" + drugConcentration.innerText + " " + unitOfDose + "/ml";
    if (isNaN((parseFloat(totalDoseRequired.innerText) / parseFloat(drugConcentration.innerText)) * 60)) {
        mlPerHour.innerText = "";
    }
    else {
        mlPerHour.innerText = "✔ Hourly Quantity : " + (parseFloat(totalDoseRequired.innerText) / parseFloat(drugConcentration.innerText)) * 60 + " ml/hour";
    }
    if (isNaN((parseFloat((parseFloat(totalDoseRequired.innerText) / parseFloat(drugConcentration.innerText)) / 60) * 15))) {
        dropPerMinute.innerText = "";
    }
    else {
        dropPerMinute.innerText = "✔ Drop : " + (parseFloat(totalDoseRequired.innerText) / parseFloat(drugConcentration.innerText)) * 60 / 60 * 15 + " drop/min";
    }
    if (isNaN((parseFloat((parseFloat(totalDoseRequired.innerText) / parseFloat(drugConcentration.innerText)) / 60) * 15) * 4)) {
        microDropPerMinute.innerText = "";
    }
    else {
        microDropPerMinute.innerText = "✔ Microdrop : " + (parseFloat(totalDoseRequired.innerText) / parseFloat(drugConcentration.innerText)) * 60 / 60 * 15 * 4 + " microdrop/min";
    }

}