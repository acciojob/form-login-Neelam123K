function getFormvalue(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Retrieve values from the input fields
    const firstName = document.querySelector('input[name="fname"]').value.trim();
    const lastName = document.querySelector('input[name="lname"]').value.trim();

    // Concatenate the names
    const fullName = `${firstName} ${lastName}`;

    // Display the full name using alert
    alert(fullName);
}