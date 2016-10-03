var people = ["cat", "dog", "lizzard"];

console.log(people[1]);
console.log("*****************************************************************");

var book1 = { bookName: "catcher and the rye", author: "salinger", pages: 50};
var book2 = { bookName: "lend me an ear", author: "shakespear", pages: 100};


var books = [book1, book2];
console.log(books);
console.log("*****************************************************************");

var book3 = {bookName: "The Associate", author: "grisham", pages: 300};
books.push(book3);
console.log(books);
console.log("*****************************************************************");

for (var i = 10; i > 0; i--) {
  console.log(i);
 }
 console.log("Blast Off!");

 console.log("*****************************************************************");

var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
for ( var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
 }

 console.log("*****************************************************************");

 var numbers = [5, 23, 98, 234, 1, 0, 3, 177];
 var sum = 0;
 for ( var i = 0; i < numbers.length; i++) {
   sum = sum + numbers[i];
  }
  console.log(sum / numbers.length);

  console.log("*****************************************************************");


  for ( var i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0)
     {
      console.log("Fizz Buzz");
     }
     else if (i % 5 === 0) {
       console.log("Buzz");
     }
     else if (i % 3 === 0) {
       console.log("Fizz");
     }
     else {
       console.log(i);
     }
    }

console.log("*****************************************************************");

    function addTwoNumbers(numberOne, numberTwo) {
      return numberOne + numberTwo;
     }
     console.log(addTwoNumbers(1, 99));

console.log("*****************************************************************");

    function average(array) {
      var sum = 0;
      for ( var i = 0; i < array.length; i++) {
        sum = sum + array[i];
       }
       return (sum / array.length);
     }

     console.log(average([5, 23, 98, 234, 1, 0, 3, 177]));

console.log("*****************************************************************");

function names(hash) {

  for ( var i = 0; i < hash.length; i++) {
    console.log(hash[i].bookName);
    console.log(hash[i].author);
    console.log(hash[i].pages);
    console.log();

   }

 }

 var book1 = { bookName: "catcher and the rye", author: "salinger", pages: 50};
 var book2 = { bookName: "lend me an ear", author: "shakespear", pages: 100};
 var books = [book1, book2];
 names(books);
