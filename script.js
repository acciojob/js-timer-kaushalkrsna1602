function updateTimer() {
    const now = new Date();

    // Get day, month, year
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = now.getFullYear();

    // Get hours, minutes, seconds
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Format the date and time string
    const formattedDate = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    // Display the formatted date and time in the <p> tag with id="timer"
    document.getElementById('timer').textContent = formattedDate;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initialize the timer display when the page loads
updateTimer();
