

// home work

//******************************--1--******************************************************************* */

// נתון מערך של כתבות: כותרת, מחבר, תאריך
//  הדפס את כל הכתבות בעזרת forEach
//  הדפס את כל הכתבות בעזרת for-of


// let articles=[{title:"hi",author:"bob",date:2020},
// {title:"some",author:"mike",date:2021},
// {title:"why not",author:"ben",date:2019},];


// articles.forEach((someName,index)=>{
//     console.log(someName);
// });

// for(const items of articles){
//     console.log(items);
// }

//*************************************--2--**************************************************************** */

// נתון מערך של אובייקטים
//  הדפס את כל ה- key וה-value של כל האובייקטים- שילוב לולאה + forIN


// let person=[{name:"matan",age:25,height:1.80,},
// {name:"bob",age:30,height:1.70,},
// {name:"ron",age:25,height:2.80,},];

// for(let i=0;i<person.length;i++){
//     for(const key in person[i]){
//             console.log(key +" "+person[i][key] );
// }};

//*********************************--3--************************************************************************** */

// נתון מערך של 4 ספרים: שם, מחבר ומחיר:
//  הדפס את כל הספרים
// הדפס את כל המחברים של הספרים


// let books=[{name:"hello",author:"mike",price:70,},
// {name:"why not",author:"bob",price:100,},
// {name:"yes",author:"martin",price:20,},]




// books.forEach((obj,index)=>{
//     console.log(obj);
// });



// books.forEach((obj,index)=>{
//     console.log(obj.author);
// });


//*********************************************--4--************************************************************* */
// נתון מערך של מספרים-  הדפס את סכום המערך:
//  בעזרת forEach
//  בעזרת for-of




// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;


// numbers.forEach((num,index)=>{
    
//     sum+=num
    
// });
// console.log(sum);


// let result = 0;
// for (const myNumber of numbers) {
//     result += myNumber;
// }
// console.log(sum);
