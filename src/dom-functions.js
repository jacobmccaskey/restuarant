

const webContent= require('./content.js')


var contentSpace;
const nav= document.createElement('div');
nav.classList.add('nav');

    
    const addContent = ()=>{
        contentSpace= document.createElement('div');
         nav.appendChild(contentSpace);
    }
    
    const removeContent = ()=>{
        nav.removeChild(contentSpace);
    }
    
    const contactInfo= ()=>{
        removeContent();
        addContent();
        contentSpace.classList.add('info');
        contentSpace.innerHTML= webContent.contactUs;
    }
    
    const aboutInfo= ()=>{
        removeContent();
        addContent();
        contentSpace.classList.add('info');
        contentSpace.innerHTML= webContent.aboutUs;
    }
    
    const menuInfo= ()=>{
        removeContent();
        addContent()
        contentSpace.classList.add('info');
        contentSpace.innerHTML= webContent.menu;
    }
  
    

module.exports= {
    nav: nav,
    contentSpace: contentSpace,
    menuInfo: menuInfo,
    aboutInfo: aboutInfo,
    addContent: addContent,
    removeContent: removeContent,
    contactInfo: contactInfo,
    // contactBtn: contactBtn, 
    // aboutBtn: aboutBtn, 
    // menuBtn: menuBtn,
    // nav: nav,
}    