// Function to check the user's IP address
function checkIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const allowedIPs = ['69.4.98.194']; // Add the allowed IP addresses here
            if (allowedIPs.includes(data.ip)) {
                displayTimeoutScreen(); // Show the timeout screen if IP matches
            }
        })
        .catch(error => console.error('Error fetching IP:', error));
}

// Function to create and display the timeout screen
function displayTimeoutScreen() {
    // Create overlay div
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.color = '#fff';
    overlay.style.fontFamily = 'Arial, sans-serif';
    
    // Create message
    const message = document.createElement('h1');
    message.textContent = 'River Falls High School is having a timeout from Project Neutron due to the following reasons:';
    overlay.appendChild(message);
    
    // Create bulleted reasons
    const reasons = ['Misuse: Not listening to teachers and playing games when teachers are giving insructions.'];
    const ul = document.createElement('ul');
    reasons.forEach(reason => {
        const li = document.createElement('li');
        li.textContent = reason;
        ul.appendChild(li);
    });
    overlay.appendChild(ul);
    
    // Create countdown timer
    const countdown = document.createElement('h2');
    overlay.appendChild(countdown);

    // Append overlay to the body
    document.body.appendChild(overlay);

    // Set the countdown timer (5 minutes for example)
    let timeLeft = 5 * 60; // 5 minutes in seconds
    const countdownInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        countdown.textContent = `Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timeLeft--;

        // When the countdown ends, remove the overlay
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.body.removeChild(overlay);
        }
    }, 1000);
}

// Call the IP check function when the page loads
window.onload = checkIP;
