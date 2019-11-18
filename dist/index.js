const content= document.querySelector('#content');
var contentSpace;




const nav= document.createElement('div');
nav.classList.add('nav')
content.appendChild(nav)

const menuBtn= document.createElement('button');
menuBtn.classList.add('.btn');
menuBtn.textContent= "Menu";
menuBtn.addEventListener('click', menuInfo, false);
nav.appendChild(menuBtn);

const aboutBtn= document.createElement('button');
aboutBtn.classList.add('.btn');
aboutBtn.textContent= "About Us";
aboutBtn.addEventListener('click', aboutInfo, false);
nav.appendChild(aboutBtn);

const contactBtn= document.createElement('button');
contactBtn.classList.add('.btn');
contactBtn.textContent= "Contact Us";
contactBtn.addEventListener('click', contactInfo, false);
nav.appendChild(contactBtn);



function addContent(){
contentSpace= document.createElement('div');
//contentSpace.classList.add('.content-space');
nav.appendChild(contentSpace);
}

function removeContent(){
    nav.removeChild(contentSpace);
}

function contactInfo(){
    removeContent();
    addContent();
    contentSpace.classList.add('info');
    contentSpace.textContent= "Luigi's Italian Restuarant in France We Wee <br> \
    For Reservations, please call us at 011-554-778-4444.<br> \
    James Miati, Chef<br>\
    Jacob McCaskey, CEO<br></span>"

}

function aboutInfo(){
    removeContent();
    addContent();
    contentSpace.classList.add('info');
    contentSpace.textContent= "Luigi's Italian restuarant was founded after the great war,\
    Me grandfater founded it for me great grandmother, who always said she liked italian\
    It was later revealed that she just said becuase her first husband was italian and she was a nasty women who liked to cause trouble. Anyways, the restuarant gained popularity with the locals, and now we have been in business for 75 years. Me great grandmother is still alive and as full of hate as the day she imigrated from Italy. I say Good day."
}

function menuInfo(){
    removeContent();
    addContent()
    contentSpace.classList.add('menu-info');
    contentSpace.innerHTML= `<br>${menu}`;
}

addContent();


menu= `<br>Its Got Lots of Good Thing. <br>
<hr>
<ul>
<li>Corn Sufee </li>
<li>Beef Tartar </li>
<li> GreatGrandma's Special, lil hate on side</li>


</ul>"<hr>`