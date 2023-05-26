let container = document.querySelector('#container');
let hello = document.querySelector('.hello');

console.log(container);

container.style.color = '#f00';
container.style.fontSize = '30px';

console.log(hello.textContent);
hello.textContent = 'Новый текст';

let element = document.createElement('div');
container.appendChild(element);

let element2 = document.createElement('span');
container.appendChild(element2);

element.textContent = 'Текст внутри div'