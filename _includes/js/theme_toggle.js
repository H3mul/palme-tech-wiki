/**
 * Add listener for theme mode toggle
 */

const sessionAttr = 'data-theme';
const lightColorScheme = '{{ site.color_schemes.light }}';
const darkColorScheme = '{{ site.color_schemes.dark }}';

const Theme = {
    DARK: 'dark',
    LIGHT: 'light',
}

function setTheme(dark = true) {
    if (dark) {
        jtd.setTheme(darkColorScheme);
        document.documentElement.classList.add('dark');
    } else {
        jtd.setTheme(lightColorScheme);
        document.documentElement.classList.remove('dark');
    }
    sessionStorage.setItem(sessionAttr, dark ? Theme.DARK: Theme.LIGHT);
}


document.addEventListener('DOMContentLoaded', () => {
    const $toggle = document.querySelectorAll('button.theme-toggle');
    if (!$toggle) {
        return;
    }

    const sessionThemeType = sessionStorage.getItem(sessionAttr);
    const darkmodeSession = sessionThemeType && sessionThemeType == Theme.DARK;
    const darkmodePreferred = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (sessionThemeType !== null) {
        setTheme(darkmodeSession);
    } else {
        setTheme(darkmodePreferred);
    }

    $toggle.forEach(b => {
        b.addEventListener('click', () => setTheme(jtd.getTheme() === lightColorScheme));
    });
});