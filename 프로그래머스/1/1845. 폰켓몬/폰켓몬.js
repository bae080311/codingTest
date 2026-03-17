function solution(nums) {
    const cnt = nums.length / 2;
    const po = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (!po.includes(nums[i])) po.push(nums[i]);
    }
    
    return Math.min(po.length, cnt);
}