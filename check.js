/*var Student = {
	
	name : name,
	yearOfbirth : birth,
	
	age = function(){
	 
    return 2019-this.yearOfbirth;
}	
	
};


var john = new student( jhon, 1999);
console.log(john);


*/
/*
var Person = function(name, yearOfbirth,job){
	
	this.name = name;
	this.yearOfbirth = yearOfbirth;
	this.job = job;
	
	
	
};

Person.prototype.calculateAge = function(){
	console.log(2019-this.yearOfbirth);
};



Person.prototype.LastName ='smith';
var john = new Person('john', 1990, 'teacher');
 
john.calculateAge();
console.log(john);
console.log(john.LastName);
*/

//object create

/*
var PersonProto = {
	
	calculateAge : function(){
		
		console.log(2019-this.yearOfbirth);
		
	}
	
};

var john = Object.create(PersonProto);

var jhen = Object.create(PersonProto);
    jhen.name = 'jhen';
    jhen.yearOfbirth =1999;
    jhen.job ='teacher';
jhen.calculateAge();







var raushan = Object.create(PersonProto , {
	
	name : {value: 'raushan'},
	yearOfbirth: {value : 1998},
	job : {value: 'teacher'}
	
	
	
	
	
});

raushan.calculateAge();

*/

/////

var years=[1990,1998,1994,1993];

function arrcalc(arr,fun){
	 var arrres=[];
	 for(var i=0;i<arr.length;i++)
	 {
	 	arrres.push(fun(arr[i]));

	 }
	 return arrres;
} 

function calcAge(el){
	return 2016-el;
}

function fullage(el){
	return el >= 18;
}

  











































