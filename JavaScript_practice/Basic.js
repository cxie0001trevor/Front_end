// 1. Basic types
// interger and floatting point number are all treated as number in JavaScript
// boolean value are in lowercase: true/false.
// undefined and null are both basic data type but not the same same thing.
// basic arithmatical opertation in number: +,-,/,*,**,%,

// 2. String
// String concatenation: "JavaScript" + " is super cool" = "JavaScript is super cool"
// String length: "hello".length
// Special escape characters: "/n", "/t",
// Treat reserved characters as string: "\"quote\"" --> ""quote""
// Indexing String (0-based): "hello"[1] --> "e"

// 3. Variable
// Assignment: var varName = varValue; //need semi-column at the end, statment need it.
// undefined means you define sth but never assign value for it: var name;
// if null value was assigned to a var, it equals to define nothing. that var won't exist either

// 4. Output
// alert("message"): pop up dialog with message
// console.log("message"): print in console
// prompt(): pop up a dialog with an input box for user to enter something (string)
//          you can assign the return value to a variable and save it for use.

// 5. Comparison Operators
// Comparison: ==, !==, <, >, <=, >=,
// ** Unlike another language, JavaScript will treats numeric string have the
//    same equality as numeric value, for example:
//        "2" == 2 --> true
//    > This is known as type coercion: JavaScript try to convert both object
//      to similar data types then can perform the comparison.
//    However if using === triple-equal, it can be use to compare both value and
//    and data types:
//        "2" === 2 --> false
//        "5" === "2" --> false
//    About inequality, use !== to check inequality not just the value but also
//    data type. for example:
//        5 !== "5" --> true
//    if only check the inequality about the value:
//        5 != "5" --? false
// ** Special case: It is vary common for programming language for 0 and 1 to be
//    substitutes for false and true:
//        true == 1 --> true
//        false == 0 --> true
//    As mentioned before, if compare by using triple-equal sign, both value and
//    type will be performed to check:
//        true === 1 --> false
// ** More strange behaviour: null and undefined:
//    null and undefined can be euqal when perform type coercion:
//        null == undefined  --> true
//    However, as mentioned before, they are two different type:
//        null === undefined --> false
//    Also, another situation:
//        NaN == NaN --> false
//    > Need care with that

// 6. Logic operatiors
// * AND: &&
// * OR: ||
// * opposite: !

// 7. Control flow
// 1) if statement:
//   if (condition){
//     //excute some codes;
//   } else if(condition){
//     //execute other codes;
//   }
// 2) while loop:
//   while(conditon){
//     //excute some codes
//   }
//   ** while can be break by using if statement to check inner condition. When
//      certain condition matches, break come to perform and while loop stop.
// 3) for loop:
//   for (statement1; statement2; statement3){
//      //Execute some codes;
//   }
//   ** Conditions checking order:
//      • statement1: executed before the loop start.
//      • statement2: define the condtion for running the loop.
//      • statement3: execute each time after the loop cycles through
//   Example:
//    var word = "alphabetic";
//    for (var i = 0; i<word.length; i++){
//       console.log("Letter: " + word[i]);
//    }
//   ** if only 1 statement to be executed, then it can be simplified as following:
//      for (var i = 0; i<word.length; i++) console.log("Letter: " + word[i]);

// 8. 
