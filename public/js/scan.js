$(document).ready(function() {
	initializePage();
})

function initializePage() {
     var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');
    var submitBtnArea = document.getElementById('submitBtnArea');

    fileInput.addEventListener('change', processImage);
}

function read(e){
   var button = document.createElement("a");
   button.setAttribute("class", "btn btn-lg btn-primary"); 
   button.setAttribute("role", "button"); 
   button.setAttribute("href", e); 
   button.innerHTML = "Submit";
   submitBtnArea.appendChild(button);
}

function processImage(e){
    var file = fileInput.files[0];
    var imageType = /image.*/;

    var reader = new FileReader();

    reader.onload = function(e) {
        fileDisplayArea.innerHTML = "";

        var img = new Image();
        img.width = "200";
        img.src = reader.result;

        fileDisplayArea.appendChild(img);

        qrcode.callback = read;
        qrcode.decode(img.src);
    }

    reader.readAsDataURL(file); 
}



