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

let total = 0;
let lengthCart = 0;

const containerProducts = document.getElementById("container-products");
const cartContainer = document.getElementById("cart");
const toggleCart = document.getElementById("toggle-cart");
const indexCart = toggleCart.querySelector("span");

function genProducts (name , desc , price , image) {

    containerProducts.innerHTML += 
    `
        <div class="product-item">
            <img src="${image}">
            <h3>${name}</h3>
            <p>Size: ${desc}</p>
            <span>$ ${price}.00</span>
            <button>Add to Cart</button>
        </div>
    `

    const btnAddToCart = containerProducts.querySelectorAll("button");
    btnAddToCart.forEach((btn) => {
        btn.addEventListener("click" , pushToCart);
    })
}


function getStatusProducts (){
    products.map((item) => {
        genProducts(item.name ,  item.desc_composition , item.price , item.image);

    })
}

function pushToCart () {

    lengthCart++;
    indexCart.innerHTML = lengthCart;

    const containerProduct = this.parentNode;

    const name = containerProduct.querySelector("h3");
    const price = containerProduct.querySelector("span");
    const desc = containerProduct.querySelector("p");
    
    let breakPrice = price.innerText.split('')
    let priceAdjust = breakPrice[1] + breakPrice[2] + breakPrice[3];

    createCart(name.innerText , price.innerText , desc.innerText);
    

    const finalePrice = document.getElementById("finale-price");
    let updatePrice = totalPrice(Number(priceAdjust));
    finalePrice.innerHTML = "$ " + updatePrice; 
}

function createCart (name , price , desc) {
    const containerCartProducts = document.getElementById("container-cart-products");

    containerCartProducts.innerHTML += 
    `   
    <div class="product-cart" id="product-cart">
        <h4>${name}</h4>
        <p>${desc}</p>    
        <span>${price}</span>
        <button><i class="fa-solid fa-xmark" ></i></button>    
        </div>
    `

    const btnDelete = containerCartProducts.querySelectorAll("button");
    btnDelete.forEach((btn) => {
        btn.addEventListener("click" , removeItem);
    })

}

function totalPrice(price) {

    total = total + price;
    return total;
}

function removeItem () {
    const deleteContainer = this.parentNode;
    deleteContainer.remove();

    lengthCart--
    indexCart.innerHTML = lengthCart;

}

toggleCart.addEventListener("click" , () => {
    cartContainer.classList.toggle("hide");
})


getStatusProducts();

