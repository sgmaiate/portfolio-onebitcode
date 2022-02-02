const contact = document.getElementById("contact-box");
const information = document.getElementById("information-box");

function displayInformations() {
  information.classList.remove("non-display");
  contact.classList.add("non-display");
  information.classList.add("display");
}
function displayContact() {
  contact.classList.remove("non-display");
  information.classList.add("non-display");
}
// function displayKnowledge();
// function displayProjects();
