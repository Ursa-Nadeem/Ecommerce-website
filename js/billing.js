function shipping() {
    let firstName = document.getElementById("shipping-first-name").value;
    let lastName = document.getElementById("shipping-last-name").value;
    let streetAddress = document.getElementById("shipping-street-address").value;
    let Apt = document.getElementById("shipping-apt-address").value;
    let city = document.getElementById("shipping-city").value;
    let country = document.getElementById("shipping-country").value;

    let shipment = new Array();
    shipment = JSON.parse(localStorage.getItem("shipper")) ? JSON.parse(localStorage.getItem("shipper")) : []
    shipment.push({
        "firstName": firstName,
        "lastName": lastName,
        "streetAddress": streetAddress,
        "Apt": Apt,
        "city": city,
        "country": country

    })
    localStorage.setItem("shipper", JSON.stringify(shipment));

} 