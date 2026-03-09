/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let num of nums){
        map.set(num,(map.get(num) || 0)+1);
    }

    let pq = new MinPriorityQueue(x=>x.freq);
    for(let [key,f] of map){
        pq.enqueue({val:key,freq:f});
        if(pq.size()>k){
            pq.dequeue();
        }
    }
    return pq.toArray().map(x=>x.val);
};