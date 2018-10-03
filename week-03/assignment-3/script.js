console.log('Assignment 3');

/*
 * Question 1: no code necessary, 
 * but feel free to use this space as a Javascript sandbox to check your answers
 */

/*
 * Question 2: control structures 
 */
{
	//2.1 
	console.group("Exercise 2.1")
	for(let index = 10; index > 0; index+=1){
		console.log(index);
	}
	console.groupEnd();

	//2.2
	/* YOUR CODE HERE*/
	for(let index = 0; index < 501; index+=1){
		//only log index if index is multiple of 100
		if(index % 100 === 0){
			console.log(index);
		} 
	}

	//2.3
	const arr = [89, 23, 88, 54, 90, 0, 10];
	//Log out the content of this array using a for loop
	for(let i = 0; i < arr.length; i++){
		console.log(arr[i])
	}
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

