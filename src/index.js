const content = document.querySelector('#content');
// const webContent = require('./content.js');
const domFun = require('./dom-functions.js');


domFun.nav;
content.appendChild(domFun.nav);

const menuBtn = document.createElement('button');
menuBtn.classList.add('btn');
menuBtn.textContent = "Menu";
menuBtn.addEventListener('click', domFun.menuInfo, false);
domFun.nav.appendChild(menuBtn);

const aboutBtn = document.createElement('button');
aboutBtn.classList.add('btn');
aboutBtn.textContent = "About Us";
aboutBtn.addEventListener('click', domFun.aboutInfo, false);
domFun.nav.appendChild(aboutBtn);

const contactBtn = document.createElement('button');
contactBtn.classList.add('btn');
contactBtn.textContent = "Contact Us";
contactBtn.addEventListener('click', domFun.contactInfo, false);
domFun.nav.appendChild(contactBtn);


domFun.addContent();

