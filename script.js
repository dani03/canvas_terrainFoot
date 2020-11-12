const body = document.querySelector('body');
body.style.backgroundColor = '#fff';

const stade = document.querySelector('#canvas');
const context = stade.getContext('2d');

stade.width = 1000;
stade.height = 600;
context.fillStyle = 'green';
context.strokeStyle = 'white';
context.lineWidth = 3;

//dessiner le terrain vert
context.fillRect(0, 0, 1000, 600);
context.strokeRect(0, 0, 1000, 600);
context.fillRect(400, 30, 0, 300);


context.fillStyle = 'white';



//point de penalty gauche
point(80, 290, 3);

//arc corner haut
arcCorner(0, 10, 16);

//creer un point sur le terrain 
function point(positionEnLargeur, positionEnHauteur, taillePoint) {
  context.beginPath();
  context.arc(positionEnLargeur, positionEnHauteur, taillePoint, 0, Math.PI * 2, true);
  context.fill();
}
//arc corner bas
arcCorner(0, 600, 22);
function arcCorner(positionEnLargeur, positionEnHauteur, largeurDeArc) {
  context.beginPath();
  context.arc(positionEnLargeur, positionEnHauteur, largeurDeArc, 20, Math.PI * 2, true);
  context.stroke();

}
// mediane 
(function(){
  context.beginPath();
  context.moveTo(500, 0);
  context.lineTo(500, 600);
  context.stroke();
})();
//cercle centrale
context.beginPath();
context.arc(500, 290, 100, 30, Math.PI * 2, true);
context.stroke();

//point centrale
point(500, 290, 5);

// dessiner la petite surface de reparation
context.beginPath();
context.moveTo(0, 230);
context.lineTo(40, 230);
context.lineTo(40, 350);
context.lineTo(0, 350);
context.closePath();
context.stroke();

//dessinner la grande surface 
context.beginPath();
context.moveTo(0, 130);
context.lineTo(120, 130);
context.lineTo(120, 440);
context.lineTo(0, 440);
context.closePath();
context.stroke();

//surface de reparation droite
context.beginPath();
context.moveTo(1000, 230);
context.lineTo(960,230);
context.lineTo(960, 350);
context.lineTo(1000, 350);
context.closePath();
context.stroke();

//grande surface droite;
context.beginPath();
context.moveTo(1000, 130);
context.lineTo(880, 130);
context.lineTo(880, 440);
context.lineTo(1000, 440);
context.stroke();

//point penalty surface droite
point(920, 290, 3);

//arc de cercle devant la surface droite
context.beginPath();
context.arc(890, 286, 80, 4.6, 1.7, true);
context.stroke();

//arc de cercle devant la surface gauche
context.beginPath();
context.arc(129, 286, 80, 4.6, 1.7, false);
context.stroke();

//arcCorner(1000,4,22);
context.beginPath();
context.arc(1000, 4, 19, 12, 7.9, true);
context.stroke();

//arc corner en bas  à droite
context.beginPath();
context.arc(1000, 600, 22, 11, 7, true);
context.stroke();