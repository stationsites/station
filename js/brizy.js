

document.addEventListener('DOMContentLoaded', function() {
  // Check if the current domain is not in a specific list
  if (!isDomainInAllowedList()) {
    // Find all script elements with a specific class within sections
    var scriptElements = document.querySelectorAll('section script.brz-express');

    // Iterate through each script element
    scriptElements.forEach(function(script) {
      // Starting from the current script element
      var currentElement = script;

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
          // Modify the background image property
          currentElement.style.backgroundImage = 'url("https://ls.brizy.express/get-a-license.jpg")';
          break; // Stop further traversal for this section
        }
      }
    });
  }

  // Function to check if the current domain is in the allowed list
  function isDomainInAllowedList() {
    // List of allowed domains
    var allowedDomains = ['example.com', 'anotherdomain.com'];

    // Get the current domain
    var currentDomain = document.domain;

    // Check if the current domain is in the allowed list
    return allowedDomains.includes(currentDomain);
  }
});
