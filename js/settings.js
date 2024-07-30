document.addEventListener('DOMContentLoaded', function() {
    function applySavedSettings() {
        // Retrieve saved title from local storage and set it
        const savedTitle = localStorage.getItem('tabName');
        if (savedTitle) {
            document.title = savedTitle;
        }

        // Retrieve saved favicon URL from local storage and set it
        const savedIconUrl = localStorage.getItem('iconUrl');
        if (savedIconUrl) {
            let link = document.querySelector("link[rel='shortcut icon'], link[rel='icon']");
            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }
            link.href = savedIconUrl;
        }

        // Retrieve saved panic key from local storage
        const savedPanicKey = localStorage.getItem('panickey');
        const savedPanicUrl = localStorage.getItem('panicurl') || 'https://google.com';

        // Set up the panic key listener
        if (savedPanicKey) {
            document.addEventListener('keydown', (e) => {
                if (e.key === savedPanicKey) {
                    window.location.replace(savedPanicUrl);
                }
            });
        }
    }

    // Apply settings on page load
    applySavedSettings();
});
