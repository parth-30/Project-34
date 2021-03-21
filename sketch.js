const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;


function preload() {
//preload the images here

}

function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(3000, 800);
  
  // create sprites here



}

function draw() {
  background(0);

}

