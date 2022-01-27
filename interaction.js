
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.posiInitX = 0;
  this.posiInitY = 0;
  this.posiFinX = 0;
  this.posiFinY = 0;
  this.isPress = false;
  
 

	// Developper les 3 fonctions gérant les événements

  DnD.prototype.maFctGerantLaPression = function(evt){

    this.isPress = true;
    this.posiInitX = getMousePosition(canvas, evt).x;
    this.posiInitY = getMousePosition(canvas, evt).y;

    console.log(this.posiInitX);
    console.log(this.posiInitY);

  
  }.bind(this);
  
  DnD.prototype.maFctGerantLeDeplacement = function(evt){
  
    if(this.isPress){
      this.posiFinX = getMousePosition(canvas, evt).x;
      this.posiFinY = getMousePosition(canvas, evt).y;
      console.log(this.posiFinX);
      console.log(this.posiFinY);
    }
    

  
  }.bind(this);
  
  DnD.prototype.maFctGerantLeRelachement = function(evt){
    this.isPress = false;
    var res = getMousePosition(canvas, evt);
    this.posiFinX = res.x;
    this.posiFinY = res.y;
    console.log(this.posiFinX);
    console.log(this.posiFinY);

  }.bind(this);
	// Associer les fonctions précédentes aux évènements du canvas.

  canvas.addEventListener('mousedown', this.maFctGerantLaPression, false);
  canvas.addEventListener('mousemove', this.maFctGerantLeDeplacement, false);
  canvas.addEventListener('mouseup', this.maFctGerantLeRelachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};