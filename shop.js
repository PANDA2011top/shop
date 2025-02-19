const product = [
    { rasmi: "./images/kovrik.png", nomi: "Kovrik", narxi: 100, qoldiq: 50 },
    { rasmi: "./images/stiker.png", nomi: "Stiker", narxi: 49, qoldiq: 11 },
    { rasmi: "./images/soat.png", nomi: "Smart Watch", narxi: 899, qoldiq: 4 },
    { rasmi: "./images/klavitura.png", nomi: "Klavitura", narxi: 200, qoldiq: 20 }
];

const productForm = document.querySelector("#shopForm");
const productInput = document.querySelector("#shopInput");
const productWrapper = document.querySelector("#shop__wrapper");

console.log(productWrapper);


function renederShop(magazin) {
    productWrapper.innerHTML = "";
    productWrapper.innerHTML = magazin.map(obyektlar => 
        `
        <div class="box">
            <img src="${obyektlar.rasmi}">
            <h3>${obyektlar.nomi}</h3>
            <p>Narxi: ${obyektlar.narxi} so'm</p>
            <p>Qoldiq: ${obyektlar.qoldiq} ta mavjud</p>
            <button class="btn btn-primary" onclick="buyProduct(${obyektlar.narxi})">Buy</button>
        </div>
        `
    ).join(""); 
}


renederShop(product);


productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const inpQiymat = productInput.value.toLowerCase();
    
    const filterProduct = product.filter(item => item.nomi.toLowerCase().includes(inpQiymat));
    
    renederShop(filterProduct); 
});
