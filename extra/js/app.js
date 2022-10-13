// console.clear();

// console.log('cons-log');
// console.log(123);
// console.log(true);
// console.log([0,1,2,3]);
// console.log({a:1,b:2});


// console.table([0,1,2,3]);
// console.table({a:1,b:2});


// console.error('this is error');



// console.warn('this is warn');


// console.info('ss')

// console.time('hello');

// console.log('cons-log');
// console.log('cons-log');
// console.log('cons-log');
// console.log('cons-log');
// console.log('cons-log');
// console.log('cons-log');
// console.log('cons-log');

// console.timeEnd('hello');
	

/*****
	Variable
***********/

// var 
// const
// let 

// const per ={
// 	name:"ali",
// 	age:21
// }
// per.name="laravel";
// console.log(per);


// const num = [2,3,4,5];
// num.push(6);
// console.log(num)


/******
	Data Type
******/

// const name = "ALi";
// console.log(typeof name);  // string


// const age = 24;
// console.log(typeof age);  // number

// const has = true;
// console.log(typeof has);  // boolean

// const car = null;
// console.log(typeof car);  // boolean  ###


// let test; //###
// console.log(typeof test);  //undefined


// const sym = Symbol();
// console.log(typeof sym);  // symbol ##



// const hob = ['music','movie'];
// console.log(typeof hob);  // object


// const trob = {
// 	name:"Go",
// 	age:21
// };
// console.log(typeof trob);  // object


/******
	Convert  Data Type
******/
// let val;

// val = String(555);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// val = String(true);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = String(new Date());
// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// val = String([1,2,3,4]);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// val = ([1,2,3,4]).toString();
// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// // String  to Number

// val = Number('5');
// console.log(val);
// console.log(typeof val);

// val = Number(true);
// console.log(val); //1
// console.log(typeof val);


// val = Number(null);
// console.log(val); //0
// console.log(typeof val);


// val = Number('hello');
// console.log(val); // NaN
// console.log(typeof val);


// val = Number([1,2,3,4]);
// console.log(val); // NaN
// console.log(typeof val);


// val = parseInt('100');
// console.log(val); 
// console.log(typeof val);

// val = parseFloat('100.2');
// console.log(val); 
// console.log(typeof val);
// console.log(val.toFixed(2));



/******
	Math
******/
// const num1 = 80;
// const num2 = 20;
// let val;

// val = Math.PI;   // pi number
// console.log(val);

// val = Math.E;   // E number
// console.log(val);

// val = Math.round(3.5);   //  rounded
// console.log(val);


// val = Math.ceil(3.5);   //  rounded up
// console.log(val);


// val = Math.floor(3.5);   //  rounded down
// console.log(val);


// val = Math.sqrt(16);   //  jazr
// console.log(val);


// val = Math.abs(-16);   //  absolute value
// console.log(val);


// val = Math.pow(5,2);   //  tavan
// console.log(val);


// val = Math.min(5,2,55,2,1,4,8,5,-6);   //  min
// console.log(val);

// val = Math.max(5,2,55,2,1,4,8,5,-6);   //  max
// console.log(val);

// val = Math.random();   //  random 0-1
// console.log(val);

// val = Math.random()*5 +1;   //  random 
// console.log(val);

// val = Math.floor(Math.random()*5 +1);   //  random 
// console.log(val);

// val = Math.floor(Math.random() * (82 - 45 + 1) ) + 45;
// val = Math.floor(Math.random() * (max - min + 1) ) + min;
// console.log(val);




/******
	String
******/
// const first = "ali";
// const last = "mohseni";
// const age = 27;
// let val;



// val = 'web ';
// val +='prog';	// append
// console.log(val);


// val = `my name is ${first}`;
// console.log(val);


// val = first.length;
// console.log(val);


// val = first.concat(' ',last); //ali mohseni
// console.log(val);

// val = first.toUpperCase(); 
// console.log(val);

// val = first.toLowerCase(); 
// console.log(val);


// val = first[2]; 	
// console.log(val);		//i


// val = first.indexOf('l'); 
// console.log(val);		//1  return index

// val = first.charAt('1'); 
// console.log(val);   	//  l   // برعکس  قبلی 

// val = first.charAt(first.length-1); 
// console.log(val);  			// get last char  ==>i


// val = first.substring(0,2); 
// console.log(val);  			// return  char  0 to 2  --> al


// val = first.slice(0,2); 
// console.log(val);  		// return  char  0 to 2  --> al

// const srt = "ali is laravel man";
// val = srt.split(' '); 
// console.log(val);     //["ali", "is", "laravel", "man"]



// val = first.replace('ali','mm'); 
// console.log(val); 			//mm


// val = first.includes('ali'); 
// console.log(val); 			//true  // ایا  شامل می شود  یا نه 


/******
	Array
******/
// const num = [1,2,3,5];
// const num2 =new Array(1,2,3,5);
// const mixed = [22,'ali',true,undefined,null,{a:1,b:2}];
// let val;



// console.log(mixed);			

// val = mixed.length;
// console.log(val);  //6

// val = Array.isArray(mixed);
// console.log(val);  // true

// mixed[6] = 100;
// console.log(mixed);   // [22, "ali", true, undefined, null, {…}, 100]


// val = mixed.indexOf(100);
// console.log(val);  			// 6


// mixed.push('laravel');  // add to end array
// console.log(mixed);  			// [22, "ali", true, undefined, null, {…}, "laravel"]


// mixed.unshift('laravel');  // add to front (start) array
// console.log(mixed);  // (7) ["laravel", 22, "ali", true, undefined, null, {…}]

// mixed.pop();  // delete one from end
// console.log(mixed);   //(5) [22, "ali", true, undefined, null]


// mixed.shift();  // delete one from start
// console.log(mixed);   // (5) ["ali", true, undefined, null, {…}]

// mixed.splice(1,3);  //    boresh index 0 - 2 and delete
// console.log(mixed);   // (3) [22, null, {…}]


// mixed.reverse();  
// console.log(mixed);   // (3) [{…}, null, 22]

// // val = mixed.concat(other array); // concat to array  
// // console.log(mixed);   

// const nums = [5,44,21,24,23];

// val = nums.sort();  
// console.log(val);   //  [21, 23, 24, 44, 5]


// val = nums.sort(function(x,y) {
// 	return x-y;
// });  
// console.log(val);   // [5, 21, 23, 24, 44]


// // reverse
// val = nums.sort(function(x,y) {
// 	return y-x;
// });  
// console.log(val);   // [44, 24, 23, 21, 5]


/******
	Object
******/

// const person = {
// 	first:"ali",
// 	last:"mm",
// 	age:23,
// 	email:"ali@gmail.com",
// 	hoby:['mus','prog'],
// 	addres:{
// 		city:'foo',
// 		state:'bar'
// 	},
// 	getBirthYear:function(){
// 		return 1398 - this.age;
// 	},
// 	getEdu(){
// 		return "radio";
// 	}
// }

// let val;
// val = person;
// console.log(val);


// val = person.first;
// console.log(val);   //ali


// val = person['last'];
// console.log(val);		//mm

// val = person.hoby;
// console.log(val);   //(2) ["mus", "prog"]

// val = person.hoby[1];
// console.log(val);   //prog

// val = person.addres.city;
// console.log(val);   //foo


// val = person.getBirthYear();
// console.log(val);   //1371

// val = person.getBirthYear;
// console.log(val);   //   ƒ (){return 1371;}


/******
	if
******/

// =   	--> 	assign
// ==   --> 	compare (check Value)
// !=   --> 	Not
// ===  --> 	check Value and Type
// !==  --> 	check Value and Type (negative)
// >  	--> 	Greater
// >=  	--> 	Greater or equal
// <  	--> 	Less 
// <=  	--> 	Less or equal
// &&  	--> 	Logic Operator (And)
// ||  	--> 	Logic Operator (OR)
// ? :  --> 	Ternary Operator 



// if(condition){
// 	#code
// }else if(condition){
// 	#code
// }else if(condition){
// 	#code
// }else{
// 	#code
// }

// const id= 60;

// if(id == 60){
// 	console.log('yes');
// }else{
// 	console.log('no');
// }


// if(id){
// 	console.log('eval');
// }else{
// 	console.log("no eval"); //!!!
// }

// if(typeof id !== 'undefined'){
// 	console.log('bi');
// }else{
// 	console.log("no bn"); //!!!
// }

// console.log(id === 60 ? "yes T" : "no T");

// if(id === 60)
// 	console.log('bi');
// else
// 	console.log("no bn"); //!!! Bad



/******
	switch
******/
// switch(condition){
// 	case 'state':
// 		#code
// 		break;
// 	case 'state':
// 		#code
// 		break;
// 	default :
// 		#code
// 		break;
// }


/******
	function
******/

// // Declaration function

// function add(){
// 	console.log("Declaration function");
// }
// add();

// function ox(x,y){
// 	return x+y;
// }
// console.log(ox()); // NaN
// console.log(ox(2,5)); //7

// function ox(x=1,y=2){   //Es6
// 	return x+y;
// }
// console.log(ox()); //3




// // Expresions function

// const fu = function(x=5){
// 	return x;
// };
// console.log(fu(2));  //2


// // Arrow function (type of Expresions)  //Es6

// const adds = (x) =>{
// 	return x;
// }
// console.log(adds(5)) //5

// const adds2 = x => {
// 	return x;
// }
// console.log(adds2(5)) //5

// const adds23 = (x,y) =>  x+y;

// console.log(adds23(5,2)); //7


// // Immidiatley Invokable Function Expressions  (IIFEs)
// (function(i){
// 	console.log('IIFEs ' + i); //IIFEs func
// })('func');



/******
	loop
******/
// const cars = ['tesla','honda','ford','volvo'];

// const cvb =  cars.forEach(function(car){
// 	console.log(car);
// });




// const users = [
// 	{id:1,name:"ali"},
// 	{id:2,name:"sadegh"},
// 	{id:3,name:"sina"},
// 	{id:4,name:"corosh"},
// 	{id:5,name:"sers"},
// ];

// const ids = users.map(function(user){
// 	return user.id;
// });

// console.log(ids);



// const user = {
// 	first:"ali",
// 	last:"mohseni",
// 	age:23
// }

// for(let x in user){
// 	console.log(`${x} : ${user[x]}`);
// }


/******
	Scope
******/
// var a =1;
// let b =3;
// const c =5;

// if(true){
// 	var a =10;
// 	let b =30;
// 	const c =50;

// 	console.log('if',a,b,c)  /// if 10 30 50
// }

// console.log('global',a,b,c) // global 10 3 5


/******
	Maps
******/
// let person = new Map();

// // person.set('key',value);

// person.set('person1',{
// 	first:'fiest',
// 	last:'list',
// });

// console.log(person);   //Map(1) {"person1" => {…}}


// person.set('person2',{
// 	first:'fiest',
// 	last:'list',
// });

// console.log(person);  //Map(2) {"person1" => {…}, "person2" => {…}}

// console.log(person.get('person1'))   //{first: "fiest", last: "list"}
// console.log(person.get('person1').first)  //fiest

// person.set('String','value s');

// console.log(person)    //Map(3) {"person1" => {…}, "person2" => {…}, "String" => "value s"}
// console.log(person.get('String'))  //value s



// person.set('func', function (){ console.log('aliss')});

// console.log(person)  //Map(4) {"person1" => {…}, "person2" => {…}, "String" => "value s", "func" => ƒ}  
// person.get('func')();  //aliss



// console.log(person.size)   //4

// console.log(person.has('func'))   //true
// console.log(person.has('func2'))   //false


// console.log(person.delete('func')) // true
// console.log(person)    //Map(3) {"person1" => {…}, "person2" => {…}, "String" => "value s"}


// person.clear()
// console.log(person)  //Map(0) {}
 
/******
	Set
******/
// const set = new Set();

// set.add(100);
// set.add('string');
// set.add({name:'ali'});
// set.add(true);
// set.add([1,2,5]);

// console.log(set)    //Set(5) {100, "string", {…}, true, Array(3)}




// const set2 = new Set([1,true,'string']);

// console.log(set2)     //Set(3) {1, true, "string"}


// //get Count

// console.log(set.size)  //5


// console.log(set.has(100))  //true
// console.log(set.has(200))  //false
// console.log(set.has({name:'ali'}))  //false


// set.delete(100) 
// console.log(set)   //Set(4) {"string", {…}, true, Array(3)}

// set.clear() 
// console.log(set)   //Set(0) {}






/******
	Destructuring
******/

// let a,b;

// [a,b] = [100,200];

// console.log(a,b);   //100 200

// // Rest Pattern

// //    ...  ==>  seperator

// [a, b, c, ...rest] = [100,200,300,400,500];

// console.log(a,b);    //  100 200
// console.log(rest);  //   (2) [400, 500]



// ({a,b} = {a:100,b:200,c:300,d:400})
// console.log(a);   //100


// ({a,b, ...ali} = {a:100,b:200,c:300,d:400})
// console.log(ali);   //  {c: 300, d: 400}



// const people = ['Ali' , 'sadegh' , 'nav'];

// const [p1,p2,p3] = people;

// console.log(p1,p2,p3);  //Ali sadegh nav


// const xrt = {
// 	name : "mm",
// 	age : 27,
// 	city : "foo",
// 	geneder : "M",
// 	sayHello : function(){
// 		console.log('hello');
// 	}
// }

// // ES5 

// const name = xrt.name,
// 	  age = xrt.age,
// 	  city = xrt.city;

// console.log(name,age,city);  //mm 27 foo


// // ES6

// const {name,age,city, sayHello} = xrt;

// console.log(name,age,city);   //Ali sadegh nav

// sayHello(); //hello










/******
	find  -  filter
******/

// const products = [
// 	{name:"ipad" , category:"mobile"},
// 	{name:"LG" , category:"TV"},
// 	{name:"iphone" , category:"Phone"},
// 	{name:"Super Vision" , category:"TV"},
// ];


// const result = products.filter(function(product){
// 	return product.category == "TV";
// });

// console.log(result);    //0: {name: "LG", category: "TV"}
// 						//1: {name: "Super Vision", category: "TV"}


// const resultx = products.filter(product => product.category == "TV");


// console.log(resultx);  //0: {name: "LG", category: "TV"}
// 						//1: {name: "Super Vision", category: "TV"}



// // map  ==> return true or false   
// //  filter  ===>  return value 

// const result2 = products.map(function(product){
// 	return product.category == "TV";
// });

// console.log(result2);    //(4) [false, true, false, true]


// const resultf = products.find(function(product){
// 	return product.category == "TV";
// });

// console.log(resultf);   //{name: "LG", category: "TV"}




/******
	Module
******/

// import {sum} from "./module.js"

// console.log(sum);




/******
	BoM
******/

// let val;

// val = window.location;
// console.log(val);

// /*
// ancestorOrigins: DOMStringList {length: 0}
// assign: ƒ assign()
// hash: ""
// host: ""
// hostname: ""
// href: "file:///C:/Users/HomaRayaneh/Desktop/js/index.html"
// origin: "file://"
// pathname: "/C:/Users/HomaRayaneh/Desktop/js/index.html"
// port: ""
// protocol: "file:"
// reload: ƒ reload()
// replace: ƒ ()
// search: ""
// toString: ƒ toString()
// valueOf
// */

// val = window.location.hostname;
// console.log(val);  


// val = window.location.href;
// console.log(val);  //file:///C:/Users/HomaRayaneh/Desktop/js/index.html


// //file:///C:/Users/HomaRayaneh/Desktop/js/index.html?id=1&post=ali
// val = window.location.search;
// console.log(val); //?id=1&post=ali


// //redirect
// // window.location.href = "https://www.google.com";

// //file:///C:/Users/HomaRayaneh/Desktop/js/index.html#hash
// val = window.location.hash;
// console.log(val);  // #hash


// //reload
// // window.location.reload();



// // History
// val = window.history;
// console.log(val); 
// /**
// length: 2
// scrollRestoration: "auto"
// state: null
// */
// val = window.history.length;
// console.log(val);  //2





// // Navigator
// val = window.navigator;
// console.log(val);
// *
// appCodeName: "Mozilla"
// appName: "Netscape"
// appVersion: "5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.21 Safari/537.36 Edg/78.0.276.8"
// clipboard: Clipboard {}
// connection: NetworkInformation {onchange: null, effectiveType: "4g", rtt: 0, downlink: 10, saveData: false}
// cookieEnabled: true
// credentials: CredentialsContainer {}
// deviceMemory: 2
// doNotTrack: null
// geolocation: Geolocation {}
// hardwareConcurrency: 2
// keyboard: Keyboard {}
// language: "en-US"
// languages: (2) ["en-US", "en"]
// locks: LockManager {}
// maxTouchPoints: 0
// mediaCapabilities: MediaCapabilities {}
// mediaDevices: MediaDevices {ondevicechange: null}
// mediaSession: MediaSession {metadata: null, playbackState: "none"}
// mimeTypes: MimeTypeArray {0: MimeType, 1: MimeType, 2: MimeType, 3: MimeType, application/pdf: MimeType, application/x-google-chrome-pdf: MimeType, application/x-nacl: MimeType, application/x-pnacl: MimeType, length: 4}
// onLine: false
// permissions: Permissions {}
// platform: "Win32"
// plugins: PluginArray {0: Plugin, 1: Plugin, 2: Plugin, Microsoft Edge PDF Plugin: Plugin, Microsoft Edge PDF Viewer: Plugin, Native Client: Plugin, length: 3}
// presentation: Presentation {receiver: null, defaultRequest: null}
// product: "Gecko"
// productSub: "20030107"
// serviceWorker: ServiceWorkerContainer {ready: Promise, controller: null, oncontrollerchange: null, onmessage: null}
// storage: StorageManager {}
// usb: USB {onconnect: null, ondisconnect: null}
// userActivation: UserActivation {hasBeenActive: false, isActive: false}
// userAgent: "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.21 Safari/537.36 Edg/78.0.276.8"
// vendor: "Google Inc."
// vendorSub: ""
// webkitPersistentStorage: DeprecatedStorageQuota {}



/******
	DOM
******/
// let val;

// val = document;
// console.log(val);  //return all Dom

// val = document.all;
// console.log(val);

// /**
// HTMLAllCollection(7) [html, head, meta, meta, title, body, script, viewport: meta]
// 0: html
// 1: head
// 2: meta
// 3: meta
// 4: title
// 5: body
// 6: script
// length: 7
// viewport: meta
// **/


// val = document.all.length;
// console.log(val);  //7


// val = document.head;
// console.log(val);   //return head


// val = document.body;
// console.log(val);   //return body


// val = document.doctype;
// console.log(val);   // <!DOCTYPE html>


// val = document.URL;
// console.log(val);   // file:///C:/Users/HomaRayaneh/Desktop/js/index.html



// val = document.characterSet;
// console.log(val);   //UTF-8


// val = document.contentType;
// console.log(val);  //text/html


// // دسترسی   به المان ها 

// val = document.forms;  // all forms
// console.log(val);

// val = document.forms[0];
// console.log(val);

// val = document.forms[0].id;
// console.log(val);

// val = document.forms[0].method;
// console.log(val);



// val = document.links;  //all links
// console.log(val);


// val = document.links[0].className;  
// console.log(val);


// val = document.links[0].classList;  
// console.log(val);  // return class in array


// val = document.links[0].classList[0];  
// console.log(val);  // get first class



// val = document.scripts;    // all script
// console.log(val);

// val = document.scripts[0].getAttribute('src');    
// console.log(val);  // ./app.js


/******
	DOM
******/
// let dom;

// dom = document.getElementById('app'); 

// console.log(dom); //return html tag  <div id="app"></div>


// console.log(dom.id); //app


// dom.style.background = "#f3d42";  //Style



// dom.textContent = "Js === Laravrl === Vue";  // Cahnge Text (.text() in Jquery)

// dom.innerText = "Js === Laravrl === Vue";   // Cahnge Text (.text() in Jquery)

// dom.innerHtml = "Js === Laravrl === Vue";  // Cahnge Html (.html() in Jquery)



// let dom2;

// dom2 = document.querySelector('#app');  // id(#)  class(.) tag(h5)

// //document.querySelector('.app')
// //document.querySelector('h5')
// //document.querySelector('ul li')
// //document.querySelector('li:last-child')








/******
	DOM
******/
// let dom;
// let dom2;

// // ====>>   getElementsByClassName
// dom = document.getElementsByClassName('app');

// console.log(dom);     //HTMLCollection [div#app.app, app: div#app.app]

// dom[0].style.color = "red";

// // dom[2].style.color = "green";



// // find in special tag
// // dom2 = document.querySelector('ul').getElementsByClassName('li.app');


// // ====>>   getElementsByTagName
// dom = document.getElementsByTagName('div');
// console.log(dom);   //HTMLCollection [div#app.app, app: div#app.app]






// // ====>>   querySelectorAll
// dom = document.querySelectorAll('div');
// console.log(dom);   // NodeList(2) [div#app.app, div#app2.app]


// dom.forEach(function(item , index){
// 	console.log(item);
// });









/******
	DOM
******/
// let node;

// node = document.querySelectorAll('.app');


// console.log(list.childNodes); //reteun child tag

// console.log(list.children); //reteun child tag (best)

// console.log(list.children[1]); 

// console.log(list.children[2].children[0]); 

// console.log(list.firstElementChild);  //return first child

// console.log(list.lastElementChild);  //return last child

// console.log(list.childElementCount);  //count child

// console.log(list.parentNode);  //return parent

// console.log(list.parentElement);  //return parent

// console.log(list.parentElement.parentElement);  //return parent chain


// // Sibling

// // next

// console.log(list.nextSibling);  // return next element (با در نظر گرفتن فاصله ها )

// console.log(list.nextElementSibling);  // return next element (بدون در نظر گرفتن فاصله ها )

// // previous

// console.log(list.previousSibling);

// console.log(list.previousElementSibling); 



/******
	Create Element
******/

// const li = document.createElement('li');

// console.log(li);  // <li></li>


// li.className = "d-flex";

// console.log(li); //<li class="d-flex"></li>



// li.id = "new";

// console.log(li); //<li class="d-flex" id="new"></li>



// li.setAttribute('title','new attr');

// console.log(li); //<li class="d-flex" id="new" title="new attr"></li>



// li.appendChild(document.createTextNode('hello world'));

// console.log(li); //<li class="d-flex" id="new" title="new attr">hello world</li>



// const i = document.createElement('i');

// console.log(i);  // <i></i>


// i.className = 'i-tag';

// console.log(i);  // <i class="i-tag"></i>



// li.appendChild(i);

// console.log(li);  // <li class="d-flex" id="new" title="new attr">hello world<i class="i-tag"></i></li>



/******
	Create & replace Element 
******/


// const h2 = document.createElement('h2');

// console.log(h2);  // <h2></h2>



// h2.id = 'title';

// console.log(h2);  // <h2 id="title"></h2>



// h2.appendChild(document.createTextNode('my text'));

// console.log(h2);  // <h2 id="title">my text</h2>



// const app = document.getElementById('app2');
// const i = document.getElementById('i');

// app.replaceChild(h2 , i);
// // app.replaceChild(new , old);

// console.log(h2);  


// //delete
// i.remove();

// // parent.removeChild(element for delete)



/******
	Events
******/

// document.querySelector('.event').addEventListener('click', function(event){
// 	event.preventDefault();
// 	console.log(event);
// });
/**
MouseEvent {isTrusted: true, screenX: 504, screenY: 194, clientX: 23, clientY: 55, …}
altKey: false
bubbles: true
button: 0
buttons: 0
cancelBubble: false
cancelable: true
clientX: 23
clientY: 55
composed: true
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 1
eventPhase: 0
fromElement: null
isTrusted: true
layerX: 23
layerY: 55
metaKey: false
movementX: 0
movementY: 0
offsetX: 13
offsetY: 9
pageX: 23
pageY: 55
path: Array(5)
0: button.event
1: body
2: html
3: document
4: Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
length: 5
__proto__: Array(0)
relatedTarget: null
returnValue: true
screenX: 504
screenY: 194
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: button.event
target: button.event
timeStamp: 972.4999999998545
toElement: button.event
type: "click"
view: Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
which: 1
x: 23
y: 55

*/

// document.querySelector('.event').addEventListener('click' , extra); // without ()


// function extra(event){
// 	console.log('hello');
// }



// document.querySelector('.event').addEventListener('click' , extra2); // without ()


// function extra2(event){
// 	let val;
// 	val = event;

// 	val = event.target;
// 	console.log(val);  //<button class="event">btn</button>


// 	val = val.className;
// 	console.log(val);  //event

// 	val = event.type;
// 	console.log(val);  //click


// 	val = event.clientX;
// 	console.log(val);  //265

// 	val = event.clientY;
// 	console.log(val);  //36


// 	val = event.offsetX;
// 	console.log(val);  //3

// 	val = event.offsetY;
// 	console.log(val);  //10
// }




/******
	Local Storage
******/

// localStorage.setItem('name' , 'Ali');  // add


// sessionStorage.setItem('name' , 'Ali');  // set session



// localStorage.removeItem('name');  //delete



// localStorage.setItem('lang' , 'JS');


// const geting = localStorage.getItem('lang');

// console.log(geting);  //JS
 


//  localStorage.clear();  //clear all


//  console.log(JSON.stringify(['ali'])); //conver array to string    ["ali"]


//  JSON.parse(); 








/******
	DOM
******/


