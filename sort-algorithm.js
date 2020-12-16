function test(list){
	for(index in list){
		a=list[index]
		b=index
		while(list[b-1]>a){
			list[b]=list[b-1]
			b-=1
		}
		list[b]=a
	}
	console.log(list)
}
a=[3,5,2,1,6,8,7,9,10,4]
test(a)