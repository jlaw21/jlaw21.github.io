/**
 * Created by burksmic000 on 4/12/2017.
 */
function Fly(){
    tFly = new Sprite(scene, "goomba.png", 20,20);
    flySpeed = (Math.random()*15) +5;
    tFly.setSpeed(flySpeed);
    tFly.wiggle = function(){
        //change direction by some random amount
        newDir = (Math.random()*90)-45;
        //changing this instance of fly to random angle
        this.changeAngleBy(newDir);
    };
    return tFly;
}
function Frog(){
    tFrog = new Sprite(scene, 'bowser.png', 70, 70);
    tFrog.setSpeed(0);
    tFrog.setAngle(0);
    tFrog.maxSpeed = 10;
    tFrog.minSpeed = -3;
    tFrog.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.changeAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.changeSpeedBy(1);
            if(this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            }
        }
        if(keysDown[K_DOWN]){
            this.changeSpeedBy(-1);
            if(this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);}

        }
    };
    return tFrog;
}
