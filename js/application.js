var selector, elems, makeActive;

selector = 'li .tabs';

elems = document.querySelectorAll(selector);

makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');
    
    this.classList.add('active');
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);





 //Slider

 var imageCount = 1;
 var total = 5;

 function slide (x) {
    var image = document.getElementById('current-slide-image');
    
    imageCount = imageCount + x;
    
    if (imageCount > total) {
      imageCount = 1;
    }

    if (imageCount < 1) {
      imageCount = total;
    }

    image.src = "img/img" + imageCount + ".JPG";
 }

function Timer(fn, t) {
    var timerObj = setInterval(fn, t);

    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }

    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }

    // start with new interval, stop current interval
    this.reset = function(newT) {
        t = newT;
        return this.stop().start();
    }
}

///////////////////////////////////////////////////////////

var timer = new Timer(function() {
   var image = document.getElementById('current-slide-image');
    
    imageCount = imageCount + 1;
    
    if (imageCount > total) {
      imageCount = 1;
    }

    if (imageCount < 1) {
      imageCount = total;
    }

    image.src = "img/img" + imageCount + ".JPG";
}, 4000);



function sliderButtonHandler (event) {
  var element = event.target;
  if (element.id === "previous") {
    slide(-1);

  } else {
    slide(1);
}

  timer.reset(4000)
}


var sliderButtons = document.getElementsByClassName("button");
for (i=0; i<sliderButtons.length; i++){
  sliderButtons[i].addEventListener("click", sliderButtonHandler);
}