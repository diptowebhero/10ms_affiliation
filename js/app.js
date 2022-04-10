// for accordion
const accordion = document.getElementsByClassName("content-box");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
// for modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const innerModal = document.querySelector(".inner_modal");

const videoBtn = document.querySelectorAll(".video_btn");

overlay.onclick = function () {
  modal.style.display = "none";
  location.reload();
};
[...videoBtn].forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.id === "video_btn1") {
      modalOpen();
      innerModal.innerHTML = `
        <iframe id="iframe"
                _ngcontent-shg-c174=""
                src="https://www.youtube.com/embed/MQR7GuU-QP8"
                class="yt-player-container"
              ></iframe>
        `;
    } else if (e.target.id === "video_btn2") {
      modalOpen();
      innerModal.innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/khhhjg58PEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    } else if (e.target.id === "video_btn3") {
      modalOpen();
      innerModal.innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/C1WXwbigVPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    }
  });
});
function modalOpen() {
  modal.style.display = "block";
}
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1
  }
}, 4000);
