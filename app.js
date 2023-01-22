let drugs = [
    { name: "Midazolam", dose: "10-15mg", strength: "15mg/3ml/amp", dilution: "Inj. Midazolam 15mg/ 15ml (Medecine 3ml + 12ml NS), 1ml=1mg" },
    { name: "Fentanyl", dose: "0.05-0.08 mcg/kg/min", strength: "100mcg/2ml/amp)", dilution: "Inj. Fentanyl 500mcg / 50ml (Medecine 10ml + 40ml NS) ▪ 1ml=10mcg" },
    // { name: "Remifentanyl", dose: "", strength: "2mg/vial (2ml/vial)", dilution: "1 vial/ 2mg + 48ml N/S = 50ml, 1ml=40mcg" },
    { name: "Morphine Sulfate", dose: "5-10mg at 1-2 mg/min", strength: "15mg/1ml/amp", dilution: "Inj. Morphine 15mg/ 15ml (Medecine 1ml + 14ml NS) ▪ 1ml=1mg" },
    { name: "Pethidine Hydrochloride", dose: "25-100mg slowly", strength: "100mg/2ml/amp", dilution: "Inj. Pethidine 100mg/ 10ml (Medecine 2ml + 8ml NS) ▪ 1ml=10mg" },
    // { name: "Ketamin", dose: "", strength: "500mg/vial (10ml/vial)", dilution: "No need to dilution" },
    // { name: "Suxamethonium", dose: "", strength: "100mg/amp (2ml/amp)", dilution: "No need to dilution" },
    // { name: "Atracurium (Tracium)", dose: "", strength: "25mg/amp (2.5ml/amp)", dilution: "8amp/ 20ml + 30ml N/S = 50ml, 1ml=4mg" },
    // { name: "Nor-Q", dose: "", strength: "10mg/vial ", dilution: "1vial + 10ml N/S = 10ml, 1ml=1mg" },
    { name: "Dopamine Hydrochloride", dose: "Low Dose (1-5 mcg/kg/min) ▪ Medium Dose (5-15 mcg/kg/min) ▪ High Dose (20-50 mcg/kg/min) 🛑 Note: May increase infusion by 1-4 mcg/kg/min at 10-30 min intervals until optimum response obtained.", strength: "200mg/5ml/amp", dilution: "Inj. Dopamine 200mg/ 50ml (medecine 5ml + 45ml NS) ▪ 1ml=4mg/ 4000mcg" },
    { name: "Dobutamine", dose: " 0.5-1 mcg/kg/min IV continuous infusion initially, then 2-20 mcg/kg/min; not to exceed 40 mcg/kg/min", strength: "250mg/20ml/vial ", dilution: "Inj. Dobutamine 250mg/ 50ml (Medecine 20ml + 30ml NS) ▪ 1ml=5mg/ 5000mcg" },
    { name: "Adrenaline/ Epinephrine", dose: "Cardiac Arrest ▪ Intravenous Injection: 1mg every 2-3 minutes as necessary ▪ Endotracheal: 2-3 mg via endotracheal tube as necessary", strength: "1mg/1ml/amp", dilution: "Inj. Adrenaline 4mg/ 50ml (Medecine 4ml + 46ml NS) ▪ 1ml= 0.08mg/ 80mcg" },
    { name: "Noradrenaline/ Norepinephrine", dose: "Initial Dose: 8-12 mcg/min ▪ Maintenance Dose: 2-4 mcg/min", strength: "2mg/2ml/amp ➡ 4mg/4ml/amp ", dilution: "Inj. Noradrenaline 4mg / 1000ml (Medecine 4ml + 996ml 5%-DNS/ 9%-NS) ▪ 1ml= 4mcg" },
    // { name: "Vasopressin", dose: "", strength: "20unit/amp (1ml/amp) ", dilution: "2amp/ 2ml + 38ml N/S = 40ml, 1ml=1unit" },
    // { name: "Labecard", dose: "", strength: "50mg/amp (10ml/amp) ", dilution: "1amp/ 10ml + 40ml N/S = 50ml, 1ml=1mg" },
    { name: "GTN", dose: "10-200 mcg/min", strength: "50mg/10ml/amp", dilution: "Inj. GTN 50mg / 500ml (Medecine 10ml + 490ml 5%DA) ▪ 1ml=0.01mg/100mcg" },
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
    dose_concentration.innerText = "✔ Dose Required : " + totalDoseRequired.innerText + " " + unitOfDose + " " + "✔ Drug Concentration : " + drugConcentration.innerText + " " + unitOfDose + "/ml";
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