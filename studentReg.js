const contestants = [];

let form = document.getElementById('form');
let formBtn = document.getElementById('formBtn');
var contestantArray = Array.from(contestants);


let contestantData = JSON.parse(localStorage.getItem("contestants"))

form.addEventListener('click', (e)=> {
    e.preventDefault();
});

let schools = JSON.parse(localStorage.getItem("schools"));
function schoolsInfo(sch) {
    let option = "";
    let select = document.getElementById("school")
    sch.forEach((school) => {
        option += `
            <option value="${school.name}">${school.name}</option>
        `;
    });
    select.innerHTML = option;
}
schoolsInfo(schools);

formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let fullName = document.getElementById("fName");
    let stdSchool = document.getElementById("school");
    let stdEmail = document.getElementById("email");
    let stdPhone = document.getElementById("phone");
    let stdPwd = document.getElementById("pwd");

    let stdReg = {
        name: fullName.value,
        sch: stdSchool.value,
        stdMail: stdEmail.value,
        phone: stdPhone.value,
        stdPass: stdPwd.value,
    };

    if(contestantData) {
        contestantArray = contestantData;
    };


    contestantArray.push(stdReg);

    localStorage.setItem("contestants", JSON.stringify(contestantArray));

    if (!fullName.value || !stdSchool.value || !stdEmail.value || !stdPhone.value || !stdPwd.value) {
        fullName.previousElementSibling.innerHTML = "*Field is Required", 
        stdSchool.previousElementSibling.innerHTML = "*Field is Required", 
        stdEmail.previousElementSibling.innerHTML = "*Field is Required", 
        stdPhone.previousElementSibling.innerHTML = "*Field is Required",
        stdPwd.previousElementSibling.innerHTML = "*Field is Required"
    } else{
        fullName.previousElementSibling.innerHTML = "", 
        stdSchool.previousElementSibling.innerHTML = "", 
        stdEmail.previousElementSibling.innerHTML = "", 
        stdPhone.previousElementSibling.innerHTML = "",
        stdPwd.previousElementSibling.innerHTML = ""
    };
});



// function login() {
//     contestants.forEach((contestant) => {
//         if (stdEmail.value == checkMail && stdPwd.value == checkPwd) {
//             alert("Person Available!!")
//         console.log(contestant);
//         } else {
//             alert("Person Unavailable")
//         }
//     });
// };




// const login = document.getElementById("logForm");
// login.addEventListener('submit', (e)=> {
//     e.preventDefault()
//     let logMail = document.getElementById("logMail");
//     let logPwd = document.getElementById("logPwd");
//     let welcomeNote = document.getElementById("welcomeNote");

//     let logDetail = JSON.parse(localStorage.getItem("contestants"));
//     let mailArr = [];
//     let pwdArr = [];
//     let result = logDetail.map((stdMail, i, logDetail) =>{
//         mailArr.push(logDetail[i].stdMail);
//         pwdArr.push(logDetail[i].stdPass);

//     });

//     console.log(logDetail);

//     if(mailArr.indexOf(logMail) > -1 && pwdArr.indexOf(logPwd) > -1){

//         window.location.href = "index.html"
//         // form.style.display = "none";
//         // let output = `
//         //     <h2>Welcome ${findCand.fullName}, you are successfully logged in.</h2>
//         //     <a href="studentReg.html">Register Student(s)</a>
//         // `;
//         // welcomeNote.innerHTML = output;
//     } else{
//         console.log("Incorrect Login Details");
//     };

// });