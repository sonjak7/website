var pictures = document.getElementsByClassName("pics");
for(var i = 0; i < pictures.length; i++){
    pictures[i].setAttribute('onclick', function(){pictures[i].style.width = "50%"});
}