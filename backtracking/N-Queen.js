// https://programmers.co.kr/learn/courses/30/lessons/12952
// 문제 설명
// 가로, 세로 길이가 n인 정사각형으로된 체스판이 있습니다. 체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.

// 예를 들어서 n이 4인경우 다음과 같이 퀸을 배치하면 n개의 퀸은 서로를 한번에 공격 할 수 없습니다.

// Imgur
// Imgur

// 체스판의 가로 세로의 세로의 길이 n이 매개변수로 주어질 때, n개의 퀸이 조건에 만족 하도록 배치할 수 있는 방법의 수를 return하는 solution함수를 완성해주세요.

// 제한사항
// 퀸(Queen)은 가로, 세로, 대각선으로 이동할 수 있습니다.
// n은 12이하의 자연수 입니다.

let count = 0;

function getIndex(num, div) {
	return [parseInt(num / div), num % div];
}

function checkDiagonal(board, x, y) {
	let sum = x + y;
	let sub = x - y;
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (i + j === sum)
				if (board[i][j] === 1) return false;
			if (i - j === sub)
				if (board[i][j] === 1) return false;
		}
	}
	return true;
}

function checkQueen(board, x, y) {
	for (let idx = 0; idx < board.length; idx++) {
		if (board[x][idx] === 1) return false;
		if (board[idx][y] === 1) return false;
	}
	if (!checkDiagonal(board, x, y)) return false;
	return true;
}

function backtracking(board, n, step) {
	if (step === n) {
		// console.log(board);
		count++;
		return ;
	}

	for (let i = 0; i < n; i++) {
		let [x, y] = getIndex(i + (n * step), n);
		if (checkQueen(board, x, y)) {
			board[x][y] = 1;
			backtracking(board, n, step + 1);
			board[x][y] = 0;
		}
	}
}

function solution(n) {
	let board = [];
	for (let i = 0; i < n; i++) board.push(new Array(n).fill(0));

	backtracking(board, n, 0);
	return count;
}

let start = new Date();
console.log(solution(6));
let end = new Date();

console.log(end - start);