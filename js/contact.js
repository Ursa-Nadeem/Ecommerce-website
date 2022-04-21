function submit() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let records = new Array();
    records = JSON.parse(localStorage.getItem("contact")) ? JSON.parse(localStorage.getItem("contact")) : []

    records.push({
        "name": name,
        "email": email,
        "message": message

    })
    localStorage.setItem("contact", JSON.stringify(records));
}