/* dodać 1 za każdym slajdem */
let slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
/* dodać mySlides za każdym slajdem */
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides7", "mySlides8", "mySlides9", "mySlides11", "mySlides14", "mySlides17", "mySlides18", "mySlides19", "mySlides20", "mySlides22", "mySlides23", "mySlides24", "mySlides25", "mySlides26", "mySlides27", "mySlides31", "mySlides34", "mySlides35", "mySlides36", "mySlides38", "mySlides39", "mySlides41", "mySlides43", "mySlides44", "mySlides45", "mySlides46", "mySlides47"]
/* dodać showSlides za każdym slajdem */
showSlides(1, 30);
showSlides(1, 29);
showSlides(1, 28);
showSlides(1, 27);
showSlides(1, 26);
showSlides(1, 25);
showSlides(1, 24);
showSlides(1, 23);
showSlides(1, 22);
showSlides(1, 21);
showSlides(1, 20);
showSlides(1, 19);
showSlides(1, 18);
showSlides(1, 17);
showSlides(1, 16);
showSlides(1, 15);
showSlides(1, 14);
showSlides(1, 13);
showSlides(1, 12);
showSlides(1, 11);
showSlides(1, 10);
showSlides(1, 9);
showSlides(1, 8);
showSlides(1, 7);
showSlides(1, 6);
showSlides(1, 5);
showSlides(1, 4);
showSlides(1, 3);
showSlides(1, 2);
showSlides(1, 1);
showSlides(1, 0);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
