document.getElementById('yesBtn').addEventListener('click', function() {
    // First, fade out the background (question and buttons)
    let container = document.querySelector('.container');
    container.style.transition = 'opacity 1s ease-out';
    container.style.opacity = '0';

    // Then, after 1s (fade-out duration), start displaying the video, ILY text, and DVD bouncing image
    setTimeout(function() {
        // Fade the background to transparent
        document.body.style.transition = 'background 1s ease-out';
        document.body.style.background = 'transparent'; // Fade to transparent background

        // Create and display the video element (MP4)
        let videoElement = document.createElement('video');
        videoElement.src = 'ckc.mp4'; // Path to your local MP4 file
        videoElement.autoplay = true;
        videoElement.loop = true;  // Ensure the video loops continuously
        videoElement.style.width = '500px'; // Dynamically set size
        videoElement.style.height = 'auto'; // Maintain aspect ratio
        videoElement.style.position = 'absolute';
        videoElement.style.top = '50%';
        videoElement.style.left = '50%';
        videoElement.style.transform = 'translate(-50%, -50%)';
        videoElement.style.display = 'block'; // Make sure video is displayed
        document.body.appendChild(videoElement);

        // Create the ILY overlay
        let ilyOverlay = document.createElement('div');
        ilyOverlay.id = 'ilyOverlay';
        ilyOverlay.innerText = 'I LOVE YOUUUUS JANU MA';
        document.body.appendChild(ilyOverlay);

// Create the bouncing image (DVD-style)
let bouncingImage = document.createElement('img');
bouncingImage.src = 'pp.jpg'; // Front page image
bouncingImage.classList.add('bouncing-image');

// Set the size of the image to 60x60px
bouncingImage.width = 90;
bouncingImage.height = 90;

document.body.appendChild(bouncingImage);

    }, 1000); // Wait for the fade-out to complete before starting the video and text

    // Optionally, you can add other animations here to start once the video is visible
    // (e.g., fade-in video, make other elements appear with different timings)
});

let noBtn = document.getElementById('noBtn');
let count = 0;

noBtn.addEventListener('click', function() {
    if (count < 1) {
        // Shrink the "No" button once
        noBtn.classList.add('shrinking-btn');
        count++;
    } else {
        // After shrinking, move the "No" button randomly around the screen
        noBtn.style.position = 'absolute';
        noBtn.style.left = Math.random() * window.innerWidth + 'px';
        noBtn.style.top = Math.random() * window.innerHeight + 'px';
    }

    // Show emojis after the "No" button starts moving
    if (count >= 1) {
        setTimeout(function() {
            // Create multiple custom emojis from your PNG file
            for (let i = 0; i < 10; i++) {
                let emoji = document.createElement('img');
                emoji.src = 'cry.png'; // Path to your custom PNG for rain
                emoji.classList.add('emoji-shower');

                // Randomize position of the emoji on the screen
                emoji.style.left = Math.random() * window.innerWidth + 'px';
                emoji.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall speed
                document.body.appendChild(emoji);

                // Remove the emoji after the animation ends
                setTimeout(() => emoji.remove(), 3000);
            }
        }, 500);
    }
});
document.getElementById('yesBtn').addEventListener('click', function() {
    // Hide the question and buttons
    let container = document.querySelector('.container');
    container.innerHTML = '';  // Remove the buttons and heart image

    // Display the "I Love You" text
    let yesText = document.createElement('div');
    yesText.innerText = "THIS QUICK SECRET MSG FOR U CUTES :P";
    yesText.style.position = 'absolute';
    yesText.style.fontSize = '2rem';
    yesText.style.color = 'white';
    yesText.style.bottom = '30px';  // Position it at the bottom
    yesText.style.zIndex = '9999';  // Ensure it stays on top
    document.body.appendChild(yesText);

    // Start the flower rain effect
    for (let i = 0; i < 20; i++) {  // Create 20 flowers falling
        let flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * window.innerWidth + 'px';  // Randomize horizontal position
        flower.style.animationDuration = Math.random() * 3 + 2 + 's';  // Randomize fall speed
        document.body.appendChild(flower);

        // Remove the flower after its animation
        setTimeout(() => flower.remove(), 5000); // Flower stays for 5 seconds before being removed
    }

    // Optional: Add a video, animation, or other elements
});
document.getElementById('yesBtn').addEventListener('click', function() {
    // Change the background to yes.jpg when Yes is clicked
    document.body.style.backgroundImage = 'url(yes.jpg)';
    document.body.style.transition = 'background 1s ease-out'; // Optional smooth transition for the background

    // Other actions for video, etc.
});
