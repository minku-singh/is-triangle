let angle = document.querySelectorAll(".angle");
let isTriangleBtn = document.querySelector("#is-triangle");
let output = document.querySelector("#output");
output.style.display = "none";

isTriangleBtn.addEventListener("click", handleIsTriangleBtnClick);

function calculateAngleSum(angle1, angle2, angle3){
    return (Number(angle1)+Number(angle2)+Number(angle3));
}

function handleIsTriangleBtnClick(){
    output.style.display = "block";
    let angleSum = calculateAngleSum(angle[0].value, angle[1].value, angle[2].value);
    if(angleSum === 180){
        output.style.color = "green";
        output.innerText = "✔ Yups.. it's a triangle!";
    }else{
        output.style.color = "red";
        output.innerText = "❌ No.. it's not a triangle!";
    }
}
