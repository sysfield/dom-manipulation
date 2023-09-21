const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const redp = document.createElement('p');
redp.style.color = 'red';
redp.textContent = 'Hey I\'m red!'

const blueh3 = document.createElement('h3');
blueh3.style.color = 'blue';

const h1box = document.createElement('h1');
h1box.textContent = 'I\'m in a div';

const pbox = document.createElement('p');
pbox.textContent = 'ME TOO!';

const divbox = document.createElement('div');
divbox.append(h1box, pbox);

container.append(content, redp, blueh3, divbox);