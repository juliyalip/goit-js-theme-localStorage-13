import { checkTheme } from "../../../../interesting/js-DZ/dz-10/src/theme";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


export const bodyEl = document.querySelector('body')
export const inputEl = document.querySelector('.theme-switch__toggle');

document.addEventListener('DOMContentLoaded', checkTheme)


export function onChangeInputChecked(e) {
    if (e.target.checked) {
        bodyEl.classList.remove(Theme.LIGHT)
        bodyEl.classList.add(Theme.DARK);
       localStorage.setItem('theme',  'dark')
    }
    else {
        bodyEl.classList.remove(Theme.DARK)
        bodyEl.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', 'light')
    }
};



// считывает из localStorage

export function CheckTheme() {
    if (localStorage.getItem('theme' === 'dark')) {
        bodyEl.classList.add(Theme.DARK);
        inputEl.checked === true
    
    } else {
        bodyEl.classList.add(Theme.LIGHT);
        inputEl.checked === false
    }
} 


