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
        price: 3.5,
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

const containerProducts = document.getElementById("products");

function genProducts (name , desc , price) {

    let productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.addEventListener("click" , pushToCart);

    let nameItem = document.createElement("h3");
    nameItem.innerHTML = name;

    let descItem = document.createElement("p");
    descItem.innerHTML = "Size " + desc;

    let priceItem = document.createElement("span");
    priceItem.innerHTML = "$"+price+".00";

    productItem.appendChild(nameItem)
    productItem.appendChild(descItem)
    productItem.appendChild(priceItem)

    containerProducts.appendChild(productItem)

}


function getStatusProducts (){
    products.map((item) => {
        genProducts(item.name ,  item.desc_composition , item.price);
    })
}

function pushToCart () {

    const containerProduct = this;
    const name = containerProduct.querySelector("h3");
    const price = containerProduct.querySelector("span");
    const desc = containerProduct.querySelector("p");

    console.log(name , price , desc);

    const containerCart = document.getElementById("cart");
    
    let productCart = document.createElement("div");
    productCart.classList.add("product-cart");

    let nameCart = document.createElement("h4");
    let priceCart = document.createElement("span");
    let descCart = document.createElement("p");

    nameCart.innerHTML = name.innerText
    priceCart.innerHTML = price.innerText
    descCart.innerHTML = desc.innerText

    productCart.appendChild(nameCart);
    productCart.appendChild(priceCart);
    productCart.appendChild(descCart);

    containerCart.appendChild(productCart);
}

getStatusProducts()