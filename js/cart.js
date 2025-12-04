class CartPage {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('sweetIslandCart')) || [];
        this.deliveryCost = 300; 
        this.freeDeliveryThreshold = 2000; 
        
        this.initializeEventListeners();
        this.renderCart();
    }

    initializeEventListeners() {
        //кнопка оформления заказа
        document.getElementById('checkoutBtn').addEventListener('click', () => {
            this.proceedToCheckout();
        });

        //модальное окно удаления
        document.getElementById('cancelDelete').addEventListener('click', () => {
            this.closeDeleteModal();
        });

        document.getElementById('confirmDelete').addEventListener('click', () => {
            this.removeConfirmedItem();
        });
    }

    renderCart() {
        const emptyCartState = document.getElementById('emptyCartState');
        const cartContent = document.getElementById('cartContent');
        const cartItemsList = document.getElementById('cartItemsList');


        const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        

        if (this.cart.length === 0) {
            emptyCartState.style.display = 'block';
            cartContent.style.display = 'none';
            return;
        }

        emptyCartState.style.display = 'none';
        cartContent.style.display = 'block';

        cartItemsList.innerHTML = '';

        this.cart.forEach(item => {
            const cartItemElement = this.createCartItemElement(item);
            cartItemsList.appendChild(cartItemElement);
        });

        // обновление итоговой информации
        this.updateOrderSummary();
    }

    createCartItemElement(item) {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item-incart';
        itemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-weight">${item.weight}</p>
                <p class="cart-item-price">${item.price}₽ за шт.</p>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn minus" data-id="${item.id}">−</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <div class="cart-item-total">
                    ${item.price * item.quantity}₽
                </div>
            </div>
            <button class="remove-item-btn" data-id="${item.id}" data-name="${item.name}">
                🗑️
            </button>
        `;

        // добавить обработчик событий
        this.addCartItemEventListeners(itemElement, item.id);

        return itemElement;
    }

    addCartItemEventListeners(itemElement, itemId) {
        // Увеличение количества
        itemElement.querySelector('.quantity-btn.plus').addEventListener('click', () => {
            this.updateQuantity(itemId, 1);
        });

        // Уменьшение количества
        itemElement.querySelector('.quantity-btn.minus').addEventListener('click', () => {
            this.updateQuantity(itemId, -1);
        });

        // Удаление товара
        itemElement.querySelector('.remove-item-btn').addEventListener('click', (e) => {
            const productName = e.target.dataset.name;
            this.showDeleteModal(itemId, productName);
        });
    }

    updateQuantity(itemId, change) {
        const item = this.cart.find(item => item.id === itemId);
        if (!item) return;

        item.quantity += change;

        if (item.quantity <= 0) {
            this.showDeleteModal(itemId, item.name);
        } else {
            this.saveCart();
            this.renderCart();
        }
    }

    showDeleteModal(itemId, productName) {
        this.itemToDelete = itemId;
        document.getElementById('deleteProductName').textContent = productName;
        document.getElementById('deleteModal').classList.add('active');
    }

    closeDeleteModal() {
        this.itemToDelete = null;
        document.getElementById('deleteModal').classList.remove('active');
    }

    removeConfirmedItem() {
        if (this.itemToDelete) {
            const item = this.cart.find(item => item.id === this.itemToDelete);
            this.cart = this.cart.filter(item => item.id !== this.itemToDelete);
            this.saveCart();
            this.renderCart();
            this.closeDeleteModal();
        }
    }

    updateOrderSummary() {
        const itemsCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        //тоимость доставки
        let deliveryCost = this.deliveryCost;
        if (subtotal >= this.freeDeliveryThreshold) {
            deliveryCost = 0;
        }

        // скидка
        let discount = 0;
        if (subtotal >= 3000) {
            discount = subtotal * 0.1;
        }

        const total = subtotal + deliveryCost - discount;

        document.getElementById('itemsCount').textContent = itemsCount;
        document.getElementById('subtotal').textContent = subtotal + '₽';
        document.getElementById('deliveryCost').textContent = deliveryCost === 0 ? 'Бесплатно' : deliveryCost + '₽';
        document.getElementById('discount').textContent = discount > 0 ? `-${discount}₽` : '0₽';
        document.getElementById('totalAmount').textContent = total + '₽';

        this.updateDeliveryInfo(subtotal);
    }

    updateDeliveryInfo(subtotal) {
        const deliveryInfo = document.querySelector('.delivery-info') || this.createDeliveryInfoElement();
        
        if (subtotal < this.freeDeliveryThreshold) {
            const remaining = this.freeDeliveryThreshold - subtotal;
            deliveryInfo.textContent = `Добавьте ещё ${remaining}₽ для бесплатной доставки`;
            deliveryInfo.className = 'delivery-info pending';
        } else {
            deliveryInfo.textContent = '🎉 Поздравляем! Доставка бесплатная';
            deliveryInfo.className = 'delivery-info free';
        }
    }

    createDeliveryInfoElement() {
        const summarySection = document.querySelector('.order-summary');
        const deliveryInfo = document.createElement('div');
        deliveryInfo.className = 'delivery-info';
        summarySection.insertBefore(deliveryInfo, summarySection.querySelector('.summary-row.total'));
        return deliveryInfo;
    }

    proceedToCheckout() {
        if (this.cart.length === 0) {
            return;
        }
        window.location.href = 'checkout.html'; 
    }

    saveCart() {
        localStorage.setItem('sweetIslandCart', JSON.stringify(this.cart));
    }

}


document.addEventListener('DOMContentLoaded', function() {
    const cartPage = new CartPage();
    window.cartPage = cartPage;
});

window.addEventListener('storage', function(e) {
    if (e.key === 'sweetIslandCart') {
        window.location.reload();
    }
});