  //Définie la taille des sections 
        $(document).ready(function () {
            jQuery('document').ready(function () {
                //On définie notre variable min_height à la hateur de notre fenètre
                var min_height = jQuery(window).height();
                //Si notre section  est infèrieur à min_height alors on lui donne comme propriété css une hauteur minimal égal à min_height
                if (jQuery('section').height() < min_height) {
                    jQuery('section').css({
                        'min-height': +min_height + 'px'
                    });
                }
            });
        });
