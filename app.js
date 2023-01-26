let products = [
    {
        name : "Monster",
        price: 4,
        id:"monter_id",
        desc_composition: "355ml",
        image:"./img/monter.jpg",
    } ,

    {
        name : "Orange Juice",
        price: 3,
        id:"orange_juice_id",
        desc_composition: "300ml",
        image:"./img/orange-juice.jpg",
    } ,

    {
        name : "Coca-Cola",
        price: 5,
        id:"coca_cola_id",
        desc_composition: "355ml",
        image:"./img/coca-cola.jpg",
    } ,

    {
        name : "Soda",
        price: 5,
        id:"soda_id",
        desc_composition: "250ml",
        image:"./img/soda.jpg",
    } ,
]

let total = 0;

const containerProducts = document.getElementById("products");

function genProducts (name , desc , price) {

    let productItem = document.createElement("div");
    productItem.classList.add("product-item");

    let nameItem = document.createElement("h3");
    nameItem.innerHTML = name;

    let descItem = document.createElement("p");
    descItem.innerHTML = "Size :" + desc;

    let priceItem = document.createElement("span");
    priceItem.innerHTML = price;

    let btnItem = document.createElement("button");
    btnItem.innerHTML = "add to cart"
    btnItem.addEventListener("click" , pushToCart); 

    productItem.appendChild(nameItem);
    productItem.appendChild(descItem);
    productItem.appendChild(priceItem);
    productItem.appendChild(btnItem);

    containerProducts.appendChild(productItem)

}


function getStatusProducts (){
    products.map((item) => {
        genProducts(item.name ,  item.desc_composition , item.price);

    })
}

function pushToCart () {

    const containerProduct = this.parentNode;
    const name = containerProduct.querySelector("h3");
    const price = containerProduct.querySelector("span");
    const desc = containerProduct.querySelector("p");

    
    createCart(name.innerText , price.innerText , desc.innerText);
    

    const priceTotal = document.getElementById("price");
    let updatePrice = totalPrice(Number(price.innerText));
    priceTotal.innerHTML = "$ " + updatePrice; 
}

function createCart (name , price , desc) {
    const containerCart = document.getElementById("cart");

    // let containerTotalPrice = document.createElement("div");
    // containerTotalPrice.classList.add("container-total-price");
    // let priceText = document.createElement("span");
    // priceText.innerHTML = "price is empty"

    let productCart = document.createElement("div");
    productCart.classList.add("product-cart");
    let nameItemCart = document.createElement("h4");
    let priceItemCart = document.createElement("span");
    let descItemCart = document.createElement("p");

    nameItemCart.innerHTML = name
    priceItemCart.innerHTML = price
    descItemCart.innerHTML = desc

    productCart.appendChild(nameItemCart);
    productCart.appendChild(priceItemCart);
    productCart.appendChild(descItemCart);
    // productCart.appendChild(containerTotalPrice);

    containerCart.appendChild(productCart);

}

function totalPrice(price) {

    total = total + price;
    return total;
}

getStatusProducts()