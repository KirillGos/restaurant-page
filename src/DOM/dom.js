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
    
    
}

 export function events(element, event, Afunction) {
  element.map(item => {
    item.addEventListener(event, Afunction)
  });
 }

 export function specialFunction1(elements) {  
  for(let i = 0; i < elements.length; i++) {
    let newItem = createElement('div', 'hoverMenu');
    newItem.setAttribute('data-index', i);
    elements[i].appendChild(newItem);
  }
 }