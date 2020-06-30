const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Changed background color
let background = document.querySelector("body");
background.style.backgroundColor = '#c4c4c4';

//Add circular image
let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

//Add middle image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Add main title
let title = document.getElementsByTagName("h1")[0];
title.textContent = ('src', siteContent["cta"]["h1"])

//Add text in button
let button = document.getElementsByTagName("button")[0];
button.textContent = ('src', siteContent["cta"]["button"])

//Add nav
let nav = document.getElementsByTagName("nav")[0];
for(let i=0; i < nav.children.length; i++){
  nav.children[i].textContent = (siteContent["nav"]["nav-item-"+(i+1)])
  let anchorTag = document.getElementsByTagName("a")[i];
  anchorTag.style.color = 'green';
}
/*
What I did wrong during my previous attempts: 
1. I did not know I could and should do .children
I did not know I would need to loop through the child objects by targeting the child. I thought I had to look at the parent and when I looped it would go inside the parent. 
I tried to write (siteContent["nav"][i]) because I thought that it would loop through the children, but it didn't know what to put in the anchor tag. I need to be more specific.
*/

//Add child elements to nav
let store = document.createElement('p'[9]);
store.textContent = "Store";
store.style.color = "green";
nav.appendChild(store);

let home = document.createElement('p'[10]);
home.textContent = "Home";
home.style.color = "green";
nav.prepend(home);

//First attempt to add "Features"
//I thought that I would have to target the "top-content" class since it had a unique name and then select the grandchild of it.
    //let features = document.getElementsByClassName("text-content"[0]);
    //features.textContent = siteContent["main-content"]["features-h4"];

//Third attempt to add "Features"
//I realized that if I targeted the index, it would grab only the first h4 on the page!
let features = document.getElementsByTagName("h4")[0];
features.textContent = siteContent["main-content"]["features-h4"];

//Now I can do the rest of the h4 headlines the same way.
//Is there a way I can make this more "DRY"?
let about = document.getElementsByTagName("h4")[1];
about.textContent = siteContent["main-content"]["about-h4"];

let services = document.getElementsByTagName("h4")[2];
services.textContent = siteContent["main-content"]["services-h4"];

let product = document.getElementsByTagName("h4")[3];
product.textContent = siteContent["main-content"]["product-h4"];

let vision = document.getElementsByTagName("h4")[4];
vision.textContent = siteContent["main-content"]["vision-h4"];



//I can add the paragraphs in a similar way.
let featuresP = document.getElementsByTagName("p")[0];
featuresP.textContent = siteContent["main-content"]["features-content"];

let aboutP = document.getElementsByTagName("p")[1];
aboutP.textContent = siteContent["main-content"]["about-content"];

let servicesP = document.getElementsByTagName("p")[2];
servicesP.textContent = siteContent["main-content"]["services-content"];

let productP = document.getElementsByTagName("p")[3];
productP.textContent = siteContent["main-content"]["product-content"];

let visionP = document.getElementsByTagName("p")[4];
visionP.textContent = siteContent["main-content"]["vision-content"];

//Now for the contact info
let contact = document.getElementsByTagName("h4")[5];
contact.textContent = siteContent["contact"]["contact-h4"];

let address = document.getElementsByTagName("p")[5];
address.textContent = siteContent["contact"]["address"];

let phone = document.getElementsByTagName("p")[6];
phone.textContent = siteContent["contact"]["phone"];

let email = document.getElementsByTagName("p")[7];
email.textContent = siteContent["contact"]["email"];

//And the footer
let footer = document.getElementsByTagName("p")[8];
footer.textContent = siteContent["footer"]["copyright"];

