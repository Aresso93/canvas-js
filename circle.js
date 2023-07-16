class Circle{

    constructor(originX, originY, radius, color = 'black'){

        this.originX = originX;
        this.originY = originY;
        this.radius = radius;
        this.color = color;
        this.velocityX = 100 //(2 * Math.random()) - 1;
        this.velocityY = 100 //(2 * Math.random()) - 1;
    }

    animate(canvasWidth, canvasHeight) {
        if (Math.random() > 0.99) {
            this.velocityX = (2 * Math.random()) - 1;
        }
    
        if (Math.random() > 0.99) {
            this.velocityY = (2 * Math.random()) - 1;
        }
    
        const nextX = this.originX + this.velocityX;
        const nextY = this.originY + this.velocityY;
    
        if (nextX + this.radius >= canvasWidth) {
            this.originX = canvasWidth - this.radius;
            this.velocityX = -Math.abs(this.velocityX);
        } else if (nextX - this.radius <= 0) {
            this.originX = this.radius;
            this.velocityX = Math.abs(this.velocityX);
        } else {
            this.originX += this.velocityX;
        }
    
        if (nextY + this.radius >= canvasHeight) {
            this.originY = canvasHeight - this.radius;
            this.velocityY = -Math.abs(this.velocityY);
        } else if (nextY - this.radius <= 0) {
            this.originY = this.radius;
            this.velocityY = Math.abs(this.velocityY);
        } else {
            this.originY += this.velocityY;
        }
    }
    

    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = this.color;
        ctx.arc(this.originX, this.originY, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }


    static random(canvasWidth, canvasHeight){

        const randomRed = Math.floor(256 * Math.random());
        const randomGreen = Math.floor(256 * Math.random());
        const randomBlue = Math.floor(256 * Math.random());

        const rgbString = 'rgba(' + randomRed + ', ' + randomGreen + ', ' + randomBlue + ', ' + Math.random() + ')'

        const randomWidth = 200 * Math.random();
        const randomHeight = 200 * Math.random();

        const randomX = (canvasWidth  - randomWidth) * Math.random();
        const randomy = (canvasHeight - randomHeight) * Math.random();

        const newCircle = new Circle(canvasWidth/2, canvasHeight/2, 50, rgbString);

        return newCircle;

    }




}

// ctx.arc(canvas.width/2, canvas.height/2, 200, 0, 2 * Math.PI, true); 