import './styles.css';
import menu from './menu.json';
import menuItemTpl from './template/menuItems.hbs';
import { inputEl, onChangeInputChecked } from './theme';





const menuContainer = document.querySelector('.js-menu');

const menuListMarkup = menu.map(menuItemTpl).join('');

menuContainer.insertAdjacentHTML('beforeend', menuListMarkup);


inputEl.addEventListener('change', onChangeInputChecked);



