// 寄付金額をランダムに生成する関数
function generateDonationAmount() {
  return Math.floor(Math.random() * 6450) + 34;
}

// ページロード時に寄付金額を更新する
window.addEventListener('load', function() {
  const donationAmount = document.querySelector('#total-amount');
  const initialAmount = 334;
  let totalAmount = initialAmount;
  donationAmount.textContent = `¥${totalAmount.toLocaleString()}`;
  setInterval(function() {
    const donation = generateDonationAmount();
    totalAmount += donation;
    donationAmount.textContent = `¥${totalAmount.toLocaleString()}`;
  }, Math.floor(Math.random() * (10000 - 3000)) + 3000); // ランダムな秒数で寄付金額を更新する
});

// 寄付ボタンを押したときの処理
const donateButton = document.querySelector('#donate-btn');
donateButton.addEventListener('click', function() {
  const donationAmount = parseInt(document.querySelector('#donate-num').value);
  const name = document.querySelector('#name-input').value;
  const donationMeter = document.querySelector('#donation-meter');
  let totalAmount = parseInt(document.querySelector('#total-amount').textContent.replace('¥', '').replace(',', ''));
  totalAmount += donationAmount;
  document.querySelector('#total-amount').textContent = `¥${totalAmount.toLocaleString()}`;
  document.querySelector('#donate-num').value = '';
  document.querySelector('#name-input').value = '';
  donationMeter.style.width = `${Math.min(100, totalAmount / 3000000000 * 100)}%`;
  donationMeter.textContent = `${Math.min(100, totalAmount / 3000000000 * 100).toFixed(2)}%`;
  const newDonor = document.createElement('li');
  newDonor.textContent = `${name}: ¥${donationAmount.toLocaleString()}`;
  const donorList = document.querySelector('#donor-list');
  donorList.prepend(newDonor);
});

// 寄付金額をランダムに生成する関数
function generateDonationAmount() {
  return Math.floor(Math.random() * 6450) + 34;
}

// ページロード時に寄付金額を更新する
window.addEventListener('load', function() {
  const donationAmount = document.querySelector('#total-amount');
  const initialAmount = 334;
  let totalAmount = initialAmount;
  donationAmount.textContent = `¥${totalAmount.toLocaleString()}`;
  setInterval(function() {
    const donation = generateDonationAmount();
    totalAmount += donation;
    donationAmount.textContent = `¥${totalAmount.toLocaleString()}`;
  }, Math.floor(Math.random() * (10000 - 3000)) + 3000); // ランダムな秒数で寄付金額を更新する
});

// 寄付ボタンを押したときの処理
const donateButton = document.querySelector('#donate-btn');
donateButton.addEventListener('click', function() {
  const donationAmount = parseInt(document.querySelector('#donate-num').value);
  const name = document.querySelector('#name-input').value;
  const donationMeter = document.querySelector('#donation-meter');
  let totalAmount = parseInt(document.querySelector('#total-amount').textContent.replace('¥', '').replace(',', ''));
  totalAmount += donationAmount;
  document.querySelector('#total-amount').textContent = `¥${totalAmount.toLocaleString()}`;
  document.querySelector('#donate-num').value = '';
  document.querySelector('#name-input').value = '';
  donationMeter.style.width = `${Math.min(100, totalAmount / 3000000000 * 100)}%`;
  donationMeter.textContent = `${Math.min(100, totalAmount / 3000000000 * 100).toFixed(2)}%`;
  const newDonor = document.createElement('li');
  newDonor.textContent = `${name}: ¥${donationAmount.toLocaleString()}`;
  const donorList = document.querySelector('#donor-list');
  donorList.prepend(newDonor);
});
