// DOM Elements
const totalDonation = document.getElementById('total-donation');
const donationForm = document.getElementById('donation-form');
const donationAmount = document.getElementById('donation-amount');
const donorName = document.getElementById('donor-name');
const meterFill = document.getElementById('meter-fill');
const meterLabel = document.getElementById('meter-label');

// Initial values
let donationTotal = 334;
let donationGoal = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
meterLabel.textContent = `${donationTotal}/${donationGoal}`;

// Add random donation amount after a random delay
setTimeout(() => {
  const randomAmount = Math.floor(Math.random() * (6482 - 34 + 1)) + 34;
  donationTotal += randomAmount;
  totalDonation.textContent = `¥${donationTotal.toLocaleString()}`;
  meterFill.style.width = `${(donationTotal/donationGoal)*100}%`;
  meterLabel.textContent = `${donationTotal.toLocaleString()}/${donationGoal.toLocaleString()}`;
}, Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000);

// Add event listener to the donation form
donationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const donation = Number(donationAmount.value);
  if (donation && donorName.value) {
    donationTotal += donation;
    totalDonation.textContent = `¥${donationTotal.toLocaleString()}`;
    meterFill.style.width = `${(donationTotal/donationGoal)*100}%`;
    meterLabel.textContent = `${donationTotal.toLocaleString()}/${donationGoal.toLocaleString()}`;
    donationAmount.value = '';
    donorName.value = '';
  }
});
