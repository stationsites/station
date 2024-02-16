document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/64bakerst/station/main/js/brz-xpress.txt', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var allowedDomains = xhr.responseText.split('\n').map(function(domain) {
                    return domain.trim();
                });
                handleAllowedDomains(allowedDomains);
            } else {
                console.error('Failed to fetch allowed domains:', xhr.statusText);
            }
        }
    };

    xhr.send();

    function handleAllowedDomains(allowedDomains) {
        // Get the current domain
        var currentDomain = document.domain;

        // Check if the current domain is in the allowed list
        if (!allowedDomains.includes(currentDomain)) {
            var scriptElements = document.querySelectorAll('section script.brz-express');
            scriptElements.forEach(function(script) {
                var currentElement = script;
                var sectionWithDivAdded = false;
                while (currentElement && currentElement.tagName.toLowerCase() !== 'section') {
                    currentElement = currentElement.parentNode;
                    if (!currentElement) {
                        console.error('Section not found in parent elements.');
                        break;
                    }
                    if (currentElement.tagName.toLowerCase() === 'section' && !sectionWithDivAdded) {
                        if (!currentElement.querySelector('.license')) {
                            var afterElement = document.createElement('div');
                            afterElement.classList.add('license');
                            afterElement.style.content = '""';
                            afterElement.style.position = 'absolute';
                            afterElement.style.top = '0';
                            afterElement.style.right = '0';
                            afterElement.style.bottom = '0';
                            afterElement.style.left = '0';
                            afterElement.style.backgroundImage = 'url("https://brz-express.sirv.com/Images/get-a-license.png")';
                            afterElement.style.backgroundSize = '350px';
                            afterElement.style.zIndex = '9999999';

                            currentElement.appendChild(afterElement);
                            sectionWithDivAdded = true;
                        }
                    }
                }
            });
        }
    }
});
