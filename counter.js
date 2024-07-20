// Get references to the DOM elements
const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('incrementButton');

// Initialize the counter
let counter = 0;

// Add event listener to the button
incrementButton.addEventListener('click', () => {
    // Increment the counter
    counter++;

    // Update the display
    countDisplay.textContent = counter;
});
