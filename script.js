let cart = [];

function addToCart(itemName, price) {
  cart.push({ name: itemName, price: price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-items');
  const total = document.getElementById('cart-total');
  
  cartList.innerHTML = '';
  let totalAmount = 0;
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
    totalAmount += item.price;
  });
  
  total.textContent = `$${totalAmount}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  
  // Sample menu items (can be fetched dynamically from a backend)
  const items = [
    { name: 'Food Item 1', price: 10, image: 'food1.jpg', description: 'Description of Food Item 1.' },
    { name: 'Food Item 2', price: 12, image: 'food2.jpg', description: 'Description of Food Item 2.' },
    // Add more items here
  ];
  
  items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <p>Price: $${item.price}</p>
      <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
    `;
    menu.appendChild(div);
  });
});
