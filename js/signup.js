function register() {
    const email = document.getElementById("email");
    const pswd = document.getElementById("pswd");
    if (email.value.length == 0) {
        alert("Please fill in email");
    } else if (pswd.value.length <= 7) {
        alert("fill 8 charcters in password!!")
    } else {
        localStorage.setItem('email', email.value);
        localStorage.setItem('pswd', pswd.value);
        //         const chk3 = [];
        //         chk3.push([chk1, chk2]);
        //         localStorage.setItem('email', "pswd",
        //             JSON.stringify(chk3));

        alert("Account has been created");
    }

}

function login() {
    const storedemail = localStorage.getItem("email");
    const storedpswd = localStorage.getItem("pswd");

    const useremail = document.getElementById("useremail");
    const userpswd = document.getElementById("userpassword");

    if (useremail.value === storedemail && userpswd.value === storedpswd) {
        alert("Logged in");
    } else {
        alert("Error");
    }
}