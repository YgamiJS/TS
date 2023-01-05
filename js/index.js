const playsElement = document.querySelector(".plays");

const plays = [
    // {
    //     image: "",
    //     imageTitle: "",
    //     title: ""
    // }
];

playsElement.innerHTML = plays.map(play => `<div class="play"><img src=${play.image} alt=${play.imageTitle}><p>${play.title}</p></div>`);