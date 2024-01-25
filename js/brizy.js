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
              // Apply styles to the section and use ::after for background image
              currentElement.style.position = 'relative';
              currentElement.style.overflow = 'hidden'; // Ensure ::after covers the entire section

              currentElement.style::after {
                content: '""';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-image: url("https://brz-express.sirv.com/Images/get-a-license.png");
                background-attachment: fixed;
                background-size: 500px;
                z-index: 999999999; // Higher z-index to cover content
              };

              // Set z-index of content and sub-divs
              var contentAndSubDivs = currentElement.querySelectorAll(':not(::after)');
              contentAndSubDivs.forEach(function(element) {
                element.style.zIndex = '-1'; // Ensure they are behind ::after
              });

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
