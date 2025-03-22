// Sample product data - replace with your actual products
const products = [
    {
        id: 1,
        name: "Bleu de Chanel",
        price: 5.99,
        description: "Een krachtige, houtachtige geur met tonen van ceder en sandelhout",
        image: "perfume1.jpg"
    },
    {
        id: 2,
        name: "Dior Sauvage",
        price: 5.99,
        description: "Frisse citrus met ambrette en bergamot",
        image: "perfume2.jpg"
    },
    {
        id: 3,
        name: "Acqua di Gio",
        price: 5.99,
        description: "Zeezout en citrus met een vleugje lavendel",
        image: "perfume3.jpg"
    },
    {
        id: 4,
        name: "La Nuit de L'Homme",
        price: 5.99,
        description: "Warme kardemom met tonen van lavendel",
        image: "perfume4.jpg"
    },
    {
        id: 5,
        name: "1 Million",
        price: 5.99,
        description: "Zoete tonen van roos en amber",
        image: "perfume5.jpg"
    },
    {
        id: 6,
        name: "The One",
        price: 5.99,
        description: "Rijke tabak met tonen van gember",
        image: "perfume6.jpg"
    },
    {
        id: 7,
        name: "Light Blue",
        price: 5.99,
        description: "Frisse appels en cederhout",
        image: "perfume7.jpg"
    },
    {
        id: 8,
        name: "Eros",
        price: 5.99,
        description: "Munt en groene appel met vanille",
        image: "perfume8.jpg"
    },
    {
        id: 9,
        name: "Invictus",
        price: 5.99,
        description: "Zeezout en grapefruit met tonen van zeewier",
        image: "perfume9.jpg"
    },
    {
        id: 10,
        name: "Le Male",
        price: 5.99,
        description: "Lavendel en mint met tonen van vanille",
        image: "perfume10.jpg"
    },
    {
        id: 11,
        name: "Boss Bottled",
        price: 5.99,
        description: "Appel en kaneel met tonen van vanille",
        image: "perfume11.jpg"
    },
    {
        id: 12,
        name: "Spicebomb",
        price: 5.99,
        description: "Kruidige tonen met chili en saffraan",
        image: "perfume12.jpg"
    },
    {
        id: 13,
        name: "Allure Homme",
        price: 5.99,
        description: "Mandarijn en peper met tonen van sandelhout",
        image: "perfume13.jpg"
    },
    {
        id: 14,
        name: "L'Homme",
        price: 5.99,
        description: "Verse gember met tonen van ceder",
        image: "perfume14.jpg"
    },
    {
        id: 15,
        name: "Boss The Scent",
        price: 5.99,
        description: "Ginger en maninka met tonen van lavendel",
        image: "perfume15.jpg"
    },
    {
        id: 16,
        name: "Dolce & Gabbana",
        price: 5.99,
        description: "Citrus en basilicum met tonen van hout",
        image: "perfume16.jpg"
    },
    {
        id: 17,
        name: "Armani Code",
        price: 5.99,
        description: "Tonkaboon en tabak met tonen van bergamot",
        image: "perfume17.jpg"
    },
    {
        id: 18,
        name: "Versace Eros",
        price: 5.99,
        description: "Mint en groene appel met tonen van vanille",
        image: "perfume18.jpg"
    },
    {
        id: 19,
        name: "Polo Blue",
        price: 5.99,
        description: "Meloen en basilicum met tonen van hout",
        image: "perfume19.jpg"
    },
    {
        id: 20,
        name: "CK One",
        price: 5.99,
        description: "Verse citrus met tonen van groene thee",
        image: "perfume20.jpg"
    }
];

// Function to create product cards
function createProductCards() {
    const productGrid = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// Function to handle adding items to cart
function addToCart(productId) {
    // This is a placeholder for cart functionality
    alert('Product added to cart!');
}

// Function to handle contact form submission
function handleContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // This is a placeholder for form submission
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createProductCards();
    
    // Add event listener to contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});

function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    // Only show products that have images
    const availableProducts = products.filter(product => {
        const img = new Image();
        img.src = product.image;
        return img.complete || img.onload;
    });

    availableProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">€${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
} 