const bill = document.querySelector('#BA');
const discount = document.querySelector('#DP');
const calculator = document.querySelector('#cal')
const total = document.querySelector('#total');
calculator.addEventListener('click', () => {
    const billValue = bill.value;
    const discountValue = discount.value;
    const valid = isValid(discountValue);
    if (valid) {
        const discountAmount = billValue - (billValue * discountValue) / 100;
        total.innerHTML = `Total amount to pay is:${discountAmount}`;
    } else {
        alert(`Entered discount is incorrect${discountValue}`);
    }

});

function isValid(discount) {
    if (discount < 0 || discount > 100) {
        return false;
    }
    return true;
}


calculator.addEventListener('click', () => {
    const billValue = bill.value;
    const discountValue = discount.value;
    const validBill = isValidBill(billValue);
    if (validBill) {
        const discountAmount = billValue - (billValue * discountValue) / 100;
        total.innerHTML = `Total amount to pay is:${discountAmount}`;
    } else {
        alert(`Entered bill is incorrect${billValue}`);
    }

});

function isValidBill(bill) {
    if (bill < 0 || bill == "") {
        return false;
    }
    return true;
}