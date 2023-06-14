const bill = document.querySelector('#BA');
const discount = document.querySelector('#DP');
const calculator = document.querySelector('#cal')
const total = document.querySelector('#total');
calculator.addEventListener('click', () => {
    const billValue = bill.value;
    const discountValue = discount.value;
    const discountAmount = billValue - (billValue * discountValue) / 100;
    total.innerHTML = `Total amount to pay is:${discountAmount}`;
});