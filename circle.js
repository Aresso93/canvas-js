class Circle{

    constructor(originX, originY, radius, color = 'black'){

        this.originX = originX;
        this.originY = originY;
        this.radius = radius;
        this.color = color;
        this.velocityX = 1;
        this.velocityY = 1;
    }

    animate(){

         this.velocityX = 2 * Math.random() -1;
        this.velocityY = 2 * Math.random() -1;          

        if (Math.random() > 0.98){
            this.velocityX = (2 * Math.random()) -1;
        } 

        if (Math.random() > 0.98){
            this.velocityY = (2 * Math.random()) -1;
        }
    }


    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = this.color;
        ctx.arc(this.originX, this.originY, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }







}

// ctx.arc(canvas.width/2, canvas.height/2, 200, 0, 2 * Math.PI, true); 