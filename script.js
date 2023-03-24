// 寄付するボタンの要素を取得
const donateButton = document.getElementById("donate-button");

// 寄付するボタンがクリックされたときの処理を登録
donateButton.addEventListener("click", function() {
  // いくら寄付するかの入力欄の要素を取得
  const amountInput = document.getElementById("donation-amount");

  // 入力された寄付金額を取得
  const donationAmount = parseInt(amountInput.value, 10);

  // 現在の寄付総額を取得
  const currentTotal = parseInt(totalDonationElement.textContent, 10);

  // 新しい寄付総額を計算
  const newTotal = currentTotal + donationAmount;

  // 寄付総額を更新
  totalDonationElement.textContent = newTotal.toLocaleString();

  // メーターバーを更新
  const meterBar = document.getElementById("meter-bar");
  const meterWidth = (newTotal / 100000) * 100; // 最大値を100,000円として計算
  meterBar.style.width = meterWidth + "%";
});
