counter = 0
var imag = document.getElementsByClassName("back");
loop_images();

function loop_images(){
    for(var i = 0; i < imag.length; i++){
        imag[i].style.display = "none";
    }
    imag[counter].style.display = "block";
    counter += 1;
    if(counter == imag.length){
        counter = 0
    }
    setTimeout(loop_images, 7950);
}

function prev_image(){
    for(var i = 0; i < imag.length; i++){
        imag[i].style.display = "none";
    }
    if(counter == 0){
        counter = imag.length
    }
    counter -= 1
    imag[counter].style.display = "block"
}

function next_image(){
    for(var i = 0; i < imag.length; i++){
        imag[i].style.display = "none";
    }
    if(counter == imag.length - 1){
        counter = -1
    }
    counter += 1
    imag[counter].style.display = "block";
}
