/* Open the sidenav */
function openNav()
{
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("myBtn").style.display = "none";
  document.getElementById("arrow-down").style.display = "none";
}
  
/* Close/hide the sidenav */
function closeNav()
{
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myBtn").style.display = "";
  document.getElementById("arrow-down").style.display = "";
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    mybutton.style.display = "block";
  } 
  else 
  {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() 
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  
