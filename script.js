 var typed =new Typed('#element',{
            strings :['Web Developer.','Web Designer.','Frontend developer.'],
            typeSpeed: 50,
        });

         setTimeout(function() {
            var landing = document.getElementById('landing');
            landing.style.transition = 'opacity 0.8s ease';
            landing.style.opacity = '0';
            setTimeout(function() {
                landing.style.display = 'none';
            }, 800);
        }, 3500);