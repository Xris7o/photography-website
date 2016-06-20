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
    var image = document.getElementById('img');
    
    imageCount = imageCount + x;
    
    if (imageCount > total) {
      imageCount = 1;
    }

    if (imageCount < 1) {
      imageCount = total;
    }

    image.src = "js/img" + imageCount + ".JPG";
 }

/* window.setInterval(function slideA(x) {
   var image = document.getElementById('img');
    
    imageCount = imageCount + 1;
    
    if (imageCount > total) {
      imageCount = 1;
    }

    if (imageCount < 1) {
      imageCount = total;
    }

    image.src = "js/img" + imageCount + ".JPG";
 }, 4000);*/
 
 /////////////////////////////////////////////////////////////////////

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
   var image = document.getElementById('img');
    
    imageCount = imageCount + 1;
    
    if (imageCount > total) {
      imageCount = 1;
    }

    if (imageCount < 1) {
      imageCount = total;
    }

    image.src = "js/img" + imageCount + ".JPG";
}, 4000);


// reset
timer.reset(4000);

// stop the timer
timer.stop();

// start the timer
timer.start();



document.getElementById("reset").addEventListener("click", function() {
  timer.reset(4000);
    
});
document.getElementById("resett").addEventListener("click", function() {
  timer.reset(4000);
    
});
////////////////////////////////////////////////////////////////////////
/* function animateLeft(obj, from, to){
   if(from >= to){         
       obj.style.visibility = 'hidden';
       return;  
   }
   else {
       var box = obj;
       box.style.marginLeft = from + "px";
       setTimeout(function(){
           animateLeft(obj, from + 1, to);
       }, 25) 
   }
}

function animateMe() {
animateLeft(document.getElementById('img'), 0, 400);
}*/

/*  var Slider = function() { this.initialize.apply(this, arguments) }
  Slider.prototype = {
 
    initialize: function(slider) {
      this.ul = slider.children[0]
      this.li = this.ul.children
 
      // make <ul> as large as all <li>’s
      this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px'
 
      this.currentIndex = 0
    },
 
    goTo: function(index) {
      // filter invalid indices
      if (index < 0 || index > this.li.length - 1)
        return
 
      // move <ul> left
      this.ul.style.left = '-' + (100 * index) + '%'
 
      this.currentIndex = index
    },
 
    goToPrev: function() {
      this.goTo(this.currentIndex - 1)
    },
 
    goToNext: function() {
      this.goTo(this.currentIndex + 1)
    }
  }*/