const taglineText = "Where strategy meets soulful storytelling";
let i = 0;

function typeTagline() {
  const taglineElement = document.getElementById("tagline");
  if (i < taglineText.length) {
    taglineElement.innerHTML += taglineText.charAt(i);
    i++;
    setTimeout(typeTagline, 80); // Typing speed
  } else {
    // Show the button AFTER typing finishes
    document.getElementById("cta").style.display = "inline-block";
  }
}

window.onload = typeTagline;
