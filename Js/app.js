var head = document.head;
var temp = document.createElement('div');

temp.innerHTML =  '<link rel="stylesheet" href="/Css/App.css">';

while (temp.firstChild) {
    head.appendChild(temp.firstChild);
}

function copyToClipboard(id){
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    document.innerHTML.getElementById('Button') = "Copied!"
}




$(document).ready(function(){
    $("#app").load("/App/tutorial.html");
;
});
