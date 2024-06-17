let xBolinha = 300;
let yBolinha = 200;
let VelocidadeXBolinha = 6;
let VelocidadeYBolinha = 6;
let Diametro = 20;
let Raio = Diametro/2;
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;
let xOponenteRaquete = 585;
let yOponenteRaquete = 150;
let velocidadeYOponente;
let Pontos = 0;
let PontosOponente = 0;
let ponto;
let raquetada;
let trilha;

function preload(){
  trilha = loadSound("84 - The End Begins.mp3");
  ponto = loadSound("ponto.mp3");
 raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
   trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha()  ;
  movBolinha () ;
  verificaçãoColisao() ;
  mostrarRaquete(xOponenteRaquete, yOponenteRaquete);
  mostrarRaquete(xRaquete, yRaquete);
  movimentoRaquete();
  colisaoRaquete() ;
  movimentoRaqueteOponente();
  colisaoOponenteRaquete();
  incluirPlacar();
   marcaPonto();
}
function mostraBolinha(){
  circle(xBolinha, yBolinha, Diametro);
}

function movBolinha () {xBolinha += VelocidadeXBolinha
 yBolinha += VelocidadeYBolinha};

function verificaçãoColisao(){
  if (xBolinha + Raio > width || xBolinha - Raio < 0){
    VelocidadeXBolinha *= -1;
   }
  if (yBolinha + Raio > height || yBolinha - Raio < 0){
   VelocidadeYBolinha *= -1;
   }
}
 function mostrarRaquete(x,y){
rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentoRaquete() {
  if (keyIsDown(UP_ARROW)){
  yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
  yRaquete += 10; }
   //if (keyIsDown(LEFT_ARROW)){
  //xRaquete -= 10;
 //}
   // if (keyIsDown(RIGHT_ARROW)){
  //xRaquete += 10 }
}
function colisaoRaquete(){
  if (xBolinha - Raio < xRaquete + larguraRaquete && yBolinha - Raio < yRaquete + alturaRaquete && yBolinha + Raio > yRaquete){
    VelocidadeXBolinha *= -1;
    raquetada.play();
   }
}
  function movimentoRaqueteOponente() {
    velocidadeYOponente = yBolinha -  yOponenteRaquete - larguraRaquete / 2 - 30;
   yOponenteRaquete += velocidadeYOponente;
}
function colisaoOponenteRaquete(){
  if (xBolinha - Raio + 7 > xOponenteRaquete - larguraRaquete && yBolinha - Raio < yOponenteRaquete + alturaRaquete && yBolinha + Raio > yOponenteRaquete){
    VelocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function incluirPlacar(){
 stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(Pontos, 170, 26)
  fill(color(255,140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(PontosOponente, 470, 26)
}
function marcaPonto(){
  if(xBolinha > 590){
    Pontos += 1;
    ponto.play();
  }
    if(xBolinha < 10){
    Pontos += 1;
      ponto.play();
  }
}
