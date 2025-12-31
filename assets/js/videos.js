document.addEventListener("DOMContentLoaded", () => {
  const videoItems = document.querySelectorAll(".video-item");
  const videoAffichage = document.getElementById("video-affichage");

  function loadVideo(youtubeId) {
    videoAffichage.innerHTML = `
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/${youtubeId}?autoplay=1"
        title="Vidéo YouTube"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    `;
  }

  //  Charge la première vidéo au chargement
  if (videoItems.length > 0) {
    loadVideo(videoItems[0].dataset.id);
  }

  // Change la vidéo au clic
  videoItems.forEach((item) => {
    item.addEventListener("click", () => {
      videoItems.forEach((v) => v.classList.remove("active"));
      item.classList.add("active");
      loadVideo(item.dataset.id);
    });
  });
});
