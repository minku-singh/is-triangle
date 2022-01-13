let base = document.querySelector("#base");
let height = document.querySelector("#height");
let findAreaBtn = document.querySelector("#find-btn");
let output = document.querySelector("#output");
output.style.display = "none";

findAreaBtn.addEventListener("click", handleBtnClick);

function handleBtnClick(){
    let area = findArea(base.value, height.value);
    output.style.display = "block";
    output.innerText = `Area of the triangle : ${area} cm²`
}

function findArea(b, h){
    return ((1/2)*b*h);
}