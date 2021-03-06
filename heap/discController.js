// https://programmers.co.kr/learn/courses/30/lessons/42627

'use strict'

function solution(jobs) {
	let currentTime = 0;
	let N = jobs.length;
	let latency = 0;
	let enableJobs = [];
	
	while (jobs.length || enableJobs.length) {
		for (let i = 0; i < jobs.length; i++) {
			if (jobs[i][0] <= currentTime) {
				enableJobs.push(jobs.splice(i, 1)[0]);
				i--;
			}
		}
		
		if (enableJobs.length) {
			enableJobs.sort((a, b) => a[1] - b[1]);
			let [startedAt, time] = enableJobs.shift();
			currentTime += time;
			latency += (currentTime - startedAt);
		}
		else currentTime++;
	}

	return parseInt(latency / N);
}

var jobs = [[0, 3], [1, 9], [2, 6]];
console.log(solution(jobs)); // 9

var jobs = [[0, 10], [4, 10], [15, 2], [5, 11]];
console.log(solution(jobs)); // 15