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
               + '<link rel="icon" href="/Favicon/apple-icon-120x120.png" type="image/x-icon">'
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
     $(".loader-container").fadeOut(1500);
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
// Console Message
console.log("My unmatched perspicacity, coupled with sheer indefatigability, makes me a feared opponent in any realm of human endeavor.")

// Typewriter js
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// Microsoft Clarity 
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "jrs8b0scfr");