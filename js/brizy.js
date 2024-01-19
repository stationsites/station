/ Function to fetch remote domainImages and set background image for the parent section
async function setBackgroundImage() {
    // Fetch the remote JSON file
    const response = await fetch('https://example.com/images.json');

    if (response.ok) {
        // Parse the JSON response
        const domainImages = await response.json();

        // Get the current domain
        const currentDomain = window.location.hostname;

        // Set the background image based on the domain for the parent section
        const backgroundImageUrl = domainImages[currentDomain] || 'default_image.jpg';
        document.querySelector('section').style.backgroundImage = `url("${backgroundImageUrl}")`;
    } else {
        console.error('Failed to fetch domainImages:', response.status, response.statusText);
    }
}

// Call the function when the page loads
window.onload = setBackgroundImage;
