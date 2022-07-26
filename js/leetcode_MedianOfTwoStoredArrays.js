// https://leetcode.com/problems/median-of-two-sorted-arrays/
 var findMedianSortedArrays = function(nums1, nums2) {
  let nums3 = [];
  while (nums1.length > 0 || nums2.length > 0) {
    if (nums1.length > 0 && nums2.length > 0) {
      if (nums1[nums1.length -1] > nums2[nums2.length -1]) {
        nums3.unshift(nums1[nums1.length -1]);
        nums1.pop();
      } else if (nums1[nums1.length -1] == nums2[nums2.length -1]) {
        nums3.unshift(nums1[nums1.length -1], nums2[nums2.length -1]);
        nums1.pop();
        nums2.pop();
      } else {
        nums3.unshift(nums2[nums2.length -1]);
        nums2.pop();
      }
    } else if (nums1.length > 0) {
      nums3.unshift(nums1[nums1.length -1]);
      nums1.pop();
    } else if (nums2.length > 0) {
      nums3.unshift(nums2[nums2.length -1]);
      nums2.pop();
    }
  }

  if (nums3.length % 2 == 0) {
      return ((nums3[nums3.length / 2 - 1] + nums3[nums3.length / 2]) / 2);
  } else {
      return (nums3[Math.floor(nums3.length / 2)]);
  }
};
