import { createElement,
    appendElement, 
    text, addClass,
     appendElements,
     hover,
     events,
     specialFunction1,
     mouseLeave,
   } from '../DOM/dom';

   import { menu } from '../modules/menu';
   import { about } from '../modules/about'
   import '../styles/main.css'
   import map from '../assets/map.jpg';
export  function contact() {
    const content = document.querySelector('#content');
        content.innerHTML = '';
    
        const container = createElement('div', 'container');
        // nav section
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
        text(headerHeadingH1, 'Contact')
        appendElement(headerHeading, headerHeadingH1)
        appendElement(containerMenu, headerHeading);

        const box = createElement('div', 'box');
        const boxImg = createElement('div', 'boxImg');
        text(box, 'Address:  123 Main Street, \n New York, NY 10030 ')
        appendElement(box, boxImg);
        appendElement(containerMenu, box)

    //   footer
        const footer = createElement('footer', 'footer');
        footer.innerHTML = '<p>Photos from <a href="https://unsplash.com/">Unsplash</a></p>'
    
        appendElements(content, [nav, containerMenu,footer]);
        const homeLink = document.querySelector('.home');
        const aboutLink = document.querySelector('.about');
        const contact = document.querySelector('.contact');
        homeLink.addEventListener('click', menu);
        aboutLink.addEventListener('click', about);
        contact.addEventListener('click', contact)
   }