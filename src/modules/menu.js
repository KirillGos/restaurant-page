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
import baklavaImg from '../assets/baklava.jpg';
import cheeseCakeImg from '../assets/cheeseCake.jpg';
import teaImg from '../assets/tea.jpg';
import sodaImg from '../assets/soda.jpg';
import { about } from '../modules/about'
export  function menu() {
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

  appendElements(containerMenu, [ mainFood]);

  const desertsHeading = createElement('div', 'deserts-heading');
  addClass(desertsHeading, 'sec');
  const desertH1 = createElement('h1', 'desert-h1');
  text(desertH1, 'Deserts');
  appendElement(desertsHeading, desertH1);

    const deserts = createElement('div', 'deserts');
    const baklava = createElement('div', 'card');
    addClass(baklava, 'baklava');
    baklava.setAttribute('data-index', 4);
    const cheeseCake = createElement('div', 'card');
    addClass(cheeseCake, 'cheese-cake');
    cheeseCake.setAttribute('data-index', 5);
    appendElements(deserts, [baklava, cheeseCake]);
    appendElements(containerMenu, [desertsHeading, deserts]);

const drinksHeading = createElement('div', 'drinks-heading');
const drinksh2 = createElement('h2', 'h2-drinks');
    text(drinksh2, 'Drinks')
addClass(drinksHeading, 'sec');
  const drinks = createElement('div', 'drinks');
  const sodas = createElement('div', 'card');
  addClass(sodas, 'soda');
  sodas.setAttribute('data-index', 7);
  const tea = createElement('div', 'card');
  addClass(tea, 'tea');
  tea.setAttribute('data-index', 6);
  appendElement(drinksHeading, drinksh2);
  appendElements(drinks, [tea, sodas]);
  appendElements(containerMenu, [drinksHeading, drinks]);

  specialFunction1( [steakDiv,burgerDiv ,hotDogDiv, chickenDiv,baklava, cheeseCake, tea, sodas ])
  events([hotDogDiv, steakDiv, chickenDiv, burgerDiv,baklava, cheeseCake, tea, sodas], 'mouseover',hover);
  events([hotDogDiv, steakDiv, chickenDiv, burgerDiv,baklava, cheeseCake, tea, sodas], 'mouseleave',mouseLeave);


//   footer
    const footer = createElement('footer', 'footer');
    const link = createElement('a', 'link-gitHub');
    text(link, 'Kirill Gos')
    text(footer, `Photos from Unsplash`)

    appendElements(content, [nav, containerMenu,footer]);
    const homeLink = document.querySelector('.home');
    const aboutLink = document.querySelector('.about');
    const contact = document.querySelector('.contact');
    homeLink.addEventListener('click', menu);
  aboutLink.addEventListener('click', about);
}