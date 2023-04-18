const categories = {
    "Електроніка": ["Телефони", "Комп'ютери", "Планшети"],
    "Одяг": ["Чоловічий одяг", "Жіночий одяг", "Дитячий одяг"],
    "Книги": ["Художня література", "Наукова література", "Дитяча література"]
};

function showCategories() {
    const categoryList = document.getElementById("categoryList");
    for (let category in categories) {
        const li = document.createElement("li");
        li.textContent = category;
        li.onclick = function () {
            showProducts(category);
        };
        categoryList.appendChild(li);
    }
}

function showProducts(category) {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; 
    const products = categories[category];
    for (let i = 0; i < products.length; i++) {
        const li = document.createElement("li");
        li.textContent = products[i];
        li.onclick = function () {
            showProductInfo(products[i]);
        };
        productList.appendChild(li);
    }
}
// Функция для отображения товаров в выбранной категории
function showProducts(category) {
    // Очищаем содержимое серединного блока
    middleBlock.innerHTML = '';
    // Отображаем название выбранной категории
    middleBlock.appendChild(document.createElement('h2')).textContent = category;
    
    // Перебираем массив товаров и отображаем только те, что соответствуют выбранной категории
    products.forEach(product => {
      if (product.category === category) {
        const productElem = document.createElement('div');
        productElem.classList.add('product');
        productElem.textContent = product.name;
        // При клике на товар отображаем его информацию в правом блоке
        productElem.addEventListener('click', () => showProductInfo(product));
        middleBlock.appendChild(productElem);
      }
    });
  }
  
  function showProductInfo(product) {
    rightBlock.innerHTML = '';
    const nameElem = document.createElement('h2');
    nameElem.textContent = product.name;
    rightBlock.appendChild(nameElem);
    const descriptionElem = document.createElement('p');
    descriptionElem.textContent = product.description;
    rightBlock.appendChild(descriptionElem);
    const priceElem = document.createElement('p');
    priceElem.textContent = `Price: $${product.price}`;
    rightBlock.appendChild(priceElem);
    const buyBtn = document.createElement('button');
    buyBtn.textContent = 'Buy';
    buyBtn.addEventListener('click', () => buyProduct(product));
    rightBlock.appendChild(buyBtn);
  }
  
  function buyProduct(product) {
    alert(`You bought ${product.name}!`);
    showCategories();
  }
  
  showCategories();
  