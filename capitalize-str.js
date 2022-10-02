/*

Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:

Input								Output

string								String

hello World							Hello World

i love codewars						I love codewars

This sentence is 					This sentence is 
already capitalized					already capitalized

0123 the first character of			0123 the first character of
this sentence is not a letter 		this sentence is not a letter
*/

//SOLUTION 1
String.prototype.capitalize = function(){
  let map = {
    a : 'A',
    b : 'B',
    c : 'C',
    d : 'D',
    e : 'E',
    f : 'F',
    g : 'G',
    h : 'H',
    i : 'I',
    j : 'J',
    k : 'K',
    m : 'M',
    n : 'N',
    o : 'O',
    p : 'P',
    q : 'Q',
    r : 'R',
    s : 'S',
    t : 'T',
    u : 'U',
    v : 'V',
    w : 'W',
    x : 'X',
    y : 'Y',
    z : 'Z'
  };  
  return map[this[0]] ? map[this[0]] + this.slice(1) : this.toString();  
};

//SOLUTION 2
String.prototype.capitalize = function() {
   let letter = this.charCodeAt(0);
   if(letter > 96 && letter < 123){
     letter -= 32;
   }
  
  return String.fromCharCode(letter) + this.slice(1);
}