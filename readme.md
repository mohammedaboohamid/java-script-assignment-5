1.	Write short notes on string methods with code examples

•	toLowerCase()
•	toUpperCase()
•	substring()
•	replace()
•	trim()
•	split()
•	slice()
ans>
touppercase()>
The toUpperCase() method converts a string to uppercase letters. The toUpperCase() method does not change the original string.
```js
let name ="aboo"
console.log(name.toUpperCase());
```

tolowercase>
The toLowerCase() method converts a string to lowercase letters. The toLowerCase() method does not change the original string.
```js
let name ="aboo"
console.log(name.toLowerCase());
```

substring>
The substring() method extracts characters, between two indices (positions), from a string, and returns the substring. 
```js
let text ="javascript"
let result=text.substring (0,4)
console.log(result);
```

replace>
The replace() method searches a string for a value or a regular expression. The replace() method returns a new string with the value(s) replaced.
```js
let fact="my favourite color is white"
let newFact=fact.replace("white","black")
console.log(newFact);

```

trim>
The trim() method removes whitespace from both sides of a string. The trim() method does not change the original string.

```js

let fact ="  it is new   "
console.log(fact.trim());

```

split>
The split() method splits a string into an array of substrings. The split() method returns the new array
```js
let fact= "my name is aboo"
console.log(fact.split(" "));

```

slice>
The slice() method returns selected elements in an array, as a new array.

```js

let lang="javascript"
console.log(lang.slice(0,5));

````


2.	create a simple app that takes the user’s name and greets him/her after capitalizing the first letter of the user’s name and changing the rest of the letters into lowercase (toUpperCase(), toLowerCase(), slice(), length property, string concatenation)
ans>
```js

let userName= prompt("enter your name")
let firstletter =userName.slice(0,1)

let toUpperCase=firstletter.toUpperCase()

let UpperCase = firstletter.toLocaleUpperCase()
let restOftheLetters=userName.slice(1,userName.length)

//console.log( "hi"+" "+UpperCase+restOftheLetters);
alert(`hi ${UpperCase}${restOftheLetters}`);

```