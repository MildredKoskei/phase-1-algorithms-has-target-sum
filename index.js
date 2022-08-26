function hasTargetSum(array, target) {

   // this is a two sum function which should sum up to the target indicated
   //in the function
  // Write your algorithm here
  let sums = [];
  // check each element in the array
  for(let i = 0;i<array.length; i++){
    //this checks each other element in the given array
    for(let j = i+1; j<array.length; j++){
      //determines if these two elements sum up to the target
      if(array[i] + array[j]===target)return true;
        
      } 
      
    } 
        //sums.push([array[i], array[j]]);
     return false; 
      }
    
  

  //returns all pairs of integers trhat sum to target

hasTargetSum([3, 8, 12, 4, 11, 7], 10);
hasTargetSum([22, 19, 4, 6, 30], 25);
hasTargetSum([4], 4);


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4,3,1], 10));

  console.log("");
}

module.exports = hasTargetSum;
