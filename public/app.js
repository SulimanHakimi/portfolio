let projects = [
  {
    id: 1,
    projectName: "Landing Page",
    imageLink: "/img/landing.jpeg",
    liveDemo: "https://sulimanhakimi.github.io/landing-page/",
    codeLink: "https://github.com/SulimanHakimi/assignment_1.git",
  },
  {
    id: 2,
    projectName: "Medical Website",
    imageLink: "/img/Medical website.PNG",
    liveDemo: "https://sulimanhakimi.github.io/Medical-Wbsite/",
    codeLink: "https://github.com/SulimanHakimi/Medical-Wbsite.git",
  },
  {
    id: 3,
    projectName: "Rapiditeration website",
    imageLink:
      "data:image/png;base64,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",
    liveDemo: "https://sulimanhakimi.github.io/rapiditeration-clone/",
    codeLink: "https://github.com/SulimanHakimi/rapiditeration-clone",
  },
  {
    id: 4,
    projectName: "Food Order App",
    imageLink:
      "data:image/png;base64,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",
    liveDemo: "https://sulimanhakimi.github.io/Kunduz-Kabob-WebApp/",
    codeLink: "https://github.com/SulimanHakimi/Kunduz-Kabob-WebApp",
  },
];
// /////// project data

for (let i = 0; i < projects.length; i++) {
  document.querySelector(
    ".cards-list"
  ).innerHTML += ` <div id="${projects[i].id}" class="w-[320px] h-[400px] flex flex-col justify-around overflow-hidden items-center border border-black rounded-2xl">
    <img class="w-full h-3/5" src="${projects[i].imageLink}" alt="" />
    <span class="h-1/5 flex justify-center font-semibold text-[18px] items-center">${projects[i].projectName}</span>
    <div class="h-1/5">
      <a class="py-2 px-4 rounded-xl font-semibold cursor-pointer border border-black hover:bg-black hover:text-white"
        target="_blank"
        href="${projects[i].codeLink}"
        >GitHub</a
      >
      <a
      class="py-2 px-4 rounded-xl font-semibold cursor-pointer border border-black hover:bg-black hover:text-white"
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
    { id: 1, name: "Node Js", level: "Excellent" },
    { id: 1, name: "Express Js", level: "Excellent" },
    { id: 1, name: "Mongo DB", level: "Fair" },
  ],
];
console.log(experience);
// ////// experience data frontend
for (let i = 0; i < experience[0].length; i++) {
  document.querySelector(
    ".experience-name-fr"
  ).innerHTML += `<div class="flex items-strat  min-w-10">
<i class="fa-solid fa-circle-check mt-2"></i>
<div class="flex flex-col py-1 px-2">
  <span class="font-semibold text-[18px]">${experience[0][i].name}</span>
  <p>${experience[0][i].level}</p>
</div>
</div>`;
}
// // backend
for (let i = 0; i < experience[1].length; i++) {
  document.querySelector(
    ".experience-name-se"
  ).innerHTML += `<div class="flex items-strat  min-w-10">
  <i class="fa-solid fa-circle-check mt-2"></i>
  <div class="flex flex-col py-1 px-2">
    <span class="font-semibold text-[18px]">${experience[1][i].name}</span>
    <p>${experience[1][i].level}</p>
  </div>
  </div>`;
}
// /////////////////////////////////
let posts = [
  {
    id: 4,
    title: "Watch my YouTube videos how i build projects",
    dateOfPost: "FEB 11,2024",
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJ6CY6jYVJ7gDp0ugJYhLQaWthq3IQyGxBQ&usqp=CAU",
    description: `I take a video of every project I make and upload it to YouTube so that everyone can see my samples <a href="https://www.youtube.com/channel/UC_-ZTxcj6qqV1bUXTvHv17A">here</a>.`,
  },
  {
    id: 3,
    title: "Playing in Kabul Elite chess competition",
    dateOfPost: "FEB 03,2024",
    imageLink: "/img/sulimanhakimiChess.jpeg",
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
    id: 1,
    title: "ICPC Asia West Kabul 2023",
    dateOfPost: "SEP 29,2023",
    imageLink: "https://kateb.edu.af/wp-content/uploads/2022/09/IMG_1553.jpg",
    description:
      "I participated in the sixth round of the ICPC Asia West Continent Championship, a prestigious programming contest for college students ¹. Out of 50 teams, I ranked 23rd What made this experience even more remarkable was that I was the only person who did not have a computer science background among all the participants. This shows my passion, dedication, and talent for programming and problem-solving. I am proud of my accomplishment and eager to learn more and improve my skills.",
  },
];
for (let i = 0; i < posts.length; i++) {
  document.querySelector(
    ".recent-posts-card-list"
  ).innerHTML += ` <div class="h-fit w-[320px] m-2 flex xursor-pointer flex-col gap-2 mb-7 overflow-hidden">
  <img
  class=" w-[300px] h-[200px]"
    src="${posts[i].imageLink}"
    alt=""
  />

  <div class="flex gap-2 flex-col items-start">
    <span class="text-sm font-light">${posts[i].dateOfPost}</span>
    <strong class="text-xl">${posts[i].title}</strong>
    <p class="w-full text-[#505050] line-clamp-4 ">
    ${posts[i].description}
    </p>
  </div>
</div>`;
}
