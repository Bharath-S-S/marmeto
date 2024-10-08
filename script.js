function renderCartItems() {
  cartItemsContainer.innerHTML = '';
  cartData.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
          <div class="cart-item-details">
              <img src="${item.image}" alt="${item.title}">
              <h3>${item.title}</h3>
          </div>
          <div>Rs. ${formatPrice(item.price)}</div>
          <div class="cart-item-quantity">
              <button onclick="updateQuantity(${item.id}, -1)">-</button>
              <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
              <button onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
          <div>Rs. ${formatPrice(item.final_line_price)}</div>
          <div class="remove-item" onclick="showRemoveConfirmation(${item.id})">
              <img src="delete-icon.png" alt="Remove item">
          </div>
      `;
      cartItemsContainer.appendChild(cartItem);
  });
}