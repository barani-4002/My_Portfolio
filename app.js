// Typing animation
const typingElement = document.querySelector(".typing");
const texts = ["Web Developer", "Frontend Enthusiast", "Problem Solver"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
  currentText = texts[i];
  typingElement.textContent = isDeleting 
    ? currentText.substring(0, j--) 
    : currentText.substring(0, j++);

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();
