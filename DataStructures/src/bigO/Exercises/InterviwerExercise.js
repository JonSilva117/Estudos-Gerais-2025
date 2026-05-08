/* 
Given two arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items. For example:

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

should return false.

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
should return true.
*/

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(true);
        return true;
      }
    }
  }
  console.log(false);
  return false;
  // Time Complexity O(n * m) due the both arrays have different sizes
}

function containsCommonItemWithMap(arr1, arr2) {
  let map = new Map();

  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], true);
  }

  for (let j = 0; j < arr2.length; j++) {
    if (map.has(arr2[j])) {
      console.log(true);
      return true;
    }
    map.set(arr2[j], true);
  }
  console.log(false);
  return false;
  // Time complexity O(a + b)  here we are iuterating two different arrays separately
}

function containsCommonItemWithSet(arr1, arr2) {
  let set = new Set();

  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i]); // O(n) time complexity
  }

  for (let j = 0; j < arr2.length; j++) {
    if (set.has(arr2[j])) {
      console.log(true);
      return true; // O(1) time complexity
    }
  }
  console.log(false);
  return false;
  // Time complexity O(a + b)  here we are iuterating two different arrays separately
}

// containsCommonItem(array1, array2);

// containsCommonItemWithMap(array1, array2);

containsCommonItemWithSet(array1, array2);
