// Main Javascript Sources
// Head
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js'
head.appendChild(script);
var temp = document.createElement('div');

temp.innerHTML = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />'
               + '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">' 
               + '<link rel="shortcut icon" type="image/x-icon" href="/Favicon/favicon.ico">'
               + '<link rel="apple-touch-icon" sizes="57x57" href="/Favicon/apple-icon-57x57.png">'
               + '<link rel="apple-touch-icon" sizes="60x60" href="/Favicon/apple-icon-60x60.png">'
               + '<link rel="apple-touch-icon" sizes="72x72" href="/Favicon/apple-icon-72x72.png">'
               + '<link rel="apple-touch-icon" sizes="57x57" href="/Favicon/apple-icon-76x76.png">'
               + '<link rel="apple-touch-icon" sizes="57x57" href="/Favicon/apple-icon-114x114.png">'
               + '<link rel="apple-touch-icon" sizes="57x57" href="/Favicon/apple-icon-120x120.png">'
               + '<link rel="apple-touch-icon" sizes="57x57" href="/Favicon/apple-icon-144x144.png">'
               + '<link rel="apple-touch-icon" sizes="57x57" href="/Favicon/apple-icon-152x152.png">'
               + '<link rel="icon" type="image/png" sizes="192x192"  href="/Favicon/android-icon-192x192.png">'
               + '<link rel="icon" type="image/png" sizes="32x32" href="/Favicon/favicon-32x32.png">'
               + '<link rel="icon" type="image/png" sizes="96x96" href="/Favicon/favicon-96x96.png">'
               + '<link rel="icon" type="image/png" sizes="16x16" href="/Favicon/favicon-16x16.png">'
               + '<meta name="msapplication-TileColor" content="#ffffff">'
               + '<meta name="msapplication-TileImage" content="/Favicon/ms-icon-144x144.png">'
               + '<meta name="theme-color" content="#4285f4">'
               + '<link rel="stylesheet" href="/Css/Links.css">';


var head = document.head;

while (temp.firstChild) {
    head.appendChild(temp.firstChild);
}

// Preloader Func
$(window).on("load",function(){
     $(".loader-container").fadeOut(1000);
});
$(document).ready(function(){
    $(".loader-container").load("/App/preloader.html");
;
});
// Menu
$(document).ready(function(){
    $("#menu-bar").load("/App/menu-bar.html");
;
});
// Footer
$(document).ready(function(){
    $(".footer-section").load("/App/footer.html");
;
});

// Top
$(document).ready(function(){
    $("#buttontop").load("/App/top.html");
;
});

console.log("A rat race is for rats. We're not rats. We're human beings. Reject the insidious pressures in society that would blunt your critical faculties to all that is happening around you, that would caution silence in the face of injustice lest you jeopardise your chances of promotion and self-advancement.")
 

// Context Menu Disabling
// $(document).bind("contextmenu",function(e) { 
// e.preventDefault();
// var currentHtmlContent;

// var element = new Image();

// var elementWithHiddenContent = document.querySelector("#element-to-hide");

// var innerHtml = elementWithHiddenContent.innerHTML;

// element.__defineGetter__("id", function() {

//  currentHtmlContent= "";

// })});
