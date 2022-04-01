const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;

var solo;
var paredeEsquerda;
var paredeDireita;
var teto;
var bola;

var btn1;
var btn2;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    solo = new Parede(200, 390, 400, 20);

    paredeEsquerda = new Parede(0, 200, 20, 400);


  /*  botao = createImg();
    botao.position();
    botao.size();
    botao.mouseClicked();
*/
    ellipseMode(RADIUS);
    rectMode(CENTER);

}

function draw() {
    background("cyan");

    solo.show();
    paredeEsquerda.show();

    

    Engine.update(engine);
}