$(document).ready(function() {
	initializePage();
})

function initializePage() {
     var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');
    var submitBtn = document.getElementById('submitBtn');
   
    fileInput.addEventListener('change', processImage);
    fileInput.addEventListener('click', sumbitBtnPress);
}

function read(a)
{
     window.location.href = window.location.origin + a;
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



