const toggleBTN = document.getElementById("my-button")

let isSelected = false;

toggleBTN.addEventListener("click", function() {
  isSelected = !isSelected

  console.log(isSelected)
})



// toggleBTN.addEventListener("click",function() {
//   toggleBTN.classList.toggle("active");
// });