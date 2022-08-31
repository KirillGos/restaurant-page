import { createElement,
    appendElement, 
    text, addClass,
     appendElements,
     hover,
     events,
     specialFunction1,
     mouseLeave,
   } from '../DOM/dom';

   import { menu } from '../modules/menu'
   import '../styles/main.css'
export function about() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    // create nav
   const nav = createElement('nav', 'navigation');
   const ul = createElement('ul', 'ul-nav');
   const li1 = createElement('li', 'home');
   const li2 = createElement('li', 'about');
   const li3 = createElement('li', 'contact');

   text(li1, 'Home');
   text(li2, 'About');
   text(li3, 'Contact');

   appendElement(ul, li1);
   appendElement(ul, li2);
   appendElement(ul, li3);

   appendElement(nav, ul);

     // menu section
     const containerMenu = createElement('div', 'containerMenu');
     const headerHeading = createElement('div', 'header-heading');
     const headerHeadingH1 = createElement('h1');
     text(headerHeadingH1, 'Welcome To Our Restaurant')
     appendElement(headerHeading, headerHeadingH1)
     appendElement(containerMenu, headerHeading)

     appendElement(content, nav);
     const homeLink = document.querySelector('.home');
const aboutLink = document.querySelector('.about');
const contact = document.querySelector('.contact');

homeLink.addEventListener('click', menu);
aboutLink.addEventListener('click', about);
}