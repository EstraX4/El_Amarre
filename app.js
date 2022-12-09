function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que SÍ. Casemonos ya y tengamos hijos. TE AMO!!!! ❤️');

    divModoSexo.style.display = 'block';
    const cancion = new Audio('img\\modo_hot.mp3');
    cancion.play();
});

divModoSexo.addEventListener('click', function(e) {
    const img = document.createElement("img");
    img.src = "https://i.pinimg.com/originals/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.png";
    console.log(img)
    divModoSexo.appendChild(img)
});

botones = document.getElementsByTagName("button")
console.log(botones)

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
});