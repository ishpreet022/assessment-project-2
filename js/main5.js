let carts = document.querySelectorAll('.add-cart');

let products = [{
        name: 'Gray t-shirt',
        tag: 'graytshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Gray Hoddie',
        tag: 'grayhoddie',
        price: 20,
        inCart: 0
    },
    {
        name: 'Black t-shirt',
        tag: 'blacktshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Black Hoddie',
        tag: 'blackHoddie',
        price: 20,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItem(product);
}

function setItem(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        let cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totslCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }


}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totslCost');

    if (cartItems && productContainer) {

        var cartOutput = '';

        for (var i in products) {
            productContainer.innerHTML +=
                '<div class="product">' +
                '<ion - icon name = "close-circle" >' +
                '< /ion-icon>' +
                '<img src = "' + '" >' +
                '<span>' + $(item.tag) + '</span>' +
                '</div>' +
                '<div class="quantity">' +
                '<ion-icon class="decrease"' +
                'name="' + 'arrow-dropleft-circle' + '">' + '< /ion-icon>' +
                '<span>' + $(item.inCart) + '</span>' +
                '<ion-icon class="increase" name="arrow-dropright-circle"' +
                '</ion-icon>' +
                '<span>' + $(item.inCart) + '</span>' +
                '<ion - icon class = "increase" name="arrow-dropright-circle">' +
                '</ion-icon>' +
                '</div>' +
                '<div class="total">' + '$$ { item.inCart = item.price },00' +
                '</div>';

        }


        document.getElementById('products-container').innerHTML = cartOutput;
    }

}
displayCart();
onLoadCartNumbers();