
function changeBackgroundColor() {
  document.body.style.backgroundColor = "pink";
}
// Event listener for button click
document
  .getElementById("changeColorBtn")
  .addEventListener("click", changeBackgroundColor);
// Form validation
document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
      //trim
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
    }
  });
// Image hover effect
var image = document.getElementById("image");
image.addEventListener("mouseover", function () {
  image.src = "cute.jpg";
});
image.addEventListener("mouseout", function () {
  image.src = "cute.jpg";
});
