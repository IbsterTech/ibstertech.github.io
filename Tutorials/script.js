function itemFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("itemInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("item-ul");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
          document.getElementById("m-f").style.paddingBottom = "1000px";
      } else {
          li[i].style.display = "none";
      }
  }
}

$("#item-ul li").slice(20).hide();
var mincount = 20;
var maxcount = 40;


$(window).scroll(function() 
                    {
                    if($(window).scrollTop() + $(window).height() >= $(document).height() - 400) {
                            $("#item-ul li").slice(mincount,maxcount).fadeIn(1200);

mincount = mincount+20;
maxcount = maxcount+20;

}
});
