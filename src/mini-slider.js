import './_mini-slider.sass'

define('miniSlider', function() {

  var miniSlider  = {};

  miniSlider.init = function(selector,rate){

    if(!selector) {
      console.log('no selector');
    } else {
      var counter   = 1,
          slides    = document.querySelectorAll(selector),
          numItems  = slides.length;

      setTimeout(function(){
        [].forEach.call( slides, function(el){
          el.classList.add('mini-slide');
        });
      }, rate);
      
      var showCurrent = function(){
        var itemToShow = Math.abs(counter%numItems); 
        [].forEach.call( slides, function(el){
          el.classList.remove('show');
        });
        slides[itemToShow].classList.add('show');    
      };

      var slider = function(rate){
        setInterval(function() {
          counter++;
          showCurrent();
          console.log('slide count');
        }, rate);
      }

      slider(rate);

    }
  }

  return miniSlider;

});
  