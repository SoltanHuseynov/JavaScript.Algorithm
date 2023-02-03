/*
  -> it's similer to binary search.
  -> it instead of dividing the array into two parts in each iteration,
     it uses an estimation of the position of 
 	 the target value based on the range of values in the array.

 	 position=low+( (key-arr[low])*(hig-low) / (arr[hig]-arr[low]) )

 	 note: the complexity is O(log(log n))
*/

function Interpolation(arr,key){
	let low=0
	let hig=arr.length-1
	
	if(!arr.length){
		return -1
	}
	while(low<=hig&&key>=arr[low]&&key<=arr[hig]){
		// to specified an estimation of the position
		let post=low+Math.floor(((hig-low)*(key-arr[low]) / (arr[hig]-arr[low])))
		//if the value at the estimated position is equal to the target value.
		//if so, return position
		if(arr[post]==key){
			return `found at the index: ${post} key: ${arr[post]} array: ${arr}`
		}
		/*
			if the value at the estimated position is greater than the target value,
			repeat the process with the subarray to the right of the estimated position.
		*/
		else if(arr[post]>key){
			return hig=post+1
		}
		/*
			If the value at the estimated position is less than the target value,
			repeat the process with the subarray to the left of the estimated position.
		*/
		else{
			return low=post+1
		}
		return false
	}
	
}

const array=[1,2,3,4,5,6,7,8,9,10]
console.info(Interpolation(array,8))
