var scene;
var character;
var NUMKNIGHTS = 8;
var NUMKNIGHTS2 = 5;
var NUMCROWS = 5;
var NUMWOLVES = 2;
var NUMWOLVES2 = 2;
var NUMSPIDERS = 8;
var background;
var block;
var block1;
var block2;
var block3;
var block4;
var block5;
var crown;
var win;
var lose;
var timer;
var time;
var ladder;
var ladder2;
var ladder3;
var ladder4;
var ladder5;

function init() {

    timer = new Timer();

    scene = new Scene();
    scene.setBG("black");

    block = new Block();
    block.setPosition(scene.width/2,590);
    block1 = new Block1();
    block1.setPosition(scene.width/2,490);
    block2 = new Block2();
    block2.setPosition(scene.width/2,390);
    block3 = new Block3();
    block3.setPosition(scene.width/2,290);
    block4 = new Block4();
    block4.setPosition(scene.width/2,190);
    block5 = new FinalBlock();
    block5.setPosition(700,90);

    ladder = new Sprite(scene, "Ladder.png", 70, 90);
    ladder.setPosition(700, 540);
    ladder.setSpeed(0);
    ladder2 = new Sprite(scene, "Ladder.png", 70, 90);
    ladder2.setPosition(100, 440);
    ladder2.setSpeed(0);
    ladder3 = new Sprite(scene, "Ladder.png", 70, 90);
    ladder3.setPosition(700, 340);
    ladder3.setSpeed(0);
    ladder4 = new Sprite(scene, "Ladder.png", 70, 90);
    ladder4.setPosition(100, 240);
    ladder4.setSpeed(0);
    ladder5 = new Sprite(scene, "Ladder.png", 70, 90);
    ladder5.setPosition(700, 140);
    ladder5.setSpeed(0);

    crown = new Sprite(scene, "Crown.png", 30, 30);
    crown.setPosition(700, 60);
    crown.setSpeed(0);

    win = new Sprite(scene, "Win.png", 500, 500);
    win.setPosition(scene.width/2, scene.height/2);
    win.setSpeed(0);

    lose = new Sprite(scene, "GameOver.png", 500, 500);
    lose.setPosition(scene.width/2, scene.height/2);
    lose.setSpeed(0);

    background = new Sprite(scene, "CastleWall.png", 800, 600);
    background.setSpeed(0);
    background.setPosition(scene.width/2, scene.height/2);
    character = new Character();

    setupKnights();
    setupKnights2();
    setupCrows();
    setupWolves();
    setupWolves2();
    setupSpiders();

    scene.start();

}

function Character() {

    tCharacter = new Sprite(scene, "Knight.png", 30, 30);
    tCharacter.setSpeed(0);
    tCharacter.setAngle(90);
    tCharacter.setPosition(scene.width/2, 590);

    tCharacter.checkKeys = function () {

        if(character.collidesWith(ladder)){

            character.setPosition(this.x, this.y);
            if(keysDown[K_UP]){
                character.setPosition(this.x, block1.y - (block1.height / 1.9))
            }
        }

        if(character.collidesWith(ladder2)){

            character.setPosition(this.x, this.y);
            if(keysDown[K_UP]){
                character.setPosition(this.x, block2.y - (block2.height / 1.9))
            }

        }

        if(character.collidesWith(ladder3)){

            character.setPosition(this.x, this.y);
            if(keysDown[K_UP]){
                character.setPosition(this.x, block3.y - (block3.height / 1.9))
            }

        }

        if(character.collidesWith(ladder4)){

            character.setPosition(this.x, this.y);
            if(keysDown[K_UP]){
                character.setPosition(this.x, block4.y - (block4.height / 1.9))
            }
        }

        if(character.collidesWith(ladder5)){

            character.setPosition(this.x, this.y);
            if(keysDown[K_UP]){
                character.setPosition(this.x, block5.y - (block5.height / 1.9))
            }
        }

        if (keysDown[K_LEFT]) {
            this.changeXby(-5);
        }
        if (keysDown[K_RIGHT]) {
            this.changeXby(5);
        }

        if (keysDown[K_SPACE]) {
            if (character.collidesWith(block)) {
                character.changeYby(-40)
            }
            if (character.collidesWith(block1)) {
                character.changeYby(-45)
            }
            if (character.collidesWith(block2)) {
                character.changeYby(-45)
            }
            if (character.collidesWith(block3)) {
                character.changeYby(-45)
            }
            if (character.collidesWith(block4)) {
                character.changeYby(-45)
            }
            if (character.collidesWith(block5)) {
                character.changeYby(-45)
            }
        }

    };

    tCharacter.checkGravity = function() {
        cBottom = character.y + (character.height / 2);

        if(character.collidesWith(block5)){

            bTop1 = block5.y - (block5.height / 2);

            if (cBottom >= bTop1) {

                character.setPosition(this.x, bTop1 - block5.height / 1.3);
                character.addVector(0, .03);

            }
        }

        if(character.collidesWith(block4)){

            bTop2 = block4.y - (block4.height / 2);

            if (cBottom >= bTop2) {

                character.setPosition(this.x, bTop2 - block4.height / 1.3);
                character.addVector(0, .03);

            }
        }

        if(character.collidesWith(block3)){

            bTop3 = block3.y - (block3.height / 2);

            if (cBottom >= bTop3) {

                character.setPosition(this.x, bTop3 - block3.height / 1.3);
                character.addVector(0, .03);

            }
        }

        if(character.collidesWith(block2)){

            bTop4 = block2.y - (block2.height / 2);

            if (cBottom >= bTop4) {

                character.setPosition(this.x, bTop4 - block2.height / 1.3);
                character.addVector(0, .03);

            }
        }

        if(character.collidesWith(block1)){

            bTop5 = block1.y - (block1.height / 2);

            if (cBottom >= bTop5) {

                character.setPosition(this.x, bTop5 - block1.height / 1.3);
                character.addVector(0, .03);

            }
        }


        if(character.collidesWith(block)) {

            bTop6 = block.y - (block.height / 2);

            if (cBottom >= bTop6) {

                character.setPosition(this.x, bTop6 - block.height / 2);
                character.addVector(0, .03);

            }
        }


        else{
            character.addVector(180, .03)
        }

    };

    return tCharacter;

}

function Block() {

    tBlock = new Sprite(scene, "block.png", 800, 30);

    tBlock.setSpeed(0);

    return tBlock;

}
function Block1() {

    tBlock = new Sprite(scene, "block.png", 800, 20);

    tBlock.setSpeed(0);

    return tBlock;

}
function Block2() {

    tBlock = new Sprite(scene, "block.png", 800, 20);

    tBlock.setSpeed(0);

    return tBlock;

}

function Block3() {

    tBlock = new Sprite(scene, "block.png", 800, 20);

    tBlock.setSpeed(0);

    return tBlock;

}

function Block4() {

    tBlock = new Sprite(scene, "block.png", 800, 20);

    tBlock.setSpeed(0);

    return tBlock;

}
function FinalBlock() {

    tBlock = new Sprite(scene, "block.png", 80, 20);

    tBlock.setSpeed(0);

    return tBlock;

}

function Knight() {

    tKnight = new Sprite(scene, "BlackKnight.png", 30, 30);
    tKnight.setPosition(Math.random()*100, 560);
    knightSpeed = Math.random()*5;
    tKnight.setSpeed(knightSpeed);

    return tKnight;

}

function setupKnights() {

    knights = new Array(NUMKNIGHTS);

    for (i = 0; i < NUMKNIGHTS; i++) {

        knights[i] = new Knight();

    }
}

function Knight2() {

    tKnight = new Sprite(scene, "BlackKnight2.png", 70, 70);
    tKnight.setPosition(Math.random()*1000, 145);
    tKnight.setSpeed(Math.random()*4.5);

    return tKnight;

}

function setupKnights2() {

    knights2 = new Array(NUMKNIGHTS2);

    for (i = 0; i < NUMKNIGHTS2; i++) {

        knights2[i] = new Knight2();

    }
}

function Crow() {

    tCrow = new Sprite(scene, "Crow.png", 20, 20);
    tCrow.setPosition(Math.random()*1000, 460);
    crowSpeed = Math.random()*-10;
    tCrow.setSpeed(crowSpeed);

    return tCrow;

}

function setupCrows() {

    crows = new Array(NUMCROWS);

    for (i = 0; i < NUMCROWS; i++) {

        crows[i] = new Crow();

    }
}

function Wolf() {

    tWolf = new Sprite(scene, "Wolf.png", 30, 30);
    tWolf.setPosition(Math.random()*1000, 365);
    wolfSpeed = Math.random()*-6;
    tWolf.setSpeed(wolfSpeed);

    return tWolf;

}

function setupWolves() {

    wolves = new Array(NUMWOLVES);

    for (i = 0; i < NUMWOLVES; i++) {

        wolves[i] = new Wolf();

    }
}

function Wolf2() {

    tWolf = new Sprite(scene, "Wolf.png", 30, 30);
    tWolf.setPosition(Math.random()*1000, 365);
    wolfSpeed = Math.random()*6;
    tWolf.setSpeed(wolfSpeed);

    return tWolf;

}

function setupWolves2() {

    wolves2 = new Array(NUMWOLVES);

    for (i = 0; i < NUMWOLVES; i++) {

        wolves2[i] = new Wolf2();

    }
}

function Spider() {

    tSpider = new Sprite(scene, "Spider.png", 30, 30);
    tSpider.setPosition(Math.random()*1000, 270);
    spiderSpeed = Math.random()*6;
    tSpider.setSpeed(spiderSpeed);

    return tSpider;

}

function setupSpiders() {

    spiders = new Array(NUMSPIDERS);

    for (i = 0; i < NUMSPIDERS; i++) {

        spiders[i] = new Spider();

    }
}

function checkTime() {

    time = timer.getElapsedTime();

}

function updateTime() {

    document.getElementById("time").innerHTML = "Time Elapsed : " + Math.ceil(time) + " Seconds";

}

function update(){

    scene.clear();

    checkTime();
    updateTime();

    background.update();

    block.update();
    block1.update();
    block2.update();
    block3.update();
    block4.update();
    block5.update();

    crown.update();

    ladder.update();
    ladder2.update();
    ladder3.update();
    ladder4.update();
    ladder5.update();

    character.checkKeys();
    character.checkGravity();
    character.update();

    function knightHit(enemyNum) {
        if (character.collidesWith(knights[enemyNum])) {
            lose.update();
            scene.stop();
        }
    }

    function crowHit(enemyNum) {
        if (character.collidesWith(crows[enemyNum])) {
            lose.update();
            scene.stop();
        }
    }

    function wolfHit(enemyNum) {
        if (character.collidesWith(wolves[enemyNum])) {
            lose.update();
            scene.stop();
        }
    }

    function wolfHit2(enemyNum) {
        if (character.collidesWith(wolves2[enemyNum])) {
            lose.update();
            scene.stop();
        }
    }

    function spiderHit(enemyNum) {
        if (character.collidesWith(spiders[enemyNum])) {
            lose.update();
            scene.stop();
        }
    }

    function knightHit2(enemyNum) {
        if (character.collidesWith(knights2[enemyNum])) {
            lose.update();
            scene.stop();
        }
    }

    for (i = 0; i < NUMKNIGHTS; i++) {
        knightHit(i);
        knights[i].update();
    }

    for (i = 0; i < NUMKNIGHTS2; i++) {
        knightHit2(i);
        knights2[i].update();
    }

    for (i = 0; i < NUMCROWS; i++) {
        crowHit(i);
        crows[i].update();
    }

    for (i = 0; i < NUMWOLVES; i++) {
        wolfHit(i);
        wolves[i].update();
    }

    for (i = 0; i < NUMWOLVES2; i++) {
        wolfHit2(i);
        wolves2[i].update();
    }

    for (i = 0; i < NUMSPIDERS; i++) {
        spiderHit(i);
        spiders[i].update();
    }

    if(character.collidesWith(crown)){
        win.update();
        scene.stop();
    }

}

function restart() {

    document.location.href = "";

}

$( document ).click(function() {
    $( "#controls, #description" ).toggle( "fade" );
    $( "h1" ).toggleClass("title");
    $( "h2" ).toggleClass("title");
    $("body").toggleClass("body");
    $("#time").toggleClass("time");
});
