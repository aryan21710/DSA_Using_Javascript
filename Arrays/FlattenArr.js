/* This algorithm will flatten an array with infinite depth 
to an array with depth 1 */
const arr=[[[1,2]],[3,4,[5,[6]]]];
let output=[];
const flattenArr=(arr)=>{
  arr.forEach((elem)=>{
     if (!Array.isArray(elem)) {
      output=[...output, elem];
     } else {
      flattenArr([...elem])
     }
  })
  return output;
}
console.log(flattenArr(arr));
