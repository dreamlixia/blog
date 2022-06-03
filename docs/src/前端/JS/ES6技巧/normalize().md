### normalize()
---

> 实质意义：不同系统的字符默认编码形式不一样，normalize()将它们标准化。

许多欧洲语言有语调符号和重音符号。为了表示它们，Unicode 提供了两种方法。一种是直接提供带重音符号的字符，比如Ǒ（\u01D1）。另一种是提供合成符号（combining character），即原字符与重音符号的合成，两个字符合成一个字符，比如O（\u004F）和ˇ（\u030C）合成Ǒ（\u004F\u030C）。

这两种表示方法，在视觉和语义上都等价，但是 JavaScript 不能识别。

#### ES6提供的的字符串实例normalize() 方法，将字符串的不同表示方法统一为同样的形式，这称为Unicode正规化。

normalize()方法可以接受一个参数来指定normalize()的方式，参数的四个可选值如下。

1. NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。

2. NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。

3. NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize()方法不能识别中文。）

4. NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。

例子1：
```
// 判断两个字符串是否是回文数
const isReverseString = (str1, str2) => {
    const isReverse = (str) => str.toLowerCase()
        .normalize('NFD')// Unicode正规化
        .split('')
        .reverse()
        .join('')
    return isReverse(str1) === str2
}

console.log(isReverseString('abc', 'cba')) // true
console.log(isReverseString('abc', 'dac')) // false
```

例子2:
```
// 判端两个字符串是否为互相重组/互相排列
const isAnagram = (str1, str2) => {
    const anagram = (str) => str.toLowerCase()
        .normalize('NFD')
        .split('')
        .sort()
        .join('')
    return anagram(str1) === str2
}

console.log('-', isReverseString('abcd', 'dcba')) // true
console.log(isReverseString('jnhbhi', 'mlknlk')) // false
console.log(isReverseString('jnhbhi', 'ihbhnj')) // true
```