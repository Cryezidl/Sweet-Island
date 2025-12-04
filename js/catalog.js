const productsData = [
    {
        id: 'lindt-excellence',
        name: 'Lindt Excellence 70%',
        brand: 'Lindt',
        category: 'chocolate',
        description: 'Горький шоколад с 70% какао. Идеальный баланс горького вкуса и насыщенного аромата. Идеален для настоящих ценителей шоколада.',
        price: 320,
        oldPrice: null,
        weight: '100г',
        country: 'Швейцария',
        ingredients: 'Какао тертое, сахар, какао-масло, эмульгатор (соевый лецитин), ваниль.',
        image: './images/lindth70.jpg',
        tags: ['premium', 'bitter'],
        isNew: false,
        isVegan: false,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'ritter-sport',
        name: 'Ritter Sport Молочный с фундуком',
        brand: 'Ritter Sport',
        category: 'chocolate',
        description: 'Знаменитый квадратный шоколад с цельным фундуком. Уникальная форма и насыщенный вкус.',
        price: 280,
        oldPrice: 320,
        weight: '100г',
        country: 'Германия',
        ingredients: 'Сахар, какао-масло, цельный фундук, сухое молоко, какао тертое, эмульгатор.',
        image: './images/RS-milk-nuts.jpg',
        tags: ['nuts', 'milk'],
        isNew: true,
        isVegan: false,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'haribo-goldbears',
        name: 'Haribo Goldbears',
        brand: 'Haribo',
        category: 'marmelad',
        description: 'Легендарные мармеладные мишки с 1922 года. 5 разных фруктовых вкусов: клубника, ананас, лимон, апельсин, малина.',
        price: 270,
        oldPrice: null,
        weight: '175г',
        country: 'Германия',
        ingredients: 'Сахар, глюкозный сироп, желатин, фруктовые соки, ароматизаторы, красители.',
        image: './images/haribo.jpg',
        tags: ['classic', 'fruit'],
        isNew: false,
        isVegan: false,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'trolli-worms',
        name: 'Trolli Sour Worms',
        brand: 'Trolli',
        category: 'marmelad',
        description: 'Кислые мармеладные червяки с насыщенным фруктовым вкусом. Яркие цвета и веселая форма.',
        price: 320,
        oldPrice: null,
        weight: '200г',
        country: 'Германия',
        ingredients: 'Сахар, глюкозный сироп, крахмал, лимонная кислота, фруктовые соки, ароматизаторы.',
        image: './images/trolli-sour-worms.jpg',
        tags: ['sour', 'fruit'],
        isNew: true,
        isVegan: false,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'werthers-original',
        name: 'Werthers Original',
        brand: 'Werthers',
        category: 'candies',
        description: 'Классические карамельные конфеты с нежным молочным вкусом. Тают во рту, даря наслаждение.',
        price: 220,
        oldPrice: null,
        weight: '180г',
        country: 'Германия',
        ingredients: 'Сахар, глюкозный сироп, сливки, масло, соль, ароматизатор ванили.',
        image: './images/werther-orig.jpg',
        tags: ['caramel', 'classic'],
        isNew: false,
        isVegan: false,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'ferrero-rocher',
        name: 'Ferrero Rocher',
        brand: 'Ferrero',
        category: 'chocolate',
        description: 'Изысканные шоколадные конфеты с цельным лесным орехом и хрустящей вафлей. Идеальный подарок.',
        price: 890,
        oldPrice: 950,
        weight: '200г',
        country: 'Италия',
        ingredients: 'Фундук, молочный шоколад, сахар, пальмовое масло, пшеничная мука, какао.',
        image: './images/ferrero.jpg',
        tags: ['premium', 'nuts', 'gift'],
        isNew: false,
        isVegan: false,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'kitkat-matcha',
        name: 'KitKat Зеленый чай',
        brand: 'KitKat',
        category: 'exclusive',
        description: 'Эксклюзивный японский вкус с нежным ароматом матча. Хрустящие вафли в зеленом чайном шоколаде.',
        price: 450,
        oldPrice: null,
        weight: '120г',
        country: 'Япония',
        ingredients: 'Молочный шоколад, вафля, порошок зеленого чая, сахар, сухое молоко.',
        image: './images/kitkat-green-tea.jpg',
        tags: ['japanese', 'matcha', 'exclusive'],
        isNew: true,
        isVegan: false,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'magnum-classic',
        name: 'Magnum Classic',
        brand: 'Magnum',
        category: 'icecream',
        description: 'Мороженое премиум-класса в толстой шоколадной глазури. Настоящее наслаждение для гурманов.',
        price: 320,
        oldPrice: null,
        weight: '3 шт',
        country: 'Нидерланды',
        ingredients: 'Молоко, сливки, сахар, какао-масло, какао тертое, эмульгаторы, стабилизаторы.',
        image: './images/magnum-classic.jpg',
        tags: ['premium', 'chocolate'],
        isNew: false,
        isVegan: false,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'coca-cola',
        name: 'Coca-Cola Original',
        brand: 'Coca-Cola',
        category: 'soda',
        description: 'Классическая газировка с узнаваемым вкусом. Освежающий напиток для любого времени дня.',
        price: 90,
        oldPrice: null,
        weight: '330мл',
        country: 'США',
        ingredients: 'Вода, сахар, диоксид углерода, краситель, ортофосфорная кислота, кофеин.',
        image: './images/cola-orig.jpg',
        tags: ['classic', 'cola'],
        isNew: false,
        isVegan: true,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'chupa-chups-drink',
        name: 'Chupa Chups Газировка',
        brand: 'Chupa Chups',
        category: 'soda',
        description: 'Фруктовая газировка с ярким вкусом знаменитых леденцов. Веселый и освежающий напиток.',
        price: 340,
        oldPrice: null,
        weight: '250мл',
        country: 'Испания',
        ingredients: 'Вода, сахар, фруктовые соки, диоксид углерода, ароматизаторы, красители.',
        image: './images/chupa-chups-drink.png',
        tags: ['fruit', 'fun'],
        isNew: true,
        isVegan: true,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'milka-oreo',
        name: 'Milka с печеньем Oreo',
        brand: 'Milka',
        category: 'chocolate',
        description: 'Нежный молочный шоколад с кусочками знаменитого печенья Oreo. Сочетание хруста и нежности.',
        price: 190,
        oldPrice: 220,
        weight: '100г',
        country: 'Германия',
        ingredients: 'Молочный шоколад, печенье Oreo, сахар, сухое молоко, какао-масло.',
        image: './images/milka-oreo.jpg',
        tags: ['cookies', 'milk'],
        isNew: false,
        isVegan: false,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'skittles-original',
        name: 'Skittles Original',
        brand: 'Skittles',
        category: 'candies',
        description: 'Радужные фруктовые конфеты с насыщенными вкусами. Раскрой вкус радуги!',
        price: 120,
        oldPrice: null,
        weight: '45г',
        country: 'США',
        ingredients: 'Сахар, глюкозный сироп, пальмовое масло, лимонная кислота, ароматизаторы.',
        image: './images/skittles-red.jpg',
        tags: ['fruit', 'colorful'],
        isNew: true,
        isVegan: true,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'raffaello-classic',
        name: 'Raffaello Classic',
        brand: 'Ferrero',
        category: 'chocolates',
        description: 'Нежное пралине с цельным миндалем и кокосовой стружкой в хрустящем вафельном шарике.',
        price: 450,
        oldPrice: 520,
        weight: '150г',
        country: 'Италия',
        ingredients: 'Кокосовая стружка, растительное масло, сахар, миндаль, обезжиренное сухое молоко, мука, эмульгатор: лецитины (соевые), соль, ароматизатор.',
        image: './images/raffaello.jpg',
        tags: ['coconut', 'almond', 'premium', 'italian'],
        isNew: false,
        isVegan: false,
        isSugarFree: false,
        inStock: true
    },
    {
        id: 'kinder-chocolate',
        name: 'Kinder Chocolate',
        brand: 'Ferrero',
        category: 'chocolates',
        description: 'Нежный молочный шоколад с уникальной начинкой из молока и какао. Специально для детей.',
        price: 175,
        oldPrice: null,
        weight: '80г',
        country: 'Германия',
        ingredients: 'Молочный шоколад, сахар, сухое обезжиренное молоко, какао-масло, какао-тертое, сухое цельное молоко, жир молочный, эмульгаторы: лецитины (соевые), ароматизатор.',
        image: './images/kinder-chocolate.jpg',
        tags: ['milk', 'for-kids', 'chocolate-bar'],
        isNew: false,
        isVegan: false,
        isSugarFree: false,
        inStock: true
    },
    {
    id: 'pocky-strawberry',
    name: 'Pocky Клубничный',
    brand: 'Glico',
    category: 'biscuits',
    description: 'Японское печенье в виде тонких палочек, покрытых клубничной глазурью. Хрустящее и нежное!',
    price: 220,
    oldPrice: null,
    weight: '47г',
    country: 'Япония',
    ingredients: 'Пшеничная мука, сахар, растительное масло, сухая молочная сыворотка, клубничный порошок, эмульгаторы, разрыхлитель, ароматизатор, соль.',
    image: './images/pocky-strawberry.jpg',
    tags: ['japanese', 'strawberry', 'biscuit', 'glazed'],
    isNew: true,
    isVegan: false,
    isSugarFree: false,
    inStock: true
    },
    {
    id: 'hi-chew-fruit-mix',
    name: 'Hi-Chew Фруктовый микс',
    brand: 'Morinaga',
    category: 'candies',
    description: 'Японские жевательные конфеты с насыщенными фруктовыми вкусами. Уникальная текстура!',
    price: 180,
    oldPrice: 200,
    weight: '65г',
    country: 'Япония',
    ingredients: 'Сахар, глюкозный сироп, пальмовое масло, желатин, лимонная кислота, концентраты фруктовых соков, ароматизаторы, эмульгатор.',
    image: './images/hi-chew-mix.jpg',
    tags: ['japanese', 'chewy', 'fruit-mix', 'popular'],
    isNew: false,
    isVegan: false,
    isSugarFree: false,
    inStock: true
    },
    {
    id: 'white-rabbit',
    name: 'White Rabbit Кремовые конфеты',
    brand: 'Guan Sheng Yuan',
    category: 'candies',
    description: 'Легендарные китайские молочные конфеты в съедобной рисовой бумаге. Нежный сливочный вкус!',
    price: 150,
    oldPrice: null,
    weight: '100г',
    country: 'Китай',
    ingredients: 'Сахар, кукурузный сироп, сгущенное молоко, кокосовое масло, сливочное масло, соль, соевый лецитин, ароматизатор.',
    image: './images/white-rabbit.jpg',
    tags: ['chinese', 'milk', 'creamy', 'classic'],
    isNew: false,
    isVegan: false,
    isSugarFree: false,
    inStock: true
    },
    {
    id: 'lakrisal-salt-licorice',
    name: 'Lakrisal Соль и Лакрица',
    brand: 'Lakrisal',
    category: 'candies',
    description: 'Шведские конфеты с насыщенным вкусом лакрицы и морской соли. Для настоящих ценителей!',
    price: 280,
    oldPrice: 320,
    weight: '150г',
    country: 'Швеция',
    ingredients: 'Экстракт лакрицы, сахар, патока, морская соль, пшеничная мука, крахмал, ароматизатор, глазирователь: воск карнаубский.',
    image: './images/lakrisal-salt-licorice.jpg',
    tags: ['licorice', 'salty', 'swedish', 'scandinavian', 'for-adults'],
    isNew: true,
    isVegan: true,
    isSugarFree: false,
    inStock: true
    },
    {
    id: 'dropfruit-licorice',
    name: 'Dropfruit Классическая лакрица',
    brand: 'Dropfruit',
    category: 'candies',
    description: 'Традиционные голландские лакричные конфеты с мягким сладко-соленым вкусом.',
    price: 190,
    oldPrice: null,
    weight: '200г',
    country: 'Нидерланды',
    ingredients: 'Экстракт лакричного корня, патока, сахар, пшеничная мука, анисовое масло, соль.',
    image: './images/dropfruit-licorice.jpg',
    tags: ['licorice', 'dutch', 'traditional', 'salty-sweet'],
    isNew: false,
    isVegan: true,
    isSugarFree: false,
    inStock: true
    },
    {
    id: 'fazer-licorice-menthol',
    name: 'Fazer Лакрица с ментолом',
    brand: 'Fazer',
    category: 'candies', 
    description: 'Финские леденцы с освежающим сочетанием лакрицы и ментола. Идеально для горла.',
    price: 210,
    oldPrice: null,
    weight: '80г',
    country: 'Финляндия',
    ingredients: 'Сахар, экстракт лакрицы, глюкозный сироп, ментол, натуральные ароматизаторы.',
    image: './images/fazer-licorice-menthol.jpg',
    tags: ['licorice', 'menthol', 'finnish', 'throat', 'refreshing'],
    isNew: false,
    isVegan: true,
    isSugarFree: false,
    inStock: true
    },
];

class Catalog {
    constructor() {
        this.products = productsData;
        this.filteredProducts = [...this.products];
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.currentView = 'grid';
        this.cart = JSON.parse(localStorage.getItem('sweetIslandCart')) || [];
        
        this.initializeFilters();
        this.renderProducts();
        this.setupEventListeners();
        this.updateCart();
    }

    initializeFilters() {
        // заполнение брендов
        const brandSelect = document.getElementById('brand');
        const uniqueBrands = [...new Set(this.products.map(product => product.brand))];
        uniqueBrands.forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandSelect.appendChild(option);
        });

        // заполнение стран
        const countrySelect = document.getElementById('country');
        const uniqueCountries = [...new Set(this.products.map(product => product.country))];
        uniqueCountries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });
    }

    setupEventListeners() {
        // Фильтры
        document.getElementById('search').addEventListener('input', () => this.applyFilters());
        document.getElementById('category').addEventListener('change', () => this.applyFilters());
        document.getElementById('brand').addEventListener('change', () => this.applyFilters());
        document.getElementById('country').addEventListener('change', () => this.applyFilters());
        document.getElementById('sort').addEventListener('change', () => this.applyFilters());
        document.getElementById('priceMin').addEventListener('input', () => this.applyFilters());
        document.getElementById('priceMax').addEventListener('input', () => this.applyFilters());
        
        document.getElementById('vegan').addEventListener('change', () => this.applyFilters());
        document.getElementById('sugarFree').addEventListener('change', () => this.applyFilters());
        document.getElementById('new').addEventListener('change', () => this.applyFilters());

        document.getElementById('clearFilters').addEventListener('click', () => this.clearFilters());

    }
    //использовать фильтры для соответствующей сортировке товаров
    applyFilters() {
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const category = document.getElementById('category').value;
        const brand = document.getElementById('brand').value;
        const country = document.getElementById('country').value;
        const priceMin = document.getElementById('priceMin').value;
        const priceMax = document.getElementById('priceMax').value;
        const sort = document.getElementById('sort').value;
        const vegan = document.getElementById('vegan').checked;
        const sugarFree = document.getElementById('sugarFree').checked;
        const isNew = document.getElementById('new').checked;

        this.filteredProducts = this.products.filter(product => {
            // Поиск
            if (searchTerm && !product.name.toLowerCase().includes(searchTerm) && !product.brand.toLowerCase().includes(searchTerm)) {
                return false;
            }

            // Категория
            if (category !== 'all' && product.category !== category) {
                return false;
            }

            // Бренд
            if (brand !== 'all' && product.brand !== brand) {
                return false;
            }

            // Страна
            if (country !== 'all' && product.country !== country) {
                return false;
            }

            // Цена
            if (priceMin && product.price < parseInt(priceMin)) {
                return false;
            }
            if (priceMax && product.price > parseInt(priceMax)) {
                return false;
            }

            //доп шняга
            if (vegan && !product.isVegan) {
                return false;
            }
            if (sugarFree && !product.isSugarFree) {
                return false;
            }
            if (isNew && !product.isNew) {
                return false;
            }

            return true;
        });

        this.sortProducts(sort);
        
        this.currentPage = 1;
        this.renderProducts();
    }
    //очищение фильтров
    clearFilters() {
        document.getElementById('search').value = '';
        document.getElementById('category').value = 'all';
        document.getElementById('brand').value = 'all';
        document.getElementById('country').value = 'all';
        document.getElementById('priceMin').value = '';
        document.getElementById('priceMax').value = '';
        document.getElementById('sort').value = 'name';
        document.getElementById('vegan').checked = false;
        document.getElementById('sugarFree').checked = false;
        document.getElementById('new').checked = false;
        
        this.applyFilters();
    }

    sortProducts(sortType) {
        switch (sortType) {
            case 'price-asc':
                this.filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                this.filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'brand':
                this.filteredProducts.sort((a, b) => a.brand.localeCompare(b.brand));
                break;
            default:
                this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    renderProducts() {
        const container = document.getElementById('productsContainer');
        const loadingState = document.getElementById('loadingState');
        const emptyState = document.getElementById('emptyState');
        const resultsCount = document.getElementById('resultsCount');

        loadingState.style.display = 'block';
        emptyState.style.display = 'none';
        container.innerHTML = '';
 
        setTimeout(() => {
            loadingState.style.display = 'none';

            if (this.filteredProducts.length === 0) {
                emptyState.style.display = 'block';
                resultsCount.textContent = 'Товары не найдены';
                return;
            }

            resultsCount.textContent = `Найдено ${this.filteredProducts.length} товаров`;

            // Пагинация
            const totalPages = Math.ceil(this.filteredProducts.length / this.productsPerPage);
            const startIndex = (this.currentPage - 1) * this.productsPerPage;
            const endIndex = startIndex + this.productsPerPage;
            const productsToShow = this.filteredProducts.slice(startIndex, endIndex);

            productsToShow.forEach(product => {
                const productCard = this.createProductCard(product);
                container.appendChild(productCard);
            });

            this.renderPagination(totalPages);
        }, 500);
    }

    createProductCard(product) {
        const card = document.createElement('div');
        card.className = `product-card ${this.currentView}-view`;
        card.innerHTML = `
            ${product.isNew ? '<span class="product-badge new">NEW</span>' : ''}
            ${product.oldPrice ? '<span class="product-badge sale">SALE</span>' : ''}
            ${product.isVegan ? '<span class="product-badge vegan">VEGAN</span>' : ''}
            
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-brand">${product.brand}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-weight">${product.weight}</div>
                <div class="product-price">
                    ${product.oldPrice ? `<span class="old-price">${product.oldPrice}₽</span>` : ''}
                    ${product.price}₽
                </div>
            </div>
            
            <button class="add-to-cart-btn" onclick="catalog.addToCart('${product.id}')">
                В корзину
            </button>
        `;

        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                this.showProductModal(product.id);
            }
        });

        return card;
    }

    renderPagination(totalPages) {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        if (totalPages <= 1) return;

        // Кнопка "Назад"
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '&laquo;';
        prevButton.disabled = this.currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.renderProducts();
            }
        });
        pagination.appendChild(prevButton);

        // Нумерация страниц
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = i === this.currentPage ? 'active' : '';
            pageButton.addEventListener('click', () => {
                this.currentPage = i;
                this.renderProducts();
            });
            pagination.appendChild(pageButton);
        }

        // Кнопка "Вперед"
        const nextButton = document.createElement('button');
        nextButton.innerHTML = '&raquo;';
        nextButton.disabled = this.currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (this.currentPage < totalPages) {
                this.currentPage++;
                this.renderProducts();
            }
        });
        pagination.appendChild(nextButton);
    }


    showProductModal(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            const modalContent = document.getElementById('modalProductInfo');
            modalContent.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="modal-product-image">
                <h3>${product.name}</h3>
                <p><strong>Бренд:</strong> ${product.brand}</p>
                <p><strong>Категория:</strong> ${this.getCategoryName(product.category)}</p>
                <p><strong>Описание:</strong> ${product.description}</p>
                <p><strong>Состав:</strong> ${product.ingredients}</p>
                <p><strong>Страна производитель:</strong> ${product.country}</p>
                <p><strong>Вес:</strong> ${product.weight}</p>
                <p><strong>Цена:</strong> 
                    ${product.oldPrice ? 
                        `<span style="text-decoration: line-through; color: #999; margin-right: 10px;">${product.oldPrice}₽</span>` : 
                        ''
                    }
                    <span style="color: #ff6b9d; font-size: 1.3em; font-weight: bold;">${product.price}₽</span>
                </p>
                <div class="modal-actions">
                    <button class="modal-add-to-cart" onclick="catalog.addToCart('${product.id}'); closeModal();">
                        Добавить в корзину
                    </button>
                    <button class="modal-close-btn" onclick="closeModal()">
                        Закрыть
                    </button>
                </div>
            `;
            document.getElementById('productModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    getCategoryName(category) {
        const categories = {
            'chocolate': '🍫 Шоколад',
            'marmelad': '🐻 Мармелад',
            'candies': '🍬 Конфеты',
            'exclusive': '🌟 Эксклюзив',
            'icecream': '🍦 Мороженое',
            'soda': '🥤 Газировка'
        };
        return categories[category] || category;
    }
    
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            const existingItem = this.cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    weight: product.weight,
                    quantity: 1
                });
            }
            
            this.saveCart();
            this.updateCart();
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCart();
    }

    updateCartQuantity(productId, change) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            
            if (item.quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                this.saveCart();
                this.updateCart();
            }
        }
    }

    saveCart() {
        localStorage.setItem('sweetIslandCart', JSON.stringify(this.cart));
    }

    updateCart() {
        const cartItems = document.getElementById('cartItems');
        const cartCount = document.getElementById('cartCount');
        const cartTotal = document.getElementById('cartTotal');
        
        cartItems.innerHTML = '';
        
        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <p>Ваша корзина пуста</p>
                    <button class="continue-shopping" onclick="closeCart()">
                        Продолжить покупки
                    </button>
                </div>
            `;
            cartCount.textContent = '0';
            cartTotal.textContent = '0₽';
            return;
        }
        
        let total = 0;
        let totalCount = 0;
        
        this.cart.forEach(item => {
            total += item.price * item.quantity;
            totalCount += item.quantity;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price}₽ × ${item.quantity}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="catalog.updateCartQuantity('${item.id}', -1)" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="catalog.updateCartQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="remove-from-cart" onclick="catalog.removeFromCart('${item.id}')">
                    🗑️
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
        
        cartCount.textContent = totalCount.toString();
        cartTotal.textContent = total + '₽';
    }


    checkout() {
        if (this.cart.length === 0) {
            return;
        }
        window.location.href = 'cart.html'; 
    }
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
    
    //  затемнение фона
    let overlay = document.querySelector('.body-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'body-overlay';
        document.body.appendChild(overlay);
    }
    
    if (cartSidebar.classList.contains('active')) {
        overlay.classList.add('active');
        overlay.addEventListener('click', closeCart);
    } else {
        overlay.classList.remove('active');
    }
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    const overlay = document.querySelector('.body-overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

function clearFilters() {
    if (window.catalog) {
        window.catalog.clearFilters();
    }
}


let catalog;
document.addEventListener('DOMContentLoaded', function() {
    catalog = new Catalog();
    window.catalog = catalog;
    
    // Обработчик для кнопки оформления заказа
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        catalog.checkout();
    });
});

document.addEventListener('click', function(e) {
    const modal = document.getElementById('productModal');
    if (e.target === modal) {
        closeModal();
    }
});


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeCart();
    }
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});