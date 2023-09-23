 //1. JAVASCRIPT CONSOLE API
//  console.warn("this is warning");
//  console.error("this is an error");

//2. WAYS TO PRINT IN JS
//  console.log("Hello World");
//  console.log("hello world 2",5+8,'c'+'d','f'+'m');
 alert('me');
 //document.write('This is to show text on webpage through JS');

 //3. Variables
//  containers to store data values
var a = 10;
var b = 15;
// console.log(a+b);
//document.write(10+15);

//4. Data Types in JS
//String
var str1 = 'Hello1';
var str2 = "Hello2";
//Number
var Num1=455;
var Num2=56.83;
//Objects (Key-Value Pairs)
var marks={
    ravi:34,
    rajesh:88,
    mohan:85,
    sohan:90       
}
// console.log(marks);
//Boolean
var a=true;
var b=false;

//Undefined or NULL
var u=undefined;
// console.log(u);
var n=null;
//console.log(n);

//4. Arrays
var arr = [1,2,3,4,5];

//5. Operators
var x=70;
var y=70;

// console.log((x==y) ? true : false);
// console.log(x!=y);

//6. Logical Operators
// console.log(true && false);
// console.log(true && true);

//7. Functions in JS
// function avg(a,b){
//     return (a+b)/2;
// }
// c = avg(4,6);
// c2= avg(5,15);
// console.log(c,c2);

// //8. Conditional Statemnt
// var age=16;
// if(age>18){
//     console.log("Eligible");
// }
// else if(age >15 && age<18){
//     console.log("Grow Up");
// }
// else{
//     console.log("Good");
// }

//8. Conditional Statements 
//For Loop
// for(var i=1;i<5;i++){
//     console.log(i);
// }
var arr =[1,2,3,4,5];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// } 
//OR
// arr.forEach(function(element) {
//     console.log(element)
// })

//While loop
let j=10;
const ac=0;
while(j<15){
    //console.log(j);
    j++;
}

//9. Array Operations/Methods
let myArr= ['Hello','World',1,2,null,true];
//console.log(myArr.length);
myArr.pop();
//console.log(myArr);
myArr.push('Hi');
myArr.sort();

//10. String Operations
let mySting = "Welcome to Everyone";
// console.log(mySting.length);
// console.log(mySting.indexOf("to"));
// console.log(mySting.lastIndexOf('Eveyone'));
//console.log(mySting.slice(1,4));
q = mySting.replace('to','yaay!');
//console.log(q,"\n",mySting);

//11. Dates in JS
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDate());

//12. DOM MANIPULATION (DOCUMENT OBJECT MODEL)
let ele = document.getElementsByClassName('heyy');
console.log(ele);
// tn = document.getElementsByTagName('button');
// console.log(tn);

// dv = document.getElementsByTagName('div');
// console.log(dv);

//Selecting using Query
sel = document.querySelector('.container');
console.log(sel);

sel2 = document.querySelectorAll('.container');
console.log(sel2);

//13. Events in JS
function clicked(){
    console.log('The button was clicked');
}
document.querySelectorAll('.container')[1].innerHTML = <b>We have clicked</b>
console.log('clicked on container');

// window.onload = function(){
//     console.log('The document is loaded');
// }

// firstcontainer.addEventListener('mouseover',function(){
//     console.log('Mouse on Container')
// })
// firstcontainer.addEventListener('mouseup',function(){
//     console.log('Mouse up when clicked on Container')
// })
// firstcontainer.addEventListener('mousedown',function(){
//     console.log('Mouse down when clicked on Container')
// })

//13. SettimeOut and Set Interval
// SetTimeOut is used for scheduling things.
// hello = ()=>{
//     console.log("Example of SetTimeOut");
// }
// setTimeout(hello,2000); //time is in Millisecond(MS);
// setInterval(hello,200);

//14.Local Storage
// Used to save data in User's pc as a string

// 15. JSON
// localStorage.setItem('name','shubh')
// localStorage
// localStorage.getItem('name');

obj = {name:'shubh',length:1}
jso = JSON.stringify(jso);
console.log(typeof jso);