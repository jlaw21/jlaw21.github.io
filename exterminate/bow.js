function Goombas(){
    tGoombas = new Sprite(scene, "flygoomba.png", 20, 20);
    goombasSpeed = (Math.random()*15) + 5;
    tGoombas.setSpeed(goombasSpeed);
    tGoombas.wiggle = function(){
        newDir = (Math.random() * 90) - 45;
        this.changeAngleBy(newDir);
    };
    return tGoombas;
}
function Bowser() {

    tBowser = new Sprite(scene, "bowser.png", 80, 80);
    tBowser.setSpeed(0);
    tBowser.setAngle(90);
    tBowser.maxSpeed = 7;
    tBowser.minSpeed = -7;
    tBowser.checkKeys = function () {

        if(keysDown[K_LEFT]){
            this.changeSpeedBy(-1);
            if(this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);}
        }
        if(keysDown[K_RIGHT]){
            this.changeSpeedBy(1);
            if(this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            }
        }
    };
    return tBowser;
}
function Peach() {

    tPeach = new Sprite(scene, "peach.png", 50, 50);
    tPeach.setSpeed(0);
    tPeach.setAngle(90);
    tPeach.maxSpeed = 0;
    tPeach.minSpeed = 0;
    tPeach.checkKeys = function () {

        if(keysDown[K_LEFT]){
            this.changeSpeedBy(-1);
            if(this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);}
        }
        if(keysDown[K_RIGHT]){
            this.changeSpeedBy(1);
            if(this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            }
        }
    };
    return tPeach;
}
function Daisy() {

    tDaisy = new Sprite(scene, "Daisy.png", 50, 50);
    tDaisy.setSpeed(0);
    tDaisy.setAngle(90);
    tDaisy.maxSpeed = 0;
    tDaisy.minSpeed = 0;
    tDaisy.checkKeys = function () {

        if(keysDown[K_LEFT]){
            this.changeSpeedBy(-1);
            if(this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);}
        }
        if(keysDown[K_RIGHT]){
            this.changeSpeedBy(1);
            if(this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            }
        }
    };
    return tDaisy;
}
var scene;
var bowser;
var peach;
var daisy;
var Theme;
var NUMGOOMBAS = 30;
var MAXTIME = 60;
var MAXHEALTH = 1;
var MAXGOOMBAS = 1;
var goom = 30;
var timer;
var time;
var hits = 0;
var health=20;

function setupGoombas(){
    goombas = new Array(NUMGOOMBAS);

    for(i = 0; i < NUMGOOMBAS; i++) {
        goombas[i] = new Goombas();
    }

}

function init(){
    timer = new Timer();
    scene = new Scene();
    scene.setSizePos(1160,540,0,0);
    scene.setBG("RGBA(0, 0, 0, 0.9)");
    bowser = new Bowser();
    bowser.setPosition(scene.height/1,scene.width/4.2);
    peach = new Peach();
    peach.setPosition(scene.height/2,scene.width/4.2);
    daisy = new Daisy();
    daisy.setPosition(scene.height/8,scene.width/4.2);
    Theme = new Sprite(scene, "map.png",1920,820);
    setupGoombas();
    Theme.setSpeed(0);
    scene.start();
}

function update(){
    scene.clear();
    checkTime();
    bowser.checkKeys();
    peach.checkKeys();
    daisy.checkKeys();
    Theme.update();
    bowser.update();
    peach.update();
    daisy.update();
    for(i = 0; i < NUMGOOMBAS; i++) {
        goombas[i].wiggle();
        checkCollisions(i);
        goombas[i].update();
    }
}

function checkCollisions(goombaNum){

    if(bowser.collidesWith(goombas[goombaNum])){

        goombas.splice(goombaNum, 1);
        hits += 2;
        goom -= 1;
    }
    updateScore();

    if(peach.collidesWith(goombas[goombaNum])){
        goombas.splice(goombaNum, 1);
        health -= 1;
        goom -= 1;
    }
    updateScore();
    if(daisy.collidesWith(goombas[goombaNum])){
        goombas.splice(goombaNum, 1);
        health -= 1;
        goom -=1;
    }
    updateScore();
}

function restart(){

    document.location.href="";

}

function checkTime() {

    time = timer.getElapsedTime();

    if (time > MAXTIME) {
        scene.stop();
        alert("Out Of Time...I've Seen My Grandma Move Quicker Than That!!!")
    }
    if (health < MAXHEALTH){
        scene.stop();
        alert("Princesses Were Harassed To Much...You Must Not Be The Hero Your Mom Said You Could Be!!!")
    }
    if (goom < MAXGOOMBAS){
        scene.stop();
        alert("Winner!!!...Ehh Seems You Have Defeated The Goombas But Can You Do It Again Or Are You Just A Lucky Winner?")
    }
}

function updateScore(){

    document.getElementById("scoreboard").innerHTML = "Score: " + hits + "    Health: " + health + "   Time: " + Math.ceil(MAXTIME-time);

}
function hide() {
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("again").style.visibility = "visible";
}
function hideT() {
    document.getElementById("again").style.visibility = "hidden";
}

