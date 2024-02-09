let projects = [
  {
    id: 1,
    projectName: "Landing Page",
    imageLink: "./img/landing.jpeg",
    liveDemo: "https://sulimanhakimi.github.io/landing-page/",
    codeLink: "https://github.com/SulimanHakimi/assignment_1.git",
  },
  {
    id: 2,
    projectName: "HomeTown",
    imageLink: "./img/homwtown.jpeg",
    liveDemo: "https://github.com/SulimanHakimi/scrimba_homeTown.git",
    codeLink: "https://sulimanhakimi.github.io/scrimba_homeTown/",
  },
  {
    id: 3,
    projectName: "Calculator",
    imageLink: "./img/calculator.jpeg",
    liveDemo: "https://sulimanhakimi.github.io/calculator_1/",
    codeLink: "https://github.com/SulimanHakimi/calculator_1.git",
  },
  {
    id: 4,
    projectName: "Random Quote Machine",
    imageLink: "./img/random.jpeg",
    liveDemo:
      "https://sulimanhakimi.github.io/Build-Random-Quote-Machine-FreeCodeCamp/",
    codeLink:
      "https://github.com/SulimanHakimi/Build-Random-Quote-Machine-FreeCodeCamp.git",
  },
  {
    id: 5,
    projectName: "Password Generator",
    imageLink: "./img/passGenerator.PNG",
    liveDemo: "https://sulimanhakimi.github.io/PasswordGenerator/",
    codeLink: "https://github.com/SulimanHakimi/PasswordGenerator.git",
  },
  {
    id: 6,
    projectName: "Medical Website",
    imageLink: "./img/Medical website.PNG",
    liveDemo: "https://sulimanhakimi.github.io/Medical-Wbsite/",
    codeLink: "https://github.com/SulimanHakimi/Medical-Wbsite.git",
  },
];
// /////// project data

for (let i = 0; i < projects.length; i++) {
  document.querySelector(
    ".cards-list"
  ).innerHTML += ` <div id="${projects[i].id}" class="card">
    <img src="${projects[i].imageLink}" alt="" />
    <span>${projects[i].projectName}</span>
    <div class="buttons">
      <a
        target="_blank"
        href="${projects[i].codeLink}"
        >GitHub</a
      >
      <a
      
        target="_blank"
        href="${projects[i].liveDemo}"
        >Live Demo</a
      >
    </div>
  </div>`;
}
// /////////////////////////////////
let experience = [
  [
    { id: 1, name: "Html", level: "Excellent" },
    { id: 2, name: "Css", level: "Excellent" },
    { id: 3, name: "Tailwind Css", level: "Excellent" },
    { id: 4, name: "JavaScript", level: "intermidate" },
    { id: 5, name: "React Js", level: "intermidate" },
    { id: 6, name: "Next Js", level: "Fair" },
  ],
  [
    { id: 1, name: "Git", level: "Excellent" },
    { id: 1, name: "Node Js", level: "intermidate" },
  ],
];
console.log(experience);
// ////// experience data frontend
for (let i = 0; i < experience[0].length; i++) {
  document.querySelector(
    ".experience-name-fr"
  ).innerHTML += `<div class="experience-name-vl">
<i class="fa-solid fa-circle-check"></i>
<div class="name-level-exp">
  <span>${experience[0][i].name}</span>
  <p>${experience[0][i].level}</p>
</div>
</div>`;
}
// // backend
for (let i = 0; i < experience[1].length; i++) {
  document.querySelector(
    ".experience-name-se"
  ).innerHTML += `<div class="experience-name-vl">
  <i class="fa-solid fa-circle-check"></i>
  <div class="name-level-exp">
    <span>${experience[1][i].name}</span>
    <p>${experience[1][i].level}</p>
  </div>
  </div>`;
}
// /////////////////////////////////
let posts = [
  {
    id: 1,
    title: "Playing in Kabul Elite chess competition",
    dateOfPost: "FEB 03,2024",
    imageLink: "./img/sulimanhakimiChess.jpeg",
    description:
      "I had the opportunity to play in the Kabul Elite Chess Tournament, a fast-paced chess event attended by the best players in Kabul.  It was a challenging and rewarding experience as I faced opponents with different styles and strategies. I did not perform well in these matches, I won 3 games and lost the other 3.  I learned a lot from my mistakes and successes and improved my chess skills.  I also enjoyed the friendly atmosphere and camaraderie between the players. One of the most memorable moments of this tournament was meeting a young boy who was only 8 years old.  He played chess very well and impressed me with his talent and passion.  He was one of the rising stars of the Kabul chess scene and I hope to see him again in future tournaments.",
  },
  {
    id: 2,
    title: "7th place in medical terminology exam",
    dateOfPost: "Jan 3,2024",
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xh4e6k0HmfoL5xvlN0jP52fCzvZUNIeJLg&usqp=CAU",
    description:
      "I am proud to announce that I have reached the 7th place in the Cheragh University Medical terminology exam. It was a national and online exam. The entrance exam was held in four separate rounds, where I was among the top 10 students from the hundreds of participants in different medical fields and institutes. This achievement is the result of my hard work, dedication and passion for learning. I like to thank myself",
  },
  {
    id: 3,
    title: "ICPC Asia West Kabul 2023",
    dateOfPost: "SEP 29,2023",
    imageLink:
      "https://scontent.fkbl6-1.fna.fbcdn.net/v/t39.30808-6/383165889_122137072310007389_7666527922382381436_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=voueLqxPecIAX--m2Ua&_nc_ht=scontent.fkbl6-1.fna&oh=00_AfArLyFLHUFnVbeFlmHRbDtDd5ISF76xMgxgh-UjpzErDg&oe=65C91DE1",
    description:
      "I participated in the sixth round of the ICPC Asia West Continent Championship, a prestigious programming contest for college students ¹. Out of 50 teams, I ranked 23rd What made this experience even more remarkable was that I was the only person who did not have a computer science background among all the participants. This shows my passion, dedication, and talent for programming and problem-solving. I am proud of my accomplishment and eager to learn more and improve my skills.",
  },
];
for (let i = 0; i < posts.length; i++) {
  document.querySelector(
    ".recent-posts-card-list"
  ).innerHTML += ` <div class="posts-card">
  <img
    src="${posts[i].imageLink}"
    alt=""
  />

  <div class="post-data-info">
    <span class="date-of-post">${posts[i].dateOfPost}</span>
    <strong class="title-post">${posts[i].title}</strong>
    <p class="content-post">
    ${posts[i].description}
    </p>
  </div>
</div>`;
}
