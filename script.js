window.addEventListener("DOMContentLoaded", function() {
	// 募金総額を表示する要素を取得
	const totalElement = document.getElementById("total");
	// メーターを表示する要素を取得
	const meterElement = document.getElementById("meter");
	// 寄付フォームを取得
	const formElement = document.querySelector("form");
	// 寄付ボタンを取得
	const donateButton = document.getElementById("donate");

	// 現在の募金総額
	let totalAmount = 334;

	// 募金総額を表示
	totalElement.textContent = totalAmount;

	// メーターを更新
	updateMeter(totalAmount);

	// 寄付フォームが送信されたときの処理
	formElement.addEventListener("submit", function(event) {
		event.preventDefault();
		const name = document.getElementById("name").value;
		const amount = Number(document.getElementById("amount").value);
		// 寄付金額を加算
		totalAmount += amount;
		// 募金総額を更新
		totalElement.textContent = totalAmount;
		// メーターを更新
		updateMeter(totalAmount);
		// フォームをリセット
		formElement.reset();
		alert(name + "さん、" + amount + "円の寄付ありがとうございました！");
	});

	// メーターを更新する関数
	function updateMeter(totalAmount) {
		// メーターの長さを更新
		const meterWidth = Math.min(totalAmount
