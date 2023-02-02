const array=[1,2,3,4,5,6,7,8,9,10,11,12,14,29]

console.log(Binary(array,11))

function Binary(value,target){
	var low=0;
	var hig=value.length-1;

	if(hig>=1){
		while(low<=hig){
			let index=Math.floor((low+hig)/2)
			if(value[index]<target){
				low=index+1//
			}
			else{
				hig=index-1	
			}
		}
		
		if(value[low]==target){
			return `found at the index ${low}`
		}else if(value[hig]==target){
			return `found at the index ${hig}`
		}else{
			return `not found`
		}
	}else{
		return -1
	}
}
