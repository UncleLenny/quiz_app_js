// LOGIN SECTION
let checkMail = document.getElementById('logMail');
let checkPwd = document.getElementById('logPwd');
let quizLogin = document.getElementById('logFormBtn');
let quizForm = document.getElementById('logForm')

quizForm.addEventListener('click', (e)=> {
    e.preventDefault();
})

quizLogin.addEventListener('click', (e)=> {
    e.preventDefault();
    let logInfo = JSON.parse(localStorage.getItem("contestants"));
    logInfo.forEach((contestant) => {
        console.log(contestant)
        if (contestant.stdMail == checkMail && contestant.stdPass == checkPwd) {
            window.location.href = 'quiz.html'
                } else{
                    alert("Incorrect Login Details")
                    console.log("Incorrect Login Details");
                };
            });
        });