function register() {
    let email, psw;
    email = document.getElementById("email").value;
    psw = document.getElementById("psw").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {
            return v.email == email
        })) {
        alert("duplicate data \n You have already Signed Up");

    } else {
        user_records.push({
            "email": email,
            "psw": psw
        })
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("Account has been created!! \n Please Sign In Using the Link below.")
    }

}