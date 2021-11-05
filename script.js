let numeroDeCartas = 0;
let qntPares = 0;
let baralhoAtual = [];

while(numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !==0){
   numeroDeCartas = parseInt(prompt("Com quantas cartas você quer jogar?(Escolha um número entre 4 e 14 cartas e que seja par)"));
}

const baralho = ["./assets/bobrossparrot.gif", "./assets/explodyparrot.gif", "./assets/fiestaparrot.gif","./assets/metalparrot.gif","./assets/revertitparrot.gif","./assets/tripletsparrot.gif","./assets/unicornparrot.gif"]

 // Após esta linha, a minhaArray estará embaralhada
// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

function embaralhar(){
    baralho.sort(comparador);
    qntPares = numeroDeCartas/2;
    baralhoAtual = baralho.slice(0, qntPares);
    baralhoAtual = baralhoAtual.concat(baralhoAtual);
    baralhoAtual.sort(comparador);
}
function virarCartaBaixo(carta){
    const card = carta.parentNode;
    if(card.classList.contains("cardVirarCima")){
        card.classList.remove("cardVirarCima")
    }
    card.classList.add("cardVirarBaixo");
}
function virarCartaCima(carta){
    const card = carta.parentNode;
    if(card.classList.contains("cardVirarBaixo")){
        card.classList.remove("cardVirarBaixo")
    }
    card.classList.add("cardVirarCima");
}

function darCartas(){
    const card = document.querySelector("main");

    for(let i=0; i<numeroDeCartas; i++){
        embaralhar();
        card.innerHTML = card.innerHTML +  `
        <div class="card" data-identifier="card">
            <div class="front-face face" data-identifier="front-face" onclick="virarCartaBaixo(this)" >
                <div class="piriquito" >
                </div>
            </div>
            <div class="back-face face " data-identifier="back-face" onclick="virarCartaCima(this)">
                <img class="imagem" src=${baralhoAtual[i]}>
            </div>
        </div>`;
    }
}

darCartas();


