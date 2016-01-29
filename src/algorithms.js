(function() {
  'use strict';

  window.calculator = {};
  
  window.collections = {};



/*

Today we're going to build some functionality for a couple of applications. We will start with the [naive]() implementation 


  Basic Algorithmic Approach Cheat Sheet:
    
    Prompt: largerThan is a function that takes two numbers and returns a message to as to whether the first is bigger than the second.

      [ ] Identify your inputs and outputs:

        "What does this function take as parameters?"
        "What does this function return to the user?"

        [ ] Create your function and type out your inputs and outputs:
  
            var largerThan = function(num1, num2){ // num1, num2 inputs
              
              var messageToUser = "these values are in ascending order";

                
              return messageToUser; // output
            };

      [ ] Write up some pseudocode that describes the steps you're going to take to turn your inputs into an output:
        // invoke your output
        // check to see whether the first value is larger than the second.
          // if so, return the message to the user
          // if not, reassign 'messageToUser' to "these values are in descending order"
            // return the message to the user to the user


      [ ] Write up testCases that helps you identify whether you have the right outputs for each case:

          ascendingOrderTestCase = largerThan(1, 4); // should return: "these values are in ascending order";

          descendingOrderTestCase = largerThan(4, 1); // should return: "these values are in descending order"

      [ ] Put it all together by turning your pseudocode into regular code under each corresponding line:
          
          var largerThan = function(num1, num2){
            // invoke our output
              var messageToUser = "these values are in ascending order";

              // check to see whether the second value is larger than the first.

              if (num1 < num2) {

               // if so, reassign 'messageToUser' to "these values are in descending order"
               messageToUser = "these values are in descending order"
              
               // if so, return the message to the user
               return messageToUser

              } else {
                // return the message to the user                
                return messageToUser

              }

           }


*/

// Section 1: Let's build a calculator! I hate math so we're going to build functionality that does it for us. I've done the first one for you so that you can have a template for how you should be thinking about approaching each prompt.
  
// Let's warm up with some basic functionality: add, subtract, multiply, and divide.

calculator.add = function(num1, num2){
  // pseudocode:     INPUTS ^    ^
  //return num1 plus num2 to the user
  return num1 + num2;

};

// make your test case and test your answer as you go along
var addTestCase = calculator.add(1, 2); // OUTPUT = 3
// log your test case to the console and follow along in the browser as you build your algorithm.
console.log(addTestCase);



// 1. create a function, calculator.subtract takes two numbers as parameters and subtracts the second one from the first one.
 


// 2. create a function, calculator.multiply, that takes two numbers as parameters and multiplies them together


// 3. create a function, calculator.divide, that takes two numbers as parameters and divides the first one by the second one


// 4. create a function, areaOfARectangle, that takes two parameters, length and width, and calculates the area.


// 5. create a function, calculator.sumPlusProduct that takes gets the sum of two numbers, the product of two numbers, and adds them  


// 6. create a function, calculator.perimeterOfARectangle, two parameters, length and width, and calculates their perimeter


// 7. create a function, calculator.areaOfACircle that takes one parameter, radius, and uses it to calculate the radius of a circle **HINT** JavaSript has a function that can help you do just this.


/* 

  8. create a function, calculator.slopeofALine that takes two arrays that each contain two points in a line calculates and their slope. Your two points are going to come from two arrays, see the example below:



var xCoordinates = [4, 6];
var yCoordinates = [5, 3];


If you're not sure how to calculate slope it's TOTALLY fine to look up "how to calculate the slope of a line" google.

*/




// 9. create a function, caculator.pythagorean that takes 3 parameters -- sideOne, sideTwo, sideThree -- and returns true or false as to whether they pass the pythagorean test: https://en.wikipedia.org/wiki/Pythagorean_theorem







/*
  Now that you have some practice building out a functions and approaching math algorithms, let's expand to some JS functionality that we'd use in the real world. 

  
*/

// 10. create a function, collections.first, that takes an array and returns the first element.


// 11. create a function, collections.last that takes an array and returns the last element.



// 12. create a function, collections.pluckTargetFromObject that takes two parameters, an object and a target, and returns the target if it corresponds with a property inside of the object. If not, it returns 'target not found' to the user.

/* CODEXAMPLE:

var sampleObj = {'rockStar': 'david bowie'};

collections.pluckTargetFromObject(sampleObj, 'rockStar');
  // 'david bowie';

collections.pluckTargetFromObject(sampleObj, 'movieStar');
  // 'target not found'


*/


// 13. create a function, collections.addPropertyAndValue, takes an object, property, and value..and adds the property and value to the object. If the property already exists, overwrite it's current value with the new value. Make sure to return the object to the user.

/* CODEXAMPLE:

var sampleObj = {'rockStar': 'david bowie'};

collections.addProperty(sampleObj, 'movieStar', 'leonardo decaprio');

// {'rockStar': 'david bowie', 'movieStar': 'leonardoDecaprio'};


collections.pluckTargetFromObject(sampleObj, 'movieStar', 'denzel washington');

// {'rockStar': 'david bowie', 'movieStar': 'denzel washington'};


*/



// 15. create a function, collection.sumArray that returns the sum of an array of numbers.

//* TIP * : You'll need to figure out a way to save the added values into one summed variable. Think about javascript 'reassignment'


// ============ EXTRA CREDIT =====================


// 16. create a function, collection.allNumbersEven that loops through an array and returns true if EVERY number is even and false if ANY NUMBER is false.

// 17. create a function, collectoin.anyPrimes that loopstrhough an array and returns a value if it is a prime number. If there are no prime numbers in the array, return 'there are no prime numbers.'



/* 18. collections.FizzBuzz is a function that takes a number and checks to see whether it's divisible by 3, 5, or 3 and 5.
  
  If the number is divisible by 3, return 'fizz'
  If the number is divisible by 5, return 'buzz'
  If the number is divisible by 3 & 5, return 'fizzBuzz'
*/





}());


