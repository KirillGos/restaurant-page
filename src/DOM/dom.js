 export function createElement(element, className) {
    const newElement = document.createElement(element);
    const newClassName = newElement.classList.add(className);
    return newElement;
 }

 export function appendElement(first, second) {
   return first.appendChild(second);
 }

 export function text(element, text) {
   return element.innerText = text;
 }

 export function addClass(element, className) {
   return element.classList.add(className);
 }

 export function appendElements(first, array) {
    array.map(item => {
      first.appendChild(item);
    });
 }

 export function hover(e) {
    let index = e.target.dataset.index; 
    let allhover = Array.from(document.querySelectorAll('.hoverMenu'));
    allhover.map(item => {
      if(item.dataset.index === index) {
          item.classList.remove('hidden');
          item.classList.add('visible');
      }
    })
}

 export function events(element, event, Afunction) {
  element.map(item => {
    item.addEventListener(event, Afunction)
  });
 }

 export function specialFunction1(elements) {  
  for(let i = 0; i < elements.length; i++) {
    let newItem = createElement('div', 'hoverMenu');
    newItem.classList.add('hidden');
    newItem.setAttribute('data-index', i);
    if(i === 0) {
      newItem.innerText = 'The Best Steak';
    } else if(i === 1) {
      newItem.innerText = 'The Best Burger';
    } else if(i === 2) {
      newItem.innerText = 'The Best Hod Dog';
    } else if(i === 3) {
      newItem.innerText = 'The Best Chicken';
    }
    elements[i].appendChild(newItem);
  }
 }

 export function mouseLeave(e) {
  let index = e.target.dataset.index; 
  let allhover = Array.from(document.querySelectorAll('.hoverMenu'));
  allhover.map(item => {
    if(item.dataset.index === index) {
      item.classList.remove('visible');
      item.classList.add('hidden');
    }
  })
 }