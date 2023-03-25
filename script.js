// DOM要素の取得
const donateButton = document.querySelector("#donate-btn");
const amountInput = document.querySelector("#amount-input");
const totalAmountDisplay = document.querySelector("#total-amount");
const meterFill = document.querySelector("#meter-fill");
const nameInput = document.querySelector("#name-input");

// 募金関連の変数
let totalAmount = 334;
let meterMaxValue = 10000;

// 募金金額の最小値と最大値
const minValue = 0;
const maxValue = 10000;

// 募金金額の範囲内に収まるランダムな数値を返す関数
function getRandomAmount() {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

// 募金ボタンを押したときの処理
donateButton.addEventListener("click", function () {
  // 入力された金額を取得
  let amount = parseInt(amountInput.value);

  // 金額が範囲内に収まるように修正
  if (isNaN(amount)) {
    amount = 0;
  }
  if (amount > maxValue) {
    amount = maxValue;
  }
  if (amount < minValue) {
    amount = 0;
  }

  // 募金金額を更新
  totalAmount += amount + getRandomAmount();

  // メーターを更新
  const percent = (totalAmount / meterMaxValue) * 100;
  meterFill.style.width = `${percent}%`;

  // 募金総額を表示
  totalAmountDisplay.textContent = `${totalAmount}円`;

  // 名前が入力されている場合はメッセージを表示
  if (nameInput.value !== "") {
    alert(`${nameInput.value}さん、ありがとうございました！`);
  }

  // 入力フォームをリセット
  amountInput.value = "";
  nameInput.value = "";
});
