let numeroDeCartas = 0;
let qntPares = 0;
let baralhoAtual = [];
let contador =0;
let carta1;
let carta2;
let pares=0;
let jogadas =0;
let minuto = 0;
let segundo = 0;
let milisegundo = 0;
let cron;
let inicio = false;

while(numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !==0){
   numeroDeCartas = parseInt(prompt("Com quantas cartas você quer jogar?(Escolha um número entre 4 e 14 cartas e que seja par)"));
}

const baralho = ["./assets/bobrossparrot.gif", "./assets/explodyparrot.gif", "./assets/fiestaparrot.gif","./assets/metalparrot.gif","./assets/revertitparrot.gif","./assets/tripletsparrot.gif","./assets/unicornparrot.gif"]

 // Após esta linha, a minhaArray estará embaralhada
// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}
function timer() {
    if ((milisegundo += 10) == 1000) {
      milisegundo = 0;
      segundo++;
    }
    if (segundo == 60) {
      segundo = 0;
      minuto++;
    }
    let min = document.querySelector('.minuto');
    let seg = document.querySelector('.segundo');
    min.innerHTML = returnDado(minuto);
    seg.innerHTML = returnDado(segundo);
}
function returnDado(input) {

    let dado="";
    if(input < 10){
        dado=`0${input}`;
    }else{
        dado = input;
    }

    return dado;
}

function start() {

    cron = setInterval(() => { timer(); }, 10);
}

function pause() {

    clearInterval(cron);
}

baralho.sort(comparador);
qntPares = numeroDeCartas/2;
baralhoAtual = baralho.slice(0, qntPares);
baralhoAtual = baralhoAtual.concat(baralhoAtual);
baralhoAtual.sort(comparador);

function virarCartaBaixo(carta){
    const card = carta.parentNode;
    if(card.classList.contains("cardVirarCima")){
        card.classList.remove("cardVirarCima")
    }
    card.classList.add("cardVirarBaixo");
    if(inicio == false){
        inicio =true;
        start();
    }
    jogadas++;
    contador++;
    if(contador == 1){
        carta1=card;
    }
    if(contador == 2){
        carta2=card;
        verificarPar();
    }
}
function virarCartaCima(){

    carta1.classList.remove("cardVirarBaixo");
    carta2.classList.remove("cardVirarBaixo");
    carta1.classList.add("cardVirarCima");
    carta2.classList.add("cardVirarCima");
}

function verificarSeGanhou(){

    if(pares == (numeroDeCartas/2)){
        pause();
        let acabou = document.querySelector(".escondida");
        acabou.classList.remove("escondida");
        fimJogo();
    }
}

function fimJogo(){

    let ganhou = document.querySelector(".ganhou");
    let min = document.querySelector('.minuto');
    let seg = document.querySelector('.segundo');
    ganhou.innerHTML=`Você ganhou em ${jogadas} jogadas! E em ${min.textContent}:${seg.textContent}!`;    
}

// function jogar(){

//     let resposta = document.querySelector(".pegarresposta");
//     resposta = resposta.value;
//     if(resposta == "sim" || resposta == "Sim" ||resposta == "s"){
//         window.location.reload();
//     }
// }

function verificarPar(){
    
    let img1 = carta1.childNodes; //encontrando a div verso da carta
    img1 = img1[3].childNodes; // encontrando a div imagem 
    img1 = img1[1].getAttribute("src"); //acessando o atributo com o src da imagem a ser comparado
    let img2 = carta2.childNodes; //encontrando a div verso da carta
    img2 = img2[3].childNodes; // encontrando a div imagem 
    img2 = img2[1].getAttribute("src");

    if(img1==img2){ //é par
        pares++;
        contador = 0;
        carta1="";
        carta2="";
    }else{ //não é par
        setTimeout(() => {  virarCartaCima(); 
            contador = 0;
            carta1="";
            carta2="";}, 1000);

    }
    setTimeout(() => {  verificarSeGanhou();}, 1000);
}

function darCartas(){
    const card = document.querySelector("main");

    for(let i=0; i<numeroDeCartas; i++){
        card.innerHTML = card.innerHTML +  `
        <div class="card" data-identifier="card">
            <div class="front-face face" data-identifier="front-face" onclick="virarCartaBaixo(this)" >
                <div class="piriquito" >
                </div>
            </div>
            <div class="back-face face " data-identifier="back-face" >
                <img class="imagem" src=${baralhoAtual[i]}>
            </div>
        </div>`;
    }
}

darCartas();