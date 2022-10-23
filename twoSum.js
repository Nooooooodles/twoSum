function twosum(nums, target) {
// first way： two loop loop 1 nums【i=0~num.length-1】，inside there is loop 2 num【j=i+1~num.length-1】check this nums【i】+nums【j】===target if is true return output【i,j】time compx：n2 space compx ：1
    const pairLookup ={};
    for (let i=0; i<nums.length; i++){
        pairLookup[nums[i]]=i;
        //debug: forget to put 's' behind 'num'
    }

    for(let i=0;i<nums.length;i++){
        const num=nums[i];
        const pairTofind =target - num;
        const pairIndex =pairLookup[pairTofind];
        if(pairLookup.hasOwnProperty(pairTofind)&&pairTofind!==i)
        //debug: hasOWnproperty--->hasOwnProperty
            return [i, pairIndex];
    }
    return [];
}
// second way : time compx: O(n), Space compx: O(n)
// If there is no such pair, return an empty array.
// test 1
var test_nums = [2,11,7,15];
var test_target=9;
console.log(twosum(test_nums,test_target));

test_nums = [2,11,7,15,100];
test_target=17;
console.log(twosum(test_nums,test_target));

test_nums = [2,11,7,15];
test_target=10;
console.log(twosum(test_nums,test_target)); // no pair

test_nums = [];
test_target=9;
console.log(twosum(test_nums,test_target)); //empty nums array
