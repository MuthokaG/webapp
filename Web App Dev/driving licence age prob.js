<script>
function checkEligibility(){
var age = parseInt(document.getElementById('age').value);
var hasPreviousLicense = document.getElementById('previousLicense').value.toLowerCase();
var eligibility;
if (age < 18) {
    eligibility = "You are not eligible for a driving license as you are under 18 years old.";
} else if (age >= 18 && age <= 70 && hasPreviousLicense === "no") {
    eligibility = "You are eligible for a new driving license.";
} else if (age >= 18 && age <= 70 && hasPreviousLicense === "yes") {
    eligibility = "You are eligible for a license renewal.";
} else if (age > 70) {
    eligibility = "You may need to undergo additional tests for a driving license renewal due to your age.";
} else {
    eligibility = "Invalid input. Please enter 'yes' or 'no' for the previous license question.";
}
document.getElementById('result').innerHTML=eligibility;
}
</script>