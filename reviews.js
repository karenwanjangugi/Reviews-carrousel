const reviews = [
    {
        id:1,
        name: "John Rings",
        position: "Designer",
        img:
            "John.jpeg",
        text:
            "The headphones were on. They had been utilized on purpose. She could hear her mom yelling in the background, but couldn't make out exactly what the yelling was above" 
    },{
        id:2,
        name: "Joan Truman",
        position: "Designer",
        img:
            "joan.jpg",
        text:
            "He wondered if he should disclose the truth to his friends. It would be a risky move. Yes, the truth would make things a lot easier if they all stayed on the same page, but the truth might fracture the group leaving everything in even more of a mess than it was not telling the truth" 
    },{
        id:3,
        name: "Theodore James",
        position: "Actor",
        img:
            "Theo.webp",
        text:
            "here are a number of reasons you may need a block of text and when you do, a random paragraph can be the perfect solution. If you happen to be a web designer and you need some random text to show in your layout, a random paragraph can be an excellent way to do this. " 
    },{
        id:4,
        name: "Michael Jordan",
        position: "Basketball player ",
        img:
            "Michael.jpg",
        text:
            "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project." 
    }

]

const author = document.getElementById("author")
const position = document.getElementById("position")
const img = document.getElementById("person-image")
const info = document.getElementById("info")


const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentReview = 0



function showPerson(index){
    const person = reviews[index];
    img.src = person.img;
    author.textContent = person.name;
    position.textContent = person.position;
    info.textContent = person.text;
}

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentReview);
    
});


nextBtn.addEventListener("click", () => {
    currentReview++;
    if(currentReview > reviews.length-1){
      currentReview = 0;
    }
    showPerson(currentReview);
})

prevBtn.addEventListener("click", () => {
    currentReview--;
    if(currentReview < 0){
      currentReview = reviews.length-1;
    }
    showPerson(currentReview);
})

randomBtn.addEventListener("click", () => {
    currentReview = Math.floor(Math.random() * reviews.length);
    showPerson(currentReview);
})


