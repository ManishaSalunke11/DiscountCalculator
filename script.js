const bill = document.querySelector('#BA');
const discount = document.querySelector('#DP');
const calculator = document.querySelector('#cal')
const total = document.querySelector('#total');



calculator.addEventListener('click', () => {
    const billValue = bill.value;
    const discountValue = discount.value;
    const valid = isValid(discountValue, billValue);


    if (valid) {
        const discountAmount = billValue - (billValue * discountValue) / 100;
        total.innerHTML = `Total amount to pay is:${discountAmount}`;
    } else {
        alert(`Entered values are incorrect: ${billValue},${discountValue}`);
    }

});

function isValid(discount, bill) {
    if (discount < 0 || discount > 100 || bill <= 0 || bill == "") {
        return false;
    }
    return true;
}