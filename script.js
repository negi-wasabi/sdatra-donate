// 寄付金額をランダムに生成する関数
function generateRandomAmount() {
  // 最初の金額を334円に設定
  let amount = 334;
  // 3~10秒のランダムな秒数を生成
  const seconds = Math.floor(Math.random() * 8) + 3;
  // 指定された秒数だけ待機し、その間にランダムな金額を生成する
  setTimeout(function() {
    amount += Math.floor(Math.random() * 6449) + 34;
    // 募金総額を更新する
    updateTotalAmount(amount);
  }, seconds * 1000);
}

// 募金総額を更新する関数
function updateTotalAmount(amount) {
  // 募金総額を更新する
  const totalAmount = document.getElementById("total-amount");
  totalAmount.textContent = amount.toLocaleString() + "円";

  // メーターを更新する
  const meter = document.getElementById("meter");
  const percentage = Math.min((amount / 3000000000) * 100, 100);
  meter.style.width = percentage + "%";
  meter.textContent = percentage.toFixed(2) + "%";
}

// 寄付するボタンをクリックしたときに呼ばれる関数
function donate() {
  // 入力された金額を取得する
  const donateNum = document.getElementById("donate-num").value;
  const amount = parseInt(donateNum);

  // 名前を取得する
  const name = prompt("お名前を入力してください");

  // 募金総額を更新する
  updateTotalAmount(amount);
}

// ページが読み込まれたときに、ランダムな金額を生成する
generateRandomAmount();
