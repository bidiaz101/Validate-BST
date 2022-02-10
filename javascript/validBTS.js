class Node {
  constructor(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  // type your code here
  if(root.left === null && root.right === null){
    return true
  } else if (root.left === null && root.right !== null){
    return isValidBST(root.right)
  } else if(root.left !== null && root.right === null) {
    return isValidBST(root.left)
  } else if(root.left.val > root.val || root.right.val < root.val){
    return false
  }

  const booleanArr = [isValidBST(root.left), isValidBST(root.right)].filter(boolean => boolean === false)
  return !booleanArr.length
}

if (require.main === module) {

// add your own tests in here
const T = (v, l, r) => new Node(v, l, r)

console.log("Expecting: true");
console.log("=>", isValidBST(T(2, T(1), T(3))));

}

module.exports = {
  isValidBST,
  Node
}

// Please add your pseudocode to this file
// And a written explanation of your solution