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


  
    ellipseMode(RADIUS);
    rectMode(CENTER);

}

function draw() {
    background("cyan");

    

    Engine.update(engine);
}
