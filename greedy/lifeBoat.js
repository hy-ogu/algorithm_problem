// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
	let count = 0;
	people.sort((a, b) => (a - b));

	while (people.length) {
		if (people[0] + people[people.length - 1] <= limit) people.shift();
		people.pop();
		count++;
	}

	return count;
}