// let timeLeft = 30;
// const timerDisplay = document.getElementById('countdowntimer');
// const resendButton = document.getElementById('resendButton');
// const 

// const timer = setInterval(() => {
//     if (timeLeft <= 0) {
//         clearInterval(timer);
//         timerDisplay.innerText = "0";
//         resendButton.disabled = false; // Enable the "Resend OTP" button
//     } else {
//         timerDisplay.innerText = timeLeft;
//         timeLeft -= 1;
//     }
// }, 1000);

// // Redirect function placeholder
// function redirect() {
//     // Add your redirection logic here
// }

// // Optional: Reset the timer when "Resend OTP" button is clicked
// resendButton.addEventListener('click', () => {
//     timeLeft = 5;
//     resendButton.disabled = true;
//     timerDisplay.innerText = timeLeft;
//     setInterval(() => {
//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             resendButton.disabled = false;
//         } else {
//             timerDisplay.innerText = timeLeft;
//             timeLeft -= 1;
//         }
//     }, 1000);
// });

let timeLeft = 30;
const timerDisplay = document.getElementById('countdowntimer');
const resendText = document.getElementById('resendtext');
const resendLink = document.getElementById('resendLink');

function startTimer() {
    timeLeft = 30;
    resendLink.style.display = 'none'; // Hide the "Resend OTP" link
    resendText.style.display = 'block'; // Show the countdown timer text
    timerDisplay.innerText = timeLeft;

    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            resendText.style.display = 'none'; // Hide the countdown timer text
            resendLink.style.display = 'block'; // Show the "Resend OTP" link
        } else {
            timerDisplay.innerText = timeLeft;
            timeLeft -= 1;
        }
    }, 1000);
}

// Start the timer initially
startTimer();

// Handle "Resend OTP" link click
resendLink.addEventListener('click', () => {
    startTimer(); // Restart the timer when the link is clicked
});

// Redirect function placeholder
function redirect() {
    // Add your redirection logic here
}