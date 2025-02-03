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
    } else {
        jtd.setTheme(lightColorScheme);
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