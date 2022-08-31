import { menu } from './modules/menu'
import { about } from './modules/about'

menu();
const homeLink = document.querySelector('.home');
const aboutLink = document.querySelector('.about');
const contact = document.querySelector('.contact');

homeLink.addEventListener('click', menu);
aboutLink.addEventListener('click', about);