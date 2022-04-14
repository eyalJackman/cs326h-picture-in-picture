import "./styles.css";

document.getElementById("app");
const video = document.getElementById("blender");
const button = document.getElementById("button");

button.addEventListener("click", (ev) => {
  if (document.pictureInPictureElement) {
    document
      .exitPictureInPicture()
      .then(() => console.log("Video not now in Picture-in-Picture"))
      .catch(console.log);
  } else {
    console.log(video);
    video
      .requestPictureInPicture()
      .then(() => console.log("Video now in Picture-in-Picture"))
      .catch(console.log);
  }
});
