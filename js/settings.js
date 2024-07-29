// Function to set the favicon
function setFavicon(url) {
    let link = document.querySelector("link[rel='shortcut icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'shortcut icon';
        document.head.appendChild(link);
    }
    link.href = url;
}

// Function to set the page title
function setTitle(title) {
    document.title = title;
}

// Function to set the panic key
function setPanicKey(key) {
    // Store the panic key in local storage
    localStorage.setItem("panickey", key);
}

// Retrieve and apply settings from local storage
function applySettings() {
    // Retrieve favicon URL from local storage
    const favicon = localStorage.getItem("tabIcon");
    if (favicon) {
        setFavicon(favicon);
    }

    // Retrieve page title from local storage
    const title = localStorage.getItem("tabName");
    if (title) {
        setTitle(title);
    }

    // Retrieve panic key from local storage
    const panicKey = localStorage.getItem("panickey");
    if (panicKey) {
        setPanicKey(panicKey);
    }
}

// Call the function to apply settings
applySettings();
