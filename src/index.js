import { menu } from './modules/menu'
import { about } from './modules/about'
import { contact } from './modules/contact'

menu();
const homeLink = document.querySelector('.home');
const aboutLink = document.querySelector('.about');
const contactLink = document.querySelector('.contact');

homeLink.addEventListener('click', menu);
aboutLink.addEventListener('click', about);
contactLink.addEventListener('click', contact);