//let str ="aboo"
//console.log(str.length);


//let firstName="aboo"
//let lastName="hamid"
/*
console.log(fistName+" "+lastName);
console.log("aboo "+"hamid");
console.log("aboo"+" hamid");
*/
/*
console.log(`my firstName is ${firstName} and my lastName is ${lastName}`);
console.log("my first name is"+" "+firstName+" "+ "and my last name is"+" "+lastName);

*/



//string methods
/*
let name ="aboo"
console.log(name.toUpperCase());
console.log(name.toLowerCase());
*/
//substring

/*
let text ="javascript"
let result=text.substring (0,4)
console.log(result);
*/
/*
let description="my name is aboo hamid"
let result=description.substring(0,10)
console.log(result+".....");
*/




//replace
/*
let fact="my favourite color is white"
let newFact=fact.replace("white","black")
console.log(newFact);
*/




//trim
/*/
let fact ="  it is new   "
console.log(fact.trim());
*/

//slice
/*
let lang="javascript"
console.log(lang.slice(0,5));
*/


//split

/*
let fact= "my name is aboo"
console.log(fact.split(" "));
*/

let userName= prompt("enter your name")
let firstletter =userName.slice(0,1)

let toUpperCase=firstletter.toUpperCase()

let UpperCase = firstletter.toLocaleUpperCase()
let restOftheLetters=userName.slice(1,userName.length)

//console.log( "hi"+" "+UpperCase+restOftheLetters);
alert(`hi ${UpperCase}${restOftheLetters}`);










