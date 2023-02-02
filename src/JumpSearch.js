/*
	arr-> a list.
	n-> is the length of the list arr.
	m-> is block size and like the jump size.
	sqrt(n)-> the optimal value of m,
	so we will find of the jump size
	
*/
const array=[10,20,24,34,45,55,76,79,82,85,89,97,98]

//part 1
function JumpSearch(arr,key){
	let n=arr.length
	// if this not length of the array
	if(!n){
		return `it's not array ${arr}`
	}
	//to find the jump size
	let jumpSize=Math.floor(Math.sqrt(n))
	//the iteration begain at the index of the array 
	let index=0
	//the specified jumps at the array
	while(arr[Math.min(jumpSize,n-1)]<key){
		//the jump add to the index
		index=jumpSize
		// the jump increase by three 
		//for example : like jump-> 3 +  jump-> 3 + jump-> 3 
		jumpSize+=Math.abs(Math.floor(Math.sqrt(n)))
		// if last index of the array >= length of the array 
		if(index>=n){
			return -1
		}
		
	}
	
	while(arr[index]<key){
		index+=1
	
		if(index==Math.min(jumpSize,n)){
			return -1
		}
		
	}
	return index
	//ths step: Perform a linear search from index to get the element item
	if(arr[index]==key){
		return `the found index: ${index} key: ${arr[index]} array: ${arr}`
	}else{
		return -1
	}
	
	
}

//console.info(JumpSearch(array,55))

//step 2
function Jump(arr,key){
	let n=arr.length
	let m=Math.floor(Math.sqrt(n))
	let index=0
	while(arr[m-1]<key){
		index=m
		m+=m
		
		if(index>=arr.length) return -1
		
	}
	//to continue jump of the index
	for(index;arr[index]<key;index+=1){
		// if these are equal,it will be  the negative 1  
		if(index==m)return -1
	}
	
	//and end we found index with the linear search
	if(arr[index]==key){
		return `the found index: ${index} key: ${arr[index]} array: ${arr}`
	}
}
console.info(Jump(array,82))
