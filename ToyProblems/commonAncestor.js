'use strict';

var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};


/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};


Tree.prototype.getClosestCommonAncestor = function(child1, child2){
  //get paths from both
  const path1 = this.getAncestorPath(child1);
  const path2 = this.getAncestorPath(child2);

  //if either one of them is null, closest common ancestor doesnt exist
  if (!path1 || !path2) {
    return null;
  }

  //use two pointers, step through both paths and see if equal
  //if there IS a common ancestor, the pointers have to be equal at some point if we're stepping one at a time
  let i = 0;
  //we know that closestAncestor right now is this, since this ---> child1, and this ----< child2 exists
  let closestAncestor = this;

  while (path1[i] && path2[i]) {
    if (path1[i] === path2[i]) {
      closestAncestor = path1[i];
    }
    i++;
  }


  //ALTERNATIVE SOLUTION : iterate backwards from path1, checking to see if any node is in path2
  // for (let i = path1.length-1; i >= 0; i--) {
  //   if (path2.indexOf(path1[i]) !== -1) {
  //     return path1[i];
  //   }
  // }

  return closestAncestor;
}

Tree.prototype.getAncestorPath = function(target){

  //base case : this is target, return itself
  if (this === target) return [this];
  //otherwise, check its children and call recursively
  for (let i = 0; i < this.children.length; i++) {
    //this is a path from child to target
    let pathFromChild = this.children[i].getAncestorPath(target);
    if (pathFromChild) {
      return [this].concat(pathFromChild);
    }
  }
  //return null since target isn't in any subTree
  return null;
}


//Alternative solution for ancestorPath, more expensive since it uses isDescendant
Tree.prototype.getAncestorPathAlt = function(target) {
  const path = [];
  const traverse = (tree) => {
    //if target is a descendant of tree, push to path
    if (tree.isDescendant(target)) {
      path.push(tree);
      for (let i = 0; i < tree.children.length; i++) {
        if (tree.children[i].isDescendant(target)) {
          traverse(tree.children[i]);
        }
      }
    } else {
      return null;
    }
  }
  //start with tree
  traverse(this);

  //push target to path
  path.push(target);

  return path.length > 1 ? path : null;
}


const grandma = new Tree();
const mom = new Tree();
const uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
const me = new Tree();
mom.addChild(me);


// console.log(grandma.getAncestorPath(me)); // [grandma, mom, me];
// console.log(mom.getAncestorPath(me)); // [mom, me];
// console.log(me.getAncestorPath(me)); // [me];
console.log(grandma.getClosestCommonAncestor(me, uncle)); // grandma