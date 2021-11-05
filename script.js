let numeroDeCartas = 0;
let qntPares = 0;
let baralhoAtual = [];
let contador =0;
let carta1="";
let carta2="";
let pares=0;
while(numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !==0){
   numeroDeCartas = parseInt(prompt("Com quantas cartas você quer jogar?(Escolha um número entre 4 e 14 cartas e que seja par)"));
}

const baralho = ["./assets/bobrossparrot.gif", "./assets/explodyparrot.gif", "./assets/fiestaparrot.gif","./assets/metalparrot.gif","./assets/revertitparrot.gif","./assets/tripletsparrot.gif","./assets/unicornparrot.gif"]

 // Após esta linha, a minhaArray estará embaralhada
// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
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
    contador++;
    if(contador == 1){
        carta1=card;
    }
    if(contador == 2){
        carta2=card;
        verificarPar();
    }
}
function virarCartaCima(carta){
    console.log("vou virar");
    console.log(carta);
    if(carta.classList.contains("cardVirarBaixo")){
        console.log("contem sim");
        carta.classList.remove("cardVirarBaixo");
        console.log(carta);
    }
    carta.classList.add("cardVirarCima");
    console.log(carta);
}
function verificarPar(){
    console.log("oi");
    
    let img1 = carta1.childNodes; //encontrando a div verso da carta
    img1 = img1[3].childNodes; // encontrando a div imagem 
    img1 = img1[1].getAttribute("src"); //acessando o atributo com o src da imagem a ser comparado
    let img2 = carta2.childNodes; //encontrando a div verso da carta
    img2 = img2[3].childNodes; // encontrando a div imagem 
    img2 = img2[1].getAttribute("src");

    if(img1==img2){
        pares++;
        console.log("par")
    }else{
        console.log("Naopar")
        virarCartaCima(carta1);
        virarCartaCima(carta2);
    }

    contador = 0;
    carta1="";
    carta2="";
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


