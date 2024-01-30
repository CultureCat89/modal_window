document.addEventListener("DOMContentLoaded", function() {
  const modal1 = document.querySelector('.modal-1');
  const modal2 = document.querySelector('.modal-2');
  const toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function() {
    modal1.classList.toggle("hidden");
    modal2.classList.toggle("hidden");
  });
});