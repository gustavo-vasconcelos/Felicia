//Vars
let canvas = null;
let ctx = null;
const width = 800;
const height = 600;


//OnLoad
window.onload = function() {
    canvas = document.getElementById("my_canvas");
    ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height); //clears everything

    game();
}

//Preload, mouse events
function game(){

    //Load images here
    img = new Image();
    img.onload = function() {
    
        //Mouse events
        //canvas.addEventListener("click", MouseClick);

        //This
        window.requestAnimationFrame(animate);
        //Or That
        timer = window.setInterval(animate, 1000/60);
    }
    //img.src = "";
}

//Update, draw ...
function animate() {
    ctx.clearRect(0, 0, width, height); //clears everything

    //skeletons.forEach(s => s.update());
    //skeletons.forEach(s => s.draw());

    window.requestAnimationFrame(animate);
}