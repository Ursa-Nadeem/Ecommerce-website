const product = () => {
    let title = document.getElementById("title").innerHTML;
    let price = document.getElementById("price").innerHTML;
    let cart_records = []
    cart_records = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : []
    cart_records.push({
        "title": title,
        "price": price
    });
    localStorage.setItem("products", JSON.stringify(cart_records));
    location.href = "cart.html"
}

