const product=()=>{
    let title,price;
    title=document.getElementById("title").innerHTML;
    price=document.getElementById("price").innerHTML;
    let cart_records = [];
    cart_records=JSON.parse(localStorage.getItem("products"))?JSON.parse(localStorage.getItem("products")):[]
    cart_records.push({
             "title":title,
             "price":price
         });
    localStorage.setItem("products", JSON.stringify(cart_records));
    location.href="cart.html";
}

// decrement counter
const decreament = () => {
        var itemval = document.getElementById("textbox");
        var itemprice = document.getElementById("price");
    if (itemval.value <= 0) {
        itemval.value = 0;

    }
    else {
    let products=localStorage.getItem("products");
    const parsearr=JSON.parse(products)
    parsearr.map((i)=>{
    document.getElementById("price").innerHTML=i.price;
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = "#fff";
        itemval.style.color = '#000';
        let item=itemval.value;
        let price=i.price;
        let decrement=item*price;
        itemprice.innerHTML =decrement; 
        product_total_amount.innerHTML=decrement;

    })
    }
}

// Increment counter
const increament = () => {
    var itemval = document.getElementById("textbox");
    var itemprice = document.getElementById("price");
    if (itemval.value >= 5) {
        itemval.value = 5;
        alert("max 5 allowed");
        itemval.style.background = "red";
        itemval.style.color = '#fff';
    }
    else {
    let products=localStorage.getItem("products");
    const parsearr=JSON.parse(products)
    parsearr.map((i)=>{
    document.getElementById("price").innerHTML=i.price;
    console.log(i.price);
    itemval.value = parseInt(itemval.value) + 1;
    console.log(itemval.value,"quantity")
    itemprice.innerHTML = itemval.value * i.price;
    product_total_amount.innerHTML=itemval.value * i.price;
})
    }
}

