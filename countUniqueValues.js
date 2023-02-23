// Multiple Pointers Problem Simple Example

// Assumptions:
// Input array will always be sorted
// Negative numbers can exist in the input array
// Given an empty array we return a number of zero

// function countUniqueValues(arr) {
// create our running unique total that starts at 0
// check if the array is empty and return the total which 0

// a while loop, slow pointer, and fast pointer to increment unique total when needed
// If either pointer manages to reach the end of the array, stop iterating
// Whenever we encounter a new unique number, we move the slow pointer to that position (slow = fasst), increment unique Total
// If we encounter a duplicate with the fast pointer, we skip it and move the pointer foward one but keep the slow where it is


// return unique total
// }


function countUniqueValues(arr) {

    // empty array case
    if (arr.length === 0) {
        return 0;
    }

    let uniqueTotal = 1;

    // non-empty array case, slow and fast pointer approach
    let slow = 0;
    let fast = 0;
    while (fast < arr.length) {

        if (arr[slow] === arr[fast]) {
            fast++;
        } else {
            uniqueTotal++;
            slow = fast;
        }

    }

    return uniqueTotal;
}