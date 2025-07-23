function getFormvalue(event) {
    //Write your code here
  event.preventDefault();

  const form = document.getElementById('form1');
  const firstName = form.fname.value.trim();
  const lastName = form.lname.value.trim();

  if (!firstName && !lastName) {
    alert("Please enter your first and last name.");
    return;
  }

  const fullName = `${firstName} ${lastName}`.trim();
      alert(fullName);
}