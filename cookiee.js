// Cookie Functions
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;SameSite=Lax`;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length));
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Welcome Message Functionality
function displayWelcomeMessage() {
    const welcomeContainer = document.getElementById('welcomeContainer');
    const firstName = getCookie('patient_first_name');
    const rememberMe = getCookie('remember_me') === 'true';

    if (firstName && rememberMe) {
        welcomeContainer.innerHTML = `
            <div class="welcome-message">Welcome back, ${firstName}!</div>
            <div class="not-user-link" onclick="handleNotUserClick()">
                Not ${firstName}? Click here to start as a new user.
            </div>
        `;
    } else {
        welcomeContainer.innerHTML = `
            <div class="welcome-message">Welcome to Sunset Medical!</div>
        `;
    }
}

// Function to handle "Not [Name]?" click
function handleNotUserClick() {
    // Delete the user's name cookie
    document.cookie = 'patient_first_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    // Update the welcome message immediately
    const welcomeContainer = document.getElementById('welcomeContainer');
    welcomeContainer.innerHTML = `
        <div class="welcome-message">Welcome to Sunset Medical!</div>
    `;
    
    // Optional: Show a quick confirmation
    alert("Welcome new user! Your previous data has been cleared.");
}

// Make the function available globally
window.handleNotUserClick = handleNotUserClick;
// Save Form Data
function saveFormData() {
    const rememberMe = document.getElementById('remember_me').checked;
    setCookie('remember_me', rememberMe, 2); // 2 day expiration
    
    if (!rememberMe) {
        // If "Remember Me" is unchecked, clear cookies but don't reset form
        deleteCookie('patient_first_name');
        deleteCookie('remember_me');
        return;
    }
    
    // Save first name
    const firstName = document.getElementById('first_name').value;
    if (firstName) {
        setCookie('patient_first_name', firstName, 2);
    }
}

// Load Form Data
function loadFormData() {
    if (getCookie('remember_me') !== 'true') return;
    
    const firstName = getCookie('patient_first_name');
    if (firstName) {
        document.getElementById('first_name').value = firstName;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Display welcome message
    displayWelcomeMessage();
    
    // Load saved form data
    loadFormData();
    
    // Set up event listeners
    document.getElementById('remember_me').addEventListener('change', function() {
        saveFormData();
    });
    
    // Save data when form fields change
    document.getElementById('first_name').addEventListener('input', saveFormData);
    
    // Clear data on form reset if "Remember Me" is unchecked
    document.getElementById('reset').addEventListener('click', function() {
        if (!document.getElementById('remember_me').checked) {
            handleNotUserClick();
        }
    });
    
    // Clear data on form submit if "Remember Me" is unchecked
    document.getElementById('patientForm').addEventListener('submit', function() {
        if (!document.getElementById('remember_me').checked) {
            deleteCookie('patient_first_name');
            deleteCookie('remember_me');
        }
    });
});

// Make functions available globally
window.handleNotUserClick = handleNotUserClick;