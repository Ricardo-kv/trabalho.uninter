let botao = document.querySelector("#botao");
let boasvindas = document.querySelector("#boasvindas");
boasvindas.style.color="rgb(214, 240, 253)";
botao.addEventListener("click",mudablack);
mudacor.style.color="black"
mudacor.addEventListener("mouseover",mudared);
mudacor.addEventListener("mouseout",black);
function mudablack() {
    boasvindas.style.color="black";
}
function mudared(){
    mudacor.style.color="red";
}
function black() {
    mudacor.style.color="black";
    }
   