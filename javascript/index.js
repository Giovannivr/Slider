var slideIndex = 1;
            showSlides(slideIndex);
    
            function plusSlides(n) {
                showSlides(slideIndex += n);
            }
    
    
            function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                if (n > slides.length) {slideIndex = 1}
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slideIndex-1].style.display = "block";              
            }

            autoSlide();
            function autoSlide() {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                if(slideIndex > slides.length) {slideIndex = 1}
                slides[slideIndex-1].style.display = "block"; 
                slideIndex++;
                setTimeout(autoSlide,2000)  
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

            function play(){
                startInterval(startInterval, 2000);
            }

            function pause(){
                endInterval(endInterval);                
            }

           
