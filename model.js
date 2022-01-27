
// Implémenter ici les 4 classes du modèle.

function Drawing(){

    this.myforms = new Array();
    this.getMyforms = function(){
        return this.myforms;
    }.bind(this);

    this.addForm = function(form){
        this.myforms.push(form);
    }.bind(this);
}

function Form(posiInitX,posiInitY,posiFinX,posiFinY, epaisseur,couleur){
    this.posiInitX = posiInitX;
    this.posiInitY = posiInitY;
    this.posiFinX = posiFinX;
    this.posiInitY = posiFinY;
    this.epaisseur = epaisseur;
    this.couleur = couleur;

    this.getPosiInitX = function(){
        return this.posiInitX;
    }.bind(this);

    this.getPosiInitX = function(){
        return this.posiInitY;
    }.bind(this);

    this.getPosiFinX = function(){
        return this.posiFinX;
    }.bind(this);

    this.getPosiFinY = function(){
        return this.posiFinY;
    }.bind(this);
}

function Rectangle(){
    Form.call(posiInitX,posiInitY,posiFinX,posiFinY, epaisseur,couleur)
}

function Line(){
    Form.call(posiInitX,posiInitY,posiFinX,posiFinY, epaisseur,couleur)
}
// N'oubliez pas l'héritage !
