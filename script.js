document.getElementById('form1').addEventListener('submit', getFormvalue);

  function getFormvalue(event) {
    event.preventDefault();
    
    const form = event.target;
    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();

    if (!firstName && !lastName) {
      alert("Please enter your first and last name.");
      return;
    }

    const fullName = `${firstName} ${lastName}`.replace(/\s+/g, ' ').trim();
    alert(fullName);