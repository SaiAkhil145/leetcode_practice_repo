/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;
    let stk = [node];
    let visited = new Map();
    let cloneNode = new Node(node.val);
    visited.set(node,cloneNode);
    while(stk.length){
        let curr = stk.pop();
        for(let n of curr.neighbors){
            if(!visited.has(n)){
                stk.push(n);
                visited.set(n,new Node(n.val));
            }
            let cloneCurr = visited.get(curr);
            cloneCurr.neighbors.push(visited.get(n));
        }
    }
    return cloneNode
};