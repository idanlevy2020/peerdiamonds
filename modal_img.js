// Get the modal
let modal = document.getElementById("myModal");
console.log('modal:',modal);

// Get the image and insert it inside the modal - use its "alt" text as a descModalText
let img = document.getElementById("myImg");
console.log('img:',img);
let modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img.src; //modal image
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none"; //close the modal
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; //close the modal
    }
};