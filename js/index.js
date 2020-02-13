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
let aArr = document.querySelectorAll('a');
aArr[0].textContent = 'Services';
aArr[1].textContent = 'Product';
aArr[2].textContent = 'Vision';
aArr[3].textContent = 'Features';
aArr[4].textContent = 'About';
aArr[5].textContent = 'Contact';
aArr.forEach((item) => item.style.color = 'green');
let logoImg = document.querySelector('#logo-img');
logoImg.src = "img/logo.png";
let h1 = document.querySelector('h1');
h1.textContent = "DOM Is Awesome";
let btn = document.querySelector('button');
btn.textContent = "Get Started";
let ctaImg = document.querySelector('#cta-img');
ctaImg.src = "img/header-img.png";
let midImg = document.querySelector('.middle-img');
midImg.src = "img/mid-page-accent.jpg";
let h4arr = document.querySelectorAll("h4");
h4arr[0].textContent = "Features";
h4arr[1].textContent = "About";
h4arr[2].textContent = "Services";
h4arr[3].textContent = "Product";
h4arr[4].textContent = "Vision";
h4arr[5].textContent = "Contact";
let pArr = document.querySelectorAll("p");
pArr[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pArr[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pArr[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pArr[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pArr[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis." ;
pArr[5].textContent = "123 Way 456 Street Somewhere, USA";
pArr[6].textContent = "1 (888) 888-8888";
pArr[7].textContent = "sales@greatidea.io";
pArr[8].textContent = "Copyright Great Idea! 2018";
var node = document.createElement('a');
var textNode = document.createTextNode("About Us");
node.appendChild(textNode);
document.querySelector('nav').appendChild(node);
let anchor1 = document.createElement('a');
let anchor1Text = document.createTextNode("Join the Team");
anchor1.appendChild(anchor1Text);
document.querySelector('nav').prepend(anchor1);
