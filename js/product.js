const product = () => {
    let title = document.getElementById("title").innerHTML;
    let price = document.getElementById("price").innerHTML;
    console.log(title)
    const cart_records = [{
        "title": title,
        "price": price
    }];
    localStorage.setItem("products", JSON.stringify(cart_records));
    location.href = "cart.html"
}

