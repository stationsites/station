
var debuggingEnabled = true;

document.addEventListener('DOMContentLoaded', function() {
    // Fetch the domain list from the external .txt file
    fetch('https://raw.githubusercontent.com/64bakerst/station/main/js/brz-xpress.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Parse the data to extract the list of allowed domains
            var allowedDomains = data.split('\n').map(domain => domain.trim());

            // Get the current hostname
            var currentHostname = window.location.hostname;

            // Check if the current hostname is not in the allowed list or its subdomain
            if (!isDomainInAllowedList(allowedDomains, currentHostname)) {
                if (debuggingEnabled) {
                    console.log('Current domain is not in the allowed list or its subdomain.');
                }

                // Find all script elements with a specific class within sections
                var scriptElements = document.querySelectorAll('section script.brz-express');

                // Iterate through each script element
                scriptElements.forEach(function(script) {
                    // Find the nearest parent section
                    var parentSection = findParentSection(script);

                    if (parentSection) {
                        // Check if the section already has the div appended
                        if (!parentSection.querySelector('.brz-express-div')) {
                            // Modify the background image of ::after pseudo-element
                            var afterElement = document.createElement('div');
                            afterElement.className = 'brz-express-div'; // Add a class for identification
                            afterElement.style.content = '""';
                            afterElement.style.position = 'absolute!important';
                            afterElement.style.top = '0!important';
                            afterElement.style.right = '0!important';
                            afterElement.style.bottom = '0!important';
                            afterElement.style.left = '0!important';
                            afterElement.style.backgroundImage = 'url("https://brz-express.sirv.com/Images/get-a-license.png")!important';
                            afterElement.style.backgroundSize = '350px!important';
                            afterElement.style.zIndex = '9999999!important';

                            parentSection.appendChild(afterElement);
                            if (debuggingEnabled) {
                                console.log('Div appended to section:', parentSection);
                            }
                        } else {
                            if (debuggingEnabled) {
                                console.log('Div already exists in section:', parentSection);
                            }
                        }
                    } else {
                        console.error('Parent section not found.');
                    }
                });
            } else {
                if (debuggingEnabled) {
                    console.log('Current domain is in the allowed list or its subdomain.');
                }
            }
        })
        .catch(error => {
            console.error('Error fetching domain list:', error);
        });
});

// Function to check if the current domain is in the allowed list or its subdomain
function isDomainInAllowedList(allowedDomains, currentDomain) {
    // Check if the current domain is exactly the same as any of the allowed domains
    if (allowedDomains.includes(currentDomain)) {
        return true;
    }

    // Check if it's a subdomain of any allowed domain
    return allowedDomains.some(allowedDomain => currentDomain.endsWith('.' + allowedDomain));
}

// Function to find the nearest parent section of an element
function findParentSection(element) {
    var parent = element.parentNode;
    while (parent) {
        if (parent.tagName.toLowerCase() === 'section') {
            return parent;
        }
        parent = parent.parentNode;
    }
    return null;
}

