import "./styles.css";

document.getElementById("app");
const video = document.getElementById("blender");
const toggle_button = document.getElementById("toggle-button");
const disable_button = document.getElementById("disable-button");

toggle_button.addEventListener("click", (ev) => {
  if (document.pictureInPictureElement) {
    document
      .exitPictureInPicture()
      .then(() => console.log("Video not now in Picture-in-Picture"))
      .catch(console.log);
  } else {
    video
      .requestPictureInPicture()
      .then((pipWindow) => {
        pipWindow.addEventListener("resize", (ev) => {
          console.log(pipWindow.width, pipWindow.height);
        });
      })
      .then(() => console.log("Video now in Picture-in-Picture"))
      .catch(console.log);
  }
});

const changeDisableButton = () => {
  const txt = disable_button.innerHTML;
  console.log(disable_button.innerHTML);
  console.log(disable_button.innerHTML === "Picture-in-Picture Enabled");
  const isEnabled = txt === "Picture-in-Picture Enabled";
  disable_button.innerHTML = isEnabled
    ? "Picture-in-Picture Disabled"
    : "Picture-in-Picture Enabled";
  disable_button.style["background-color"] = isEnabled ? "red" : "green";
};

disable_button.addEventListener("click", async (ev) => {
  if (document.pictureInPictureElement) {
    await document.exitPictureInPicture();
  }
  changeDisableButton();
  video.disablePictureInPicture = !video.disablePictureInPicture;
});
