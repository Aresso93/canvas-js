const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext("2d");



function createArt() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 200; i++) {
    const r1 = Rect.random(canvas.width, canvas.height);

    r1.draw(ctx);
    //per ogni giro crea un rettangolo e lo disegna, quindi fa 1000 rettangoli random
  }
}

//questa qui sotto ne fa uno per volta e va avanti all'infinito

setInterval(createSingleArt, 1000);


function createSingleArt() {
    
      const r1 = Rect.random(canvas.width, canvas.height);
  
      r1.draw(ctx);
      //per ogni giro crea un rettangolo e lo disegna, quindi fa 1000 rettangoli random
    }