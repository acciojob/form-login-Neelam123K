function getFormvalue(event) {
    //Write your code here
event.preventDefault();
}
const form = document.getElementById('form1');
const fname = form.fname.value.trim();  
const lname = form.lname.value.trim();

if (!fname && !lname) {
        alert("Please enter your first and last name.");
        return false;
      }

      const fullName = `${fname} ${lname}`.trim(); // Handle case when one of them is empty
      alert(fullName);
      return false;
