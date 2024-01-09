alert("a");

// const btnCapture = document.getElementById("btnCapture");
const btnCapture = document.querySelector("button");

btnCapture.addEventListener("click", async () => {
  alert("aaaaaaaaaaaaa");
  const media = await navigator.mediaDevices.getDisplayMedia({
    video: { frameRate: { ideal: 30 } },
  });

  const mediaRecorder = new MediaRecorder(media, {
    mimeType: "video/webm; codecs=vp8, opus",
  });
  merdiaRecorder.start();

  const [video] = media.getVideoTracks();
  video.addEventListener("ended", () => {
    mediaRecorder.stop();
  });

  mediaRecorder.addEventListener("dataavailable", (e) => {
    // const videoFile = new File([e.data], 'video.mp4', { type: e.data.type });
    // const a = document.createElement('a');
    // a.download = videoFile.name;
    // a.href = URL.createObjectURL(videoFile);
    // a.click();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(e.data);
    link.download = "capture.webm";
    link.click();
  });
});
