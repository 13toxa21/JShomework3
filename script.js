function Jerry(){
    this.coordX = 100;
    this.coordY = 500;
    this.with = 25;
    this.height = 25;
    this.name = 'Jarry'
    this.speedX = 15;
    this.speedY = 15;

    this.state = function(edit){
        if(edit === "top"){
            edit -= this.speedY;
        }else if(edit === "bottom"){
            edit+= this.speedY
        }else if(edit === "right"){
            edit -= this.coordX;
        }else if(edit === "left"){
            edit += this.coordX;
        }
    }
}

function Tomas(){
    Jerry.call(this);
    this.coordX = 50;
    this.coordY = 50;
    this.with = 50;
    this.height = 50;
    this.name = 'Tomas';
    this.speedX = 15;
    this.speedY = 7.5; 
}

var addTom = setInterval(function(){
    var tom = new Tomas();
}, 8000)



