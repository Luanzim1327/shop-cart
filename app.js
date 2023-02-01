let products = [
    {
        name : "Monster",
        price: 4,
        id:"monter_id",
        desc_composition: "355ml",
        image:"./img/monster.png",
    } ,

    {
        name : "Orange Juice",
        price: 3,
        id:"orange_juice_id",
        desc_composition: "300ml",
        image:"./img/orange-juice.png",
    } ,

    {
        name : "Coca-Cola",
        price: 5,
        id:"coca_cola_id",
        desc_composition: "355ml",
        image:"./img/coca-cola.png",
    } ,

    {
        name : "Soda",
        price: 5,
        id:"soda_id",
        desc_composition: "250ml",
        image:"./img/soda.png",
    } ,
]

let lengthCart = 0;
let cart = [];
let i = 0;

const containerProducts = document.getElementById("container-products");
const cartContainer = document.getElementById("cart");
const toggleCart = document.getElementById("toggle-cart");
const indexCart = toggleCart.querySelector("span");
const containerCartProducts = document.getElementById("container-cart-products");

const categories = [...new Set(products.map((item) => 
    {return item}    
))]

document.getElementById("container-products").innerHTML = 

    categories.map((item) => {
        var {image , name , desc_composition , price} = item;

       return ( `
        <div class="product-item">
            <img src="${image}">
            <h3>${name}</h3>
            <p>Size: ${desc_composition}</p>
            <span>$ ${price}.00</span>` +
            "<button onclick='pushToCart("+(i++)+")'>Add to Cart</button>" +
        `</div>
     `)

}).join("");

function pushToCart (e) {

    cart.push({...categories[e]});
    displayCart();
}

function displayCart () {
     let j = 0;
     total = 0;

    document.getElementById("count").innerHTML = cart.length;
    if(cart.length === 0) {
        containerCartProducts.innerHTML = `<h2>Your cart is empty</h2>`;
        document.getElementById("finale-price").innerHTML = "$" + 0 +".00";
    }else {
        containerCartProducts.innerHTML = cart.map((item) => {
           var {name , price, desc_composition} = item;
            total = total + price
            document.getElementById("finale-price").innerHTML = "$ " + total + ".00";
           return (
            `   
            <div class="product-cart" id="product-cart">
                <h4>${name}</h4>
                <p>${desc_composition}</p>    
                <span>$ ${price}.00</span>` +
                "<i class='fa-solid fa-xmark' onclick='delElement("+(j++)+")'></i>" +
            `</div>
             `
           )

        }).join("")
    }
}

function delElement(e) {
    cart.splice(e , 1);
    console.log(cart);
    displayCart();
}

toggleCart.addEventListener("click" , () => {
    cartContainer.classList.toggle("hide");
})
