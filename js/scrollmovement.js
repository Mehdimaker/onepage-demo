   //mouvement fluide 
        $(function () {
            //au click sur chaque lien nous ferons apelle à la fonction animate de Jquery
            $('nav a').on('click', function (e) {
                e.preventDefault();
                // hash permet de cibler le href de nos liens.
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000, function () {
                    window.location.hash = hash;
                });
            });
        });