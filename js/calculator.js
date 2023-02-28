const form = document.querySelector('form');
const total = document.querySelector('#total');
const amount = form.querySelector('.amount');

const recalculateTotal = () => {
    const { quantity: { value: qty }, price: { value: priceValue }} = form.children;
    total.textContent = Number(priceValue * qty).toFixed(2);
    amount.textContent = qty;
};

form.addEventListener('change', recalculateTotal);

recalculateTotal();