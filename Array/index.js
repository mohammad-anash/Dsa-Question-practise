// we are solving DSA question from striver
// here is three way to solving question

// brute
// better
// optimal

// 1 => write a function to find the largest element in the array

// brute solution

function largestElement(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 1];
}

// console.log(largestElement([34, 56, 23, 90, 45]));

// better solution

function largestElement(arr) {
  let firstElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (firstElement < arr[i]) {
      firstElement = arr[i];
    }
  }
  return firstElement;
}
// console.log(largestElement([34, 23, 45, 67, 89]));

// 2 => write a function to find the second alrgest element in the array

function secondLargest(arr) {
  const removeDuplicate = Array.from(new Set(arr));
  const sortedArray = removeDuplicate.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 2];
}

// console.log(secondLargest([45, 67, 23, 65, 45]));

// better solution

function secondLargest(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let firstElement = sortedArray[0];
  const smallestValue = sortedArray[sortedArray.length - 1];

  for (let i = 0; i < sortedArray.length; i++) {
    if (firstElement < sortedArray[i] && sortedArray[i] != smallestValue) {
      firstElement = sortedArray[i];
    }
  }
  return firstElement;
}

// console.log(secondLargest([34, 56, 23, 67, 89]));

// optimal solution

function secondLargest(arr) {
  let firstElement = arr[0];
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstElement) {
      secondLargest = firstElement;
      firstElement = arr[i];
    } else if (arr[i] < firstElement && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// console.log(secondLargest([34, 56, 67, 89, 13]));

// 3 => wwrite a functionto check the given array is sorted or not

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// console.log(isSorted([34, 45, 55, 78, 100]));

// 4 => write a functiopn to remove the dupliate number in the array

// function removeDuplicate(arr) {
//   let store = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!store.includes(arr[i])) {
//       store.push(arr[i]);
//     }
//   }
//   return store;
// }
// console.log(removeDuplicate([34, 25, 34, 67]))

// optimal soltuion

// function removeDuplicate(arr) {
//   let i = 0;
//   let n = arr.length;
//   for (let j = 1; j < n; j++) {
//     if (arr[j] != arr[i]) {
//       arr[i + 1] = arr[j];
//       i++;
//     }
//   }
//   return [arr, i + 1];
// }

// console.log(removeDuplicate([34, 43, 56, 56]));

// 5 => wrtie a function to rotate array by one place

// optimal solution

function rotateArrayByOnePlace(array) {
  const temp = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  }
  array[array.length - 1] = temp;
  return array;
}

// console.log(rotateArrayByOnePlace([1, 2, 3, 4, 5]));

// 6 => write a function to rotate array by two place

function rotateArrayByTwoPlace(array, D) {
  const n = array.length;
  D = D % n;

  const temp = [];

  for (let i = 0; i < D; i++) {
    temp[i] = array[i];
  }

  for (let i = D; i < n; i++) {
    array[i - D] = array[i];
  }
  for (let i = n - D; i < n; i++) {
    array[i] = temp[i - (n - D)];
  }
  return array;
}

// console.log(rotateArrayByTwoPlace([1, 2, 3, 4, 5, 6, 7], 10));

// 7 => Write a function to all zero to the end if the array

function MoveZeroEndOfTheArray(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      temp.push(arr[i]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  for (let i = 6; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

// console.log(MoveZeroEndOfTheArray([2, 3, 0, 4, 5, 6, 0, 0, 4]));

// optimal solution

function moveZerosToEndOptimal(array) {
  let j = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      j = i;
      break;
    }
  }
  for (let i = j + 1; i < array.length; i++) {
    if (array[i] !== 0) {
      [array[j], array[i]] = [array[i], array[j]];
      j++;
    }
  }
  return array;
}
// console.log(moveZerosToEndOptimal([1, 2, 0, 3, 0, 8, 6, 0]));

// 8 => intersection of two arrays

function intersectionOfArray(arr1, arr2) {
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersection.push(arr1[i]);
        break;
      } else if (arr2[j] > arr1[i]) {
        break; // Since the arrays are sorted, so no need to continue
      }
    }
  }
  return intersection;
}

// console.log(intersectionOfArray([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));

// 9 => write a function to find the missing element in the array

function missingElement(arr) {
  const start = Math.min(...arr);
  const end = Math.max(...arr);

  let store = [];
  for (let i = start; i <= end; i++) {
    store.push(i);
  }

  for (let j = 0; j < store.length; j++) {
    if (arr[j] !== store[j]) {
      return store[j];
    }
  }
}

// console.log(missingElement([1, 2, 4, 5]));

// better solution

function missingNumberBetter(array) {
  const hash = Array.from({ length: array.length + 1 }).fill(0);

  for (let i = 0; i < array.length - 1; i++) {
    hash[array[i]]++;
  }
  for (let i = 1; i <= array.length; i++) {
    if (hash[i] === 0) {
      return i;
    }
  }
  return -1;
}

// console.log(missingNumberBetter([1, 2, 3, 5]));

// optimal Solution

function missingNumberOptimal(array) {
  let xor1 = 0;
  let xor2 = 0;

  for (let i = 0; i < array.length - 1; i++) {
    xor2 = xor2 ^ array[i];
    xor1 = xor1 ^ (i + 1);
  }
  xor1 = xor1 ^ array.length;
  return xor1 ^ xor2;
}
// console.log(missingNumberOptimal([1, 2, 4, 5]))

// 10 => Maximum conscutive Number

// Optimal Solution

function maximumConsecutiveOne(arr) {
  let previousMax = 0;
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      counter++;
      if (counter > previousMax) {
        previousMax = counter;
      }
    } else if (arr[i] === 0) {
      counter = 0;
    }
  }
  return previousMax;
}

// console.log(maximumConsecutiveOne([1, 1, 0, 1, 1, 1, 0, 0, 1, 1]));

// 11 => write a function to find which element have only one time in array

function findNumberAppearOnce(array) {
  for (let i = 0; i < array.length; i++) {
    let found = false;
    for (let j = 0; j < array.length; j++) {
      if (i != j && array[i] === array[j]) {
        found = true;
      }
    }
    if (!found) {
      return array[i];
    }
  }
  return -1;
}

// console.log(findNumberAppearOnce([1, 1, 2, 3, 3, 4, 4, 5, 5]));

// better Solutiton

function findNumberAppearOnce(arr) {
  const hash = Array.from({ length: arr.length + 1 }).fill(0);

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]]++;
  }
  for (let i = 0; i < hash.length; i++) {
    if (hash[i] === 1) {
      return i;
    }
  }
}

// console.log(findNumberAppearOnce([1, 1, 2, 3, 3, 4, 4, 5, 5]));

// optimal solution

function findNumberAppearOnce(arr) {
  let xor = 0;

  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}
// console.log(findNumberAppearOnce([1, 1, 2, 3, 3, 4, 4, 5, 5]));

// 12 => write a function to find the longest subarray with sum of k

function longestSubArrayWithKSun(arr, k) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      console.log(sum);
      if (sum === k) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
}
// console.log(longestSubArrayWithKSun([1, 2, 3, 1, 1, 1, 4, 2, 3], 3));

// better solution

function longestSubarrayWithKSumBetter(array, k) {
  const hashMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }
    let remening = sum - k;
    if (hashMap.has(remening)) {
      let len = i - hashMap.get(remening);
      maxLen = Math.max(len, maxLen);
    }
    if (!hashMap.has(remening)) {
      hashMap.set(sum, i);
    }
  }
  return maxLen;
}
// console.log(longestSubarrayWithKSumBetter([1, 2, 3, 1, 1, 1, 4, 2, 3], 3));

// optimal solution

function longestSubarrayWithKSumOptimal(array, k) {
  let left = 0;
  let rigth = 0;
  let maxlen = 0;
  let sum = 0;

  while (rigth <= array.length) {
    while (left <= rigth && sum > k) {
      sum -= array[left];
      left++;
    }
    if (sum === k) {
      maxlen = Math.max(maxlen, rigth - left + 1);
    }
    rigth++;
    if (rigth < array.length) {
      sum += array[rigth];
    }
  }
  return maxlen;
}

// console.log(longestSubarrayWithKSumOptimal([1, 2, 3, 1, 1, 1, 4, 2, 3], 3));

// 13 => write a function to find the target in the array

// target means
// i have array [2, 4, 5, 6, 7] a two integer add and equal the target then return the indexes
// brute force solution

function findTargetBrute(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === target) {
      return [arr[i], arr[i + 1]];
    }
  }
}

// console.log(findTargetBrute([2, 4, 6, 7, 4, 1], 10));
// better solution

function twoSumBetter(array, target) {
  let hashMap = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    let moreNeeded = target - num;
    console.log(moreNeeded);
    if (hashMap[moreNeeded] !== undefined) {
      return [hashMap[moreNeeded], i];
    }
    hashMap[num] = i;
  }
  return [-1, -1];
}

// console.log(twoSumBetter([2, 4, 6, 7, 4, 1], 10));

// optima solution

// function twoSumOptimal(array, target) {
//   array.sort((a, b) => a - b);
//   let left = 0;
//   let right = array.left - 1;
//   while (left < right) {
//     let getting = array[left] + array[right];
//     if (getting === target) {
//       return "YES";
//     } else if (getting < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return "NO";
// }

// console.log(twoSumOptimal([2, 4, 6, 7, 4, 1], 10));

// meidum level question

// 14 => write a functiont to find the target in the array
// example i have this array and inside some integer [1, 3, 5, 6, 7, 4] and my target is 10 the take in two and add then is matching the target return both indexes

// function findTarget(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(findTarget([1, 2, 3, 4, 5, 7, 9], 10));

// brute force solution

function findTargetBrute(arr, target) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    const integers = arr[i];
    const needed = target - integers;
    if (hash[needed] !== undefined) {
      return [hash[needed], i];
    }
    hash[integers] = i;
  }
  // return [-1, -1];
}
// console.log(findTargetBrute([1, 3, 5, 7, 3, 9], 10));

// optimal solution

function findTargetOptimal(arr, target) {
  let right = 0;
  let left = arr.length - 1;

  while (right < left) {
    if (arr[right] + arr[left] === target) {
      return "YES";
    } else if (right < left) {
      right++;
    } else {
      left--;
    }
  }
  return "NO";
}

// console.log(findTargetOptimal([2, 5, 6, 7, 8], 14));

// 15 => write a function to sort an array

// better solution

function sortAnArray(arr) {
  let zero = 0;
  let one = 0;
  let two = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero++;
    } else if (arr[i] === 1) {
      one++;
    } else {
      two++;
    }
  }

  for (let i = 0; i < zero; i++) {
    arr[i] = 0;
  }
  for (let i = one; i < zero + one; i++) {
    arr[i] = 1;
  }
  for (let i = zero + one; i < zero + one + two; i++) {
    arr[i] = 2;
  }
  console.log(arr);
}

// console.log(sortAnArray([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 1]));

// optimal solution

function sortAnArray(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[low] == 0) {
      arr[low] = arr[mid];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      arr[mid] = arr[high];
      high--;
    }
  }
  return arr;
}

// console.log(sortAnArray([0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 1]));

// 16 => write a function to find the majority element
// what is majority element which element who present in array more then n / 2;
// n means array's length
// example see this array [2, 2, 3, 3, 1, 2, 2]
// the length of array is 7 and divided by 2 the answer is 3
// and in this array the 2 present is four time then the naswer is 2 time

// my approch

function findMajorityElement(arr) {
  let store = {};
  let compareValue = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    if (store[arr[i]]) store[arr[i]]++;
    else store[arr[i]] = 1;
  }
  for (const item in store) {
    if (store[item] > compareValue) {
      return `${item} is the majority Element in the array`;
    }
  }
}

// console.log(findMajorityElement([2, 2, 3, 3, 1, 2, 2]));

// brute force solution

function findMajorityElement(arr) {
  const n = arr.length;
  let counter;
  for (let i = 0; i < arr.length; i++) {
    counter = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] === arr[i]) {
        counter++;
      }
    }
    if (counter > Math.floor(n / 2)) {
      return arr[i];
    }
  }
  return -1;
}

// console.log(findMajorityElement([2, 2, 3, 3, 1, 2, 2]));

// better solution
function findMajorityElementOptimal(arr) {
  let ele;
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (counter === 0) {
      counter = 1;
      ele = arr[i];
    } else if (ele === arr[i]) {
      counter++;
    } else {
      counter--;
    }
  }

  let counter1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      counter1++;
    }
  }

  if (counter1 > Math.floor(arr.length / 2)) {
    return ele;
  } else {
    return -1;
  }
}

// console.log(findMajorityElementOptimal([2, 2, 1, 1, 1, 1, 1, 4])); // Output: 1

// 17 => write a function to find the maximum sumof subarray

// my approch

function findMaximumSubarraySum(arr) {
  let store = [];
  let maximum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      sum = 0;
      for (let k = i; k < arr.length; k++) {
        sum += arr[j];
        maximum = Math.max(maximum, sum);
      }
    }
  }
  return maximum;
}
// console.log(findMaximumSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3]));

// better solution

function longestSubarraySumBetter(array) {
  let maxLen = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[i];

      maxLen = Math.max(maxLen, sum);
    }
  }
  return maxLen;
}
// console.log(longestSubarraySumBetter([-2, -3, 4 - 1, -2, 1, 5, -3]));

// dynamic programming

// 1 => first questioon of dynamic programming best time to sell and buy

function bestTimeSellAndBuy(arr) {
  let min = arr[0];
  let maxProfit = 0;
  let n = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let cost = arr[i] - min;
    maxProfit = Math.max(maxProfit, cost);
    min = Math.min(min, arr[i]);
  }
  return maxProfit;
}

// console.log(bestTimeSellAndBuy([7, 1, 5, 6, 3, 4]));

// 2 => write a function Rearrange the array in alternating positive and negative items

function RearrangeArray(arr) {
  let positive = [];
  let negative = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length / 2; i++) {
    arr[2 * i] = positive[i];
    arr[2 * i + 1] = negative[i];
  }
  return arr;
}
// console.log(RearrangeArray([3, 1, -2, -5, 2, -4]));

// optimal solution

function rearrangeArrayOptimal(arr) {
  let result = [];
  let pos = 0;
  let neg = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result[neg] = arr[i];
      neg += 2;
    } else {
      result[pos] = arr[i];
      pos += 2;
    }
  }
  return result;
}

// console.log(rearrangeArrayOptimal([3, 1, -2, -5, 2, -4]));

// 18 => write a function to find the learder in the array
// example i have this array [10, 22, 12, 3, 0, 6];
// in this array 22 is leader becuase 22 and till last of array element 22 is greater then all element
// and the next leader is 12, and then  6 so our answer is [6, 12, 22]

// my approch

function learderInArray(arr) {
  let store = [];
  let leader;
  for (let i = 0; i < arr.length; i++) {
    leader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        leader = false;
      }
    }
    if (leader) {
      store.push(arr[i]);
    }
  }
  return store;
}

// console.log(learderInArray([10, 22, 12, 3, 0, 6]));

// optimal solution
function leaderinArray(arr) {
  const reverseArr = arr.reverse();
  let smallestValue = -Infinity;
  let store = [];
  for (let i = 0; i < reverseArr.length; i++) {
    if (reverseArr[i] > smallestValue) {
      smallestValue = reverseArr[i];
      store.push(smallestValue);
    }
  }
  return store.reverse();
}

// console.log(leaderinArray([10, 22, 12, 3, 0, 6])); //

// 19 => write a function to rotate array by 90 deg

// function rotateMatrix90Deg(array) {
//   const matrix = Array.from(array);
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       matrix[j][matrix.length - 1 - i] = array[i][j];
//     }
//   }
//   return matrix;
// }
// console.log(
//   rotateMatrix90Deg([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// better solution

function rotateMatrix90DegOptimal(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array[i].length; j++) {
      // [array[i][j], array[j][i]] = [array[j][i], array[i][j]];
    }
  }

  for (let i = 0; i < array.length; i++) {
    array[i].reverse();
  }

  return array;
}

// console.log(
//   rotateMatrix90DegOptimal([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
