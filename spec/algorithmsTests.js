(function() {
  'use strict';

  describe('Algorithms', function() {

    describe('Calculator', function() {

      describe('Add', function(){

        it('should add two numbers together', function() {
          var addTestCase = calculator.add(1, 2);
          expect(addTestCase).to.equal(3);
        });

      });


      describe('Subtract', function(){

        it('should take two numbers and subtract the first from the second', function() {
          var subtractTestCase = calculator.subtract(10, 5);
          expect(subtractTestCase).to.equal(5);
        });

      });

      describe('Multiply', function(){

        it('should multiply two numbers together', function() {
          var multiplyTestCase = calculator.multiply(5, 20);
          expect(multiplyTestCase).to.equal(100);
        });

      });

      describe('Divide', function(){

        it('should multiply two numbers together', function() {
          var divideTestCase = calculator.divide(20, 5);
          expect(divideTestCase).to.equal(4);
        });

      });

      describe('Area of A Rectangle', function(){

        it('should take the length and width and calculate the ', function() {
          var areaTestCase = calculator.areaOfARectangle(5, 20);
          expect(areaTestCase).to.equal(100);
        });


      });

      describe('Sum Plus Product', function(){

        it('should multiply two numbers together', function() {
          var SumPlusProductTestCase = calculator.sumPlusProduct(5, 20);
          expect(SumPlusProductTestCase).to.equal(125);
        });

      });

      describe('Perimeter Of A Rectangle', function(){

        it('should take the length and width and calculate the perimeter', function() {
          var perimeterTestCase = calculator.perimeterOfARectangle(10, 15)
          expect(perimeterTestCase).to.equal(50);
        });

      });


      describe('Area of A Circle', function(){

        it('should take the radius of a circle and calculate the radius', function() {
          var areaOfACircleTestCase = calculator.areaOfACircle(10)
          expect(areaOfACircleTestCase).to.equal(314.1592653589793);
        });

      });


      describe('Slope Of  A Line', function(){

        it('should take the radius of a circle and calculate the radius', function() {
          var xCoordinates = [5, 1]
          var yCoordinates = [10, 7];
          var slopeOfALineCase = calculator.slopeOfALine(xCoordinates, yCoordinates);
          expect(slopeOfALineCase).to.equal(0.75);
        });

      });

      describe('Pythagorean Theorem', function(){

        it('should calculate whether the pythagorean theorem is fulfilled', function() {
          var pythagoreanFail = calculator.pythagorean(5, 9, 10)
          var pythagoreanPass = calculator.pythagorean(3, 4, 5)
          
          expect(pythagoreanFail).to.equal(false);
          expect(pythagoreanPass).to.equal(true);

        });

      });

    });


    describe('Collections', function(){

       describe('First', function(){

        it('returns first element in an array ', function() {
         var arr = [1, 2, 3]
         var passTest = collections.first(arr); 
         expect(passTest).to.equal(1);
        });

      });

      describe('Last', function(){

        it('returns last element in an array ', function() {
         var arr = [1, 2, 3]
         var passTest = collections.last(arr); 
         
         expect(passTest).to.equal(3);
         expect(arr[2]).to.equal(3);
        });

      });

      describe('Pluck Target From Object', function(){

        it('should take an object and a target and, if the target corresponds with a property in the object, returns the value. If not, it returns "target not found" ', function() {
          var testObj = {name: 'albrey', city: 'oakland'};
          var pass = collections.pluckTargetFromObject(testObj, 'name');
          var fail = collections.pluckTargetFromObject(testObj, 'favoriteFood');

          expect(fail).to.equal('target not found');
          expect(pass).to.equal('albrey');
        });

      });

      describe('Add Value to Object', function(){

        it("takes an object, property, and value..and adds the property and value to the object. If the property already exists, overwrite it's current value with the new value.", function() {
          var sampleObj = {'rockStar': 'david bowie'};
          var add = collections.addPropertyAndValue(sampleObj, 'movieStar', 'leonardo decaprio');
          expect(add['movieStar']).to.equal('leonardo decaprio');
          var overWrite = collections.addPropertyAndValue(sampleObj, 'movieStar', 'denzel washington');

          
          expect(overWrite['movieStar']).to.equal('denzel washington');
        });

      });

      describe('Sum Array', function(){

        it("returns the sum of an array of numbers.", function() {

          var arr = [1, 5, 9, 13];
          var summedArray = collections.sumArray(arr);
          expect(summedArray).to.equal(28);

        });

      });

      describe('All Numbers Even', function(){
        it("returns true if the all the numbers are even in an array, false if not", function(){
          var passArr = [2, 4, 6, 8, 10];
          var failArr = [2, 4, 6, 8, 9];

          var passTest = collections.allNumbersEven(passArr);
          var failTest = collections.allNumbersEven(failArr);


          expect(passTest).to.equal(true);
          expect(failTest).to.equal(false);
        });
      });

      describe('Any Primes?', function(){
        it("check an array for prime numbers. If there is a prime number, return that number. If there are multiple prime numbers, return the first you find. If there are no prime numbers, return 'there are no prime numbers' ", function(){
          var passArr = [2, 4, 6, 8, 13];
          var failArr = [2, 4, 6, 8, 10];

          var passTest = collections.allNumbersEven(passArr);
          var failTest = collections.allNumbersEven(failArr);


          expect(passTest).to.equal(13);
          expect(failTest).to.equal('there are no prime numbers');
        });
      });

      describe('Fizz Buzz!', function(){
        it("collections.FizzBuzz is a function that takes a number and checks to see whether it's divisible by 3, 5, or 3 and 5.", function(){
          var fizzNum = 9;
          var buzzNum = 10;
          var fizzBuzzNum = 15;

          var fizz = collections.FizzBuzz(fizzNum);
          var buzz = collections.FizzBuzz(buzzNum);
          var fizzBuzz = collections.FizzBuzz(fizzBuzzNum);


          expect(fizz).to.equal('fizz');
          expect(buzz).to.equal('buzz');
          expect(fizzBuzz).to.equal('fizzBuzz');
        });
      });

    });
  
  });

}());
