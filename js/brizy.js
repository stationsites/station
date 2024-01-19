

document.addEventListener('DOMContentLoaded', function() {
  // Fetch the list of allowed domains from an external source
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://raw.githubusercontent.com/64bakerst/station/main/js/brz-xpress.txt', true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var allowedDomains = xhr.responseText.split('\n').map(function(domain) {
        return domain.trim();
      });

      // Check if the current domain is not in the allowed list
      if (!isDomainInAllowedList(allowedDomains)) {
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
              currentElement.style.backgroundImage = 'url("https://brz-express.sirv.com/Images/get-a-license.png")';
              break; // Stop further traversal for this section
            }
          }
        });
      }
    }
  };

  xhr.send();

  // Function to check if the current domain is in the allowed list
  function isDomainInAllowedList(allowedDomains) {
    // Get the current domain
    var currentDomain = document.domain;

    // Check if the current domain is in the allowed list
    return allowedDomains.includes(currentDomain);
  }
});

