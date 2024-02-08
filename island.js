function getNeighbors(row, col, matrix) {
  const neighbors = [];
  // Check top left
  if(row - 1 >= 0 && col - 1 >= 0 && matrix[row - 1][col - 1] === 1) {
    neighbors.push([row - 1, col - 1]);
  }
  // Check top
  if(row - 1 >= 0 && matrix[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }
  // Check top right
  if(row - 1 >= 0 && col + 1 < matrix[0].length
     && matrix[row - 1][col + 1] === 1) {
    neighbors.push([row - 1, col + 1]);
  }
  // Check right
  if(col + 1 >= 0 && matrix[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }
  // Check bottom right
  if(row + 1 < matrix.length && col + 1 < matrix[0].length
    && matrix[row + 1][col + 1] === 1) {
   neighbors.push([row + 1, col + 1]);
 }
  // Check bottom
  if(row + 1 < matrix.length && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Check bottom left
  if(row + 1 < matrix.length && col - 1 >= 0
    && matrix[row + 1][col - 1] === 1) {
   neighbors.push([row + 1, col - 1]);
 }
  // Check left
  if(col - 1 >= 0 && matrix[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Return neighbors
  return neighbors;
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Initialize count to 0
  let islands = 0;
  // Iterate through all indices in matrix
  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[0].length; col++) {

      // If an index contains a 1 and has not been visited,
      // increment island count and start traversing neighbors
      if(matrix[row][col] === 1 && !visited.has([row, col].toString())) {
        // DO THE THING (increment island count by 1)
        islands++;
        // Initialize a stack with current index
        const stack = [[row, col]];
        // Add stringified version of current index to the visited set
        visited.add([row, col].toString());
        // While stack contains elements
        while(stack.length > 0) {
          // Pop element from stack
          let current = stack.pop();
          // Get valid neighbors of current element
          let neighbors = getNeighbors(current[0], current[1], matrix);
          // Iterate over neigbors
          for(let i = 0; i < neighbors.length; i++) {
            // If neighbor has not been visited
            if(!visited.has(neighbors[i].toString())) {
              // Add neighbor to stack
              stack.push(neighbors[i]);
              // Mark neighbor as visited
              visited.add(neighbors[i].toString());
            }
          }
        }
      }
    }
  }

  // Return island count
  return islands;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
