// Select the video preview element
const previewVideo = document.getElementById('preview-video');

// Create an audio element for each click action to ensure the audio plays smoothly
let currentAudio = null;

// Function to play the video and audio on click
function handleClick(event) {
    const audioItem = event.currentTarget; // Ensure it's the div with audio item
    const videoSrc = audioItem.getAttribute('data-video');
    const audioSrc = audioItem.getAttribute('data-audio');

    // Set the video source and play the video
    previewVideo.src = videoSrc;
    previewVideo.play();

    // Create a new audio object if it's not already playing
    if (currentAudio) {
        currentAudio.pause(); // Pause the previous audio if it's playing
        currentAudio.currentTime = 0; // Reset the audio to start from the beginning
    }

    currentAudio = new Audio(audioSrc); // Create a new audio object
    currentAudio.play(); // Play the new audio
}

// Function to stop video and audio (optional if you want to stop on clicking again)
function handleStop() {
    // Pause video and reset to beginning
    previewVideo.pause();
    previewVideo.currentTime = 0;

    // Stop and reset audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

// Attach event listeners to each audio item
document.querySelectorAll('.audio-item').forEach(item => {
    item.addEventListener('click', handleClick);  // On click start audio/video
});


function togglePlay(audioId) {
    const audio = document.getElementById(audioId);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
  function updateProgress(audioId, value) {
    const audio = document.getElementById(audioId);
    const progress = audio.duration * (value / 100);
    audio.currentTime = progress;
  }
  
  function toggleMute(audioId) {
    const audio = document.getElementById(audioId);
    audio.muted = !audio.muted;
  }