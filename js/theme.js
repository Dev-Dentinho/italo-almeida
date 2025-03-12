const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('dark-theme');
    const isDarkMode = body.classList.contains('dark-theme');
    
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeIcon(isDarkMode);
}

function updateThemeIcon(isDarkMode) {
    themeIcon.classList.toggle('fa-moon', !isDarkMode);
    themeIcon.classList.toggle('fa-sun', isDarkMode);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check localStorage for previous theme preference
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme === null) {
        // Default to dark theme
        body.classList.add('dark-theme');
        updateThemeIcon(true);
    } else {
        // Restore previous theme preference
        const isDarkMode = savedTheme === 'true';
        body.classList.toggle('dark-theme', isDarkMode);
        updateThemeIcon(isDarkMode);
    }

    // Ensure theme toggle works on mobile
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// Add touch support for theme toggle
if (themeToggle) {
    themeToggle.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent touch delay
        toggleTheme();
    });
}