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
    setTimeout(loop_images, 5000);
}
