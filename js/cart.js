
const product_total_amount = document.getElementById("total_amount");
const decreament = () => {

    var itemval = document.getElementById("textbox");
    var itemprice = document.getElementById("itemprice");
    console.log(itemprice)
    if (itemval.value <= 0) {
        itemval.value = 0;

    }
    else {
        let products = localStorage.getItem("products");
        const parsearr = JSON.parse(products)
        parsearr.map((i) => {
            document.getElementById("titleget").innerHTML = i.title;
            document.getElementById("itemprice").innerHTML = i.price;

            itemval.value = parseInt(itemval.value) - 1;
            itemval.style.background = "#fff";
            itemval.style.color = '#000';

            let a = itemval.value;
            let b = i.price;
            let c = a * b;
            itemprice.innerHTML = c;
            product_total_amount.innerHTML = c;
        })
    }
}

const increament = () => {
    var itemval = document.getElementById("textbox");
    var itemprice = document.getElementById("itemprice");
    if (itemval.value >= 5) {
        itemval.value = 5;
        alert("max 5 allowed");
        itemval.style.background = "red";
        itemval.style.color = '#fff';
    }
    else {
        let products = localStorage.getItem("products");
        const parsearr = JSON.parse(products)
        let sum;
        parsearr.map((i) => {
            document.getElementById("titleget").innerHTML = i.title;
            document.getElementById("itemprice").innerHTML = i.price;
            itemval.value = parseInt(itemval.value) + 1;
            let tprice = itemval.value * i.price
            itemprice.innerHTML = itemval.value * i.price;

            console.log(tprice)

            product_total_amount.innerHTML = tprice;

        })


    }
}

// localStorage  delete
const delete_product = (itemIndex) => {
    const product = localStorage.getItem("products");
    let parsearr = JSON.parse(product);

    parsearr.splice(itemIndex, 1);
    localStorage.setItem('products', JSON.stringify(parsearr));
}

// Add

const product = localStorage.getItem("products");
const parsearr = JSON.parse(product);
parsearr.map((i) => {
    let cart=document.getElementById("titleget")
    let li=document.createElement('li')
    let text=document.createTextNode(i.title)
    li.appendChild(text)
    cart.appendChild(li)
})






