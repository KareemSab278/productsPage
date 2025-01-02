const getProducts = async () => {
    try {
        const products = await fetch('https://fakestoreapi.com/products');
        const response = await products.json();

        // Select the container where all products will go
        const container = document.getElementById('products-container');

        // Clear any existing content
        container.innerHTML = '';

        // Loop through the products and add them to the container
        for (let i = 0; i < response.length; i++) {
            container.innerHTML += `
                <div class="product-card">
                    <img class="product-image" src="${response[i].image}" alt="${response[i].title}">
                    <h3 class="product-title">${response[i].title}</h3>
                    <p class="product-price">$${response[i].price}</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

getProducts();

