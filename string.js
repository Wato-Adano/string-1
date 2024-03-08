//Extract the last four characters from string "extravaganza"
let a= "extravaganza"
let b= a.substring (0,8);
console.log({b})




//insert the following string at the fourth index of the below variable."eat"const food="The quick fox jumped over the lazy dog"
const food="The Quick fox jumped over the lazy dog"
const insertString=food.slice(0,4) + "eat" + food.slice(4);
console.log({insertString})


//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const countimes="The quick brown fox jumps over the lazy dog"
console.log(countimes.match(/the/).length);
console.log(countimes.match(/brown/).length);

//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1= "The pupils are reading in the library"
const string2="The child was sitting on the table before it fell"
let z= string1.search("are");
let y= string2.search("sitting");
console.log({z});
console.log({y})



//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let text ="Wonderful"
let resuit=text.toUpperCase();

let test ="amazing"
let resuit2=test.toLowerCase();

toTitleCase=function(){return this.replace("A wonderful World")}