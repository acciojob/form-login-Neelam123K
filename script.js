function getFormvalue(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Retrieve values from the input fields
    const firstName = document.querySelector('input[name="fname"]').value.trim();
    const middleName = document.querySelector('input[name="mname"]').value.trim();
    const lastName = document.querySelector('input[name="lname"]').value.trim();

    // Create the full name
    let fullName = firstName;
    if (middleName) { // Only add middle name if it exists
        fullName += ` ${middleName}`;
    }
    fullName += ` ${lastName}`;

    // Display the full name using alert
    alert(fullName.trim()); // Trim to remove any extra spaces
}