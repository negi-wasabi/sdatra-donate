const meterFill = document.getElementById("meterFill");
const progressBar = document.getElementById("progressBar");
const donateButton = document.getElementById("donateButton");
const donationInput = document.getElementById("donationInput");
const nameLabel = document.getElementById("nameLabel");
const nameInput = document.getElementById("nameInput");
const logo = document.getElementById("logo");

let totalDonation = 334;

function addDonation() {
  const donation = parseFloat(donationInput.value);
  const name = nameInput.value;

  if (donation <= 0) {
    alert("寄付する金額は1円以上でなければなりません。");
    return;
  }

  totalDonation += donation;
  updateMeter(totalDonation);
  updateProgressBar(totalDonation);
  clearInput();
}

function clearInput() {
  donationInput.value = "";
  nameInput.value = "";
}

function updateMeter(totalDonation) {
  meterFill.style.width = `${totalDonation / 100}%`;
  meterFill.textContent = `¥${totalDonation.toLocaleString()}`;
}

function updateProgressBar(totalDonation) {
  const maxDonation = 6482;
  const percentage = (totalDonation / maxDonation) * 100;
  progressBar.style.width = `${percentage}%`;
}

donateButton.addEventListener("click", addDonation);
