window.onload = function() { //executes code after DOM loads
 //--- select all <video> on the page
 const vids = document.querySelectorAll('.thevideo')
 // Loop over the selected elements and add event listeners
 for (let i = 0; i < vids.length; i++) {
   vids[i].addEventListener( 'mouseover', function(e) {
     vids[i].play()
     vids[i].style.width = "500px";
     vids[i].style.left = "-25px";

   })
   vids[i].addEventListener( 'mouseout', function(e) {
     vids[i].pause()
     vids[i].style.width = "465px";
     vids[i].style.left = "-7px";
   })
 }
}
