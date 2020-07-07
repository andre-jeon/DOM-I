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
logo.setAttribute('alt', siteContent["nav"]["img-src"])
logo.src = '/Users/andrejeon/Desktop/lambda-school/unit2/week1/DOM-I/img/logo.png'

let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('alt', siteContent["cta"]["img-src"])
ctaLogo.src = '/Users/andrejeon/Desktop/lambda-school/unit2/week1/DOM-I/img/header-img.png'

let middlelogo = document.getElementById("middle-img");
middlelogo.setAttribute('alt', siteContent["main-content"]["middle-img-src"])
middlelogo.src = '/Users/andrejeon/Desktop/lambda-school/unit2/week1/DOM-I/img/mid-page-accent.jpg'

// Create selectors to point your data into elements

const nav = document.querySelector('header nav')

// Update the HTML with the JSON data

let container = document.querySelectorAll('.container header nav a')

for (let i = 0; i <container.length; i++){
  container[i].style.color = 'green'
}

container[0].textContent = siteContent["nav"]["nav-item-1"]
container[1].textContent = siteContent["nav"]["nav-item-2"]
container[2].textContent = siteContent["nav"]["nav-item-3"]
container[3].textContent = siteContent["nav"]["nav-item-4"]
container[4].textContent = siteContent["nav"]["nav-item-5"]
container[5].textContent = siteContent["nav"]["nav-item-6"]


let ctaText = document.querySelector('.cta .cta-text h1')
ctaText.textContent = siteContent["cta"]["h1"]

let ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent["cta"]["button"]


let textContent1_h4 = document.querySelectorAll('.top-content h4')
let textContent1_p =  document.querySelectorAll('.top-content p')

textContent1_h4[0].textContent = siteContent["main-content"]["features-h4"]
textContent1_h4[1].textContent = siteContent["main-content"]["about-h4"]

textContent1_p[0].textContent = siteContent["main-content"]["features-content"]
textContent1_p[1].textContent = siteContent["main-content"]["about-content"]


let textContent2_h4 = document.querySelectorAll('.bottom-content h4')
let textContent2_p = document.querySelectorAll('.bottom-content p')

textContent2_h4[0].textContent = siteContent["main-content"]["services-h4"]
textContent2_h4[1].textContent = siteContent["main-content"]["product-h4"]
textContent2_h4[2].textContent = siteContent["main-content"]["vision-h4"]

textContent2_p[0].textContent = siteContent["main-content"]["services-content"]
textContent2_p[1].textContent = siteContent["main-content"]["product-content"]
textContent2_p[2].textContent = siteContent["main-content"]["vision-content"]


let myContact_h4 = document.querySelector('.contact h4')
myContact_h4.textContent = siteContent["contact"]["contact-h4"]

let myContact_p = document.querySelectorAll('.contact p')
myContact_p[0].textContent = siteContent["contact"]["address"]
myContact_p[1].textContent = siteContent["contact"]["phone"]
myContact_p[2].textContent = siteContent["contact"]["email"]


document.querySelector('footer p').textContent = siteContent["footer"]["copyright"]

let aP = document.querySelector('header nav').appendChild(document.querySelector('header nav a')).textContent = 'Steve'
let pP = document.querySelector('header nav').prepend(document.querySelector('header nav a')).textContent = 'Elon'


// Add new content