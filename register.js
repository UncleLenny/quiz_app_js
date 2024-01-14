const schools = [];

let form = document.getElementById('form');
let formBtn = document.getElementById('formBtn');
var schoolUser = Array.from(schools);


let schData = JSON.parse(localStorage.getItem("schools"))

form.addEventListener('click', (e)=>{
    e.preventDefault()
});

formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let schoolName = document.getElementById("sName");
    let schoolAdd = document.getElementById("address");
    let schoolStudent = document.getElementById("stdNum");
    let schoolEmail = document.getElementById("email");
    let schoolPhone = document.getElementById("phone");

    let schoolReg = {
        name: schoolName.value,
        address: schoolAdd.value,
        stdCount: schoolStudent.value,
        schoolMail: schoolEmail.value,
        schoolTel: schoolPhone.value,
    }; 

    if(schData) {
        schoolUser = schData;
    };


    schoolUser.push(schoolReg);

    localStorage.setItem("schools", JSON.stringify(schoolUser));

    if (!schoolName.value || !schoolAdd.value || !schoolStudent.value || !schoolEmail.value || !schoolPhone.value) {
        schoolName.previousElementSibling.innerHTML = "*Field is Required", 
        schoolAdd.previousElementSibling.innerHTML = "*Field is Required", 
        schoolStudent.previousElementSibling.innerHTML = "*Field is Required", 
        schoolEmail.previousElementSibling.innerHTML = "*Field is Required",
        schoolPhone.previousElementSibling.innerHTML = "*Field is Required"
    } else{
        schoolName.previousElementSibling.innerHTML = "", 
        schoolAdd.previousElementSibling.innerHTML = "", 
        schoolStudent.previousElementSibling.innerHTML = "", 
        schoolEmail.previousElementSibling.innerHTML = "",
        schoolPhone.previousElementSibling.innerHTML = ""
    };
});