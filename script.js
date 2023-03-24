const totalAmountElement = document.getElementById('total-amount');

function updateTotalAmount(amount) {
  totalAmountElement.textContent = amount + "円";
}

function generateRandomAmount() {
  return Math.floor(Math.random() * 6450) + 34;
}

let totalAmount = 0;

function handleDonationSubmit(event) {
  event.preventDefault();
  const inputElement = document.getElementById('donation-amount');
  const amount = parseInt(inputElement.value, 10);
  if (amount >= 334) {
    totalAmount += amount + generateRandomAmount();
    updateTotalAmount(totalAmount);
    inputElement.value = '';
  } else {
    alert('寄付金額は334円以上にしてください。');
  }
}

const formElement = document.querySelector('form');
formElement.addEventListener('submit', handleDonationSubmit);
