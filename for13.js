var sortedSquares = function(nums) {
  
    let squares = nums.map(num => num * num);
    
  
    squares.sort((a, b) => a - b);
    
    return squares;
};
