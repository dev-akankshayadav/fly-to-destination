function minimumPlanesNeeded(fuelArray) {
    const n = fuelArray.length;
    
    // Create an array to track the minimum number of planes needed to reach each airport
    const planesNeeded = new Array(n).fill(Infinity);
    planesNeeded[0] = 0; // We are already at the first airport
    
    // Iterate through each airport
    for (let i = 0; i < n; i++) {
      // Check if it's not possible to reach this airport
      if (planesNeeded[i] === Infinity) {
        return -1;
      }
      
      // Iterate through the next airports we can reach from the current airport
      for (let j = i + 1; j <= i + fuelArray[i] && j < n; j++) {
        // Update the minimum number of planes needed to reach the next airport
        planesNeeded[j] = Math.min(planesNeeded[j], planesNeeded[i] + 1);
      }
    }
    
    // If the last airport is not reachable, return -1
    if (planesNeeded[n - 1] === Infinity) {
      return -1;
    }
    
    // Return the minimum number of planes needed to reach the last airport
    return planesNeeded[n - 1];
  }
  
  // Example usage:
  const fuelArray = [2,1,2,3,1];
  console.log(minimumPlanesNeeded(fuelArray)); // Output: 2