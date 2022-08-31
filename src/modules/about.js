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
   import { contact } from './contact';
   import '../styles/main.css'
   import webpackImg from '../assets/webpack.jpg';


   export  function about() {
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
        text(headerHeadingH1, 'About Us')
        appendElement(headerHeading, headerHeadingH1)
        appendElement(containerMenu, headerHeading)

    const box = createElement('div', 'box');
    const webpack = createElement('div', 'webpack');
    text(box, 'I\'ve build this project to practice webpack \n and DOM manipulation');
    appendElement(box, webpack);
    appendElement(containerMenu, box)
    
    //   footer
        const footer = createElement('footer', 'footer');
        const link = createElement('a', 'link-gitHub');
        footer.innerHTML = '<p>Photos from <a href="https://unsplash.com/">Unsplash</a></p>'
    
        appendElements(content, [nav, containerMenu,footer]);
        const homeLink = document.querySelector('.home');
        const aboutLink = document.querySelector('.about');
        const contactLink = document.querySelector('.contact');
        homeLink.addEventListener('click', menu);
        aboutLink.addEventListener('click', about);
        contactLink.addEventListener('click', contact)
   }