# onepage-demo

Website one page avec Bootstrap et Jquery.

## intro

Nous allons réaliser ensemble un site one page et responsive à l'aide de bootstrap.
La particularité d'un site one page est d'avoir tout le contenu sur la même page, ce qui permet d'éviter les chargements de page et faciliter la navigation sur mobile.
Nous utiliserons donc pour le style le fichier bootstrap.min.css et pour l’interactivité boostrap.min.js. Notons que bootstrap.min.js a besoin de la library jquery pour fonctionner.
Commençons par créer notre fichier index.html

###Commençons par créer notre fichier indx.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Site One Page</title>
  <meta charset="utf-8"/>
</head>
<body>
</body>
</html>
```

Télécharger Boostrap et lié le fichier boostrap.min.css dans le head de votre index.html
```html
<link href="css/bootstrap.min.css" rel="stylesheet">
```
Télécharger Jquery et lié le fichier jquery.min.js ainsi que bootstrap.min.js avant la fermeture de la balise body.

Attention à bien respecter l'ordre d'appel. sachant que le fichier bootstrap.min.js fais appel à la librairie jquery, il faut impérativement appeller jquery.min.js en premier.

Et bien placer les fichiers .css dans un dossier css et les fichiers .js dans un dossier js, une bonne pratique à prendre au plus tôt.
```html
<script src="js/jquery-1.11.2.min.js"></script>
<script src="js/bootstrap.min.js"></script>
```
Pour la navbar voici le code qu'on ajoutera juste après l'ouverture de la balise body dans une balise: 
```html
<div class="container-fluid"> 

</div>
```
Notre barre de navigation prendra donc toute la largeur de l'écran, elle sera en position fixed en haut de la page et sera responsive; en effet lorsque la taille de l'écran sera infèrieure à une certaine valeur la navbar se transformera et laissera apparaître un menu hamburger pour faciliter la navigation sur mobile.
```html
<div class="container-fluid">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand">Site One Page</a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#menu1">menu1</a>
                        </li>
                        <li><a href="#menu2">menu2</a>
                        </li>
                        <li><a href="#menu3">menu3</a>
                        </li>
                        <li><a href="#menu4">menu4</a>
                        </li>
                        <li><a href="#menu5">menu5</a>
                        </li>
                        <li><a href="#menu6">menu6</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</div>
```
Place au contenu, pour cela, toujours dans notre balise <div class="container-fluid">, à la suite de notre <nav>, nous allons ajouter nos 6 sections composées d'un titre et d'un texte. Bien entendu chaque section aura un id différent: menu1, menu2, menu3 ...
```html
<section class="jumbotron" id="menu1">
            <div class="container">
                <h1 class="well">Bienvenue dans notre espace !</h1>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
            </div>
        </section>
```
À ce stade nous pouvons remarquer qu'il n'y a aucun d'effet de transition sur nos sections. lorsque l'on clic sur un lien de notre navbar cela nous redirige directement sur la partie section.
Pour ajouter un effet de scroll nous allons devoir importer ce fichier js écrit en jquery, à ajouter dans notre dossier js, et a appelé avant la fermeture de notre balise body
```html
    <script src="js/jquery-1.11.2.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/scrollmovement.js"></script>  
</body>
```
```javascript
//mouvement fluide
        $(function () {
            $('nav a').on('click', function (e) {
                e.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000, function () {
                    window.location.hash = hash;
                });
            });
        });  
```
La transition est bien fonctionnelle mais il serait bien que notre class active s'applique à chaque changement .
Pour cela nous allons utiliser une method de bootstrap qui détecte sur qu'elle div nous somme et gère automatiquement l'ajout et la supression de nos class active.
Ajoutons donc à notre body un attribut data-spy et data targer.
```html
<body data-spy="scroll" data-target=".navbar">
```
Petit bonus :

Faisons en sorte que nos sections prennent comme hauteur minimale la hauteur de notre écran.
Pour cela voici le code à ajouter dans un nouveau fichier, qu'on appellera addheight.js, à placer dans notre dossier js et à appeler avant la fermeture de la balise body.
```javascript
//Définie la taille des sections
        $(document).ready(function () {
            jQuery('document').ready(function () {
                var min_height = jQuery(window).height();
                if (jQuery('section').height() < min_height) {
                    jQuery('section').css({
                        'min-height': +min_height + 'px'
                    });
                }
            });
```