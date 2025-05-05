   // Function to check form fields
   function checkFirstName() {
    const firstName = document.getElementById("first_name").value;
    const first_name_response = document.getElementById("first_name_response");
    const firstnameregex = /^[A-Za-z'-]{1,30}$/;
    
    const isValid = firstnameregex.test(firstName);
    first_name_response.textContent = isValid ? "Valid" : "Invalid first name";
    first_name_response.style.color = isValid ? "green" : "red";

    return isValid;
}

function checkMiddleInitial() {
    const middleInitial = document.getElementById("middle_initial").value;
    const middleInitialResponse = document.getElementById("middle_initial_response");
    const regex = /^[A-Za-z]{1}$/;
    const isValid = regex.test(middleInitial);
    middleInitialResponse.textContent = isValid ? "Valid" : "Invalid: 1 letter only";
    middleInitialResponse.style.color = isValid ? "green" : "red";
    return isValid;
}

function checkLastName() {
    const lastName = document.getElementById("last_name").value;
    const lastNameResponse = document.getElementById("last_name_response");
    const regex = /^[A-Za-z'-]{1,30}$/;
    const isValid = regex.test(lastName);
    lastNameResponse.textContent = isValid ? "Valid" : "Invalid last name";
    lastNameResponse.style.color = isValid ? "green" : "red";
    return isValid;
}

function checkDOB() {
    const dob = document.getElementById("dob").value;
    const dobResponse = document.getElementById("dob_response");
    const today = new Date();
    const dobDate = new Date(dob);
    const maxDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
    const minDate = today;

    const isValid = dobDate <= today && dobDate >= maxDate;
    dobResponse.textContent = isValid ? "Valid" : "Invalid: Date must be within range";
    dobResponse.style.color = isValid ? "green" : "red";
    return isValid;
}

function formatSSN() {
const ssnInput = document.getElementById("ssn");
let ssn = ssnInput.value.replace(/\D/g, ''); // Remove all non-digits
let formattedSSN = '';

// Format as XXX-XX-XXXX
if (ssn.length > 0) {
formattedSSN = ssn.substring(0, 3);
}
if (ssn.length > 3) {
formattedSSN += '-' + ssn.substring(3, 5);
}
if (ssn.length > 5) {
formattedSSN += '-' + ssn.substring(5, 9);
}

// Update the input value (this will show the dashes)
ssnInput.value = formattedSSN;

// Create the masked display value (***-**-****)
let maskedSSN = '';
if (ssn.length > 0) {
maskedSSN = '***'.substring(0, Math.min(3, ssn.length));
}
if (ssn.length > 3) {
maskedSSN += '-**'.substring(0, Math.min(3, ssn.length-2));
}
if (ssn.length > 5) {
maskedSSN += '-****'.substring(0, Math.min(5, ssn.length-4));
}

// For debugging, you can see the actual value in console
console.log("Actual SSN:", ssn);

// Call the validation function
checkSSN();
}

function checkSSN() {
const ssnInput = document.getElementById("ssn");
const ssn = ssnInput.value.replace(/\D/g, ''); // Get just the digits
const ssnResponse = document.getElementById("ssn_response");
const regex = /^(?!000|666|9\d{2})\d{3}(?!00)\d{2}(?!0000)\d{4}$/;
const isValid = ssn.length === 9 && regex.test(ssn);

ssnResponse.textContent = isValid ? "Valid" : "Invalid: Format ###-##-####";
ssnResponse.style.color = isValid ? "green" : "red";
return isValid;
}

function checkAddress1() {
    const address1 = document.getElementById("address1").value;
    const address1Response = document.getElementById("address1_response");
    const regex = /^[A-Za-z0-9\s,'-]{1,50}$/;
    const isValid = regex.test(address1);
    address1Response.textContent = isValid ? "Valid" : "Invalid: Max 50 characters";
    address1Response.style.color = isValid ? "green" : "red";
    return isValid;
}   

function checkAddress2() {
    const address2 = document.getElementById("address2").value;
    const address2Response = document.getElementById("address2_response");
    const regex = /^[A-Za-z0-9\s,'-]{1,50}$/;
    const isValid = regex.test(address2);
    address2Response.textContent = isValid ? "Valid" : "Invalid: Max 50 characters";
    address2Response.style.color = isValid ? "green" : "red";
    return isValid;
}

function checkCity() {
    const city = document.getElementById("city").value;
    const cityResponse = document.getElementById("city_response");
    const regex = /^[A-Za-z\s,'-]{1,30}$/;
    const isValid = regex.test(city);
    cityResponse.textContent = isValid ? "Valid" : "Invalid: Max 30 characters";
    cityResponse.style.color = isValid ? "green" : "red";
    return isValid;
}

function checkState() {
    const state = document.getElementById("state").value;
    const stateResponse = document.getElementById("state_response");
    const regex = /^[A-Z]{2}$/;
    const isValid = regex.test(state);
    stateResponse.textContent = isValid ? "Valid" : "Invalid: Format XX";
    stateResponse.style.color = isValid ? "green" : "red";
    return isValid;
}

function checkZip() {
    const zip = document.getElementById("zip").value;
    const zipResponse = document.getElementById("zip_response");
    const regex = /^\d{5}(-\d{4})?$/;
    const isValid = regex.test(zip);
    const formattedZip = zip.replace(/[^0-9]/g, "").slice(0, 5); 
    zipResponse.textContent = isValid ? `Valid: ${formattedZip}` : "Invalid: Format ##### or #####-####";
    zipResponse.style.color = isValid ? "green" : "red";
    return isValid;
}

function formatPhoneNumber() {
    const phoneInput = document.getElementById("phone");
    let phoneNumber = phoneInput.value.replace(/\D/g, ''); // Remove all non-digits
    
    // Format as XXX-XXX-XXXX
    if (phoneNumber.length > 3 && phoneNumber.length <= 6) {
        phoneNumber = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3);
    } else if (phoneNumber.length > 6) {
        phoneNumber = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3, 6) + '-' + phoneNumber.slice(6, 10);
    }
    
    phoneInput.value = phoneNumber;
    checkPhone(); // Call validation function
}

function checkPhone() {
    const phone = document.getElementById("phone").value;
    const phoneResponse = document.getElementById("phone_response");
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    
    if (phone === "") {
        phoneResponse.textContent = "";
        return false;
    } else if (!phonePattern.test(phone)) {
        phoneResponse.textContent = "Format: 123-456-7890";
        phoneResponse.style.color = "red";
        return false;
    } else {
        phoneResponse.textContent = "✓ valid";
        phoneResponse.style.color = "green";
        return true;
    }
}

function checkEmail() {
    const email = document.getElementById("email").value;
    const emailResponse = document.getElementById("email_response");
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regex.test(email);
    emailResponse.textContent = isValid ? "Valid" : "Invalid: Format name@domain.tld";
    emailResponse.style.color = isValid ? "green" : "red";
    return isValid;
}

function checkUserID() {
    const userID = document.getElementById("user_id").value;
    const userIDResponse = document.getElementById("user_id_response");
    const regex = /^[a-zA-Z][a-zA-Z0-9_-]{5,30}$/;
    const isValid = regex.test(userID);
    userIDResponse.textContent = isValid ? "Valid" : "Invalid";
    userIDResponse.style.color = isValid ? "green" : "red";
    return isValid;
}

function checkPassword() {
    const password = document.getElementById("password").value;
    const passwordResponse = document.getElementById("password_response");
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,30}$/;
    const isValid = regex.test(password);
    passwordResponse.textContent = isValid ? "Valid" : "Invalid: Min 8 chars, 1 upper case, 1 number, 1 special char";
    passwordResponse.style.color = isValid ? "green" : "red";
    return isValid;
}

function checkConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const confirmPasswordResponse = document.getElementById("confirm_password_response");
    const isValid = password === confirmPassword;
    confirmPasswordResponse.textContent = isValid ? "Valid" : "Passwords do not match";
    confirmPasswordResponse.style.color = isValid ? "green" : "red";
    return isValid;
}

function validateForm() {
    return checkFirstName() && checkMiddleInitial() && checkLastName() && checkDOB() && checkZip() && checkEmail() && checkUserID() && checkPassword() && checkConfirmPassword();
}

// Combined validation and submission function
function validateAndSubmit() {
// First validate all fields
if (!validateAllFields()) {
return false; // Prevent form submission
}

// If all validations pass, show confirmation and submit
if (confirm("All fields are valid! Do you want to submit the form?")) {
return true; // Allow form submission
} else {
return false; // Cancel submission
}
}

// Master validation function that checks all fields
function validateAllFields() {
let isValid = true;

if (!checkFirstName()) {
alert("Please correct your first name.");
document.getElementById("first_name").focus();
isValid = false;
}
else if (!checkMiddleInitial()) {
alert("Please correct your middle initial (1 letter only).");
document.getElementById("middle_initial").focus();
isValid = false;
}
else if (!checkLastName()) {
alert("Please correct your last name.");
document.getElementById("last_name").focus();
isValid = false;
}
else if (!checkDOB()) {
alert("Please correct your date of birth.");
document.getElementById("dob").focus();
isValid = false;
}
else if (!checkSSN()) {
alert("Please correct your Social Security Number.");
document.getElementById("ssn").focus();
isValid = false;
}
else if (!checkPhone()) {
alert("Please correct your phone number.");
document.getElementById("phone").focus();
isValid = false;
}
else if (!checkAddress1()) {
alert("Please correct your address line 1.");
document.getElementById("address1").focus();
isValid = false;
}
else if (document.getElementById("address2").value && !checkAddress2()) {
alert("Please correct your address line 2.");
document.getElementById("address2").focus();
isValid = false;
}
else if (!checkCity()) {
alert("Please correct your city.");
document.getElementById("city").focus();
isValid = false;
}
else if (!checkState()) {
alert("Please select your state.");
document.getElementById("state").focus();
isValid = false;
}
else if (!checkZip()) {
alert("Please correct your zip code.");
document.getElementById("zip").focus();
isValid = false;
}
else if (!checkEmail()) {
alert("Please correct your email address.");
document.getElementById("email").focus();
isValid = false;
}

else if (!document.querySelector('input[name="gender"]:checked')) {
alert("Please select your gender.");
isValid = false;
}
else if (!document.querySelector('input[name="vaccinated"]:checked')) {
alert("Please select vaccination status.");
isValid = false;
}
else if (!document.querySelector('input[name="insurance"]:checked')) {
alert("Please select insurance status.");
isValid = false;
}
else if (!checkUserID()) {
alert("Please correct your User ID.");
document.getElementById("user_id").focus();
isValid = false;
}
else if (!checkPassword()) {
alert("Password must be at least 8 characters with 1 uppercase, 1 number, and 1 special character.");
document.getElementById("password").focus();
isValid = false;
}
else if (!checkConfirmPassword()) {
alert("Passwords do not match.");
document.getElementById("confirm_password").focus();
isValid = false;
}

return isValid;
}