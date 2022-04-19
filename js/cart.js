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
        parsearr.map((i) => {
            document.getElementById("titleget").innerHTML = i.title;
            document.getElementById("itemprice").innerHTML = i.price;
            itemval.value = parseInt(itemval.value) + 1;
            itemprice.innerHTML = itemval.value * i.price;

        })

    }
}

// localStorage

const product = localStorage.getItem("products");
const parsearr = JSON.parse(product);
console.log(parsearr)
parsearr.map((i) => {
    console.log(i.title);
    document.getElementById("titleget").innerHTML = i.title;
    document.getElementById("itemprice").innerHTML = i.price;
})


const delete_product = () => {

}