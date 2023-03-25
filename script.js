// DOM要素を取得
const donateInput = document.querySelector('#donate-input');
const donateButton = document.querySelector('#donate-button');
const meterFill = document.querySelector('#meter-fill');
const meterText = document.querySelector('#meter-text');

// 寄付総額の初期値
let totalDonation = 334;

// メーターとテキストを更新する関数
function updateMeter() {
  // メーターを更新
  meterFill.style.width = `${(totalDonation / 100) % 100}%`;
  // テキストを更新
  meterText.innerText = `${totalDonation.toLocaleString()}円`;
}

// ボタンがクリックされたら寄付を処理する
donateButton.addEventListener('click', () => {
  // 入力値を数値に変換して寄付総額に追加
  const donationAmount = Number(donateInput.value);
  totalDonation += donationAmount;
  // メーターとテキストを更新
  updateMeter();
  // 入力欄をリセット
  donateInput.value = '';
});
