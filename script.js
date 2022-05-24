document.querySelector('button').onclick = findChars;

function findChars() {
	let str = document.querySelector('.input').value;
	let findA = str.match(/а/gi).length;
	let findMOM = str.match(/мом/gi).length;
	alert('я нашёл ' + findA + ' букв "А" и ' + findMOM + ' слогов "МОМ"');
};




