 var addTwoNumbers = function(l1, l2) {
  let l1Str = "";
  let l2Str = "";
  let myList = new ListNode();

  while (l1) {
      l1Str += l1.val;
      l1 = l1.next;
  }

  while (l2) {
      l2Str += l2.val;
      l2 = l2.next;
  }

  let l1Int = parseInt(l1Str.split("").reverse().join(""));
  let l2Int = parseInt(l2Str.split("").reverse().join(""));

  let sumStr = (l1Int + l2Int).toString().split("").reverse().join("");

  for (let i = 0; i < sumStr.length; i++) {
      myList.next = new ListNode(parseInt(sumStr.charAt(sumStr.length - 1 -i)), myList.next);
  }

  return myList.next;
};
