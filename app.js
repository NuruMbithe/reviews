const reviews = [
  {
    id: 1,
    name: "Michelle Owens",
    job: "Customer",
    img:
      "https://i.postimg.cc/x8W8LRM7/passport-3.jpg",
    text:
      "I'm so happy I bought your product! My partner also loves your product and we will be buying more."
  },
  {
    id: 2,
    name: "Joyce Johnson",
    job: "web designer",
    img:
      "https://i.postimg.cc/Y0xY3T2V/passport-1.webp",
    text:
      "Working with you to create my custom design as the best decision I ever made...Fantstic!!  ",
  },
  {
    id: 3,
    name: "Hillary James",
    job: "Business Owner",
    img:
      "https://i.postimg.cc/2jXZzdbn/passport-2.jpg",
    text:
      " i'm so happy to choose a really great site.My business has doubled theincome since orking with them!!"
  },
  {
    id: 4,
    name: "Bryan Jones",
    job: "CEO",
    img:
      "https://i.postimg.cc/RFkXyrBZ/passport-4.jpg",
    text:
      " I have never been so confident ith my business as this before. Relly Great Sites!!..They will take your businesses to the net Level.",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson( );
});

//show person based on item

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", function() {
  currentItem++;
  if(currentItem > reviews.length-1 ){
    currentItem = 0;
  }
  showPerson();
})

//sho prev person

prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0 ){
    currentItem = reviews.length - 1;
  }
  showPerson();
})

//show random person 
randomBtn.addEventListener("click", function(){
  currentItem = Math.floor(Math.random () * reviews.length);
  console.log(currentItem);
  showPerson();
});