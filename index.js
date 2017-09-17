// //绝对值
// Math.abs(10); 
// //最大值
// Math.max(10,30,15);
// //最小值  
// console.log(Math.min(10,30,15));
// //近似值  四舍五入
// console.log(Math.round(-10.5));       //10
// console.log(Math.round(-10.4));       //10
// //向上取整,得到的是整数.向上取最近的整数  比他大的数
// console.log(Math.ceil(10.1));         //11
// console.log(Math.ceil(-10.1));        //-10
// //向下取整,得到的是整数.向下取最近的整数  比他小的数
// console.log(Math.floor(10.1));        //10
console.log(Math.floor(-10.1));        //-11
// //随机数    范围:0~1中间的小数
// Math.random();
// for(let i=0;i<10;i++){
// 	// console.log(Math.random()*10);    //0~10中间的小数
// 	console.log(Math.random()*10+10);    //10~20中间的小数
// 	console.log(Math.random()*15+5);    //5~20中间的小数
// 	console.log(Math.random()*10-5);    //-5~5中间的小数
// 	console.log(Math.random()*17+3);    //3~20中间的小数  
// 					      //20-3 3~20
// 					      //距离  平移
// }
// //操作页面中元素，必须写到元素下面

// let box=document.getElementById('box');    //获取元素
// box.onmouseover=function(){                //鼠标移入...  (事件驱动)
// 	box.style.background=color();
// }
// //x的y次幂
// Math.pow(2,3);    //2的3次方
// Math.pow(3,3);    //3的3次方
// //平方根
// Math.sqrt(2);    //

let arr=['a','b','c','d','e','f','g','h'];   //newarr=[1,2,3];
//随机拿三个数->新数组
//1
// function rand(arr,num){
// 	let newarr=[];
// 	for(let i=0;i<num;i++){
// 		let result=Math.floor(Math.random()*arr.length);
// 		if(newarr.includes(arr[result])){
// 			i--;
// 	 }else{
// 	 	newarr.push(arr[result]);
// 	 }		
// 	}
// 	return newarr;
// }
// console.log(rand(arr,3));
//2
//判断新数组有没有，有再产生一个随机数，直到新数组没有，放进去
// function rand(arr,num){
// 	let newarr=[];
// 	for(let i=0;i<num;i++){
// 		let result=Math.floor(Math.random()*arr.length);
// 		while(newarr.includes(arr[result])){
// 			 result=Math.floor(Math.random()*arr.length);
// 	    }
// 	 	newarr.push(arr[result]);	 	
// 	}
// 	return newarr;
// }
// console.log(rand(arr,5));
// 3
//新数组的长度比num小
//产生一个随机数
//判断新数组有没有，没有就一直放
// function rand(arr,num){
// 	let newarr=[];
// 	while(newarr.length<num){
// 		let result=Math.floor(Math.random()*arr.length);
// 		if(!newarr.includes(arr[result])){
// 		newarr.push(arr[result]);
// 		 }			
// 	} 		 	
// 	return newarr;
// }
// console.log(rand(arr,5));
//3
function rand(arr,num){
	let newarr=[];
	while(newarr.length<num){		
		let result=Math.floor(Math.random()*arr.length);
		if(!newarr.includes(arr[result])){
			newarr.push(arr[result]);
		}
	}
	return newarr;
}
console.log(rand(arr,4));
