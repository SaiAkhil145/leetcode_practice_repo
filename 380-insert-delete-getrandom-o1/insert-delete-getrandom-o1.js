
var RandomizedSet = function() {
    this.arr = [];
    this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)) return false;
    this.arr.push(val);
    let lastIndex = this.arr.length-1;
    this.map.set(val,lastIndex);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)) return false;
    let index = this.map.get(val);
    let lastElement = this.arr[this.arr.length-1];

    this.arr[index]=lastElement;
    this.map.set(lastElement,index);
    this.arr.pop();
    this.map.delete(val);
    return true;

};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIdx = Math.floor(Math.random()*this.arr.length);
    return this.arr[randomIdx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */