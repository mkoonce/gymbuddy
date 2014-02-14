$(document).ready(function() {
	initializePage();
})

function initializePage() {
     var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', processImage);
}

function read(a)
{
    window.open(window.location.origin + a);
}

function processImage(e){
    var file = fileInput.files[0];
    var imageType = /image.*/;

    var reader = new FileReader();

    reader.onload = function(e) {
        fileDisplayArea.innerHTML = "";

        var img = new Image();
        img.src = reader.result;

        fileDisplayArea.appendChild(img);

        qrcode.callback = read;
        qrcode.decode(img.src);
    }

    reader.readAsDataURL(file); 
}

