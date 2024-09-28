// Get the preloader and video elements
const preloader = document.getElementById('preloader');
const video = document.getElementById('preloader-video');

// Set a timer for 5 seconds
const preloaderDuration = 5000; // 5 seconds

// Function to hide the preloader after 5 seconds
setTimeout(() => {
    preloader.style.display = 'none'; // Hide the preloader
    document.getElementById('main-content').style.display = 'block'; // Show the main content
}, preloaderDuration);

// Loop the video if it ends before 5 seconds
video.addEventListener('ended', () => {
    video.currentTime = 0; // Reset video to the start
    video.play(); // Play the video again
});



//-------------------------------------------------------------------------------------------------------------------------------


// Preloader ends when the loading completes
// Get the preloader and main content elements
// const preloader = document.getElementById('preloader');
// const mainContent = document.getElementById('main-content');

// // Event listener for the window load event
// window.addEventListener('load', () => {
//     // Hide the preloader once the page is fully loaded
//     preloader.style.display = 'none';
//     mainContent.style.display = 'block'; // Show the main content
// });
