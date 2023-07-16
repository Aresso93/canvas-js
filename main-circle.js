const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const c1 = new Circle(canvasWidth/2, canvasHeight/2, 80);


// function moveCircle(){
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//     c1.animate(canvasWidth, canvasHeight);
//     c1.draw(ctx);
//     requestAnimationFrame(moveCircle);
// }



const cirlceArray = [];

for (let i = 0; i < 6000; i++) {
    const circle = Circle.random(canvas.width, canvas.height);
    cirlceArray.push(circle);
}

//moveCircle();
    
function moveAll(){
    for (const circle of cirlceArray) {
        circle.animate(canvasWidth, canvasHeight);
        circle.draw(ctx);
    }
    requestAnimationFrame(moveAll);
}

requestAnimationFrame(moveAll);