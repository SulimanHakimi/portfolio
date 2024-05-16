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
      "/img/Capture.PNG",
    liveDemo: "https://sulimanhakimi.github.io/rapiditeration-clone/",
    codeLink: "https://github.com/SulimanHakimi/rapiditeration-clone",
  },
  {
    id: 4,
    projectName: "Food Order App",
    imageLink:
      "/img/baobo.PNG",
    liveDemo: "https://sulimanhakimi.github.io/Kunduz-Kabob-WebApp/",
    codeLink: "https://github.com/SulimanHakimi/Kunduz-Kabob-WebApp",
  },
  {
    id: 5,
    projectName: "Quran Karim",
    imageLink:
      "/img/quran.PNG",
    liveDemo: "https://quran-karim-zeta.vercel.app/",
    codeLink: "https://github.com/SulimanHakimi/Quran-Karim",
  },
  {
    id: 6,
    projectName: "Binary Translator To English",
    imageLink:
      "/img/biary.PNG",
    liveDemo:
      "https://sulimanhakimi.github.io/translator-english-to-binary-and-binary-to-englis/",
    codeLink:
      "https://github.com/SulimanHakimi/translator-english-to-binary-and-binary-to-englis",
  },
  {
    id: 7,
    projectName: "Travel Journal",
    imageLink:
      "/img/travel.PNG",
    liveDemo: "https://travel-journal-pink.vercel.app/",
    codeLink: "https://github.com/SulimanHakimi/Travel-Journal",
  },
  {
    id: 8,
    projectName: "Learning Journal",
    imageLink:
      "/img/learing.PNG",
    liveDemo: "https://learning-jornal.vercel.app/",
    codeLink: "https://github.com/SulimanHakimi/learning-jornal",
  },
  {
    id: 9,
    projectName: "Movie Search App",
    imageLink:
      "/img/movie.PNG",
    liveDemo: "https://movie-app-taupe-tau.vercel.app/",
    codeLink: "https://github.com/SulimanHakimi/movie-app",
  },
];
// /////// project data

for (let i = 0; i < projects.length; i++) {
  document.querySelector(
    ".cards-list"
  ).innerHTML += ` <div id="${projects[i].id}" class="w-[320px] h-[400px] flex flex-col justify-around overflow-hidden items-center border border-black rounded-2xl">
    <img class="w-full h-4/6" src="${projects[i].imageLink}" alt="" />
    <span class="h-1/6 flex justify-center font-semibold text-[18px] items-center">${projects[i].projectName}</span>
    <div class="h-1/6">
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
