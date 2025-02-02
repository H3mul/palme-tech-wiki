/**
 * Add listener for theme mode toggle
 */

const modeAttr = 'data-dark-mode';
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
    sessionStorage.setItem(modeAttr, dark ? Theme.DARK: Theme.LIGHT);
}


document.addEventListener('DOMContentLoaded', () => {
    const $toggle = document.getElementById('mode-toggle');
    if (!$toggle) {
        return;
    }

    const darkModeSessionRaw = sessionStorage.getItem(modeAttr);
    const darkModeSession = darkModeSessionRaw && darkModeSessionRaw == Theme.DARK;
    const darkmodePreferred = window.matchmedia && window.matchmedia('(prefers-color-scheme: dark)').matches

    if (!darkModeSessionRaw) {
        setTheme(darkmodePreferred);
    }
    else {
        setTheme(darkModeSession);
    }

    $toggle.addEventListener('click', () => {
        setTheme(jtd.getTheme() === lightColorScheme);
    });
});