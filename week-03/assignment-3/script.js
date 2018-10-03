console.log('Assignment 3');

/*
 * Question 1: no code necessary, 
 * but feel free to use this space as a Javascript sandbox to check your answers
 */

/*
 * Question 2: control structures 
 */
{
	//2.1: reverse log numbers 10 to 1
	console.groupCollapsed('Question 2.1');
	for(let i = 0; i < 10; i ++){
		console.log(10 - i);
	}	
	console.groupEnd();

	//2.2: log every multiple of 100 from 0 to 500
	console.groupCollapsed('Question 2.2');
	for(let i = 0; i <= 500; i++){
		if(i%100 === 0){
			console.log(i);
		}
	}
	console.groupEnd();

	//2.3
	const arr = [89, 23, 88, 54, 90, 0, 10];
	//Log out the content of this array using a for loop
	console.groupCollapsed('Question 2.3');
	for(let i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
	console.groupEnd();
}

/*
 * Question 3: no code necessary
 */

/*
 * Question 4: objects and arrays
 */

{
	//4.1
	const instructors = [
		{name:'Ashley', tenure:10},
		{name:'Ben', tenure:2},
		{name:'Carol', tenure:3}
	]; /* YOUR CODE HERE */

	const instructors2 = [
		//this one has 7 
	]

	//4.2 
	/* COMPLETE THE FUNCTION */
	function computeAvgTenure(l){
		//l is an array of objects
		let totalTenure = 0;

		for(let i = 0; i < l.length; i++){
			totalTenure += l[i].tenure
		}

		return totalTenure/l.length;
	}

	computeAvgTenure(instructors);

	//4.3
	/* YOUR CODE HERE */
	instructors.push({
		name:'Dan',
		tenure: 5
	});

	computeAvgTenure(instructors)
}

