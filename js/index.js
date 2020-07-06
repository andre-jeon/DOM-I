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

// Create selectors to point your data into elements

const nav = document.querySelector('nav')

const logoImg = document.querySelector('#logo-img')
logoImg.src = '/Users/andrejeon/Desktop/lambda-school/unit2/week1/DOM-I/img/logo.png'

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = '/Users/andrejeon/Desktop/lambda-school/unit2/week1/DOM-I/img/header-img.png'

const middleImg = document.querySelector('#middle-img')
middleImg.src = '/Users/andrejeon/Desktop/lambda-school/unit2/week1/DOM-I/img/mid-page-accent.jpg'

// Update the HTML with the JSON data


const container = document.querySelector('.container')
const headerContainer = container.querySelector('header')
const navHeader = headerContainer.querySelector('nav')
const aNav = navHeader.querySelectorAll('a')

aNav[0].textContent = 'Services'
aNav[1].textContent = 'Product'
aNav[2].textContent = 'Vision'
aNav[3].textContent = 'Features'
aNav[4].textContent = 'About'
aNav[5].textContent = 'Contact'


const cTa = document.querySelector('.cta')
const cTaText = cTa.querySelector('.cta-text')
const cTaTextH1 = cTaText.querySelector('h1')
const cTaButton = cTaText.querySelector('button')

cTaTextH1.textContent = 'DOM Is Awesome'
cTaButton.textContent = 'Get Started'

const myFooter = document.querySelector('footer')
const footerContent = myFooter.querySelector('p')

footerContent.textContent = 'Copyright Great Idea! 2018'

// Add new content