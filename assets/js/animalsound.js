const animalsound = {

  duckElement: null,
  catElement: null,
  horseElement: null,
  dogElement: null,
  dolphinElement: null,
  wolfElement: null,
  
  duckAudio: null,
  catAudio: null,
  horseAudio: null,
  dogAudio: null,
  dolphinAudio: null,
  wolfAudio: null,

    init: function() {
      animalsound.definePads();
      animalsound.preloadSamples();
      animalsound.attachEvents();
    },

      definePads: function() {
        animalsound.duckElement = document.querySelector('.pad-1');
        animalsound.catElement = document.querySelector('.pad-2');
        animalsound.horseElement = document.querySelector('.pad-3');
        animalsound.dogElement = document.querySelector('.pad-4');
        animalsound.dolphinElement = document.querySelector('.pad-5');
        animalsound.wolfElement = document.querySelector('.pad-6');
       },
  
      preloadSamples: function() {
        animalsound.duckAudio = new Audio('assets/audio/duck.mp3');
        animalsound.catAudio = new Audio('assets/audio/cat.mp3');
        animalsound.horseAudio = new Audio('assets/audio/horse.mp3');
        animalsound.dogAudio = new Audio('assets/audio/dog.mp3');
        animalsound.dolphinAudio = new Audio('assets/audio/dolphin.mp3');
        animalsound.wolfAudio = new Audio('assets/audio/wolf.mp3');
      },
  
      handleDuckClick: function() {
        animalsound.duckAudio.currentTime = 0;
        animalsound.duckAudio.play();
      },
  
      handleCatClick: function() {
        animalsound.catAudio.currentTime = 0;
        animalsound.catAudio.play();
      },
  
      handleHorseClick: function() {
        animalsound.horseAudio.currentTime = 0;
        animalsound.horseAudio.play();
      },
  
      handleDogClick: function() {
        animalsound.dogAudio.currentTime = 0;
        animalsound.dogAudio.play();
      },
  
      handleDolphinClick: function() {
        animalsound.dolphinAudio.currentTime = 0;
        animalsound.dolphinAudio.play();
      },
  
      handleWolfClick: function() {
        animalsound.wolfAudio.currentTime = 0;
        animalsound.wolfAudio.play();
      },
  
      attachEvents: function() {
        animalsound.duckElement.addEventListener("click", animalsound.handleDuckClick);
        animalsound.catElement.addEventListener("click", animalsound.handleCatClick);
        animalsound.horseElement.addEventListener("click", animalsound.handleHorseClick);
        animalsound.dogElement.addEventListener("click", animalsound.handleDogClick);
        animalsound.dolphinElement.addEventListener("click", animalsound.handleDolphinClick);
        animalsound.wolfElement.addEventListener("click", animalsound.handleWolfClick);
      },
  
}