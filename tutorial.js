// This is alert

// alert('hello world');


// console.log('Hello World');


// keywords let,const,var

// const age = 30;
// can not change value  in const 
// let change_age = 30 ;
//  now we can change change_age = 35  in let 

//  var  is use global variable 
// console.log(change_age);

 //DataTypes  
//  string , Number, Boolean , null , undefined
//  const  string  = 'haseeb';
//  const  integer =30;
//  const float=4.5;
//  const   data = null;
//  const bool = true ;
//  const undefined_data  = undefined ;
//  let z;

// console.log(typeof string)
// console.log(typeof integer)
// console.log(typeof float)
// console.log(typeof bool)
// console.log(typeof data)
// console.log(typeof undefined_data)
// console.log(typeof z);

// const person = {
//     name: 'John',
//     age: 30,
//     country: 'USA'
// };
// in JavaScript, an object is a complex data type that can hold multiple key-value pairs.


// In JavaScript, 
// typeof null actually returns 'object'.
//  This behavior is considered a historical mistake in 
//  the language and has been preserved for compatibility reasons. 
//  Despite null technically not being an object, it is considered a primitive value.
//   This quirk has led to confusion over the years.

// So, when you console.log a variable initialized with null,
//  it will indeed display object. However,
//   it's important to note that null is not an object; it's a primitive value
//    representing the absence of any object value
// console.log(person);


                               
// -------------------- :::::::::::::::::Template String & concatentation:::::::::::::::::::::::::::----------------------------//

// const name = 'haseeb';
// const age = 23 ;

// console.log('my name is '+ name +' '+'and i am '+ age +' '+'year old');

// console.log("my name is "+ name +' '+'and i am '+ age +' '+'year old');

// console.log(`my name is ${name} and i am ${age} old`);


// some built in function

// console.log(name.toUpperCase());
// console.log(name.length);
// console.log(name.substring(0,3).toUpperCase());
// const devices  = 'mac , iphone  , lenovo'
// console.log(devices.split(','));



                               
// -------------------- ::::::::::::::::: Array  :::::::::::::::::::::::::::----------------------------//


// const fruits = ['apple' ,'grapes', 'guva'];
// // can not re assign it 
// // but you can change it like 
// fruits[2]='mangoes'

// fruits.push('banana');
// // if you add at begining of Array
// fruits.unshift('pear');

// // fruits.pop();

// console.log(fruits);
// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf('banana'))

 
// -------------------- :::::::::::::::::  object   :::::::::::::::::::::::::::----------------------------//

// const person = {
//     name :  "Haseeb",
//     age : 30 ,
//     hobbies : ['sports','movies'] ,
//     address :
//     {
//         town : "mohla bloha " ,
//         city : "RawalPindi"
//     }
// }

// // alert(person)

// person.email = "haseebaftab@gmail.com"
// console.log(person);


 
// -------------------- :::::::::::::::::  todos  :::::::::::::::::::::::::::----------------------------//

// object in a array 

const todos =  [
    {
     id:1,
     name:'ios',
     category:'apple',
     isbool:true
    },
    {
      id:2,
      name:'laptop',
      category:'dell'
    },
    { id:3,
        name:'mac',
        category:'apple'

    }

]
// console.log(todos.length)
// console.log(todos);

// convert data into json 

// console.log(JSON.stringify(todos));

// -------------------- :::::::::::::::::  loops  :::::::::::::::::::::::::::----------------------------//

// ::::::::::::::::: for loop  ::::::::::::::::::::::::::://
// for (let i =0 ; i<5 ; i++)
// {
//     console.log(todos[i]);
// } 
// :::::::::::::::::  while loops  ::::::::::::::::::::::::::://
// let i=0;
// while(i < todos.length){
// console.log(i)
// // console.log(i)
// console.log(todos[i])
// i++;
// }

// confirm.log(__dirname);
// :::::::::::::::::  for and of  ::::::::::::::::::::::::::://

// for (let data of todos)
// {
//     console.log(data.name);
// }
// :::::::::::::::::  for each  , map , filter  ::::::::::::::::::::::::::://

// todos.forEach((key)=>
// {
// console.log(key.id);
// })

// const filterdata  = todos.filter((data)=>
// {
//    return  data.category === 'apple';
// }).map((data)=>{
  
//     return data.name;
// })
// console.log(filterdata);

// :::::::::::::::::  if/else , expression syntax, switch ::::::::::::::::::::::::::://
// const x =10 ;
// const flag = 0;
// 0||1

// if(flag){
//     console.log("if is working ")
// }
// else
// {
// console.log("condition is not true ")
// }
// if(flag)
// {
//     console.log("it true")
// }
// else if(x>flag)
// {
//     console.log(`${x} is greater than ${flag}`);
// } else {
//     console.log("it not true")
// }
// const color='green';
// const num = color==='green' ? 10 :0;
// console.log(num);
// let x=0;

// switch(color)
// {
//     case 'green':
//         x=10;
//         break;
//     case 'red':
//         x=0;
//         break;

// }
// console.log(x);


////////functions//////::::::::::////////functions//////

// function add(x=1 ,y=4)
// {
//     console.log(x+y);
// }
 
// add();

// return  
// function mul(x,y)

// {
//     return x*y;
// }
//  const z = mul(3,5);
//  console.log(z)

// const sub = (num1 = 10 ,num2 = 5) => {
//     return num1-num2
// }
// console.log(sub());

// constructor function 

// function Person(name, age, dob) {
//     this.name = name;
//     this.age = age;
//     this.dob = new Date(dob);
// /// functions 
// this.getName = () =>{
//     return this.name ;
// }
// this.getAgeYear=()=>{
//     return this.dob.getFullYear();
// }
 

// }

// prototype
// function person(name, age, dob) {
//     this.name = name;
//     this.age = age;
//     this.dob = new Date(dob);
// }
// person.prototype.getName = function() {
//     return this.name ;
// }
// person.prototype.getAgeYear=function(){
//     return this.dob.getFullYear();
// }

// const obj1 = new person('haseeb', 10, '2000-11-21');
// const obj2 = new person('farhan', 10, '9-4-2001');

// console.log(obj1.getName(),obj2.getAgeYear());

class  person{
    constructor(name ,age ,dob)
    {
        this.name = name;
        this.age = age;
        this.dob = new Date(dob);   
    }
     getName = () =>{
    return this.name ;
}
        getAgeYear=()=>{
    return this.dob.getFullYear();
}

}
const obj1 = new person('haseeb', 10, '2000-11-21');
const obj2 = new person('farhan', 10, '9-4-2001');

console.log(obj1.getName(),obj2.getAgeYear());



// add event listener 

// select single element 
// console.log(document.getElementById('my-form'))
// console.log(document.querySelector('.container'))

// 2 or more element 
// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// const listData = document.querySelectorAll('.item');

// listData.forEach
//     (
//     (ite)=>
//     {
//     console.log(ite);
//     }
//     )
// const ul = document.querySelector('.items');
// // console.log(ul.lastElementChild)
// // ul.lastElementChild.remove();
// // ul.firstElementChild.remove();
// ul.children[0].innerText = 'list_1';
// ul.children[1].textContent = 'list_2';
// ul.children[2].innerHTML = '<h1> list_3 </>'

// const button = document.querySelector('.btn');

// button.style.background = 'red';


                                   // event listener // 


                                   const btn =  document.querySelector('.btn');
                                   btn.addEventListener('click', (change)=>{
                                       change.preventDefault();
                                       document.querySelector('h1').style.background = 'yellow'
                                       document.querySelector('body').classList.add('bg-dark');
                                   })



                                //    --------
                                // *{
                                //     margin: 0;
                                //     padding: 0;
                                //     box-sizing: border-box;
                                // }
                                // body
                                // {  
                                //     font-family: 'lato',sans-serif;
                                //     /* color: #333; */
                                //     line-height: 1.6;
                                // }
                                // header
                                // {
                                //     background-color: aliceblue;
                                //     text-align: center;
                                //     line-height: 4rem;
                                // }
                                // .container
                                // {  
                                //      /* margin-top: 20px; */
                                //     margin:50px 0;
                                //     display: grid;
                                //     justify-content: center;
                                //     height: 100%;
                                //     padding: 30px;
                                // }
                                
                                // #my-form {
                                //     background-color: rgb(19, 96, 163);
                                //     width: 350px;
                                //     display: flex;
                                //     flex-direction: column;
                                //     justify-content: center;
                                //     padding: 20px;
                                //     border-radius: 8px; 
                                   
                                // }
                                
                                // #my-form h1 {
                                //     text-align: center; 
                                //     margin-bottom: 20px; 
                                // }
                                
                                // #my-form div {
                                //     margin-bottom: 15px; 
                                // }
                                
                                // #my-form label {
                                //     display: block; 
                                //     margin-bottom: 5px; 
                                // }
                                
                                // #my-form input[type="text"],#my-form input[type="email"] {
                                //     width: 100%;
                                //     padding: 8px; 
                                //     border: 1px solid #ccc; 
                                //     border-radius: 4px;
                                //     outline-style: none;
                                //     ;
                                // }
                                
                                // #my-form .btn {
                                //     width: 100%;
                                //     padding: 10px; 
                                //     background-color: rgb(0, 0, 0);
                                //     color: white;
                                //     border: none;
                                //     border-radius: 4px;
                                //     cursor: pointer; 
                                // }
                                
                                // #my-form .btn:hover {
                                //     border: 3px solid blue;
                                //     color:blue;
                                //     background-color: transparent;
                                // }
                                
                                // .items{
                                //     list-style: none;
                                // }
                                // .items li
                                // {
                                //    margin: 20px;
                                //     background: rgb(4, 4, 10);
                                //     color:#fff;
                                // }
                                // .bg-dark {
                                //     background-color: darkgray; /* Adjust this color as needed */
                                //   }