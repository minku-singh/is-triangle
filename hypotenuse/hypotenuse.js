let a = document.querySelector("#a");
let b = document.querySelector("#b");
let findBtn = document.querySelector("#find-btn");
let output = document.querySelector("#output");

findBtn.addEventListener("click", handleFindBtnClick);

output.style.display = "none";
function handleFindBtnClick(){
    let hypo = calcHypo(a.value, b.value);
    output.style.display = "block";
    output.innerText = `Length of hypotenuse = ${hypo}`;
}

function calcHypo(a, b){
    let hypo;
    hypo = Math.pow((Math.pow(a, 2) + Math.pow(b, 2)), 1/2);
    return hypo;
}