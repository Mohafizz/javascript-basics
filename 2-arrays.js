// var assertEquals = require("./test-helper");

// /* ---------------------- EXERCISE 1 ---------------------- */
// // Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. (Sample input: 025486, Sample output: 0-254-8-6)

// // function addDashes(numString) {
// //   var arr = numString.split("");
// //   for (var i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
// //       arr[i] += "-";
// //     } else {
// //       continue;
// //     }
// //   }
// //   return arr.join("");
// // }
// // var output = addDashes("025486");
// // console.log("output: ", output);

// // assertEquals(addDashes("025486"), "0-254-8-6"); // check that your function works as expected
// // assertEquals(addDashes("111246777"), "1112-4-6777"); // uncomment this and run program. if test passes, uncomment subsequent tests one by one
// // assertEquals(addDashes("0021100"), "0-0-2110-0");
// // assertEquals(addDashes("24685"), "2-4-6-85"); // uncomment this line and add 2-3 more test cases. Do the same for all remaining functions

// /* ---------------------- EXERCISE 2 ---------------------- */
// // Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

// // function mostFrequentItem(arr) {
// //   var maxCounter = 0;
// //   var mostFrequent = 0;

// //   for (var i = 0; i < arr.length; i++) {
// //     var counter = 0;

// //     for (var j = 0; j < arr.length; j++) {
// //       if (arr[i] == arr[j]) {
// //         counter++;
// //       }
// //       if (counter > maxCounter) {
// //         maxCounter = counter;
// //         mostFrequent = arr[i];
// //       }
// //     }
// //   }

// //   return mostFrequent;
// // }

// // // uncomment the following test to run it
// // assertEquals(mostFrequentItem(["a", "a", "b"]), "a");
// // assertEquals(
// //   mostFrequentItem(["a", "b", "b", "b", "c", "a", "b", "a", "b"]),
// //   "b"
// // );
// // assertEquals(mostFrequentItem(["yes", "yes", "no", "no", "yes"]), "yes");

// /* ---------------------- EXERCISE 3 ---------------------- */
// // Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
// // function removeDuplicateItems(arr) {
// //   for (var i = 0; i < arr.length; i++) {
// //     //var counter = 0;
// //     for (var j = 0; j < arr.length; j++) {
// //       if (arr[i] == arr[j]) {
// //         arr[i] = arr[j];
// //         //counter++;
// //       }
// //     }
// //   }
// //   return arr;
// // }
// // console.log(removeDuplicateItems([1, 1, "a", "A"]), [1, "a"]);
// // console.log("a" == "A");

// // assertEquals(removeDuplicateItems([1, 1, 'a']), [1, 'a'])
// // assertEquals(removeDuplicateItems([1, 1, 'a', 'A']), [1, 'a'])
// // assertEquals(removeDuplicateItems([1, 'a', 'A', 'b', 'B', 2, 2]), [1, 'a', 'b', 2])

// /* ---------------------- EXERCISE 4 ---------------------- */
// // Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
// function union() {}

// // assertEquals(union([1, 2], [2, 3]), [1, 2, 3])
// // assertEquals(union([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100])

// /* ---------------------- EXERCISE 5 ---------------------- */
// // Write a Javascript function to compute sum of a union. (Hint: Reuse the union() function which you wrote!) (Sample input: intersection([1, 2, 3], [1, 2]), expected output: 3)
// function unionSum() {}
// // assertEquals(unionSum([1, 2, 3], [1, 2]), 3)
// // assertEquals(unionSum([1, 2, 3, 4], [2, 3, 4]), 9)
// // assertEquals(unionSum([2000, 50, 551, 550, 23], [551, 50, 23]), 624)

var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
// function sum(array) {
//   var total = 0;
//   for(i of array){
//     total += i;
//   }
// return total;
// }

// assertEquals(sum([1, 2, 3, 4]), 10);
// assertEquals(sum([10, 10, 10]), 30);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers

// function evenNumbersOnly(array) {
//   var even = [];
//   for (var i of array) {
//     if (i % 2 === 0) {
//       even.push(i);
//     }
//   }
//   return even;
// }

// // evenNumbersOnly([10, 11, 12]);

// assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
// assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier!
//
