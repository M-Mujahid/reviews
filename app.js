const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "url('./Assets/person1.jpg')",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",

    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "url('./Assets/person2.jpg')",
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion salvia hoodie eaxe.photo booth jean shorts artisan narwhal.',

    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "url('./Assets/person3.jpg')",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal franzen hell of brook activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "url('./Assets/person4.jpg')",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, slow-car edis bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
];

console.log(reviews[0].text.length);

let reviewImg = document.querySelector(".reviewImage");
let reviewName = document.querySelector(".clientName");
let reviewJob = document.querySelector(".e reviewWork");
let reviewInfo = document.querySelector(".reviewParagraph");


let leftMove = document.querySelector(".leftIcon");
let rightMove = document.querySelector(".rightIcon");
let surpriseMe = document.querySelector(".surpriseMe")


// set starting item 

let currentItem = 0;


// show person based on item 

function showPerson(item) {
    reviewImg.style.backgroundImage = reviews[item].img;
    reviewName.textContent = reviews[item].name;
    reviewJob.textContent = reviews[item].job;
    reviewInfo.textContent = reviews[item].text;
}


// show next person 

rightMove.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;

    }

    showPerson(currentItem);
});


// show prev person 

leftMove.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);
});


// show random person

surpriseMe.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
});
