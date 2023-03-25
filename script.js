// 募金総額の初期値を設定
let totalDonations = 334;

// 募金金額をランダムに生成する関数
function generateDonationAmount() {
  return Math.floor(Math.random() * 6450) + 34;
}

// 募金総額を更新する関数
function updateTotalDonations(amount) {
  totalDonations += amount;
  document.getElementById("total-donations").innerHTML = totalDonations.toLocaleString();
  updateMeter(totalDonations);
}

// メーターを更新する関数
function updateMeter(amount) {
  const maxAmount = 3000000000; // メーターの最大値
  const meterValue = Math.min(amount / maxAmount * 100, 100); // メーターの現在値
  document.getElementById("meter").value = meterValue;
  document.getElementById("meter-value").innerHTML = meterValue.toFixed(2) + "%";
}


// 寄付ボタンがクリックされたときの処理
function donate() {
  const amountInput = document.getElementById("donation-amount");
  const amount = parseInt(amountInput.value);
  const name = document.getElementById("name").value;
  if (!isNaN(amount) && name) {
    updateTotalDonations(amount);
    amountInput.value = ""; // 入力フィールドをクリア
    alert(name + "さん、" + amount.toLocaleString() + "円の寄付ありがとうございます！");
  } else {
    alert("金額と名前を入力してください。");
  }
}

// ページが読み込まれたときの処理
window.onload = function() {
  // ...

  // 寄付ボタンにイベントリスナーを設定
  const donateButton = document.getElementById("donate-button");
  donateButton.addEventListener("click", donate);

  // ...
};



  // ロゴマークを設定
  const logo = document.getElementById("logo");
  logo.src = "sdalogo.png";
  logo.width = 200;
  logo.height = 200;

  // 募金総額を表示
  document.getElementById("total-donations").innerHTML = totalDonations.toLocaleString();

  // メーターを設定
  const meter = document.getElementById("meter");
  meter.max = 100;
  meter.value = 0;

  // 3〜10秒ごとに募金総額を更新する
  setInterval(function() {
    const amount = generateDonationAmount();
    updateTotalDonations(amount);
  }, Math.floor(Math.random() * 7000) + 3000); // 3〜10秒のランダムな秒数
};
