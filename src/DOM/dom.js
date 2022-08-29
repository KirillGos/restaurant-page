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