const student = JSON.parse(localStorage.getItem("user"));
const infoStudentBox = document.querySelector(".student__wrapper")
const logout = document.querySelector(".reset");
const studentShop = document.querySelector("#shop");

if(student){
    infoStudentBox.innerHTML = 
    `
    
    <img src="./images/Frame 36614.png">
    <h2>${student.name}</h2>
    <h3>${student.surname}</h3>
    <p>ID: ${student.id}</p>
    <p>Group: ${student.group}</p>
    <p><img src="./images/coin.png" class="coin"> ${student.coin} </p>
    <p>Teacher: ${student.teacher}</p>
    <p> <img src="./images/hp.png" class="hp"> ${student.hp} </p>
    
    
    `
    document.querySelector(".logout").addEventListener("click", ()=>{
        localStorage.removeItem("user");
        window.location.href = "./index.html"
    })
}
document.querySelector(".logout").addEventListener("click", ()=>{
    localStorage.removeItem("user");
    window.location.href = "./shop.html"
})

studentShop.addEventListener("click", ()=>{
    window.location.href = "./shop.html"
})

