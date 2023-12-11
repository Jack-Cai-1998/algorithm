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
    // 4.而且是下一次循环要用，所以直接写在最后面就好
      flag = parseInt((+newBigIntOne[index] + +newBigIntTwo[index]) / 10);
    }
    // 5.因为本次的进位会在下次处理，所以最后一次的进位没有被处理，如果最后一次有进位，则要在字符串前面加个一，如果没有进位则返回原字符串就好。
    if (flag === 1) {
      return 1 + str;
    }
    return str;
  }
  console.log(bigIntIncrement("874659986728647893475689374578437", "127865897389648937473676552341"));
/*
1.关于字符串转换成数字，一般有两种方法 ，一个是一元运算符 +，还有就是parseInt。
关于一元运算符有四种 ++（自增） ——（自减） +（将一个变量变为数字）-（取反）。
2关于取整，因为这里是除法，所有有可能会有小数，所以我们这里要取整，取整可以用window上面的parseInt取一个数的整数部分或者Math身上的向下取整方法floor。
3.关于字符串填充，字符串方法padStart，用一个字符串填充指定字符串，知道达到指定长度，且填充从头开始，相反padEnd就是从尾部开始填充。
4.关于求最大值，Math的方法max，求两个值中的最大值。
*/ 