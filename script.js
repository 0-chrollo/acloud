/*Nav Script*/
  // Function to toggle responsive navigation menu
  function toggleNavbar() {
    var navbar = document.getElementsByClassName("signup-button");
    var navbar = document.getElementById("myNavbar");
    var burgerIcon = document.getElementById("burgerIcon");
    var closeIcon = document.getElementById("closeIcon");

    navbar.classList.toggle("responsive"); // Toggle the "responsive" class
    burgerIcon.style.display = (navbar.classList.contains("responsive")) ? "none" : "inline-block"; // Hide burger icon if in responsive state
    closeIcon.style.display = (navbar.classList.contains("responsive")) ? "inline-block" : "none"; // Show close icon if in responsive state
  }
/*Ends Here*/