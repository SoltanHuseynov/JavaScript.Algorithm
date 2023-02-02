// var list=["q","d","e","a","f","c","b"]
// const index=LinearSearch(list,"s")
// if(index!=-1){
	// console.info(`Elemetn found at index value ${index}`)
// }else{
	// console.info(`Element not found at  ${list} because it's value ${index} `)
// }
// 
// 
// function LinearSearch(array,target){
	// let i=0
	// for (i;i<array.length;i++){
		// if(array[i]==target){
			// return i
		// }
		// return -1
	// }
// }

const getTarget=document.querySelector("input")
const button=document.querySelector("button")
const div=document.querySelector("div")
var data=["admin-1","solder-2","army-3","stalker-4","user-5"]

function display(){
	const p=document.createElement("p")
	let searchValue=[]
	let render
	data.forEach((items,index)=>{
		render=data[index].replace(/-1|-2|-3|-4|-5/gi,"")
		if(data[index]==getTarget.value||render==getTarget.value){
			searchValue.push(data[index])
		}
		
	})
	console.log(searchValue)
	if(searchValue[0]==undefined){
		p.innerHTML=`your entered a blank value`
	}else {
		getTarget.value=searchValue[0]
		p.innerHTML=`Search Value:${searchValue[0]}`
	}
	div.append(p)
}
	
button.addEventListener("click",display)

//console.log(LinearSearch(list,"c"))
