//total amount
const product_total_amount=document.getElementById("total_amount");//total

// local storage delete
const delete_product=(itemIndex)=>{
    let products=localStorage.getItem("products");
    let parsearr=JSON.parse(products);
    parsearr.splice(itemIndex,1);
    localStorage.setItem('products',JSON.stringify(parsearr));
}
console.log("hhhh")

// local storage Add
let products=localStorage.getItem("products");
const parsearr=JSON.parse(products);
parsearr.map((i)=>{
    //title 
    let title=document.getElementById("titleget");
    let h5=document.createElement('h5');
    h5.style.marginTop="2px";
    let span=document.createElement('span');
    let p=document.createTextNode("$")
    let value=document.createTextNode(i.price);
    span.setAttribute("class","amount");
    span.setAttribute("id","itemprice");
    let titletext=document.createTextNode(i.title);
    let icon= document.createElement('i');
    icon.style.paddingRight="5px";
    icon.setAttribute("class","fa fa-trash-o");
    icon.setAttribute("onclick","delete_product(this)")
    h5.appendChild(icon);
    h5.appendChild(titletext);
    title.appendChild(h5)
    span.appendChild(p);
    span.appendChild(value);
    h5.appendChild(span);
       
})