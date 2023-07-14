console.log('TATSUMAKI');

// console.log(canvas);

// const canvasCollection = document.getElementsByClassName('my-canvas')  //questo mi fetcha una sorta di array di elementi con la classe che ho dato loro

// console.log(canvasCollection);

// const canvasA = canvasCollection[0]; 

//per avere la canvas che voglio dentro a quello pseudo array, devo dirgli che voglio l'indice 0 (in questo caso)

//esiste pure getElementsByTagName. Ma sono tutte cose che non useremo mai

// const canvasC = document.querySelector('.my-canvas');

// const canvasD = document.querySelector('#canvas1');

// const canvasE = document.querySelector('canvas');

//querySelector mi permette di fetchare l'elemento immettendo la sua classe/ID ecc. come farei in CSS. Quindi col punto per la classe, con # per ID ecc.

//questo me ne dà uno. Se voglio una collection, devo fare così:

// const canvasCollection3 = document.querySelectorAll('.my-canvas');


const canvas = document.getElementById('canvas1');

// console.log(canvas.width);
// console.log(canvas.height);

//se metto da CSS le dimensioni, ottengo una canvas con la dimensione che ho detto io MA con pixel stretchati.
//per avere una canvas non stretchata con le dimensioni che effettivamente gli ho dato, devo metterla in HTML

const ctx = canvas.getContext('2d');

//rect(x, y, width, height) questa è la sintassi per fare un rettangolo. Vuole le coordinate di un punto di origine e poi le dimensioni


// ctx.rect(10, 10, 100, 100);

// ctx.rect(canvas.width-110, canvas.height-110, 100, 100);

// ctx.rect(10, canvas.height-110, 100, 100);

// ctx.rect(canvas.width-110, 10, 100, 100);

// ctx.fill()

//ctx.fillStyle = '#ff0000';
//
//ctx.strokeStyle = '#00ff00';
//
//ctx.lineWidth = '60';
//
//ctx.fillRect(10, 10, 100, 100);
//
//ctx.strokeRect(200, 200, 100, 100);   //stroke gli dà il bordo, fill il riempimento
//
//ctx.clearRect(50, 50, 20, 20);       //questa è la gomma di Paint: rimuove una porzione rettangolare alle coordinate scelte

//funziona perché l'ho chiamato per ultimo

// ctx.beginPath();
// ctx.arc(canvas.width/2, canvas.height/2, 200, 0, 2 * Math.PI, true);                                   //la width e la height / 2 indicano che siamo al centro

// ctx.fill();

//il booleano alla fine (facoltativo) indica se è disegnato in senso orario o anti-orario
//l'elemento dopo i primi due è il raggio, poi lo starting angle e poi l'ending angle

ctx.beginPath();

ctx.moveTo(50, 50);

ctx.lineTo(100, 100);

ctx.lineTo(50, 150);

ctx.lineTo(50,50);

ctx.fill();