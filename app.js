import projects from "./data.js";
let cardsList = document.querySelector(".cards-list");

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((projects) => console.log(projects))
  .catch((error) => console.error("Error:", error));
projects.forEach((projects) => {
  //    cardsList.innerHTML =
  console.log(projects);
});
// `
//    <div class="card">
//    <img src="${project.imageLink}" alt="" />
//    <span>Landing Page</span>
//    <div class="buttons">
//      <a target="_blank" href="${project.githubLink}">GitHub</a>
//      <a target="_blank" href="${project.liveDemoLink}">Live Demo</a>
//    </div>
//  </div>
//    `
