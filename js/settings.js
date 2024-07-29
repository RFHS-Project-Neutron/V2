document.addEventListener('DOMContentLoaded', function() {
    // Function to apply settings from local storage
    function applyStoredSettings() {
        // Apply tab name from local storage
        var storedTabName = localStorage.getItem('tabName');
        if (storedTabName) {
            document.title = storedTabName;
        }

        // Apply favicon from local storage
        var storedIconUrl = localStorage.getItem('iconUrl');
        if (storedIconUrl) {
            var link = document.querySelector("link[rel='shortcut icon'], link[rel='icon']");
            if (link) {
                link.href = storedIconUrl;
            } else {
                link = document.createElement('link');
                link.rel = 'icon';
                link.href = storedIconUrl;
                document.head.appendChild(link);
            }
        }

        // Apply panic key from local storage
        var storedPanicKey = localStorage.getItem('panickey');
        if (storedPanicKey) {
            var panicKeyInput = document.querySelector('.set-panic-key-box');
            if (panicKeyInput) {
                panicKeyInput.value = storedPanicKey;
            }
        }

        // Apply panic URL from local storage
        var storedPanicUrl = localStorage.getItem('panicurl') || 'https://google.com';
        var panicUrlInput = document.querySelector('.set-panic-url-box');
        if (panicUrlInput) {
            panicUrlInput.value = storedPanicUrl;
        }

        // Handle Panic Key Press
        document.addEventListener('keydown', (e) => {
            if (storedPanicKey && e.key === storedPanicKey) {
                window.location.replace(storedPanicUrl);
            }
        });
    }

    // Apply settings on page load
    applyStoredSettings();
});
