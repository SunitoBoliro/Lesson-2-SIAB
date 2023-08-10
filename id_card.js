const nameElement = document.getElementById("name");
const Sdo = document.getElementById("SDo");
const dept = document.getElementById("Department");
const rollno = document.getElementById("rollno");
const enroll = document.getElementById("enroll");
const cnicno = document.getElementById("CNIC");
const phoneno = document.getElementById("phone");
const addressno = document.getElementById("address");
const photoImage = document.getElementById("photoImage");
const batch_01 = document.getElementById("batch_year");

let storedValue = [sessionStorage.getItem('studentName')]
let already_values = ["guardianName", "department", "rollNo", "enrollNo", "cnicNo", "phoneNo", "address", "batch", "photo"];


for (let i = 0; i < already_values.length; i++) {
    storedValue.push(sessionStorage.getItem(already_values[i]))
}

console.log(storedValue)


nameElement.textContent += storedValue[0];
Sdo.textContent += storedValue[1];
dept.textContent += storedValue[2];
rollno.textContent += storedValue[3];
enroll.textContent += storedValue[4];
cnicno.textContent += storedValue[5];
phoneno.textContent += storedValue[6];
addressno.textContent += storedValue[7];
batch_01.textContent += storedValue[8]
photoImage.src = storedValue[9];

