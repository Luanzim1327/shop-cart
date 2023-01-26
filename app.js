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

const containerProducts = document.getElementById("container-products");

function genProducts (name , desc , price , image) {

    let productItem = document.createElement("div");
    productItem.classList.add("product-item");

    let imageItem = document.createElement("img");
    imageItem.src = image;

    let nameItem = document.createElement("h3");
    nameItem.innerHTML = name;

    let descItem = document.createElement("p");
    descItem.innerHTML = "Size : " + desc;

    let priceItem = document.createElement("span");
    priceItem.innerHTML = "$ " + price + ".00";

    let btnItem = document.createElement("button");
    btnItem.innerHTML = "add to cart"
    btnItem.addEventListener("click" , pushToCart); 

    productItem.appendChild(imageItem);
    productItem.appendChild(nameItem);
    productItem.appendChild(descItem);
    productItem.appendChild(priceItem);
    productItem.appendChild(btnItem);

    containerProducts.appendChild(productItem)

}


function getStatusProducts (){
    products.map((item) => {
        genProducts(item.name ,  item.desc_composition , item.price , item.image);

    })
}

function pushToCart () {

    const containerProduct = this.parentNode;
    const name = containerProduct.querySelector("h3");
    const price = containerProduct.querySelector("span");
    const desc = containerProduct.querySelector("p");

    let price1 = price.innerText.indexOf("$");
    let price2 = price.innerText.indexOf(".00");
    console.log(price2)
    
    createCart(name.innerText , price.innerText , desc.innerText);
    

    const finalePrice = document.getElementById("finale-price");
    let updatePrice = totalPrice(Number(price2));
    console.log(updatePrice);
    finalePrice.innerHTML = "$ " + updatePrice; 
}

function createCart (name , price , desc) {
    const containerCartProducts = document.getElementById("container-cart-products");

    let productCart = document.createElement("div");
    productCart.classList.add("product-cart");
    let nameItemCart = document.createElement("h4");
    let descItemCart = document.createElement("p");
    let priceItemCart = document.createElement("span");
    
    nameItemCart.innerHTML = name
    priceItemCart.innerHTML = price 
    descItemCart.innerHTML = desc

    productCart.appendChild(nameItemCart);
    productCart.appendChild(descItemCart);
    productCart.appendChild(priceItemCart);

    containerCartProducts.appendChild(productCart);

}

function totalPrice(price) {

    total = total + price;
    return total;
}

getStatusProducts();

