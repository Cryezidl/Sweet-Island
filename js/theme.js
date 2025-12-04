// Theme switching functionality
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = this.themeToggle?.querySelector('.theme-icon');
        this.themeText = this.themeToggle?.querySelector('.theme-text');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        
        this.init();
    }
    
    init() {
        this.applyTheme(this.currentTheme);
        
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        this.updateButton();
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.updateButton();
        this.saveTheme();
    }
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        this.updateMetaThemeColor(theme);
    }
    
    updateMetaThemeColor(theme) {
        let metaThemeColor = document.querySelector("meta[name=theme-color]");
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.content = theme === 'dark' ? '#1a1a1a' : '#ffffff';
    }
    
    updateButton() {
        if (this.themeIcon && this.themeText) {
            if (this.currentTheme === 'dark') {
                this.themeIcon.textContent = '☀️';
                this.themeText.textContent = 'Светлая тема';
            } else {
                this.themeIcon.textContent = '🌙';
                this.themeText.textContent = 'Темная тема';
            }
        }
    }
    
    saveTheme() {
        localStorage.setItem('theme', this.currentTheme);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});

