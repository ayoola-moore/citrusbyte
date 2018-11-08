//@flow :: I would normal use flowtype to type check the arguments passed to the function

export default function flattenArray(arr=[]){
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
  }, []);
}

// console.log(flattenArray([[1,2,[3]],4]))
