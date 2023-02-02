/*
  -> it's similer to binary search.
  -> it instead of dividing the array into two parts in each iteration,
     it uses an estimation of the position of 
 	 the target value based on the range of values in the array.

 	 position=low+( (key-arr[low])*(hig-low) / (arr[high]-arr[low]) )
*/
