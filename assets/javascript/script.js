const contact = document.getElementById("contact-box");
const information = document.getElementById("information-box");
const projects = document.getElementById("projects");
const profile = document.getElementById("profile-card");

function displayInformations() {
  profile.classList.remove("non-display");
  information.classList.remove("non-display");
  contact.classList.add("non-display");
  information.classList.add("display");
  projects.style.display = "none";
}
function displayContact() {
  profile.classList.remove("non-display");
  projects.style.display = "none";
  contact.classList.remove("non-display");
  information.classList.add("non-display");
}

function displayProjects() {
  profile.classList.add("non-display");
  information.classList.add("non-display");
  contact.classList.add("non-display");
  projects.style.display = "flex";
}
let count = 0;
function changeWindow() {
  if (count == 0) {
    displayContact();
    count++;
  } else if (count == 1) {
    displayProjects();
    count++;
  } else {
    displayInformations();
    count = 0;
  }
}
