class CheckoutPage {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('sweetIslandCart')) || [];
        this.deliveryCost = 300;
        this.freeDeliveryThreshold = 2000;
        
        this.initializeEventListeners();
        this.renderOrderSummary();
    
    }

    initializeEventListeners() {
        // Переключение способа оплаты
        document.querySelectorAll('input[name="payment"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.toggleCardDetails(e.target.value === 'card');
            });
        });

        // Переключение способа доставки
        document.querySelectorAll('input[name="delivery"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.updateDeliveryCost(e.target.value);
            });
        });

        const form = document.getElementById('checkoutForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitOrder();
            });
        }

    }
 
    renderOrderSummary() {
        const orderItems = document.getElementById('orderItems');
        
        if (this.cart.length === 0) {
            window.location.href = 'cart.html';
            return;
        }

        orderItems.innerHTML = '';

        this.cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'order-item';
            itemElement.innerHTML = `
                <div class="order-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="order-item-details">
                    <span class="order-item-name">${item.name}</span>
                    <span class="order-item-quantity">${item.quantity} × ${item.price}₽</span>
                </div>
                <div class="order-item-total">
                    ${item.price * item.quantity}₽
                </div>
            `;
            orderItems.appendChild(itemElement);
        });

        this.updateOrderTotals();
    }

    updateOrderTotals() {
        const itemsCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        //стоимость доставки
        const deliveryMethod = document.querySelector('input[name="delivery"]:checked');
        let deliveryCost = deliveryMethod?.value === 'pickup' ? 0 : this.deliveryCost;
        
        if (subtotal >= this.freeDeliveryThreshold && deliveryMethod?.value !== 'pickup') {
            deliveryCost = 0;
        }

        // Скидка
        let discount = 0;
        if (subtotal >= 3000) {
            discount = subtotal * 0.1;
        }

        const total = subtotal + deliveryCost - discount;

        document.getElementById('summarySubtotal').textContent = subtotal + '₽';
        document.getElementById('summaryDelivery').textContent = deliveryCost === 0 ? 'Бесплатно' : deliveryCost + '₽';
        document.getElementById('summaryDiscount').textContent = discount > 0 ? `-${discount}₽` : '0₽';
        document.getElementById('summaryTotal').textContent = total + '₽';
    }

    updateDeliveryCost(deliveryMethod) {
        this.updateOrderTotals();
    }

    toggleCardDetails(show) {
        const cardDetails = document.getElementById('cardDetails');
        const cardInputs = cardDetails.querySelectorAll('input');
        
        if (show) {
            cardDetails.style.display = 'block';
            cardInputs.forEach(input => input.required = true);
        } else {
            cardDetails.style.display = 'none';
            cardInputs.forEach(input => input.required = false);
        }
    }



    submitOrder() {
        if (this.cart.length === 0) {
            alert('Корзина пуста');
            return;
        }

        // cбор данных формы
        const formData = new FormData(document.getElementById('checkoutForm'));
        const orderData = {
            customer: {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                phone: formData.get('phone'),
                email: formData.get('email')
            },
            address: {
                address: formData.get('address'),
                city: formData.get('city'),
                postalCode: formData.get('postalCode')
            },
            delivery: formData.get('delivery'),
            payment: formData.get('payment'),
            comment: formData.get('comment'),
            items: this.cart,
            totals: this.getOrderTotals(),
            orderNumber: this.generateOrderNumber(),
            orderDate: new Date().toISOString()
        };

        this.saveOrder(orderData);

        this.showSuccessModal(orderData.orderNumber);

        this.clearCart();
    }

    getOrderTotals() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const deliveryMethod = document.querySelector('input[name="delivery"]:checked');
        let deliveryCost = deliveryMethod?.value === 'pickup' ? 0 : this.deliveryCost;
        
        if (subtotal >= this.freeDeliveryThreshold && deliveryMethod?.value !== 'pickup') {
            deliveryCost = 0;
        }

        let discount = 0;
        if (subtotal >= 3000) {
            discount = subtotal * 0.1;
        }

        const total = subtotal + deliveryCost - discount;

        return {
            subtotal,
            delivery: deliveryCost,
            discount,
            total
        };
    }

    generateOrderNumber() {
        return 'SI' + Date.now().toString().slice(-6);
    }

    saveOrder(orderData) {
        const orders = JSON.parse(localStorage.getItem('sweetIslandOrders')) || [];
        orders.push(orderData);
        localStorage.setItem('sweetIslandOrders', JSON.stringify(orders));
    }

    clearCart() {
        localStorage.removeItem('sweetIslandCart');
        this.cart = [];
    }

    showSuccessModal(orderNumber) {
        document.getElementById('orderNumber').textContent = orderNumber;
        document.getElementById('successModal').classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const checkoutPage = new CheckoutPage();
    window.checkoutPage = checkoutPage;
});