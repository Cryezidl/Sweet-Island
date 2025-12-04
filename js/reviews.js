
const reviewsData = [
    {
        id: 1,
        name: "Антонина Яковлева",
        email: "antonina@email.com",
        rating: 5,
        title: "Потрясающий магазин!",
        text: "Заказывала конфеты для детского праздника - все были в восторге. Качество на высшем уровне! Доставка быстрая, упаковка аккуратная. Обязательно буду заказывать еще.",
        product: "belgian-chocolates",
        date: "15.03.2025",
        recommend: true,
        likes: 12,
        liked: false
    },
    {
        id: 2,
        name: "Тимофей Крицин",
        email: "timofey@email.com",
        rating: 5,
        title: "Регулярно покупаю шоколад здесь",
        text: "Всегда свежий и вкусный. Доставка быстрая, персонал вежливый. Особенно нравится бельгийский шоколад - качество просто отличное! Рекомендую всем сладкоежкам.",
        product: "",
        date: "10.05.2025",
        recommend: true,
        likes: 8,
        liked: false
    },
    {
        id: 3,
        name: "Илья Хомутов",
        email: "ilya@email.com",
        rating: 4,
        title: "Открыл для себя сладости из азиатских стран",
        text: "Теперь это мой любимый магазин! Спасибо за качество! Особенно понравились японские конфеты. Единственное - хотелось бы больше ассортимента экзотических сладостей.",
        product: "other",
        date: "04.09.2025",
        recommend: true,
        likes: 15,
        liked: false
    },
    {
        id: 4,
        name: "Мария Семенова",
        email: "maria@email.com",
        rating: 5,
        title: "Лучший подарок для сладкоежки!",
        text: "Заказала набор конфет в подарок подруге - она была в восторге! Красивая упаковка, свежие продукты, быстрая доставка. Теперь только у вас покупаю сладости!",
        product: "",
        date: "22.11.2025",
        recommend: true,
        likes: 6,
        liked: false
    },
    {
        id: 5,
        name: "Дмитрий Волков",
        email: "dmitry@email.com",
        rating: 4,
        title: "Хороший ассортимент",
        text: "Нравится разнообразие товаров. Цены адекватные, доставка работает четко. Есть небольшие замечания по упаковке, но в целом все отлично.",
        product: "haribo",
        date: "18.12.2025",
        recommend: true,
        likes: 3,
        liked: false
    },
    {
        id: 6,
        name: "Екатерина Новикова",
        email: "ekaterina@email.com",
        rating: 5,
        title: "Восхитительный сервис!",
        text: "Заказывала сладости для корпоратива. Все привезли вовремя, упаковано красиво, сотрудники остались довольны. Отдельное спасибо менеджеру за помощь в подборе!",
        product: "",
        date: "05.01.2026",
        recommend: true,
        likes: 9,
        liked: false
    },
    {
        id: 7,
        name: "Сергей Петров",
        email: "sergey@email.com",
        rating: 3,
        title: "Неплохо, но есть недочеты",
        text: "Товары качественные, но доставка задержалась на день. Также хотелось бы видеть больше информации о составе продуктов на сайте.",
        product: "chupa-chups",
        date: "12.01.2026",
        recommend: false,
        likes: 2,
        liked: false
    }
];

class ReviewsManager {
    constructor() {
        this.reviews = this.loadReviewsFromStorage();
        this.currentSort = 'newest';
        this.displayedReviews = 5;
        this.isLoading = false;
        
        this.init();
    }
    
    init() {
        this.renderReviews();
        this.setupEventListeners();
        this.setupRatingStars();
        this.updateStats();
    }
    
    loadReviewsFromStorage() {
        try {
            const savedReviews = localStorage.getItem('sweetIslandReviews');
            if (savedReviews) {
                const parsed = JSON.parse(savedReviews);
                return Array.isArray(parsed) ? parsed : [...reviewsData];
            }
        } catch (error) {
            console.error('Error loading reviews from storage:', error);
        }
        return [...reviewsData];
    }
    
    saveReviewsToStorage() {
        try {
            localStorage.setItem('sweetIslandReviews', JSON.stringify(this.reviews));
        } catch (error) {
            console.error('Error saving reviews to storage:', error);
        }
    }
    
    setupEventListeners() {
        const reviewForm = document.getElementById('reviewForm');
        if (reviewForm) {
            reviewForm.addEventListener('submit', (e) => this.handleReviewSubmit(e));
        }
        
        const sortSelect = document.getElementById('sortReviews');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.renderReviews();
            });
        }
        
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => this.loadMoreReviews());
        }
        
    }
    
   
    
    showFieldError(field, message) {
        field.style.borderColor = '#ff6b6b';
        
        let errorElement = field.parentNode.querySelector('.field-error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            field.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    clearFieldError(field) {
        field.style.borderColor = '';
        
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }
    
    setupRatingStars() {
        const stars = document.querySelectorAll('.rating-stars input');
        stars.forEach((star, index) => {
            star.addEventListener('change', () => {

                stars.forEach(s => s.checked = false);
                for (let i = 0; i <= index; i++) {
                    stars[i].checked = true;
                }
            });
        });
    }
    
    handleReviewSubmit(e) {
        e.preventDefault();
        
        
        const formData = new FormData(e.target);
        const rating = this.getSelectedRating();
        
        if (!rating) {
            this.showRatingError();
            return;
        }
        
        const newReview = {
            id: Date.now(),
            name: formData.get('userName').trim(),
            email: formData.get('userEmail').trim(),
            rating: rating,
            title: formData.get('reviewTitle').trim(),
            text: formData.get('reviewText').trim(),
            product: formData.get('product'),
            date: new Date().toLocaleDateString('ru-RU'),
            recommend: formData.get('recommend') === 'on',
            likes: 0,
            liked: false
        };
        
        this.addReview(newReview);
        this.showSuccessMessage();
        e.target.reset();
        this.clearRatingStars();
    }
    
    
    getSelectedRating() {
        const stars = document.querySelectorAll('.rating-stars input');
        for (let i = stars.length - 1; i >= 0; i--) {
            if (stars[i].checked) {
                return parseInt(stars[i].value);
            }
        }
        return 0;
    }
    
    showRatingError() {
        const ratingGroup = document.querySelector('.rating-group');
        let errorElement = ratingGroup.querySelector('.field-error');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            ratingGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = 'Пожалуйста, поставьте оценку';
        errorElement.style.display = 'block';
   
        setTimeout(() => {
            errorElement.style.display = 'none';
        }, 3000);
    }
    
    clearRatingStars() {
        const stars = document.querySelectorAll('.rating-stars input');
        stars.forEach(star => {
            star.checked = false;
        });
    }
    
    addReview(review) {
        this.reviews.unshift(review);
        this.saveReviewsToStorage();
        this.renderReviews();
        this.updateStats();
    }
    
    showSuccessMessage() {
        const existingSuccess = document.querySelector('.review-success');
        if (existingSuccess) {
            existingSuccess.remove();
        }
        
        const successDiv = document.createElement('div');
        successDiv.className = 'review-success show';
        successDiv.innerHTML = `
            <h3>Спасибо за ваш отзыв! 🎉</h3>
            <p>Ваш отзыв успешно опубликован и появится в списке.</p>
        `;
        
        const form = document.getElementById('reviewForm');
        form.parentNode.insertBefore(successDiv, form);
        
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
        
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    updateStats() {
        const totalReviews = this.reviews.length;
        const averageRating = this.calculateAverageRating();
        const recommendationRate = this.calculateRecommendationRate();
        
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statNumbers.length >= 3) {
            statNumbers[0].textContent = averageRating.toFixed(1);
            statNumbers[1].textContent = totalReviews.toLocaleString();
            statNumbers[2].textContent = `${recommendationRate}%`;
        }
        
        this.updateStatsStars(averageRating);
    }
    
    calculateAverageRating() {
        if (this.reviews.length === 0) return 0;
        const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
        return sum / this.reviews.length;
    }
    
    calculateRecommendationRate() {
        if (this.reviews.length === 0) return 0;
        const recommended = this.reviews.filter(review => review.recommend).length;
        return Math.round((recommended / this.reviews.length) * 100);
    }
    
    updateStatsStars(averageRating) {
        const starsContainer = document.querySelector('.stats-grid .stars');
        if (!starsContainer) return;
        
        starsContainer.innerHTML = '';
        const fullStars = Math.floor(averageRating);
        const hasHalfStar = averageRating % 1 >= 0.5;
        
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            
            if (i < fullStars) {
                star.textContent = '★';
            } else if (i === fullStars && hasHalfStar) {
                star.textContent = '⭐';
            } else {
                star.textContent = '☆';
            }
            
            starsContainer.appendChild(star);
        }
    }
    
    sortReviews() {
        const sorted = [...this.reviews];
        
        switch (this.currentSort) {
            case 'newest':
                return sorted.sort((a, b) => b.id - a.id);
            case 'oldest':
                return sorted.sort((a, b) => a.id - b.id);
            case 'highest':
                return sorted.sort((a, b) => b.rating - a.rating || b.id - a.id);
            case 'lowest':
                return sorted.sort((a, b) => a.rating - b.rating || b.id - a.id);
            default:
                return sorted;
        }
    }
    
    renderReviews() {
        const container = document.getElementById('reviewsContainer');
        if (!container) return;
        
        const sortedReviews = this.sortReviews();
        const reviewsToShow = sortedReviews.slice(0, this.displayedReviews);
        
        if (reviewsToShow.length === 0) {
            container.innerHTML = `
                <div class="empty-reviews">
                    <h3>Пока нет отзывов</h3>
                    <p>Будьте первым, кто оставит отзыв о нашем магазине!</p>
                </div>
            `;
            this.toggleLoadMoreButton(false);
            return;
        }
        
        container.innerHTML = reviewsToShow.map(review => this.createReviewCard(review)).join('');
        this.toggleLoadMoreButton(this.displayedReviews < sortedReviews.length);
    }
    
    createReviewCard(review) {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const initials = review.name.split(' ').map(n => n[0]).join('').toUpperCase();
        const likeClass = review.liked ? 'liked' : '';
        
        return `
            <div class="review-card" data-review-id="${review.id}">
                <div class="review-header">
                    <div class="reviewer-info">
                        <div class="reviewer-avatar">${initials}</div>
                        <div class="reviewer-details">
                            <h4>${review.name}</h4>
                            <div class="review-date">${review.date}</div>
                        </div>
                    </div>
                    <div class="review-rating">
                        <span class="rating-value">${review.rating}.0</span>
                        <div class="review-stars">
                            ${stars.split('').map(star => `<span class="star">${star}</span>`).join('')}
                        </div>
                    </div>
                </div>
                
                ${review.product ? `<div class="review-product">${this.getProductName(review.product)}</div>` : ''}
                
                <h3 class="review-title">${review.title}</h3>
                <p class="review-text">${review.text}</p>
                
                <div class="review-footer">
                    <div class="review-recommend ${review.recommend ? '' : 'no'}">
                        ${review.recommend ? 'Рекомендует' : 'Не рекомендует'}
                    </div>
                    <div class="review-actions">
                        <button class="like-btn ${likeClass}" onclick="reviewsManager.toggleLike(${review.id})">
                            <span>👍</span>
                            <span class="like-count">${review.likes}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    getProductName(productKey) {
        const products = {
            'belgian-chocolates': 'Бельгийские пралине',
            'haribo': 'Мармеладные мишки Haribo',
            'chupa-chups': 'Газированный напиток Chupa Chups',
            'other': 'Другой товар'
        };
        return products[productKey] || productKey;
    }
    
    toggleLike(reviewId) {
        const review = this.reviews.find(r => r.id === reviewId);
        if (review) {
            if (review.liked) {
                review.likes--;
                review.liked = false;
            } else {
                review.likes++;
                review.liked = true;
            }
            this.saveReviewsToStorage();
            this.renderReviews();
        }
    }
    
    toggleLoadMoreButton(show) {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = show ? 'block' : 'none';
        }
    }
    
    loadMoreReviews() {
        if (this.isLoading) return;
        
        this.isLoading = true;
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        
        if (loadMoreBtn) {
            loadMoreBtn.textContent = 'Загрузка...';
            loadMoreBtn.disabled = true;
        }
        
        setTimeout(() => {
            this.displayedReviews += 5;
            this.renderReviews();
            this.isLoading = false;
            
            if (loadMoreBtn) {
                loadMoreBtn.textContent = 'Показать еще отзывы';
                loadMoreBtn.disabled = false;
            }
            
            const reviewsContainer = document.getElementById('reviewsContainer');
            if (reviewsContainer) {
                const lastReview = reviewsContainer.lastElementChild;
                if (lastReview) {
                    lastReview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }
        }, 800);
    }
}

let reviewsManager;

document.addEventListener('DOMContentLoaded', () => {
    reviewsManager = new ReviewsManager();
});

const errorStyles = `
.field-error {
    color: #ff6b6b;
    font-size: 0.85em;
    margin-top: 5px;
    display: none;
    font-weight: 500;
}

.review-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.like-btn {
    transition: all 0.3s ease;
}

.like-btn.liked {
    transform: scale(1.1);
}

.load-more-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
}

.rating-stars label {
    transition: transform 0.2s ease;
}

.rating-stars label:hover {
    transform: scale(1.2);
}

.review-success {
    background: linear-gradient(135deg, #4CAF50, #45a049);
    border: 1px solid #4CAF50;
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = errorStyles;
document.head.appendChild(styleSheet);