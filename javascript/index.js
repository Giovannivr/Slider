           "use strict";
         
           var slideIndex = 1;
           var timer=0;
           autoSlide();     
            
    
            function plusSlides(delta) {
                showSlides(slideIndex = slideIndex+delta); 
            }
    
            function showSlides(slidenummer) {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                if (timer) {
                    clearTimeout(timer);
                    timer=0;
                    --slideIndex;
                }
   
                if (slidenummer > slides.length) {slideIndex = 1}
                if (slidenummer < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slideIndex-1].style.display = "block"; 
            }

            
            function autoSlide() {
                var i=0;
                var slides = document.getElementsByClassName("mySlides");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                if(slideIndex > slides.length) {slideIndex = 1}
                slides[slideIndex-1].style.display = "block"; 
                slideIndex++;
                timer = setTimeout(autoSlide,2000)  
            }

            window.addEventListener('keyup', (e) => {
                console.log(e.key);
                if(e.key == "ArrowLeft") {
                    showSlides(slideIndex += -1)
                }
                if(e.key == "ArrowRight") {
                    showSlides(slideIndex += 1)
                }
            });

         function pauze() {
             if (timer) {
                 clearTimeout(timer);
                 timer=0;
             }

         }

         function play() {
            if (!timer) {
             autoSlide();
            }
         }