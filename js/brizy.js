document.addEventListener('DOMContentLoaded', function() {
  // Starting from the script element
  var currentElement = document.querySelector('script');

  // Traverse upward through nested <div> elements until a <section> is found
  while (currentElement && currentElement.tagName.toLowerCase() !== 'section') {
    currentElement = currentElement.parentNode;

    // Check if the current element is null (reached the top of the DOM)
    if (!currentElement) {
      console.error('Section not found in parent elements.');
      break;
    }

    // Optionally, you can add a check to stop if it encounters a <section>
    if (currentElement.tagName.toLowerCase() === 'section') {
      break;
    }
  }

  // Check if the currentElement is a <section>
  if (currentElement && currentElement.tagName.toLowerCase() === 'section') {
    // Modify the background image property
    currentElement.style.backgroundImage = 'url("your-image-url.jpg")';
  }
});
