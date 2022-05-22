document.querySelector('button').onclick = myClick;













function myClick() {
	let str = document.querySelector('.input').value;
	let findA = str.match(/а/gi);
	let findMOM = str.match(/мом/gi);
	let resA = findA.length;
	let resMOM = findMOM.length;
	alert('я нашёл ' + resA + ' букв "А" и ' + resMOM + ' слогов "МОМ"');


};

(function () {
	document.querySelector('.input').addEventListener('keydown', function (e) {
		if (e.keyCode === 13) {
			console.log(this.value);
			let str = document.querySelector('.input').value;
			let findA = str.match(/а/gi);
			let findMOM = str.match(/мом/gi);
			let resA = findA.length;
			let resMOM = findMOM.length;
			alert('я нашёл ' + resA + ' букв "А" и ' + resMOM + ' слогов "МОМ"');
		}
	});
})();




