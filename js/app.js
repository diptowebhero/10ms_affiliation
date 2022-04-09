// for accordion
const accordion = document.getElementsByClassName("content-box");
for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click",function(){
        this.classList.toggle("active")
    })
}
// for modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const videoBtn = document.querySelectorAll(".video_btn");

overlay.onclick = function(){
    modal.style.display = "none";
};
[...videoBtn].forEach(btn=>{
    btn.addEventListener("click",function(){
        modal.style.display = "block";
    })
})
