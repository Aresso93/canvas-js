class Rect{

    constructor(originX, originY, width, height, color = '#000000'){

        this.originX = originX;
        this.originY = originY;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.originX, this.originY, this.width, this.height);
    }

    static random(canvasWidth, canvasHeight){

        const randomRed = Math.floor(256 * Math.random());
        const randomGreen = Math.floor(256 * Math.random());
        const randomBlue = Math.floor(256 * Math.random());

        const rgbString = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, ${Math.random()})`;

        const randomWidth = 500 * Math.random();
        const randomHeight = 500 * Math.random();

        const randomX = (canvasWidth - randomWidth) * Math.random();
        const randomY = (canvasHeight - randomHeight) * Math.random();

        const newRect = new Rect(randomX, randomY, randomWidth, randomHeight, rgbString);
        return newRect;
    }

}

//se faccio rgba come formato per il colore, posso anche impostare una trasparenza con la a, che va da 0 a 1. Per questo nel mio codice l'ho resa con Math.random(), che già fa da 0 a 1 come coefficiente