function validateForm() {
    const surname = document.forms["registrationForm"]["surname"].value;
    const firstName = document.forms["registrationForm"]["first-name"].value;
    const email = document.forms["registrationForm"]["email"].value;
    const password = document.forms["registrationForm"]["password"].value;

    if (surname === "" || firstName === "" || email === "" || password === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
}
