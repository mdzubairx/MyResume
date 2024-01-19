var navmenutags = document.querySelectorAll('.nav-menu a');
for (i=0; i<navmenutags.length; i++){
    navmenutags[i].addEventListener('click',function(event){
        // event.preventDefault();
        var targetsectionID = this.textContent.trim().toLowercase();
        var targetSection = document.getElementById(targetsectionID);
        console.log(targetSection);
      
      var interval = setInterval(function(){
        var targetSectionCoordinates = targetSection.getBoundingClientRect();
        if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
        },50 );  
    });
}
