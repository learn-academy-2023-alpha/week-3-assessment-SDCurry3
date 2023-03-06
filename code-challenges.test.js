// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("highschoolFlashbacks", () => {
  const fibLength1 = 6
  const fibLength2 = 10
  it("does stupid math that stinks because numbers make my head hurt Q_Q", () => {
    expect(highschoolFlashbacks(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(highschoolFlashbacks(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
});

// *****Due to my numerically deficient nature I didn't create the test until after getting the code working, sorry.*****

const fibLength1 = 6;
// Expected output: [1, 1, 2, 3, 5, 8]


const fibLength2 = 10;
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// input: a number that is greater than 2.
// output: an array of the same length as input containing the numbers of the Fibonacci sequence.

// Pseudocode: create a function containing a for loop and a small predefined array of [1, 1], that will take an input number and continually add the first index of the array by the zero-th, (*****Can I just say how annoying 'zero-th' is to pronounce? whoever made that a thing needs a stern talking-to, methinks...*****) the number of times designated by the input. each time the operation is performed, the array should be modified by the resulting addition. This way, the array can store the math until the for loop completes and the final array is returned.

// *****Dear god I hope I pseudo-ed this correctly. Math-y thoughts are REALLY hard for me to express properly, and even getting this code to run was more difficult than it should've been. 'Muh brain dumb.*****

const highschoolFlashbacks = (eternalPain) => {
  const allIsDarkness = [1, 1];
  for (let endMySuffering = 2; endMySuffering < eternalPain; endMySuffering++) {
    allIsDarkness[endMySuffering] = allIsDarkness[endMySuffering - 2] + allIsDarkness[endMySuffering - 1];}
  return allIsDarkness
};

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("lofiGirlApproved", () => {
  it("tracks how long you've been study/relaxing", () => {
    expect(lofiGirlApproved(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(lofiGirlApproved(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
});

// [1st error: ReferenceError: lofiGirlApproved is not defined **initial run**]
// [2nd error: TypeError: lofiGirlApproved(...).toEqual is not a function **Perplexingly improper Paranthetical Placement**]
// [3rd error: None! this one was blissfully simple. Go Go Gadget built-in methods!]

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}

// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// input: an object
// output: an array of the values sorted from least to greatest.

//pseudocode: create a function with one input that takes in an object, runs Object.values to extract the values into a subarray, and then returns an array sorted by length with [.sort((a, b) => a - b)], which in this configuration sorts from least to greatest.

const lofiGirlApproved = (input) => {
  let entries = Object.values(input)
  return entries.sort((a, b) => a - b)
}

// *****Go go gadget, Built-in methods! this one was pretty easy to get running once I figured out how Object.values works, thanks for that hint! although the capital O in object threw me off for a minute. TIL all built-in classes start with a capital letter.*****



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("piggyBanker", () => {
  it("shows you how broke you are, in real time!", () => {
    expect(piggyBanker(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(piggyBanker(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(piggyBanker(accountTransactions3)).toEqual([])
  })
})

//[1st error:  Missing second argument. It must be a callback function. Perhaps you want to use `test.todo` for a test placeholder.
    //   88 |
    //   89 | describe("piggyBanker", () => {
    // > 90 |   it("shows you how broke you are, in real time!"), () => {             ***** oops. more improper paranthetical placement.*****]

// [2nd error:   expect(received).toEqual(expected) // deep equality

    // - Expected  - 3
    // + Received  + 3

    //   Array [250,
    // -   -89,
    // -   100,
    // -   -96,
    // +   161,
    // +   261,
    // +   165, ]               ***I'm pretty annoyed at how long it took me to notice that I fed the test the wrong expected array...***

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// input: an array
// output: an array of the accumulating sum, unless the array is empty because then you get NOTHING!

//pseudocode: create a function with a single input and a 'container' variable initially set to 0, that will iterate over a given array, adding('math' adding, not just sticking it into the array like with .push) each value within to the container variable. can do this with .map, configured to increase the container value by the number inside the array

const piggyBanker = (input) => {
  let howBrokeYouAre = 0
  return input.map((input) => {
    howBrokeYouAre += input
    return howBrokeYouAre;
  })
};

// *****Booooo more math! Ok fine this one wasn't as bad, I think I might actually be starting to get the hang of .map, yay! 
//    All this does is pretty much what I had down in pseudocode, we set an initial value of 0, then start tracking the result of adding the array by whatever number is currently in howBrokeYouAre. since adding a negative number == subtracting by that much, we won't see negative values in the array with the given inputs.*****