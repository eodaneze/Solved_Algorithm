function fibonacciIterative(n) {
    if (n <= 1) {
      return n;
    }
  
    let prev = 0;
    let current = 1;
    let result = 0;
  
    for (let i = 2; i <= n; i++) {
      result = prev + current;
      prev = current;
      current = result;
    }
  
    return result;
  }
  
  // Example usage:
  console.log(fibonacciIterative(15));