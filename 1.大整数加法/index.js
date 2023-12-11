function bigIntIncrement(bigIntOne, bigIntTwo) {
    // 1.求出长字符串长度，后面补齐字符串需要最长字符串长度
    const maxLength = Math.max(bigIntOne.length, bigIntTwo.length);
    // 2.补齐两个字符串的长度,短字符串在前面补0
    const newBigIntOne = bigIntOne.padStart(maxLength, "0");
    const newBigIntTwo = bigIntTwo.padStart(maxLength, "0");
    // 3.遍历字符串，按照加法逻辑从后向前将每一位相加，有进位则产生进位
    let flag = 0;
    let str = "";
    console.log(flag, str, maxLength);
    for (let index = maxLength - 1; index >= 0; index--) {
      const sum = (+newBigIntOne[index] + +newBigIntTwo[index]) % 10;
      str = sum + flag + str;
    // 4.因为这里是除法，
      flag = parseInt((+newBigIntOne[index] + +newBigIntTwo[index]) / 10);
    }
    if (flag === 1) {
      return 1 + str;
    }
    return str;
  }
  console.log(bigIntIncrement("874659986728647893475689374578437", "127865897389648937473676552341"));
/*
1.因为本次的进位会在下次处理，所以最后一次的进位没有被处理，如果最后一次有进位，则要在字符串
前面加个一，如果没有进位则返回原字符串就好。
2.
*/ 