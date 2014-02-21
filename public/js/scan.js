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
  reader.readAsDataURL(file); 

  reader.onload = function(e) {
    fileDisplayArea.innerHTML = "";

    var img = new Image();
    img.src = reader.result;
    img.onload = function() {
        Pixastic.process(
          img,
          "crop", 
          {
            rect : 
            {
              left : 700, top : 400, width : 1700, height : 1700
            }
          },
          function(e){
              console.log(e);
              var dataURL = e.toDataURL();
              qrcode.callback = read;
              qrcode.decode(dataURL);
              //e.width = "200";
              fileDisplayArea.appendChild(e);
          }
        );
    }


        // var squareSize;
        // if (img.width < img.height) {
        //     squareSize = img.width;
        // } else {
        //     squareSize = img.height;
        // }
        // var cropBounds = [0, 0, squareSize, squareSize];
        // img.cropBounds(cropBounds);
        //img.width = "200";
        //

            // qrcode.callback = read;
            // qrcode.decode(e.src);

          }

        }



