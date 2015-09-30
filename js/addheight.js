  //Définie la taille des section en fonction de la page
        $(document).ready(function () {
            jQuery('document').ready(function () {
                var min_height = jQuery(window).height();
                if (jQuery('section').height() < min_height) {
                    jQuery('section').css({
                        'min-height': +min_height + 'px'
                    });
                }
            });
        });
