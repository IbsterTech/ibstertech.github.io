var head = document.head;
var temp = document.createElement('div');

// import App.css
temp.innerHTML =  '<link rel="stylesheet" href="/Css/App.css">';

while (temp.firstChild) {
    head.appendChild(temp.firstChild);
}
// End

// Copy Button
function copyToClipboard(id){
    var copied = document.getElementById("Button")
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    copied.innnerHTML = "Copied!" 
}



// Follow.. Comments..
$(document).ready(function(){
    $("#app").load("/App/tutorial.html");
;
});
