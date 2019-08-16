/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed =speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };
    this.speed = 10;

    this.moveRight = function(){
        this.left += this.speed;
        console.log('right: ' + this.left);
    };
    this.moveLeft = function () {
        this.left -= this.speed;
        console.log('left: ' + this.left);
    };
    this.moveDown = function () {
        this.top += this.speed;
        console.log('down: ' + this.top);
    };
    this.moveTop = function () {
        this.top -= this.speed;
        console.log('top: ' + this.top);
    };

};

let hero = new Hero('run.gif', 0,0, 200);

function start(){
    if ((hero.left < window.innerWidth - hero.size) && (hero.top == 0 )) {
        hero.moveRight();
    }else if ((hero.top < window.innerHeight - hero.size) && (hero.left >= window.innerWidth - hero.size)){
        hero.moveDown();
    }else if ((hero.left >  0 ) && (hero.top >= window.innerHeight - hero.size)) {
        hero.moveLeft();
    }else if ((hero.top > 0 ) && (hero.left == 0 )) {
        hero.moveTop();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10);
}
start();
