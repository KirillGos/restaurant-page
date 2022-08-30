import { createElement,
     appendElement, 
     text, addClass,
      appendElements,
      hover,
      events,
      specialFunction1,
      mouseLeave,
    } from '../DOM/dom';

import '../styles/main.css'
import burgerImg from '../assets/burger.jpg';
import steakImg from '../assets/steak.jpg';
import chickenImg from '../assets/chicken.jpg';
import hotDogImg from '../assets/hotdog.jpg';


export const menu = function() {
const content = document.querySelector('#content');
    const container = createElement('div', 'container');
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


    // menu section
    const containerMenu = createElement('div', 'containerMenu');
    const headerHeading = createElement('div', 'header-heading');
    const headerHeadingH1 = createElement('h1');
    text(headerHeadingH1, 'Menu')
    appendElement(headerHeading, headerHeadingH1)
    appendElement(containerMenu, headerHeading)
    const menuHeader = createElement('div', 'main-food-heading');
    addClass(menuHeader, 'sec');
    const headerH2 = createElement('h2');
    text(headerH2, 'Main Food');
    appendElement(menuHeader ,headerH2);
    appendElement(containerMenu, menuHeader);

  
        const mainFood = createElement('div', 'main-food');
        
        const steakDiv = createElement('div', 'card');
        addClass(steakDiv, 'steak');
        steakDiv.setAttribute('data-index', 0)

        const burgerDiv = createElement('div', 'card');
        addClass(burgerDiv, 'burger');
        burgerDiv.setAttribute('data-index', 1);

        const hotDogDiv = createElement('div', 'card');
        addClass(hotDogDiv, 'hot-dog');
        hotDogDiv.setAttribute('data-index', 2);

        const chickenDiv = createElement('div', 'card');
        addClass(chickenDiv, 'chicken');
        chickenDiv.setAttribute('data-index', 3);

    appendElements(mainFood, [steakDiv, burgerDiv,hotDogDiv, chickenDiv ]);


    specialFunction1( [steakDiv,burgerDiv ,hotDogDiv, chickenDiv ])
    
  events([hotDogDiv, steakDiv, chickenDiv, burgerDiv], 'mouseover',hover);
  events([hotDogDiv, steakDiv, chickenDiv, burgerDiv], 'mouseleave',mouseLeave)
  appendElements(containerMenu, [ mainFood]);
    appendElements(content, [nav, containerMenu])
}