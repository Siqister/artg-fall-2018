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
	console.groupCollapsed('Question 2.1');
	for(let i = 0; i < 10; i ++){
		console.log(10 - i);
	}	
	console.groupEnd();

	//2.2
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
		{name:'Ashley', department:'computer science', tenure:10},
		{name:'Ben', department:'design', tenure:2},
		{name:'Carol', department:'design', tenure:3},
	]; 

	//4.2 
	/* COMPLETE THE FUNCTION */
	function computeAvgTenure(instructors){
		let total = 0;
		for(let i = 0; i < instructors.length; i++){
			total += instructors[i].tenure;
		}
		return total/instructors.length;
	}

	console.log(`Average tenure of the three instructor is ${computeAvgTenure(instructors)}`);

	//4.3
	instructors.push({
		name: 'Dan',
		department: 'humanities',
		tenure: 5
	});

	console.log(`Average tenure after adding Dan is ${computeAvgTenure(instructors)}`);

}

