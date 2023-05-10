
let cart = [];


function addItem(name, price) {
    cart.push({ name, price });
    showCart();
}


function removeItem(index) {
    cart.splice(index, 1);
    showCart();
}


function getTotal() {
    let total = 0;
    for (let item of cart) {
        total += item.price;
    }
    return total.toFixed(2);
}


function showCart() {
    let cartElement = document.getElementById("cart");
    cartElement.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let itemElement = document.createElement("li");
        itemElement.innerHTML = `
    <div>
    ${item.name} - ${item.price} грн. <button class = "btn-delete" onclick="removeItem(${i})">Видалити</button>
    </div>
    `;
        cartElement.appendChild(itemElement);
    }
    let totalElement = document.createElement("li");
    totalElement.innerHTML = `Загальна вартість: ${getTotal()} грн.`;
    cartElement.appendChild(totalElement);

    let btnOf = document.createElement('button');
    btnOf.textContent = 'Оформити';
    btnOf.classList.add('btnOf');
    cartElement.appendChild(btnOf);

    btnOf.addEventListener('click' , () => {
        clearCart();
    });
}

let blockCart = document.querySelector('.block-cart');

if(blockCart.childNodes.length == 1){
    let infoTxt = document.createElement('p');
    infoTxt.classList.add('infoTxt');
    infoTxt.textContent = 'Корзина пуста';
    blockCart.append(infoTxt);
}


function clearCart() {
    cart = [];
    showCart();
}
