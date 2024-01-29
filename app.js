let projectCard = [[
  {
    id: "2",
    projectName: "HomeTown",
    imageLink: "./img/homwtown.jpeg",
    githubLink: "https://github.com/SulimanHakimi/scrimba_homeTown.git",
    liveDemoLink: "https://sulimanhakimi.github.io/scrimba_homeTown/",
  },
  {
    id: "3",
    projectName: "Calculator",
    imageLink: "./img/calculator.jpeg",
    githubLink: "https://github.com/SulimanHakimi/calculator_1.git",
    liveDemoLink: "https://sulimanhakimi.github.io/calculator_1/",
  },
  {
    id: "4",
    projectName: "Random Quote Machine",
    imageLink: "./img/random.jpeg",
    githubLink:
      "https://github.com/SulimanHakimi/Build-Random-Quote-Machine-FreeCodeCamp.git",
    liveDemoLink:
      "https://sulimanhakimi.github.io/Build-Random-Quote-Machine-FreeCodeCamp/",
  },
  {
    id: "1",
    projectName: "Landing Page",
    imageLink: "./img/landing.jpeg",
    githubLink: "https://github.com/SulimanHakimi/assignment_1.git",
    liveDemoLink: "https://sulimanhakimi.github.io/landing-page/",
  },]
];
let cardsList = document.querySelector(".cards-list");
projectCard.forEach((project) => {
    console.log(project)
  cardsList.innerHTML = `
    <div class="card">
    <img src="${project.imageLink}" alt="" />
    <span>Landing Page</span>
    <div class="buttons">
      <a target="_blank" href="${project.imageLink}">GitHub</a>
      <a target="_blank" href="${project.data}">Live Demo</a>
    </div>
  </div>
    `;
});
