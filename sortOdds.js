function sortOddNumbers(arr) {
    // Create an array to store odd numbers
    const oddNumbers = [];
  
    // Extract and sort the odd numbers
    for (const num of arr) {
      if (num % 2 === 1) { // Check if the number is odd
        oddNumbers.push(num);
      }
    }
    oddNumbers.sort((a, b) => a - b);
  
    // Replace odd numbers in the original array with sorted odd numbers
    let oddIndex = 0;
    const sortedArray = arr.map((num) => {
      if (num % 2 === 1) {
        return oddNumbers[oddIndex++];
      } else {
        return num;
      }
    });
  
    return sortedArray;
  }
  
  // Example usage:
  const originalArray = [5, 3, 2, 8, 1, 4];
  const sortedArray = sortOddNumbers(originalArray);
  console.log(sortedArray); // Output: [1, 3, 2, 8, 5, 4]
  