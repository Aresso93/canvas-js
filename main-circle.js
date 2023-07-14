const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");

const c1 = new Circle(canvas.width/2, canvas.height/2, 200);

c1.draw(ctx);

function moveCircle(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    c1.animate();
    c1.draw(ctx);
}
    