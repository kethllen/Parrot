let numeroDeCartas = 0;

while(numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !==0){
   numeroDeCartas = parseInt(prompt("Com quantas cartas você quer jogar?(Escolha um número entre 4 e 14 cartas e que seja par)"));
}

function virarcarta(carta){
    //if(carta.classList.contains("front-face")){
        carta.classList.add("cardVirar");
    //}
    

}

function darCartas(){
    const card = document.querySelector("main");
    for(let i=0; i<numeroDeCartas; i++){

        card.innerHTML = card.innerHTML +  `
        <div class="card" data-identifier="card">
            <div class="front-face face" data-identifier="front-face" onclick="virarcarta(this)">
                <div class="piriquito" >
                </div>
            </div>
            <div class="back-face face" data-identifier="back-face" onclick="virarcarta(this)">
                <img class="imagem" src="../assets/bobrossparrot.gif">
            </div>
        </div>`;

    }
}

darCartas();


