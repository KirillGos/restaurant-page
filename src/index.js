import { createElement, appendElement, text, addClass} from './DOM/dom'
import './styles/main.css'


const body = document.body;
// nav section
const nav = createElement('nav', 'navigation');
const ul = createElement('ul', 'ul-nav');
const li1 = createElement('li', 'nav-item');
const li2 = createElement('li', 'nav-item');
const li3 = createElement('li', 'nav-item');

text(li1, 'Home');
text(li2, 'About');
text(li3, 'Contact');

appendElement(ul, li1);
appendElement(ul, li2);
appendElement(ul, li3);

appendElement(nav, ul);
appendElement(body, nav);

// menu section
const container = createElement('div', 'container');
const headerHeading = createElement('div', 'header-heading');
const headerHeadingH1 = createElement('h1');
text(headerHeadingH1, 'Menu')
appendElement(headerHeading, headerHeadingH1)
appendElement(container, headerHeading)
const menuHeader = createElement('div', 'main-food-heading');
addClass(menuHeader, 'sec');
const headerH2 = createElement('h2');
text(headerH2, 'Main Food');
appendElement(menuHeader ,headerH2);
appendElement(container, menuHeader);

const menu = createElement('div', 'menu');



appendElement(body, container)