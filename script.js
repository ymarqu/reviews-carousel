let left = document.querySelector(".left");
let right = document.querySelector(".right");
let author = document.querySelector("#author");
let authorImg = document.querySelector(".reviwer-img");
let reviewText = document.querySelector(".info");
let authorJob = document.querySelector("#job");
let randomBtn = document.querySelector(".random");
let position = 0;

let reviews = [{
    name: "Jane Doe",
    job: "Software Enginner",
    img: "images/man1.avif",
    review: "'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'"


}, {
    name: "Chris Cringle",
    job: "Web Dev",
    img: "images/man2.jpeg",
    review: "'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'"
}, {
    name: "Susan Smith",
    job: "Customer Success Associate",
    img: "images/woman2.webp",
    review: "'Curabitur mattis nisl eu ornare faucibus. Donec vitae rutrum urna, vitae malesuada purus. Proin maximus tellus non dolor iaculis vulputate. Suspendisse malesuada magna quis massa varius, in tristique ligula hendrerit. Nunc tristique a diam eget feugiat. Cras nunc arcu, tristique at interdum vitae.'"
},{
name: "Allison Gamer",
job: "Account Manager",
img: "images/woman3.webp",
review: "'Donec blandit sapien sed sodales dictum. Vestibulum imperdiet sit amet risus et volutpat. Nam rutrum porta orci, ac fermentum sapien aliquet id. Vestibulum at elit aliquet, efficitur lacus nec'"},
{
    name: "Raul Thompson",
    job: "Software Dev Manager",
    img: "images/man3.jpeg",
    review: "'Pellentesque semper, erat in interdum lacinia, est lacus finibus nulla, ut molestie erat augue quis ipsum. Ut placerat eleifend augue nec pretium. In blandit ex non ex gravida vulputate. Nullam lacinia nec lacus nec malesuada. Nunc id purus quam. Nam pulvinar sit amet mi sit amet egestas.'"
}, {
    name: "Dahlia Gomez",
    job: "Program Coordinator",
    img: "images/woman4.jpeg",
    review: "'Ut placerat eleifend augue nec pretium. In blandit ex non ex gravida vulputate. Nullam lacinia nec lacus nec malesuada. Nunc id purus quam. Nam pulvinar sit amet mi sit amet egestas.'"
}
]
function random(min, max){
    let rand = Math.floor(Math.random() * (max - min) + min);

    return rand % max;

}

window.addEventListener("load", () =>{
changeDisplay(position);
})

left.addEventListener("click", () => {
    console.log("left")
    position -= 1
   position = (((position) % reviews.length) + reviews.length) % reviews.length;
    changeDisplay(position)
});
right.addEventListener("click", () => {
    console.log("right")
    position = (position +1) % reviews.length;
    changeDisplay(position)

})
randomBtn.addEventListener("click", () => {
    randomPos = random(0, reviews.length);
    changeDisplay(randomPos);
})

function changeDisplay(pos){
    author.innerHTML = reviews[pos].name;
    authorImg.src = reviews[pos].img;
    authorJob.innerHTML = reviews[pos].job;
    reviewText.innerHTML = reviews[pos].review;
   position
}
